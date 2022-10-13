// const router = require('express').Router();
// const { Taker } = require('../../models/Taker');
// const bcrypt = require('bcrypt');


// // SHOULD THIS BE HERE SINCE IT'S ALREADY IN GIVERROUTE.JS?
// router.post('/', async (req, res) => {
//     try {
//         const newUser = Taker.create({
//             username: req.body.username,
//             password: req.body.password
//         })
//         console.log(username);
//         console.log(password);

//         req.session.save(() => {
//             req.session.user_id = newUser.id;
//             req.session.username = newUser.username;
//             req.session.logged_in = true;

//             res.json(newUser);
//         })
//     } catch (err) {
//         res.status(400).json(err);
//     }
// });

// // Login route that will use bcrypt to compare hashed password to input password
// router.post('/login', async (req, res) => {
//     try {
//       const userData = await Taker.findOne({ where: { email: req.body.email } });
//       if (!userData) {
//         res.status(404).json({ message: 'Login failed. Please try again!' });
//         return;
//       }
  
//       const validPassword = await bcrypt.compare(
//         req.body.password,
//         userData.password
//       );
//       if (!validPassword) {
//         res.status(400).json({ message: 'Login failed. Please try again!' });
//         return;
//       }
//       res.status(200).json({ message: 'You are now logged in!' });
//     } catch (err) {
//       res.status(500).json(err);
//     }
//   });

// module.exports = router;