import { authRepository } from '../../auth/repository/auth.repository';
import JWTService from './JWT.service';
import { AuthInfoDto } from '../dto/authInfo.dto';
import { ApiError } from '../../common/services/api-error.service';

class AuthService {

    constructor() {
    }

    async login(wallet_id: string) {
        const user = await authRepository.findUser(wallet_id);
        if (!user) {
            await authRepository.insertUser(wallet_id);

            const authInfoDto = <AuthInfoDto>{
                wallet_id: wallet_id
            };
            const tokens = JWTService.generateTokens(authInfoDto);
            await JWTService.saveToken(authInfoDto.wallet_id, tokens.refreshToken);

            return { ...tokens, user: authInfoDto }
        } else {
            const authInfoDto = <AuthInfoDto>{
               wallet_id: wallet_id
            };
            const tokens = JWTService.generateTokens(authInfoDto);

            await JWTService.saveToken(authInfoDto.wallet_id, tokens.refreshToken);
            return { ...tokens, user: authInfoDto }
        }
    }

    async logout(refreshToken: string) {
        const token = await JWTService.removeToken(refreshToken);
        return token;
    } 

}

export default new AuthService();