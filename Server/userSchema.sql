CREATE DATABASE Users;
USE Users;

CREATE TABLE Users(
    id INT PRIMARY KEY,
    username VARCHAR(32) NOT NULL,
    password TEXT NOT NULL
);