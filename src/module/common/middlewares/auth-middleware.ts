import { ApiError } from '../services/api-error.service';
import JWTService from '../../auth/service/JWT.service';
import { Request, response } from 'express';
import { authRepository } from '../../auth/repository/auth.repository';
import { User } from '../../../models/user.model';

export default async function (req: Request): Promise<User> {
    try {
        const authorizationHeader = req.headers.authorization;
        if (!authorizationHeader) {
            throw ApiError.UnauthorizedError();
        }
    
        const accessToken = authorizationHeader.split(' ')[1];
        if (!accessToken) {
            throw ApiError.UnauthorizedError();
        }
    
        const userPayload: User = <User> JWTService.validateAccessToken(accessToken);
        if (!userPayload) {
            throw ApiError.UnauthorizedError();
        } else {
            const userData: User = <User> await authRepository.findUser(userPayload.walletId);
            // @ts-ignore
            req.user = userData;
            return userData;
        }
    } catch (e) {
        throw ApiError.UnauthorizedError();
    }
}