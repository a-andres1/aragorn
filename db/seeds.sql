USE employee_db;

INSERT INTO department (name)
VALUES ("Marketing"),
("HR"),
("Sales");

INSERT INTO roles (title, salary, department_id)
VALUES ("Marketing Specialist", 67000.00, 1),
("Sales Person", 33000.00, 3),
("Hiring Manager", 45000.00, 2);

INSERT INTO employee (first_name, last_name, role_id)
VALUES ("Alyssa", "Andres", 1),
("Andres", "Long", 3),
("Jeff", "Bezos", 2);