const inquirer = require("inquirer");
const orm = require("./config/orm.js");
//  roleArr, employeeArr;

function init() {
    deptArr = ['Sales', 'Marketing', 'HR'];
    // orm.loadDept()
    // console.log(deptArr);
    
    inquirer.prompt([
        {
            type: "list",
            message: "What would you like to do?",
            choices: [
                "View Departments",
                "View Roles",
                "View Employees",                
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
            init();
        }
        else if(choice == "View Employees") {
            orm.viewEmp();
            init();
        }
        else if(choice == "View Roles") {
            orm.viewRoles();
            init();
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
        else if (choice === "EXIT"){
            process.exit();
        }
    })
};

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
        init();
    })
    
};

// update employee
function updateEmp(){
    // this will need another list like in departments
}


// initialize app
init()




// function to add employees
function askEmp() {
    console.log("add employee")
    inquirer.prompt([
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
            message: "What is the employee's role id?"
        }
    ]).then(res => {
        
        // passes the data to the orm file to make the server call and add the data
        orm.addEmp(res.fname, res.lname, res.role)
        init();
    })
        
    
};

// function to add departments
function askDept() {
    inquirer.prompt([
        {
            name: "name",
            type: "input",
            message: "What is the department name?"
        }
    ]).then (res => {
        // passes the data to the orm file to make the server call and add the data
        orm.addDept(res.name);
        init();
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
        
    });
};



