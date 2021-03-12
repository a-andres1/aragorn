// adds sequelize
const{Model, DataTypes, INTEGER } = require('sequelize');
// gets the connection to the database
const sequelize = require('../config/connection')

class Department extends Model {}

Department.init(
    {
       department_id: {
           type: DataTypes.INTEGER, 
           primaryKey: true,
           allowNull: false
       },
       department_name: {
           type: DataTypes.STRING(30),
            allowNull: false
       }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'department',
    }
);

module.exports = Department;