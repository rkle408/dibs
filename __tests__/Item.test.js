const sequelize = require('../config/connection');
const Item = require('../models/Item');

test('Checks for null values', async () => {
    const item1 = {};
  
    // We require that name, description be NOT NULL
    const item2 = {
      name: 'apple',
      description: 'red',
    };
  
    const newItem1 = Item.build(item1);
    const newItem2 = Item.build(item2);
  
    await expect(newItem1.validate()).rejects.toThrow('notNull');
    await expect(newItem2.validate()).resolves.not.toThrow();
  });