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
    WALLET_ID: "wallet_id",
    PROFILE_PICTURE: "profile_picture",
    COUNTRY: "country",
    DOCUMENT_TYPE: "document_type",
    PASSPORT_NUMBER: "passport_number",
    NAME: "name",
    SURNAME: "surname",
    PATRONOMIC_NAME: "patronymic_name",
    DESCRYPTION: "descryption",
    CREATED_AT: "created_at",
 },
  JWTS: {
    TABLE_NAME: "jwts",
    ID: "id",
    WALLET_ID: "wallet_id",
    REFRESH_TOKEN: "refresh_token",
  },
  ITEMS: {
    TABLE_NAME: "items",
    ID: "id",
    ADDRESS: "address",
    NAME: "name",
    DESCRYPTION: "descryption",
    IMAGE: "image",
    COLLECTION: "collection",
    TAGS: "tags",
    PRICE: "price",
    CREATOR: "creator",
    OWNER: "owner",
    CREATED_AT: "created_at",
  },
  COLLECTIONS: {
    TABLE_NAME: "collectionss",
    ID: "id",
    WALLET_ID: "wallet_id",
    NAME: "name",
    DESCRIPTION: "description",
    CREATE_AT: "created_at",
  }

};

