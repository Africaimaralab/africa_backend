import { Request, Response } from "express";
import { Command } from '../../../contract/command.contract';
import { ApiError } from "../../common/services/api-error.service";
import AuthService from "../service/auth.service";
import { AuthCallback } from "../dto/authCallback";
import authMiddleware from '../../common/middlewares/auth-middleware';

export class RefreshCommand extends Command {

  constructor() {
    super();
  }

  async run(req: Request, res: Response): Promise<AuthCallback> {
    try {
      const refreshToken = req.body.refreshToken;
      const userData = await AuthService.refresh(refreshToken);
      return <AuthCallback>{
        user: userData.user,
        accessToken: userData.accessToken,
        refreshToken: userData.refreshToken
      };
    } catch (err) {
      console.log(err)
      return ApiError.UnknownError("Error while refreshing", err, res);
    }
  }

}