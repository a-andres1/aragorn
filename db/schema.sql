DROP DATABASE IF EXISTS employee_db;
CREATE DATABASE employee_db;

CREATE TABLE department (
    id INT AUTO_INCREMENT,
    name VARCHAR(30),
    INDEX ((data ->> $.name)),
    PRIMARY KEY (id)
);

CREATE TABLE roles (
    id INT AUTO_INCREMENT,
    title VARCHAR(30),
    salary DECIMAL(10,2),
    department_id INT,
    PRIMARY KEY (id),
    FOREIGN KEY (department_id) REFERENCES department(id)
);

CREATE TABLE employee (
    id INT AUTO_INCREMENT,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    role_id INT,
    PRIMARY KEY (id),
    FOREIGN KEY (role_id) REFERENCES roles(id)
);