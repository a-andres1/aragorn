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
        })
    },
    // function to view employees
    viewEmp: function () {
        const queryString = `SELECT * FROM employees`

        connection.query(queryString, (err, data) => {
            if (err) throw err;
            console.log("\n")
            console.table(data)
            console.log("\n")
            // console.log(data)
        })
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
        })
    },
    // function to get the updated list of departments from the server
    loadDept: function () {
        const queryString = `SELECT * FROM department`
        const arr = []
        connection.query(queryString, (err, data) => {
            if (err) throw err;
            data.forEach(element => {
                arr.push(element.dep_name)
            });
            // console.log(arr)
            return { array: arr }
        })
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
        })
    },


}

module.exports = orm;