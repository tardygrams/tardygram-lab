DROP TABLE IF EXISTS users;

CREATE TABLE users(
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    email TEXT NOT NULL,
    password_hash TEXT NOT NULL,
    username VARCHAR(10) NOT NULL,
    profile_photo_url TEXT 
)

