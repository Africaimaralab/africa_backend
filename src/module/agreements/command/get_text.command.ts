import { Command } from '../../../contract/command.contract';
import { Request, Response } from 'express';
import authMiddleware from '../../common/middlewares/auth-middleware';
import { Agreement } from '../dto/agreement.dto';
import { agreementRepository } from '../repository/agreement.repository';
import { ApiError } from '../../common/services/api-error.service';


export class GetTextByTypeCommand extends Command {
    constructor() {
        super();
    }

    async run(req: Request, res: Response): Promise<any> {
        try {

            let user = await authMiddleware(req);
            let type = req.query.type;
            return await agreementRepository.getTextByType(type);
        } catch (err) {
            return ApiError.UnknownError("Error while get text of agreement", err, res);
        }
    }
}


