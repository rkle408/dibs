const { Model, DataTypes} = require('sequelize');

const sequelize = require('../config/connection');

class Post extends Model {}

Post.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        giver_id: {
            type: DataTypes.INTEGER,
            references: {
            model: 'givers',
            key: 'id'
                     }
        },
        item_id: {
            type: DataTypes.INTEGER,
            references: {
            model: 'item',
            key: 'id'
                     }
        }
    },
    {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'Post'     
    }
)

module.exports = Post

