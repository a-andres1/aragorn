const connection = require("./connection.js");

const orm = {
    // calls server to view departments
    viewDept: function () {
        const queryString = `SELECT * FROM department`

        connection.query(queryString, (err, data) => {
            if (err) throw err;
            console.log("\n")
            console.table(data)
            console.log("\n")
            // console.log(data)
        });
    },

    // function to view employees
    viewEmp: function () {
        const queryString = `SELECT * FROM employee`

        connection.query(queryString, (err, data) => {
            if (err) throw err;
            console.log("\n")
            console.table(data)
            console.log("\n")
            // console.log(data)
        });
    },

    // fuction to view roles
    viewRoles: function () {
        const queryString = `SELECT * FROM roles`

        connection.query(queryString, (err, data) => {
            if (err) throw err;
            console.log("\n")
            console.table(data)
            console.log("\n")
            // console.log(data)
        });
    },

    // function to get the updated list of departments from the server
    loadDept: function () {
        const queryString = `SELECT * FROM department WHERE data ->> $.name `;
        const arr = [];
        connection.query(queryString, (err, data) => {
            if (err) throw err;
            // data.forEach(element => {
            //     arr.push(element)
            // });
            console.table(data);
        });
    },

    // pushes data to the server
    addRole: function (title, salary, departmentId) {
        console.log(title, salary, departmentId)

        const queryString = `
        INSERT INTO roles (title, salary, department_id)
        VALUES (?,?,?)`

        connection.query(queryString, [title, salary, departmentId], (err, data) => {
            if (err) throw err;
            console.log(data)
        });
    },
 
    // pushes data to the server
    addEmp: function (firstName, lastName, role) {
        console.log(firstName, lastName, role)

        const queryString = `
        INSERT INTO employee (first_name, last_name, role_id)
        VALUES (?,?,?)`

        connection.query(queryString, [firstName, lastName, role], (err, data) => {
            if (err) throw err;
            console.log(data);
        });
    },

    // pushes data to the server
    addDept: function (name) {
        const queryString = `
        INSERT INTO department (name)
        VALUES (?)`

        connection.query(queryString, [name], (err, data) => {
            if (err) throw err;
            console.log(data);
        });
    },


}

module.exports = orm;