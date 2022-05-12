import { Command } from '../../../contract/command.contract';
import e, { Request, Response } from 'express';
import authMiddleware from '../../common/middlewares/auth-middleware';
import { ApiError } from '../../common/services/api-error.service';
import fs from 'fs';
import { IPFSService } from '../../ipfs/services/ipfs.service';
import { globals } from '../../../config/globals';
import { agreementRepository } from '../../agreements/repository/agreement.repository';
import GeneratePDFService from "../../agreements/service/generate.service";
import { MintService } from '../service/mint.service';
import { Deploy } from '../service/True-NFT/scripts/deploy-collection';
const CID = require('cids')

export class DeployCommand extends Command {
    constructor() {
        super();
    }



    async run(req: Request, res: Response): Promise<any> {
        try {
            let user = await authMiddleware(req);
            return;
        
            const deploy = new Deploy();
            deploy.deploy();


          
            
        } catch (err) {
            console.log(err)
            return ApiError.UnknownError("Error while upload image to IPFS", err, res);
        }
    }
}




