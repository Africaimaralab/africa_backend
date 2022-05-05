import { Command } from '../../../contract/command.contract';
import { Request, Response } from 'express';
import authMiddleware from '../../common/middlewares/auth-middleware';
import { Collection } from '../dto/collection.dto';
import { collectionRepository } from '../repository/collection.repository';
import { ApiError } from '../../common/services/api-error.service';
import { GetTokensList } from '../../items/service/tokensList.service';

export class GetCollectionByIdCommand extends Command {
    constructor() {
        super();
    }

    async run(req: Request, res: Response): Promise<any> {
        try {

            let user = await authMiddleware(req);
            let id: any = req.query.id;
            let res = await collectionRepository.getCollectionById(id);
            const tokensListGetter = new GetTokensList();
            let name: string =<string> res.name;
            let collectionTokens  = await tokensListGetter.lengthListByCollectionName(name);

            return {collection: res, collectionTokens: collectionTokens}

        } catch (err) {
            console.log(err);
            return ApiError.UnknownError("Error while get collection info", err, res);
        }
    }
}

