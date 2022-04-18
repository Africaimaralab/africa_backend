import { Request } from "express";
import { ApiError } from "../../common/services/api-error.service";
import  AuthService from "../service/auth.service";
import { AuthCallback } from "../dto/authCallback";
import { Command } from '../../../contract/command.contract';

export class LoginCommand extends Command {
  
  constructor() {
    super();
  }

  async run(req: Request): Promise<AuthCallback> {
    try {
      const {wallet_id} = req.body;
      const userData = await AuthService.login(wallet_id);
      return <AuthCallback> {
        user: userData.user,
        accessToken: userData.accessToken,
        refreshToken: userData.refreshToken
      };
    } catch (e) {
      console.log(e);
      throw ApiError.BadRequest("Error while login");
    }
  }
}