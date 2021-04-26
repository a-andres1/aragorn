DROP DATABASE IF EXISTS employee_db;
CREATE DATABASE employee_db;

CREATE TABLE department (
    id INT AUTO_INCREMENT,
    dep_name VARCHAR(30),
    PRIMARY KEY (id)
);