import { Connection, connection } from '../../../db/connection';
import { Agreement } from '../dto/agreement.dto'

export class AgreementRepository {
    private readonly connection: Connection;

    constructor() {
        this.connection = connection;
    }


    async insertAgreement(agreement: Agreement): Promise<any> {
        return await this.connection.insertAndGetID("agreements", {
            type: agreement.type,
            text: agreement.text,
            description: agreement.description
        })!
    }


    async getAgreementById(id: number): Promise<Agreement> {
        let result = await this.connection.sqlQuery(
            `SELECT *
            FROM agreements
            WHERE id = '${id}'`);
        return <Agreement>result[0];
    }


    async getAgreements(): Promise<Agreement[]> {
        let result = await this.connection.sqlQuery(
            `SELECT *
            FROM agreements`);
        return <Agreement[]>result;
    }

    async getTextByType(type): Promise<any> {
        let result = await this.connection.sqlQuery(
            `SELECT text
            FROM agreements
            where type = '${type}'`);
        return result[0];
    }

}

export const agreementRepository = new AgreementRepository();
