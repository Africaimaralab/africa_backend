import { Command } from '../../../contract/command.contract';
import { Request, Response } from 'express';
import authMiddleware from '../../common/middlewares/auth-middleware';
import { Collection } from '../dto/collection.dto';
import { collectionRepository } from '../repository/collection.repository';
import { ApiError } from '../../common/services/api-error.service';

export class GetCollectionsByWalletCommand extends Command {
    constructor() {
        super();
    }

    async run(req: Request, res: Response): Promise<any> {
        try {

            let user = await authMiddleware(req);
            return await collectionRepository.getCollectionsByWalletId(user.walletId);

        } catch (err) {
            console.log(err);
            return ApiError.UnknownError("Error while download image from ipfs", err, res);
        }
    }
}

