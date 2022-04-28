CREATE TABLE contacts(
id serial,
firstName varchar(120) NOT NULL,
lastName varchar(120) NOT NULL
);

ALTER TABLE contacts ADD COLUMN phoneNumber varchar(30);

SELECT *FROM contacts;