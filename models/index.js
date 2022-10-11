const Taker = require('./Taker');
const Giver = require('./Giver');
const Post = require('./Post');
const Item = require('./Item');


Giver.hasMany(Post, {
    foreignKey: 'giver_id',
    onDelete: 'CASCADE'
})

Post.belongsTo(Giver, {
    foreignKey: 'giver_id'
})

Giver.hasMany(Item, {
    foreignKey: 'giver_id',
    onDelete: 'CASCADE'
})

Item.belongsTo(Giver, {
    foreignKey: 'giver_id'
})
Post.hasOne(Item,{
    foreignKey: 'item_id'
})
Item.belongsTo(Post,{
    foreignKey: 'item_id'
})



module.exports = {
    Taker,
    Giver,
    Post,
    Item
};