import { Request, Response } from "express";
import { ApiError } from "../../common/services/api-error.service";
import AuthService from "../service/auth.service";
import { Command } from '../../../contract/command.contract';


export class LogoutCommand extends Command {

  constructor() {
    super();
  }

  async run(req: Request, res: Response): Promise<void> {
    try {
      const refreshToken = req.body.refreshToken;
      await AuthService.logout(refreshToken);
    } catch (err) {
      console.log(err)
      return ApiError.UnknownError("Error while logout", err, res);
    }
  }
}
