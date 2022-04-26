import jwt from 'jsonwebtoken';
import { authRepository } from '../repository/auth.repository';
import { AuthInfoDto } from '../dto/authInfo.dto';
import { ApiError } from '../../common/services/api-error.service';
const JWT_ACCESS_SECRET = "MW43E2waykP8";
const JWT_REFRESH_SECRET = "2M7LXq7JmTpB";

class JWTService {

    generateTokens(payload: AuthInfoDto) {
        const accessToken = jwt.sign(payload, JWT_ACCESS_SECRET, { expiresIn: '300s' })
        const refreshToken = jwt.sign(payload, JWT_REFRESH_SECRET, { expiresIn: '100000s' })
        return {
            accessToken,
            refreshToken
        }
    }

    validateAccessToken(token: string) {
        try {
            const userData = jwt.verify(token, JWT_ACCESS_SECRET);
            return userData;
        } catch (e) {
            throw ApiError.BadRequest("Error - some problems with refresh token");
        }
    }

    validateRefreshToken(token: string) {
        try {
            const userData: AuthInfoDto = <AuthInfoDto>jwt.verify(token, JWT_REFRESH_SECRET);
            return userData;
        } catch (e) {
            throw ApiError.BadRequest("Error - some problems with refresh token");
        }
    }

    async saveToken(walletId: string, refreshToken: string) {
        const tokenData = await authRepository.findJWTByWalletId(walletId);
        if (tokenData) {

            tokenData.refreshToken = refreshToken;
            return authRepository.updateJWT(tokenData);
        }
        const token = await authRepository.insertJWT(walletId, refreshToken);
        return token;
    }

    async removeToken(refreshToken: string) {
        const tokenData = await authRepository.deleteJWT(refreshToken);
        return tokenData;
    }

    async findToken(refreshToken: string) {
        const tokenData = await authRepository.findJWTByRefreshToken(refreshToken);
        return tokenData;
    }
}

export default new JWTService();