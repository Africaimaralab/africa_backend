import { Request } from "express";
import { ApiError } from "../../common/services/api-error.service";
import  AuthService from "../service/auth.service";
import { Command } from '../../../contract/command.contract';


export class LogoutCommand extends Command {
  
  constructor() {
    super();
  }
  
  async run(req: Request): Promise<void> {
    try {
        const {refreshToken} = req.cookies;
        await AuthService.logout(refreshToken);
    } catch (e) {
      console.log(e);
        throw ApiError.BadRequest("Error while logout");
    }
  }
}
