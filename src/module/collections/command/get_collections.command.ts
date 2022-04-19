import { Command } from '../../../contract/command.contract';
import { Request } from 'express';
import authMiddleware from '../../common/middlewares/auth-middleware';
import { Collection } from '../dto/collection.dto';
import { collectionRepository } from '../repository/collection.repository';

export class GetCollectionCommand extends Command {
    constructor() {
        super();
    }

    async run(req: Request): Promise<any> {
        try {

            let user = await authMiddleware(req);
            return await collectionRepository.getCollections(user.wallet_id);

        } catch (err) {
            console.log(err);
        }
    }
}

