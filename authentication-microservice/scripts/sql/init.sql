CREATE EXTENSION IF NOT EXISTS "pgcrypto";

CREATE TABLE IF NOT EXISTS application_user(
    uuid uuid NOT NULL,
    username VARCHAR NOT NULL,
    password VARCHAR NOT NULL,
    PRIMARY KEY (uuid)
);

INSERT INTO application_user (uuid, username, password) VALUES ('e92f35a7-32fa-45eb-8444-a39142c60179', 'koller', crypt('@testms', 'my_salt'));