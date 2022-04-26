import { Command } from '../../../contract/command.contract';
import e, { Request, Response } from 'express';
import authMiddleware from '../../common/middlewares/auth-middleware';
import { ApiError } from '../../common/services/api-error.service';
import fs from 'fs';
import { UploadFileToIPFSService } from '../../ipfs/services/ipfs.service';
import { globals } from '../../../config/globals';
import { agreementRepository } from '../../agreements/repository/agreement.repository';
import GeneratePDFService from "../../agreements/service/generate.service";
const CID = require('cids')

export class UploadDataCommand extends Command {
    constructor() {
        super();
    }

    async run(req: Request, res: Response): Promise<any> {
        try {
            let user = await authMiddleware(req);
            const uploadService = new UploadFileToIPFSService();
            let media = Buffer.from(req.body.media, 'base64').toString('binary');
            let previews = req.body.previews;
            let documentType = req.body.documentType;
   

            let text = await agreementRepository.getTextByType(documentType);//generate document
            console.log(text)
            await GeneratePDFService.generate(text.text, documentType);


            //upload media
            fs.writeFileSync(`${globals.TEMP_DATA_PATH}/${user.walletId}`, media, 'binary');
            let cid = new CID(await uploadService.upload(`${globals.TEMP_DATA_PATH}//${user.walletId}`)).toV1().toString('base32');
            const fileUrl = cid + ".ipfs.infura-ipfs.io";


            //upload previews
            let previewsUrls: string[] = [];
            for (let elem of previews) {
                let preview = Buffer.from(elem, 'base64').toString('binary');
                fs.writeFileSync(`${globals.TEMP_DATA_PATH}/${user.walletId}`, preview, 'binary');
                cid = new CID(await uploadService.upload(`${globals.TEMP_DATA_PATH}//${user.walletId}`)).toV1().toString('base32');
                previewsUrls.push(cid + ".ipfs.infura-ipfs.io")
            }

            //create reference json and upload data
            cid = new CID(await uploadService.upload(`${globals.TEMP_DATA_PATH}//${documentType}.pdf`)).toV1().toString('base32');
            let documentUrl = cid + ".ipfs.infura-ipfs.io";
            let reference = { previews: previewsUrls, documentType: documentType, document: documentUrl };
            let referenceJson = JSON.stringify(reference);
            cid = new CID(await uploadService.uploadContent(referenceJson)).toV1().toString('base32');
            let referenceUrl = cid + ".ipfs.infura-ipfs.io";

            return { media: fileUrl, reference: referenceUrl };
        } catch (err) {
            console.log(err)
            return ApiError.UnknownError("Error while upload image to IPFS", err, res);
        }
    }
}


