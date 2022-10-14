const { Model, DataTypes} = require('sequelize');

const sequelize = require('../config/connection');

class Image extends Model {}

Image.init(
    {
        type: {
            type: DataTypes.STRING,
          },
          name: {
            type: DataTypes.STRING,
          },
          img_url: {
            type: DataTypes.STRING,
          },
          item_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'Item',
                key: 'id'
                         }
          }
        },
  
    {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'Image'      
    }
)

module.exports = Image;


 