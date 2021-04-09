// adds inquirer package
const inquirer = require('inquirer');
// adds fs package
const fs = require('fs');
const { listenerCount } = require('events');
const connection = require('./config/connection');
const { exit } = require('process');
const { Server } = require('http');

var functionList = [
    {
        string: "View All Departments",
        call: viewAllDepartments,
    },
    {
        string: "View All Employees",
        call: viewAllEmployees,
    },
    // {
    //     string: "viewEmployeesByManager",
    //     call: viewEmployeesByManager,
    // },
    {
        string: "Add Employee",
        call: addEmployee,
    },
    {
        string: "Add Department",
        call: addDepartment,
    },
    {
        string: "Add Role",
        call: addRole,
    },
    {
        string: "Update Employee Role",
        call: updateEmployeeRole,
    },
    // {
    //     string: "updateManager",
    //     call: updateManager,
    // },
    // {
    //     string: "deleteDepartment",
    //     call: deleteDepartment,
    // },
    // {
    //     string: "deleteRole",
    //     call: deleteRole,
    // },
    // {
    //     string: "deleteEmployee",
    //     call: deleteEmployee,
    // },
    // {
    //     string: "viewDepartmenBudget",
    //     call: viewDepartmenBudget,
    // },
    // {
    //     string: "deleteEmployee",
    //     call: deleteEmployee,
    // },
    {
        string: "View All Roles",
        call: viewAllRoles,
    },
    {
        string: "EXIT",
        call: exitPrompt,
    },
];

var call = function serverCall(){
    listPrompt();
}

function listPrompt() {// begin inquirer prompts
inquirer
    .prompt([
        {
            name: "init",
            type: "list",
            message: "What would you like to do?",
            choices: [
                "View All Departments",
                "View All Roles",
                "View All Employees",                
                "Add Employee",
                "Add Department",
                "Add Role",
                "Update Employee Role",
                "EXIT"
                // EVERYTHING PAST HERE IS BONUS
                // "Update Manager",
                // "Delete Department",
                // "Delete Role",
                // "Delete Employee",
                // "View Department Budget",
                // "View Employees By Manager"
            ]
        }
    ]).then(function (data) {
        console.log(data.init);
        callIt(data.init);


    });}

function callIt(functionName) {
    for (i = 0; i < functionList.length; i++)
        if (functionName === functionList[i].string) {
            return functionList[i].call();
        };
};

function viewAllDepartments() {
    connection.query("SELECT * FROM employee_db.department", function (err, result){
        if (err) throw err; 
        console.table(result);
        listPrompt();
    });
    
 
};

function viewAllRoles() {
    console.log("you hit view all roles")
    connection.query('SELECT * FROM employee_db.role', function (err, result, fields){
        if (err) throw err; 
        console.table(result);
        listPrompt();
    });

};
function viewAllEmployees() {
    console.log("you hit view all emps")
    connection.query("SELECT * FROM employee_db.employee", function (err, result){
        if (err) throw err; 
        console.table(result);
        listPrompt();
    });

};

function addEmployee() {
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
    ]).then(function(data){
        console.table(data);
        // connection.query('INSERT INTO employee VALUES);
        listPrompt();
    });

};
function addDepartment() {
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
    ]).then(function(data){
        console.table(data);
        // connection.query('INSERT INTO department VALUES);
        listPrompt();
    });

};
function addRole() {
    console.log("add role")
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
        // connection.query('INSERT INTO employee VALUES);
        listPrompt();
    });

};
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

function exitPrompt(){
    process.exit();
}

// THIS IS BONUS TERRITORY
// function updateManager() {
//     console.log("update man")

// };
// function deleteDepartment() {
//     console.log("del dept")

// };
// function deleteRole() {
//     console.log("del role")

// };
// function deleteEmployee() {
//     console.log("del emp")

// };
// function viewEmployeesByManager() {
//     console.log("view all emps by man")

// };
// function viewDepartmenBudget() {
//     console.log("view dept budget")

// };

module.exports = call;