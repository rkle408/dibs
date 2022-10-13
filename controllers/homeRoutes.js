const router = require('express').Router();
const { Giver, Taker, Post, Item } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', withAuth, async (req, res) => {
  try {
    // Get all posts and JOIN with item and giver data
    const postData = await Post.findAll({
      include: [
        {
          model: Giver,
          attributes: ['username'],
        },
        {
          model: Item,
          attributes: ['name', 'description']
        }
      ],
    });

    // Serialize data so the template can read it
    const posts = postData.map((post) => post.get({ plain: true }));

    // Pass serialized data and session flag into template
    res.render('homepage', { 
      posts, 
      logged_in: req.session.logged_in 
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// GETTING LOGIN PAGE
router.get('/login', (req, res) => {
  // If the giver is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/homepage');
    return;
  }

  res.render('loginpage');
});

// GETTING SIGNUP PAGE
router.get('/signup', (req, res) => {
  if(req.session.logged_in) {
      res.redirect('/dashboard');
      return;
  } else {
      res.render('signup');
  }
})

// router.get('/profile', withAuth, async (req, res) => {
//   try {
//     // Find the logged in giver based on the session ID
//     const giverData = await Giver.findByPk(req.session.giver_id, {
//       attributes: { exclude: ['password'] },
//       include: [{ model: Post }],
//     });

//     const giver = giverData.get({ plain: true });

//     res.render('profile', {
//       ...giver,
//       logged_in: true
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });



module.exports = router;
