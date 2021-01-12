DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS posts CASCADE;
DROP TABLE IF EXISTS comments;


CREATE TABLE users(
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    email TEXT NOT NULL,
    password_hash TEXT NOT NULL,
    username VARCHAR(10) NOT NULL,
    profile_photo_url TEXT 
);

CREATE TABLE posts(
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    photo_url TEXT NOT NULL,
    caption VARCHAR(40),
    tags JSONB,
    user_id BIGINT REFERENCES users(id) NOT NULL
);

CREATE TABLE comments(
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    comment_by BIGINT REFERENCES users(id) NOT NULL,
    post_id BIGINT REFERENCES posts(id) ON DELETE CASCADE,
    comment VARCHAR(140)
)


