import { Command } from '../../../contract/command.contract';
import { Request, Response } from 'express';
import { itemRepository } from '../repository/item.repository';
import { Item } from '../dto/item.dto';
import authMiddleware from '../../common/middlewares/auth-middleware';
import { ApiError } from '../../common/services/api-error.service';

export class CreateItemCommand extends Command {

    constructor() {
        super();
    }

    async run(req: Request, res: Response): Promise<any> {
        try {
            let user = await authMiddleware(req);
            let item: Item = req.body;
            item.creator = user.walletId;
            item.owner = user.walletId;
            let id: number = <number> await itemRepository.insertItemAndGetId(item);
            return await itemRepository.getItemById(id);
        } catch (err) {
            console.log(err);
            return ApiError.UnknownError("Error while create item", err, res);
        }
    }
}