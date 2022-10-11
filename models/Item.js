const { Model, DataTypes} = require('sequelize');

const sequelize = require('../config/connection');

class Item extends Model {}

Item.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            validate: {
                len: [1]
            }
        },
        description: {
            type: DataTypes.STRING,
            validate: {
                len: [1]
            }
        },
        giver_id: {
            type: DataTypes.INTEGER,
            references: {
            model: 'givers',
            key: 'id'
                     }
        },
        
    },
    {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'Item'      
    }
)

module.exports = Post

