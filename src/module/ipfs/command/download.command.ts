import { Command } from '../../../contract/command.contract';
import { Request, Response } from 'express';
import authMiddleware from '../../common/middlewares/auth-middleware';
import { ApiError } from '../../common/services/api-error.service';
import { IPFSService } from '../services/ipfs.service';
import { resize } from 'imagemagick';

export class DownloadCommand extends Command {

    constructor() {
        super();
    }

    async run(req: Request, res: Response): Promise<any> {
        try {
            let user = await authMiddleware(req);
            const ipfsService = new IPFSService();
            let hash: any = req.query.hash;
            return await ipfsService.downloadContent(hash, true)
        } catch (err) {
            console.log(err)
            return ApiError.UnknownError("Error while download image from ipfs", err, res);
        }

    }
}