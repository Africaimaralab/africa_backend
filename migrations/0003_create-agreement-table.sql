CREATE TABLE "agreements" (
    id SERIAL PRIMARY KEY,
    type varchar NOT NULL UNIQUE,
    text varchar NOT NULL,
    description varchar NOT NULL
);
