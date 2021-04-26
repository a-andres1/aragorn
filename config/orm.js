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
    },

    loadDept: function() {
        const queryString = `SELECT * FROM department`
        const arr = []
        connection.query(queryString, (err, data) => {
            if (err) throw err;
            data.forEach(element => {
                arr.push(element.dep_name)
            });
            // console.log(arr)
            return {array: arr}
        })
    }
}

module.exports = orm