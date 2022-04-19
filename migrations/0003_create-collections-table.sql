CREATE TABLE "collections" (
    id SERIAL PRIMARY KEY,
    wallet_id varchar NOT NULL,
    name varchar,
    description text,
    created_at timestamp(0) DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (wallet_id) REFERENCES "users" (wallet_id) ON DELETE CASCADE
);
