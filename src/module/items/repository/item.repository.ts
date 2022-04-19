import { Connection, connection } from '../../../db/connection';
import { Item } from '../dto/item.dto'

export class ItemRepository {
    private readonly connection: Connection;

    constructor() {
        this.connection = connection;
    }

    async insertItemAndGetId(item: Item) {
        return await this.connection.insertAndGetID("items", {
            address: item.address,
            name: item.name,
            description: item.description,
            image: item.image,
            collection: item.collection,
            tags: item.tags,
            price: item.price,
            creator: item.creator,
            owner: item.owner
        })!
     }




    async updateTable(tableName: string, columns: object) {
        const columnValues = Object.values(columns);
        const valuesPlaceholder = columnValues.map((_, i: number) => `$${i + 1}`).join(', ');
        const columnNames = Object.keys(columns).map((columnName: string) => `${columnName}`).join(', ');

        const sql = `UPDATE "${tableName}" SET (${columnNames}) = (${valuesPlaceholder}) WHERE wallet_id LIKE '%${columns['wallet_id']}%'`;
        console.log(sql)
        let result = await this.connection.sqlQuery(sql, columnValues)
    }



    async getItems(wallet_id: string): Promise<Item[]> {

        let result = await this.connection.sqlQuery(
            `SELECT *
            FROM items
            WHERE creator LIKE '%${wallet_id}%'`);

        return <Item[]>result;
    }


    async getItemById(id: number): Promise<Item> {

        let result = await this.connection.sqlQuery(
            `SELECT *
            FROM items
            WHERE id = ${id}`);

        return <Item>result;
    }

}

export const itemRepository = new ItemRepository();
