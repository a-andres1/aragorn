const connection = require("./connection.js");

const orm = {
    viewDept: function(){
        const queryString = `SELECT * FROM department`

        connection.query(queryString, (err, data) => {
            if (err) throw err;
            console.log("\n")
            console.table(data)
            console.log("\n")
            // console.log(data)
        })
    }
}

module.exports = orm