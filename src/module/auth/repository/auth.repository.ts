import { Connection, connection } from '../../../db/connection';
import { User } from '../../../models/user.model';
import { JWT } from '../../../models/JWT.model';

export class AuthRepository {
   private readonly connection: Connection;

   constructor() {
      this.connection = connection;
   }

   async insertUser(wallet_id: string): Promise <void> {
      await this.connection.insertAndGetID("users", {
         wallet_id: wallet_id,
      })!
   }

   async findUser(wallet_id: string): Promise<User> {
      let user: User = <User> await this.connection.sqlQuery(`SELECT * FROM users WHERE wallet_id LIKE '%${wallet_id}%'`);
      if (!user) {
         throw new Error("User is not found!")
      } else {
         return user[0];
      }
   }

   async insertJWT(wallet_id: string, refreshToken: string): Promise <void> {
      await this.connection.insertAndGetID("jwts", {
         wallet_id: wallet_id,
         refresh_token: refreshToken
      })!
   }

   async findJWT(refreshToken: string): Promise<JWT> {
      let jwt: JWT = <JWT> await this.connection.sqlQuery(`SELECT * FROM jwts WHERE refresh_token = '${refreshToken}'`);
      if (!jwt) {
         throw new Error("Refresh token is not found!")
      } else {
         return jwt[0];
      }
   }

   async deleteJWT(refreshToken: string): Promise<void> {
      await this.connection.sqlQuery(`DELETE FROM jwts WHERE refresh_token = '${refreshToken}'`)
   }

   async updateJWT(jwtData: JWT) {
      await this.connection.sqlQuery(
         `UPDATE jwts
          SET refresh_token = '${jwtData.refresh_token}'
          WHERE wallet_id = '${jwtData.wallet_id}'`);
   }
}

export const authRepository = new AuthRepository();
