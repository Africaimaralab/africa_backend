import { Command } from '../../../contract/command.contract';
import { Request, Response } from 'express';
import authMiddleware from '../../common/middlewares/auth-middleware';
import { Item } from '../dto/item.dto';
import { ApiError } from '../../common/services/api-error.service';
import { GetTokensList } from '../service/tokensList.service';

export class GetItemsByOwnerCommand extends Command {
    constructor() {
        super();
    }

    async run(req: Request, res: Response): Promise<any> {
        try {
            const tokensListGetter = new GetTokensList();
            let owner: any =  req.query.owner;
            let list = await tokensListGetter.filterListByOwner(owner);
            return list;

        } catch (err) {
            console.log(err);
            return ApiError.UnknownError("Error while get item", err, res);
        }
    }
}

