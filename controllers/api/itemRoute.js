const router = require('express').Router();
const { Item } = require('../../models/Item');

// GET ITEM
router.get('/', async (req, res) => {
  console.log('Hello');
  try {
      const findAll = await Item.findAll()
      console.log("Test");
      console.log(findAll);
      res.status(200).json(findAll);
  } catch (err) {
      console.log(err)
      res.status(500).json(err)
  }
})

// POST ALL ITEMS
router.post('/', async (req, res) => {
  try {
    console.log("Hello Item"); 
    const newItem = await Item.create({
          name: req.body.name,
          // add image here!(:
          description: req.body.description,
          giver_id: req.body.giver_id,
      })
      console.log("Created Item");
      console.log(req.body.giver_id);

      res.status(200).json(newItem);
  } catch (err) {
      res.status(400).json(err);
  }
});

// POST ONE ITEM


// DELETE ITEM
//Delete a item
router.delete("/:id", (req, res) => {
  Item.destroy({
          where: {
              id: req.params.id,
          },
      })
      .then((itemData) => {
          if (!itemData) {
              res.status(404).json({
                  message: "No post found with this id"
              });
              return;
          }
          res.json(itemData);
      })
      .catch((err) => {
          console.log(err);
          res.status(500).json(err);
      });
});

module.exports = router;