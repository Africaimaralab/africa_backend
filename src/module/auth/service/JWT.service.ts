import jwt from 'jsonwebtoken';
import { authRepository } from '../repository/auth.repository';
import { AuthInfoDto } from '../dto/authInfo.dto';
const JWT_ACCESS_SECRET="MW43E2waykP8";
const JWT_REFRESH_SECRET="2M7LXq7JmTpB";

class JWTService {
    
    generateTokens(payload: AuthInfoDto) {
        const accessToken = jwt.sign(payload, JWT_ACCESS_SECRET, {expiresIn: '1800s'})
        const refreshToken = jwt.sign(payload, JWT_REFRESH_SECRET, {expiresIn: '1000000s'})
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
            return null;
        }
    }

    validateRefreshToken(token: string) {
        try {
            const userData: AuthInfoDto = <AuthInfoDto> jwt.verify(token, JWT_REFRESH_SECRET);
            return userData;
        } catch (e) {
            return null;
        }
    }

    async saveToken(address: string, refreshToken: string) {
        const tokenData = await authRepository.findJWT(address);
        if (tokenData) {
            tokenData.refresh_token = refreshToken;
            return authRepository.updateJWT(tokenData);
        }
        const token = await authRepository.insertJWT(address, refreshToken);
        return token;
    }

    async removeToken(refreshToken: string) {
        const tokenData = await authRepository.deleteJWT(refreshToken);
        return tokenData;
    }

    async findToken(refreshToken: string) {
        const tokenData = await authRepository.findJWT(refreshToken);
        return tokenData;
    }
}

export default new JWTService();