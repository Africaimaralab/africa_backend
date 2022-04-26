CREATE TABLE "users" (
    id SERIAL PRIMARY KEY,
    "walletId" varchar NOT NULL UNIQUE,
    "profilePicture" varchar,
    country varchar,
    "documentType" varchar,
    "passportNumber" varchar,
    name varchar,
    surname varchar,
    "patronymicName" varchar,
    "description" varchar,
     completed boolean,
    "createdAt" timestamp(0) DEFAULT CURRENT_TIMESTAMP
);
