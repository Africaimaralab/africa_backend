import { Command } from '../../../contract/command.contract';
import { Request } from 'express';
import authMiddleware from '../../common/middlewares/auth-middleware';
import { Profile } from '../dto/profile.dto';
import { profileRepository } from '../repository/profile.repository';

export class GetProfileCommand extends Command {
    constructor() {
        super();
    }
    
    async run(req: Request): Promise<any> {
        try {

            //let user = await authMiddleware(req);
            let wallet_id = <string> req.query.wallet_id;
            return await profileRepository.getProfile(wallet_id);  

        } catch(err) {
            console.log(err);
        }
    }
}