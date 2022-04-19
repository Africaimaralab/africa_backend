CREATE TABLE "items" (
    id SERIAL PRIMARY KEY,
    address varchar,
    name varchar,
    description text,
    image bytea,
    collection integer,
    tags varchar,
    price integer,
    creator varchar,
    owner varchar,
    created_at timestamp(0) DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (collection) REFERENCES "collections" (id) ON DELETE CASCADE
);


