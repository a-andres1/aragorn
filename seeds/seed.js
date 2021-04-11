const sequelize = require('../config/connection');
const { Department, Employee, Role } = require('../models');

const departmentSeedData = require('./departmentSeeds.json');
const employeeSeedData = require('./employeeSeeds.json');
const roleSeedData = require('./roleSeeds.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await Department.bulkCreate(departmentSeedData);
  await Role.bulkCreate(roleSeedData);
  await Employee.bulkCreate(employeeSeedData);
  


  process.exit(0);
};

seedDatabase();
