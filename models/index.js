const Taker = require('./Taker');
const Giver = require('./Giver');
const Post = require('./Post');
const Item = require('./Item');
const Image = require('./Image');


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
    foreignKey: 'item_id',
    onDelete: 'SET NULL'
})
Item.belongsTo(Post,{
    foreignKey: 'item_id',
    onDelete: 'SET NULL'
})
Item.hasOne(Image,{
    foreignKey: 'item_id',
    onDelete:'CASCADE'
})
Image.belongsTo(Item,{
    foreignKey: 'item_id',
    onDelete:'CASCADE'
})


module.exports = {
    Taker,
    Giver,
    Post,
    Item,
    Image
};