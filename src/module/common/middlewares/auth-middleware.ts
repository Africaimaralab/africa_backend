import { ApiError } from '../services/api-error.service';
import JWTService from '../../auth/service/JWT.service';
import { Request, response } from 'express';
import { authRepository } from '../../auth/repository/auth.repository';
import { User } from '../../../models/user.model';

export default async function (req: Request): Promise<User> {
    try {
        const authorizationHeader = req.headers.authorization;
        if (!authorizationHeader) {
            response.status(401);
            throw ApiError.UnauthorizedError();
        }
    
        const accessToken = authorizationHeader.split(' ')[1];
        if (!accessToken) {
            response.status(401);
            throw ApiError.UnauthorizedError();
        }
    
        const userPayload: User = <User> JWTService.validateAccessToken(accessToken);
        if (!userPayload) {
            response.status(401);
            throw ApiError.UnauthorizedError();
        } else {
            const userData: User = <User> await authRepository.findUser(userPayload.wallet_id);
            // @ts-ignore
            req.user = userData;
            return userData;
        }
    } catch (e) {
        response.status(401);
        throw ApiError.UnauthorizedError();
    }
}