const router = require('express').Router();
const { Post, Item, Giver } = require('../../models/');
const withAuth = require('../../utils/auth');

router.get('/', (req, res) => {
    try{
        const findAllPosts = Post.findAll({
            include: [
                {
                    model: Item,
                    attributes: ['name', 'description', 'giver_id']
                },
                {
                    model: Giver,
                    attributes: ['id', 'username']
                }
            ]
        })
    }
})
