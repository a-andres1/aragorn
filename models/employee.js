// adds sequelize
const{Model, DataTypes, INTEGER } = require('sequelize');
// gets the connection to the database
const sequelize = require('../config/connection')


class Employee extends Model {}

Employee.init(
    {
        employee_id: {
            type: DataTypes.INTEGER,
            primaryKey: true, 
            allowNull: false
        },
        first_name: {
            type: DataTypes.STRING(30),
            allowNull: false
        },
        last_name: {
            type: DataTypes.STRING(30),
            allowNull: false
        },
        role_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        manager_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'employee',
    }
);

module.exports = Employee;