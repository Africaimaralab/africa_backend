import { Command } from '../../../contract/command.contract';
import { Request, Response } from 'express';
import { collectionRepository } from '../repository/collection.repository';
import { Collection } from '../dto/collection.dto';
import authMiddleware from '../../common/middlewares/auth-middleware';
import { ApiError } from '../../common/services/api-error.service';

export class GetCollectionImageCommand extends Command {

    constructor() {
        super();
    }

    async run(req: Request, res: Response): Promise<any> {
        try {
            let collectionName: string = <any> req.query.name;
            return await collectionRepository.getCollectionImageByName(collectionName);
        } catch (err) {
            console.log(err);
            return ApiError.UnknownError("Error while create collection", err, res);
        }
    }
}