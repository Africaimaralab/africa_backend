import { Command } from '../../../contract/command.contract';
import { Request } from 'express';
import authMiddleware from '../../common/middlewares/auth-middleware';
import { Item } from '../dto/item.dto';
import { itemRepository } from '../repository/item.repository';

export class GetItemsByWalletCommand extends Command {
    constructor() {
        super();
    }

    async run(req: Request): Promise<any> {
        try {

            let user = await authMiddleware(req);
            return await itemRepository.getItems(user.wallet_id);

        } catch (err) {
            console.log(err);
            return "Error";
        }
    }
}

