const inquirer = require("inquirer");
const orm = require("./config/orm.js")
let deptArr = ["Marketing", "HR", "Sales"]
//  roleArr, employeeArr;

function init() {
    // deptArr = orm.loadDept()
    // console.log(deptArr)
    // console.log(orm.loadDept())
    inquirer.prompt([
        {
            type: "list",
            message: "What up?",
            choices: [
                "View All Departments",
                "View All Roles",
                "View All Employees",                
                "Add Employee",
                "Add Department",
                "Add Role",
                "Update Employee Role",
                "EXIT"
            ],
            name:"choice"
        }
    ]).then(({choice}) => {
        if(choice == "View Departments") {
            orm.viewDept();
            init()
        }
        else if(choice == "View Employees") {
            orm.viewEmp();
            init()
        }
        else if(choice == "View Roles") {
            orm.viewRoles();
            init()
        }
        else if (choice == "Add Role") {
            // calls function below to get the necessary data
            askRole();
        }
        else if (choice == "Add Department") {
            // calls function below to get the necessary data
            askDept();
        }
        else if (choice == "Add Employee") {
            // calls function below to get the necessary data
            askEmp();
        }
        else if (choice == "Update Employee") {
            // calls function below to get the necessary data
            updateEmp();
        }
        else if (choice == "Exit"){
            process.exit();
        }
    })
}


function askRole (){
    console.log(deptArr)
    inquirer.prompt([
        {
            message: "Role Title",
            name: "title"
        },
        {
            message: "Salary?",
            name: "salary"
        },
        {
            type: "list",
            message: "Department?",
            choices: deptArr,
            name: "departmentString"
        }
    ]).then (res => {
        // passes the data to the orm file to make the server call and add the data
        orm.addRole(res.title, res.salary, deptArr.indexOf(res.departmentString) + 1)
    })
};

// update employee
function updateEmp(){
    // this will need another list like in departments
}


// initialize app
init()
// 
// 
// 
// 
// 




// function to add employees
function askEmp() {
    console.log("add employee")
    inquirer.prompt([
        {
            name: "id",
            type: "input",
            message: "What is the employee's id?"
        },
        {
            name: "fname",
            type: "input",
            message: "What is the employee's first name?"
        },
        {
            name: "lname",
            type: "input",
            message: "What is the employee's last name?"
        },
        {
            name: "role",
            type: "input",
            message: "What is the employee's role?"
        },
        {
            name: "manid",
            type: "input",
            message: "What is the employee's manager's id?"
        },
    ]).then (res => {
        // passes the data to the orm file to make the server call and add the data
        orm.addEmp(res.title, res.salary, deptArr.indexOf(res.departmentString) + 1)
    })
        init();
    
};

// function to add departments
function askDept() {
    console.log("add department")
    inquirer.prompt([
        {
            name: "id",
            type: "input",
            message: "What is the department id?"
        },
        {
            name: "name",
            type: "input",
            message: "What is the department name?"
        },
    ]).then(function({id, name}){
        console.table({id, name});
        connection.query("INSERT INTO employee_db.department VALUES ?", ("id", "name"), function (err, result) 
        {if (err) throw err});
        listPrompt();
    });
};



// function to update employee roles
function updateEmployeeRole() {
    console.log("update emp role")
    inquirer.prompt([
        {
            name: "id",
            type: "input",
            message: "What is the role id?"
        },
        {
            name: "title",
            type: "input",
            message: "What is the role title?"
        },
        {
            name: "salary",
            type: "input",
            message: "What is the role's salary?"
        },
        {
            name: "deptid",
            type: "input",
            message: "What is the role's department's id?"
        },
    ]).then(function(data){
        console.table(data);
        // connection.query('INSERT INTO role VALUES);
        listPrompt();
    });
};



