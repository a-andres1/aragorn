const connection = require("./connection.js");

const orm = {
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
    {
    exit: function{
        // function to exit
        process.exit();
    }
}
    }
}

module.exports = orm