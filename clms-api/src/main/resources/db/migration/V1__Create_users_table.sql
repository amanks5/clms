CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(100) DEFAULT NULL,
    last_name VARCHAR(100) DEFAULT NULL,
    date_of_birth Date DEFAULT NULL,
    username VARCHAR(255) UNIQUE NOT NULL
)