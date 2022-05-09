import { Command } from '../../../contract/command.contract';
import { Request, Response } from 'express';
import authMiddleware from '../../common/middlewares/auth-middleware';
import { Collection } from '../dto/collection.dto';
import { collectionRepository } from '../repository/collection.repository';
import { ApiError } from '../../common/services/api-error.service';
import { GetTokensList } from '../../items/service/tokensList.service';

export class GetCollectionsCommand extends Command {
    constructor() {
        super();
    }

    async run(req: Request, res: Response): Promise<any> {
        try {

            return await collectionRepository.getCollections();

        } catch (err) {
            console.log(err);
            return ApiError.UnknownError("Error while get collection info", err, res);
        }
    }
}

