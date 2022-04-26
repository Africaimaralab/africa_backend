import { authRepository } from '../../auth/repository/auth.repository';
import JWTService from './JWT.service';
import { AuthInfoDto } from '../dto/authInfo.dto';
import { ApiError } from '../../common/services/api-error.service';
import { JWT } from '../../../models/JWT.model';


class AuthService {

    constructor() {
    }

    async login(wallet_id: string) {
        const user = await authRepository.findUser(wallet_id);
        if (!user) {
            await authRepository.insertUser(wallet_id);

            const authInfoDto = <AuthInfoDto>{
                walletId: wallet_id
            };
            const tokens = JWTService.generateTokens(authInfoDto);
            await JWTService.saveToken(authInfoDto.walletId, tokens.refreshToken);

            return { ...tokens, user: authInfoDto }
        } else {
            const authInfoDto = <AuthInfoDto>{
                walletId: wallet_id
            };
            const tokens = JWTService.generateTokens(authInfoDto);

            await JWTService.saveToken(authInfoDto.walletId, tokens.refreshToken);
            return { ...tokens, user: authInfoDto }
        }
    }

    async logout(refreshToken: string) {
        const token = await JWTService.removeToken(refreshToken);
        return token;
    }

    async refresh(refreshToken: string) {
        if (!refreshToken) {
            throw ApiError.BadRequest("Error - some problems with refresh token");
        }
        const userData = JWTService.validateRefreshToken(refreshToken)!;
        const tokenFromDb = await JWTService.findToken(refreshToken);
        if (!userData || !tokenFromDb) {
            throw ApiError.BadRequest("Error - some problems with refresh token");
        }
        const user = await authRepository.findUser(userData.walletId)!;
        const authInfoDto = <AuthInfoDto>{
            walletId: user.walletId
        };
        const tokens = JWTService.generateTokens(authInfoDto);

        const jwtDto = <JWT>{
            walletId: user.walletId,
            refreshToken: tokens.refreshToken
        };

        await authRepository.updateJWT(jwtDto);
        return { ...tokens, user: authInfoDto }
    }


}

export default new AuthService();