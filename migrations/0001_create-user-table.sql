CREATE TABLE "users" (
    id SERIAL PRIMARY KEY,
    wallet_id varchar NOT NULL UNIQUE,
    profile_picture bytea,
    country varchar,
    document_type varchar,
    passport_number varchar,
    name varchar,
    surname varchar,
    patronymic_name varchar,
    descryption text,
    created_at timestamp(0) DEFAULT CURRENT_TIMESTAMP
);
