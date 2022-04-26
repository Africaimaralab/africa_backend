import { Connection, connection } from '../../../db/connection';
import { Profile } from '../dto/profile.dto'

export class ProfileRepository {
    private readonly connection: Connection;

    constructor() {
        this.connection = connection;
    }

    async updateProfile(profile: Profile) {
        await this.updateTable("users", profile);
        let newProfileData = <Profile>await this.getProfile(profile.walletId);
        if(newProfileData.completed == true)
            for (let key in newProfileData) {
                if (newProfileData[key] == null || newProfileData[key] == "")  {
                    if(newProfileData.completed == true) {
                        await this.updateCompletedColumn(profile.walletId, false);
                    }
                    return;
                }
            }

            await this.updateCompletedColumn(profile.walletId, true);
    }



    async updateCompletedColumn(wallet_id: string, completed: boolean) {
        await this.connection.sqlQuery(
           `UPDATE users
            SET completed = '${completed}'
            WHERE "walletId" LIKE '%${wallet_id}%'`);
     }



    async updateTable(tableName: string, columns: object) {
        const columnValues = Object.values(columns);
        const valuesPlaceholder = columnValues.map((_, i: number) => `$${i + 1}`).join(', ');
        const columnNames = Object.keys(columns).map((columnName: string) => `"${columnName}"`).join(', ');

        const sql = `UPDATE "${tableName}" SET (${columnNames}) = (${valuesPlaceholder}) WHERE "walletId" LIKE '%${columns['walletId']}%'`;
        let result = await this.connection.sqlQuery(sql, columnValues)
    }



    async getProfile(wallet_id: string): Promise<Profile> {

        let result = await this.connection.sqlQuery(
            `SELECT *
            FROM users
            WHERE "walletId" LIKE '%${wallet_id}%'`);
        return <Profile>result[0];
    }


    async getCompletedProfiles(wallet_id: string): Promise<Profile[]> {

        let result = await this.connection.sqlQuery(
            `SELECT "walletId", name, surname, "profilePicture"
            FROM   users
            WHERE completed is true
            AND "walletId" NOT LIKE '%${wallet_id}%'`);
        return <Profile[]>result;
    }

}

export const profileRepository = new ProfileRepository();
