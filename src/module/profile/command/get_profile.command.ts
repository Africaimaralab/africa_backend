import { Command } from '../../../contract/command.contract';
import { Request, Response } from 'express';
import authMiddleware from '../../common/middlewares/auth-middleware';
import { Profile } from '../dto/profile.dto';
import { profileRepository } from '../repository/profile.repository';
import { ApiError } from '../../common/services/api-error.service';
export class GetProfileCommand extends Command {
    constructor() {
        super();
    }

    async run(req: Request, res: Response): Promise<any> {
        try {

            let user = await authMiddleware(req);
            return <Profile> await profileRepository.getProfile(user.walletId);
        } catch (err) {
            return ApiError.UnknownError("Error while get profile", err, res);
        }
    }
}


