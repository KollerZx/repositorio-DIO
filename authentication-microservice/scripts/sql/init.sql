CREATE EXTENSION IF NOT EXISTS "pgcrypto";

CREATE TABLE IF NOT EXISTS application_user(
    uuid uuid NOT NULL,
    username VARCHAR NOT NULL,
    password VARCHAR NOT NULL,
    PRIMARY KEY (uuid)
);

INSERT INTO application_user (uuid, username, password) VALUES ('e92f35a7-32fa-45eb-8444-a39142c60179', 'koller', crypt('@testms', 'my_salt'));

CREATE TABLE IF NOT EXISTS refresh_token(
    uuid uuid NOT NULL,
    expiresIn INTEGER NOT NULL,
    username VARCHAR,
    user_id uuid,
    CONSTRAINT user_id
    FOREIGN KEY (user_id) REFERENCES application_user(uuid)
    
);

ALTER TABLE application_user ADD COLUMN refresh_token VARCHAR;
