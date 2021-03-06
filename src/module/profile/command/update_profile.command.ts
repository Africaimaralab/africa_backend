import { Command } from '../../../contract/command.contract';
import { Request, Response } from 'express';
import { profileRepository } from '../repository/profile.repository';
import { Profile } from '../dto/profile.dto';
import authMiddleware from '../../common/middlewares/auth-middleware';
import { ApiError } from '../../common/services/api-error.service';
import { ErrorDTO } from '../../common/dto/error.dto';


export class UpdateProfileCommand extends Command {

    constructor() {
        super();
    }

    async run(req: Request, res: Response): Promise<any> {
        try {
            let user = await authMiddleware(req);
    
            let profile: Profile = req.body;
            profile.walletId = user.walletId;
            await profileRepository.updateProfile(profile);
            return await profileRepository.getProfile(profile.walletId);

        } catch (err) {
            console.log(err)
            return ApiError.UnknownError("Error while update profile", err, res);
        }
        
    }
}