import { Connection, connection } from '../../../db/connection';
import { Profile } from '../dto/profile.dto'

export class ProfileRepository {
    private readonly connection: Connection;

    constructor() {
        this.connection = connection;
    }

    async updateProfile(profile: Profile) {
        let id = (await this.updateTable("users", profile));
    }


    async updateTable(tableName: string, columns: object) {
        const columnValues = Object.values(columns);
        const valuesPlaceholder = columnValues.map((_, i: number) => `$${i + 1}`).join(', ');
        const columnNames = Object.keys(columns).map((columnName: string) => `${columnName}`).join(', ');

        const sql = `UPDATE "${tableName}" SET (${columnNames}) = (${valuesPlaceholder}) WHERE wallet_id LIKE '%${columns['wallet_id']}%'`;
        let result = await this.connection.sqlQuery(sql, columnValues)
    }



    async getProfile(wallet_id: string): Promise<Profile> {


        console.log(wallet_id);
        let result = await this.connection.sqlQuery(
            `SELECT *
            FROM users
            WHERE wallet_id LIKE '%${wallet_id}%'`);

        return <Profile>result;
    }

}

export const profileRepository = new ProfileRepository();
