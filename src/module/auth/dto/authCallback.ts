import { AuthInfoDto } from "./authInfo.dto";

export interface AuthCallback {
  user: AuthInfoDto,
  accessToken: string;
  refreshToken: string;
}