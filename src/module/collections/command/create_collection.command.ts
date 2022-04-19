import { Command } from '../../../contract/command.contract';
import { Request } from 'express';
import { collectionRepository } from '../repository/collection.repository';
import { Collection } from '../dto/collection.dto';
import authMiddleware from '../../common/middlewares/auth-middleware';

export class CreateCollectionCommand extends Command {

    constructor() {
        super();
    }

    async run(req: Request): Promise<any> {
        try {
            let user = await authMiddleware(req);
            let collection: Collection = req.body;
            collection.wallet_id = user.wallet_id;
            let id: number = <number> await collectionRepository.insertCollectionAndGetId(collection);
            return await collectionRepository.getCollectionById(id);
        } catch (err) {
            console.log(err);
            return "Error";
        }
    }
}