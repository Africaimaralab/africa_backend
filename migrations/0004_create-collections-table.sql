CREATE TABLE "collections" (
    id SERIAL PRIMARY KEY,
    "walletId" varchar NOT NULL,
    name varchar UNIQUE,
    description text,
    picture varchar,
    "createdAt" timestamp(0) DEFAULT CURRENT_TIMESTAMP,
    "totalSupply" numeric,
    FOREIGN KEY ("walletId") REFERENCES "users" ("walletId") ON DELETE CASCADE
);
