import { Connection, connection } from '../../../db/connection';
import { Collection } from '../dto/collection.dto'

export class CollectionRepository {
    private readonly connection: Connection;

    constructor() {
        this.connection = connection;
    }

    async insertCollectionAndGetId(collection: Collection) {
        return await this.connection.insertAndGetID("collections", {
           wallet_id: collection.wallet_id,
           name: collection.name,
           description: collection.description
        })!
     }



    async updateTable(tableName: string, columns: object) {
        const columnValues = Object.values(columns);
        const valuesPlaceholder = columnValues.map((_, i: number) => `$${i + 1}`).join(', ');
        const columnNames = Object.keys(columns).map((columnName: string) => `${columnName}`).join(', ');

        const sql = `UPDATE "${tableName}" SET (${columnNames}) = (${valuesPlaceholder}) WHERE wallet_id LIKE '%${columns['wallet_id']}%'`;
        let result = await this.connection.sqlQuery(sql, columnValues)
    }



    async getCollections(wallet_id: string): Promise<Collection> {

        let result = await this.connection.sqlQuery(
            `SELECT *
            FROM collections
            WHERE wallet_id LIKE '%${wallet_id}%'`);

        return <Collection>result;
    }


    async getCollectionById(id: number): Promise<Collection> {

        let result = await this.connection.sqlQuery(
            `SELECT *
            FROM collections
            WHERE id = ${id}`);

        return <Collection>result;
    }

}

export const collectionRepository = new CollectionRepository();
