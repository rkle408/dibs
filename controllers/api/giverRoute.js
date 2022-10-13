// const router = require('express').Router();
// const { Giver } = require('../../models')

// router.post('/', async (req, res) => {
//     try {
//         const newUser = Giver.create({
//             username: req.body.username,
//             password: req.body.password
//         })

//         req.session.save(() => {
//             req.session.user_id = newUser.id;
//             req.session.username = newUser.username;
//             req.session.logged_in = true;

//             res.json(newUser);
//         })
//     } catch (err) {
//         res.status(400).json(err);
//     }
// })