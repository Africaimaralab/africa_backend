import { Connection, connection } from '../../../db/connection';
import { User } from '../../../models/user.model';
import { JWT } from '../../../models/JWT.model';

export class AuthRepository {
   private readonly connection: Connection;

   constructor() {
      this.connection = connection;
   }

   async insertUser(wallet_id: string): Promise<void> {
      await this.connection.insertAndGetID("users", {
         walletId: wallet_id,
         completed: false
      })!
   }

   async findUser(wallet_id: string): Promise<User> {
      let user: User = <User>await this.connection.sqlQuery(`SELECT * FROM users WHERE "walletId" LIKE '%${wallet_id}%'`);
      if (!user) {
         throw new Error("User is not found!")
      } else {
         return user[0];
      }
   }



   async insertJWT(wallet_id: string, refreshToken: string): Promise<void> {
      await this.connection.insertAndGetID("jwts", {
         walletId: wallet_id,
         refreshToken: refreshToken
      })!
   }

   async findJWTByWalletId(wallet_id: string): Promise<JWT> {
      let jwt: JWT = <JWT>await this.connection.sqlQuery(`SELECT * FROM jwts WHERE "walletId" LIKE '%${wallet_id}%'`);
      if (!jwt) {
         throw new Error("Refresh token is not found!")
      } else {
         return jwt[0];
      }
   }


   async findJWTByRefreshToken(refresh_token: string): Promise<JWT> {
      let jwt: JWT = <JWT>await this.connection.sqlQuery(`SELECT * FROM jwts WHERE "refreshToken" = '${refresh_token}'`);
      if (!jwt) {
         throw new Error("Refresh token is not found!")
      } else {
         return jwt[0];
      }
   }


   async deleteJWT(refreshToken: string): Promise<void> {
      await this.connection.sqlQuery(`DELETE FROM jwts WHERE "refreshToken" LIKE '${refreshToken}'`)
   }

   async updateJWT(jwtData: JWT) {
      await this.connection.sqlQuery(
         `UPDATE jwts
          SET "refreshToken" = '${jwtData.refreshToken}'
          WHERE "walletId" LIKE '%${jwtData.walletId}%'`);
   }
}

export const authRepository = new AuthRepository();
