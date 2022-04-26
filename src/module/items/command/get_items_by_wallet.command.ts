import { Command } from '../../../contract/command.contract';
import { Request, Response } from 'express';
import authMiddleware from '../../common/middlewares/auth-middleware';
import { Item } from '../dto/item.dto';
import { itemRepository } from '../repository/item.repository';
import { ApiError } from '../../common/services/api-error.service';
export class GetItemsByWalletCommand extends Command {
    constructor() {
        super();
    }

    async run(req: Request, res: Response): Promise<any> {
        try {

            let user = await authMiddleware(req);
            return await itemRepository.getItems(user.walletId);

        } catch (err) {
            console.log(err);
            return ApiError.UnknownError("Error while create item", err, res);
        }
    }
}

