import { Request, Response } from "express";
import { ApiError } from "../../common/services/api-error.service";
import AuthService from "../service/auth.service";
import { AuthCallback } from "../dto/authCallback";
import { Command } from '../../../contract/command.contract';

export class LoginCommand extends Command {

  constructor() {
    super();
  }

  async run(req: Request, res: Response): Promise<AuthCallback> {
    try {
      const { walletId } = req.body;
      const userData = await AuthService.login(walletId);
      return <AuthCallback>{
        user: userData.user,
        accessToken: userData.accessToken,
        refreshToken: userData.refreshToken
      };
    } catch (err) {
      console.log(err)
      return ApiError.UnknownError("Error while login", err, res);
    }
  }
}