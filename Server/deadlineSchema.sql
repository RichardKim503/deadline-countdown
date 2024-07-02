CREATE DATABASE Deadlines;
USE Deadlines;

CREATE TABLE Dates(
    id INT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    startdate VARCHAR(255) NOT NULL,
    enddate VARCHAR(255) NOT NULL
);