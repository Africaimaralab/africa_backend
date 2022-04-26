import { Command } from '../../../contract/command.contract';
import { Request, Response } from 'express';
import { agreementRepository } from '../repository/agreement.repository';
import { Agreement } from '../dto/agreement.dto';
import authMiddleware from '../../common/middlewares/auth-middleware';
import { ApiError } from '../../common/services/api-error.service';
import { ErrorDTO } from '../../common/dto/error.dto';

export class AddAgreementCommand extends Command {

    constructor() {
        super();
    }

    async run(req: Request, res: Response): Promise<any> {
        try {
            let user = await authMiddleware(req);
    
            let agreement: Agreement = req.body;
            let id = await agreementRepository.insertAgreement(agreement);
            return await agreementRepository.getAgreementById(id);
        } catch (err) {
            res.status(400);
            return ApiError.UnknownError("Error while add agreement", err, res);
        }
        
    }
}