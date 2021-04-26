const sequelize = require('../config/connection');

const Department = require('../models/department');
const Role = require('../models/role');
const Employee = require('../models/employee');

const departmentSeedData = require('./departmentSeeds.json');
const roleSeedData = require('./roleSeeds.json');
const employeeSeedData = require('./employeeSeeds.json');

// TODO Use async / await to Refactor the seedDatabase function below
const seedDatabase = () => {
  return sequelize.sync({ force: true }).then(() => {
    Department.bulkCreate(departmentSeedData).then(() => {
      Employee.bulkCreate(employeeSeedData).then(() => {
        Role.bulkCreate(roleSeedData).then(() => {
          console.log('All Seeds Planted');
        });
      });
    });
  })





  process.exit(0);
};

seedDatabase();