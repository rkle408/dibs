const sequelize = require('../config/connection');
const Giver = require('../models/Giver');

test('Checks for null values', async () => {
    const user1 = {};
  
    const user2 = {
      username: 'test',
      email: 'test@gmail.com',
      password: 'longpassword',
    };
  
    const newUser1 = Giver.build(user1);
    const newUser2 = Giver.build(user2);
  
    await expect(newUser1.validate()).rejects.toThrow('notNull');
    await expect(newUser2.validate()).resolves.not.toThrow();
  });

test('Checks for short passwords', async () => {
    const user1 = {
        username: 'test',
        email: 'test@gmail.com',
        password: '123',
      };
    
      const user2 = {
        username: 'test',
        email: 'test@test.com',
        password: 'password123',
      };
    
      const newUser1 = Giver.build(user1);
      const newUser2 = Giver.build(user2);
    
      await expect(newUser1.validate()).rejects.toThrow(
        'Validation len on password failed'
      );
      await expect(newUser2.validate()).resolves.not.toThrow();
});