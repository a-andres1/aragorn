const Department = require('./department');
const Employee = require('./employee');
const Role = require('./role');

Department.hasMany(Employee, {
    foreignKey: 'department_id'
});

Department.hasMany(Role, {
    foreignKey: 'department_id'
});

Role.hasMany(Employee,{
    foreignKey: 'role_id'
});

Employee.belongsTo(Role,{
    foreignKey: 'role_id'
});

module.exports = { Department, Role, Employee }