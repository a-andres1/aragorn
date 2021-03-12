// adds sequelize
const{Model, DataTypes, INTEGER } = require('sequelize');
// gets the connection to the database
const sequelize = require('../config/connection')


class Role extends Model {}

Role.init(
    {
        role_id: {
            type: DataTypes.INTEGER, 
            allowNull: false,
            primaryKey: true,
        }, 
        role_title: {
            type: DataTypes.STRING(30),
            allowNull: false
        },
        role_salary:{
            type: DataTypes.DECIMAL(6,2)
        },
        department_id:{
            type: DataTypes.INTEGER,
            allowNull: false
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'role',
    }
);

module.exports = Role;
