import { Command } from '../../../contract/command.contract';
import { Request } from 'express';
import { profileRepository } from '../repository/profile.repository';
import { Profile } from '../dto/profile.dto';
import authMiddleware from '../../common/middlewares/auth-middleware';

export class UpdateProfileCommand extends Command {

    constructor() {
        super();
    }

    async run(req: Request): Promise<any> {
        try {
            let user = await authMiddleware(req);
            let profile: Profile = req.body;
            profile.wallet_id = user.wallet_id;
            await profileRepository.updateProfile(profile);
            return await profileRepository.getProfile(profile.wallet_id);
        } catch (err) {
            console.log(err);
            return "Error";
        }
    }
}