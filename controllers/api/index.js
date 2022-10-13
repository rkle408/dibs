const router = require('express').Router();

// const takerRoutes = require('./takerRoute');
const giverRoutes = require('./giverRoute');
// const itemRoutes = require('./itemRoute');
// const postRoutes = require('./postRoute');

// router.use('/taker', takerRoutes);
router.use('/giver', giverRoutes);
// router.use('/item', itemRoutes);
// router.use('/post', postRoutes);


module.exports = router;