const { Model, DataTypes} = require('sequelize');
const bcrypt = require("bcrypt");
const sequelize = require('../config/connection');

class Giver extends Model {
    checkPassword(loginPassword) {
        return bcrypt.compareSync(loginPassword, this.password)
    }
}

Giver.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [4]
            }
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isEmail: true
            }
        },
    },
    {
        hooks: {
            beforeCreate: async(newUserData) => {
                //newUserData.username = newUserData.username.toLowerCase()
                newUserData.password = await bcrypt.hash(newUserData.password, 10);
                return newUserData;
            }, 
            beforeUpdate: async(updatedUserData) => {
                updatedUserData.password = await bcrypt.hash(updatedUserData.password, 10);
                return updatedUserData
            }
        }, 
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true, 
        modelName: 'givers'       
    }
)

module.exports = Giver;