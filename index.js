// adds inquirer package
const inquirer = require('inquirer');
// adds fs package
const fs = require('fs');
const { listenerCount } = require('events');
const connection = require('./config/connection');
const { exit } = require('process');
const { Server } = require('http');

// an array to call fuctions
var functionList = [
    {
        string: "View All Departments",
        call: viewAllDepartments,
    },
    {
        string: "View All Employees",
        call: viewAllEmployees,
    },
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
    {
        string: "View All Roles",
        call: viewAllRoles,
    },
    {
        string: "EXIT",
        call: exitPrompt,
    },
];

// function I made that is called from the server so that when the server starts the prompts start
var call = function serverCall(){
    listPrompt();
};

// begin inquirer prompts
function listPrompt() {
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
            ]
        }
    ]).then(function (data) {
        console.log(data.init);
        callIt(data.init);


    });}

// function to call functions, loops through the functionName array
function callIt(functionName) {
    for (i = 0; i < functionList.length; i++)
        if (functionName === functionList[i].string) {
            return functionList[i].call();
        };
};

// function to show all departments in the console
function viewAllDepartments() {
    connection.query("SELECT * FROM employee_db.department", function (err, result){
        if (err) throw err; 
        console.table(result);
        listPrompt();
    });
};

// function to show all roles in the console
function viewAllRoles() {
    console.log("you hit view all roles")
    connection.query('SELECT * FROM employee_db.role', function (err, result, fields){
        if (err) throw err; 
        console.table(result);
        listPrompt();
    });
};

// function to show all employees in the console
function viewAllEmployees() {
    console.log("you hit view all emps")
    connection.query("SELECT * FROM employee_db.employee", function (err, result){
        if (err) throw err; 
        console.table(result);
        listPrompt();
    });
};

// function to add employees
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

// function to add departments
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

// function to add roles
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

// function to exit
function exitPrompt(){
    process.exit();
}



module.exports = call;


