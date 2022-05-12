import { Command } from '../../../contract/command.contract';
import e, { Request, Response } from 'express';
import authMiddleware from '../../common/middlewares/auth-middleware';
import { ApiError } from '../../common/services/api-error.service';
import fs from 'fs';
import { IPFSService } from '../../ipfs/services/ipfs.service';
import { globals } from '../../../config/globals';
import { agreementRepository } from '../../agreements/repository/agreement.repository';
import GeneratePDFService from "../../agreements/service/generate.service";
import { MintService } from '../service/mint.service';
import { collectionRepository } from '../../collections/repository/collection.repository';
const CID = require('cids')

export class UploadDataCommand extends Command {
    constructor() {
        super();
    }



    async run(req: Request, res: Response): Promise<any> {
        try {
            let user = await authMiddleware(req);
            const uploadService = new IPFSService();
            let media = Buffer.from(req.body.media, 'base64').toString('binary');
            //upload media
            fs.writeFileSync(`${globals.TEMP_DATA_PATH}/${user.walletId}`, media, 'binary');
            let cid = new CID(await uploadService.upload(`${globals.TEMP_DATA_PATH}//${user.walletId}`)).toV1().toString('base32');
            const mediaUrl = cid + ".ipfs.infura-ipfs.io";

            let reference = { 
                title: req.body.title, 
                description: req.body.description, 
                category: req.body.category,
                creator: req.body.addrToTransfer,
                media: mediaUrl, 
                typeOfMedia: req.body.typeOfMedia, 
                sellType: req.body.sellType,
                collection: req.body.collection, 
                tags: req.body.tags
            };
            let addrToTransfer = req.body.addrToTransfer;


            let referenceJson = JSON.stringify(reference);
            let hash = await uploadService.uploadContent(referenceJson);
            cid = new CID(hash).toV1().toString('base32');
            let referenceUrl = cid + ".ipfs.infura-ipfs.io";
            const mintService = new MintService();

            let address = await mintService.minting(referenceUrl, addrToTransfer);
            await collectionRepository.updateTotalSupply(reference.collection)

            return { address : 1121 };
        } catch (err) {
            console.log(err)
            return ApiError.UnknownError("Error while upload image to IPFS", err, res);
        }
    }
}




