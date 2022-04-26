import { Command } from '../../../contract/command.contract';
import { Request, Response } from 'express';
import authMiddleware from '../../common/middlewares/auth-middleware';
import { ApiError } from '../../common/services/api-error.service';
import fs from 'fs';
import { UploadFileToIPFSService } from '../services/ipfs.service';
import { globals } from '../../../config/globals';
export class UploadCommand extends Command {
    constructor() {
        super();
    }

    async run(req: Request, res: Response): Promise<any> {
        try {
            let user = await authMiddleware(req);
            const uploadService = new UploadFileToIPFSService();
            let data = Buffer.from(req.body.data, 'base64').toString('binary');
            fs.writeFileSync(`${globals.TEMP_DATA_PATH}/${user.walletId}`, data, 'binary');
            const hash = await uploadService.upload(`${globals.TEMP_DATA_PATH}//${user.walletId}`)
            return { hash: hash };
        } catch (err) {
            return ApiError.UnknownError("Error while upload image to IPFS", err, res);
        }
    }
}


