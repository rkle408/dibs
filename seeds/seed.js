const sequelize = require('../config/connection');
const { Giver, Taker, Post, Item } = require('../models');

const giverData = require('./giverData.json');
const takerData = require('./takerData.json');
const postData = require('./postData.json');
const itemData = require('./itemData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  // bul creates giver constant
  const giver = await Giver.bulkCreate(giverData, {
    individualHooks: true,
    returning: true,
  });

  // assigns giver id
  for (const Post of postData) {
    await Post.create({
      ...post,
      giver_id: giver[Math.floor(Math.random() * giver.length)].id,
    });
  }

  // bulk create item constant

  
  // assign item id

  // bulk create post

  // reference giver id and item id

  process.exit(0);
};

seedDatabase();