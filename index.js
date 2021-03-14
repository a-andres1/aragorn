// adds inquirer package
const inquirer = require('inquirer');
// adds fs package
const fs = require('fs');
const { listenerCount } = require('events');

var functionList = [
    {
        string: "viewAllDepartments",
        call: viewAllDepartments,
    },
    {
        string: "viewAllEmployees",
        call: viewAllEmployees,
    },
    {
        string: "viewEmployeesByManager",
        call: viewEmployeesByManager,
    },
    {
        string: "addEmployee",
        call: addEmployee,
    },
    {
        string: "addDeparment",
        call: addDeparment,
    },
    {
        string: "addRole",
        call: addRole,
    },
    {
        string: "updateEmployeeRole",
        call: updateEmployeeRole,
    },
    {
        string: "updateManager",
        call: updateManager,
    },
    {
        string: "deleteDepartment",
        call: deleteDepartment,
    },
    {
        string: "deleteRole",
        call: deleteRole,
    },
    {
        string: "deleteEmployee",
        call: deleteEmployee,
    },
    {
        string: "viewDepartmenBudget",
        call: viewDepartmenBudget,
    },
    {
        string: "deleteEmployee",
        call: deleteEmployee,
    },
    {
        string: "viewAllRoles",
        call: viewAllRoles,
    },
];


// begin inquirer prompts
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
                // EVERYTHING PAST HERE IS BONUS
                "Update Manager",
                "Delete Department",
                "Delete Role",
                "Delete Employee",
                "View Department Budget",
                "View Employees By Manager"
            ]
        }
    ]).then(function (data) {
        console.log(data.init);
        // can I put the functions in an array that this loops through, matches and then spits out? 
        // creates variable to manipulate the string
        const glue = data.init.split(' ').join('');
        // essentially I used this to create camelCase, it will make my function names long, but I think my code will be less dry
        const functionName = glue.toLowerCase().charAt(0) + glue.substring(1);
        console.log(functionName);

        callIt(functionName);


    });

function callIt(functionName) {
    for (i = 0; i < functionList.length; i++)
        if (functionName === functionList[i].string) {
            return functionList[i].call();
        };
};

function viewAllDepartments() {
    console.log("you hit view all departments")

};

function viewAllRoles() {
    console.log("view all roles")

};
function viewAllEmployees() {
    console.log("view all emps")

};

function addEmployee() {
    console.log("add employee")

};
function addDeparment() {
    console.log("add department")

};
function addRole() {
    console.log("add role")

};
function updateEmployeeRole() {
    console.log("update emp role")

};

// THIS IS BONUS TERRITORY
function updateManager() {
    console.log("update man")

};
function deleteDepartment() {
    console.log("del dept")

};
function deleteRole() {
    console.log("del role")

};
function deleteEmployee() {
    console.log("del emp")

};
function viewEmployeesByManager() {
    console.log("view all emps by man")

};
function viewDepartmenBudget() {
    console.log("view dept budget")

};
