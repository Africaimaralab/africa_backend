CREATE TABLE "items" (
    id SERIAL PRIMARY KEY,
    address varchar,
    name varchar,
    description text,
    image varchar,
    collection integer,
    tags varchar,
    price integer,
    creator varchar,
    owner varchar,
    "createdAt" timestamp(0) DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (collection) REFERENCES "collections" (id) ON DELETE CASCADE
);

