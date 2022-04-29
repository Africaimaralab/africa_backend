import { Command } from '../../../contract/command.contract';
import { Request, Response } from 'express';
import authMiddleware from '../../common/middlewares/auth-middleware';
import { Item } from '../dto/item.dto';
import { itemRepository } from '../repository/item.repository';
import { ApiError } from '../../common/services/api-error.service';
import { GetTokensList } from '../service/tokensList.service';

export class GetItemByIdCommand extends Command {
    constructor() {
        super();
    }

    async run(req: Request, res: Response): Promise<any> {
        try {

            let user = await authMiddleware(req);
            const tokensListGetter = new GetTokensList();
            let list = await tokensListGetter.getTokensList();
    
            let id = Number(req.query.id);
            return await itemRepository.getItemById(id);

        } catch (err) {
            console.log(err);
            return ApiError.UnknownError("Error while get item", err, res);
        }
    }
}

