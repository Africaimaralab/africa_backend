export const db = {
  database: process.env.DB_NAME || 'africamarketplace_dev',
  user: process.env.DB_USER || 'dev_user',
  password: process.env.DB_PASSWORD || 'dev_password',
  host: process.env.DB_HOST || '127.0.0.1',
  port: Number(process.env.DB_PORT) || 5432,
};


export const tables = {
  USERS: {
    TABLE_NAME: "users",
    ID: "id",
    WALLET_ID: "walletId",
    PROFILE_PICTURE: "profilePicture",
    COUNTRY: "country",
    DOCUMENT_TYPE: "documentType",
    PASSPORT_NUMBER: "passportNumber",
    NAME: "name",
    SURNAME: "surname",
    PATRONOMIC_NAME: "patronymicName",
    COMPLETED: "completed",
    DESCRIPTION: "description",
    CREATED_AT: "createdAt",
  },
  JWTS: {
    TABLE_NAME: "jwts",
    ID: "id",
    WALLET_ID: "walletId",
    REFRESH_TOKEN: "refreshToken",
  },
  AGREEMENTS: {
    TABLE_NAME: "agreements",
    ID: "id",
    TYPE: "type",
    TEXT: "text",
    DESCRIPTION: "description"
  },
  COLLECTIONS: {
    TABLE_NAME: "collectionss",
    ID: "id",
    WALLET_ID: "walletId",
    NAME: "name",
    DESCRIPTION: "description",
    PICTURE: "picture",
    MINTED: "number",
    CREATE_AT: "createdAt",
  }

};