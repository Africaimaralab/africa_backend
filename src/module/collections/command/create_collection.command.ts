import { Command } from '../../../contract/command.contract';
import { Request, Response } from 'express';
import { collectionRepository } from '../repository/collection.repository';
import { Collection } from '../dto/collection.dto';
import authMiddleware from '../../common/middlewares/auth-middleware';
import { ApiError } from '../../common/services/api-error.service';

export class CreateCollectionCommand extends Command {

    constructor() {
        super();
    }

    async run(req: Request, res: Response): Promise<any> {
        try {
            let user = await authMiddleware(req);
            let collection: Collection = req.body;
            collection.walletId = user.walletId;
            let count = await collectionRepository.checkUnique(collection.name);
            if (count.count !=0) {
                throw ApiError.BadRequest("The collection name is not unique")
            }

            let id: number = <number>await collectionRepository.insertCollectionAndGetId(collection);
            return await collectionRepository.getCollectionById(id);
        } catch (err) {
            console.log(err);
            return ApiError.UnknownError("Error while create collection", err, res);
        }
    }
}