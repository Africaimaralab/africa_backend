import { Command } from '../../../contract/command.contract';
import { Request } from 'express';
import { itemRepository } from '../repository/item.repository';
import { Item } from '../dto/item.dto';
import authMiddleware from '../../common/middlewares/auth-middleware';

export class CreateItemCommand extends Command {

    constructor() {
        super();
    }

    async run(req: Request): Promise<any> {
        try {
            let user = await authMiddleware(req);
            let item: Item = req.body;
            item.creator = user.wallet_id;
            item.owner = user.wallet_id;
            let id: number = <number> await itemRepository.insertItemAndGetId(item);
            return await itemRepository.getItemById(id);
        } catch (err) {
            console.log(err);
            return "Error";
        }
    }
}