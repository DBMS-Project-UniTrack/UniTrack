const express = require('express');
const router = express.Router();
const User = require("../models").Login_user; //table

const loginController = require('../controllers/loginController');

router.get('/signup', loginController.signupView);
router.get('/login', loginController.loginView);

router.post('/signup', loginController.signupUser);
router.post('/login', loginController.loginUser, loginController.checkpw);

router.get('/home',  loginController.getHome, loginController.getDashboardHome );

// Logout user
router.get('/logout', loginController.logout);

module.exports = router;

//for accessing home page or profile page
// router.get('/home', validateToken, async (req, res, next) => {
//     let user = await User.findOne({ where: { id: req.user.id }, attributes: { exclude: ["password"] } });
//     if (user === null) {
//         res.status(404).json({ 'msg': "User not found" });
//     }
//     res.status(200).json(user);
//     //new
//     if (req.session.loggedin) {
         
//         res.redirect('/home.html', {
//             title:"Dashboard",
//             name: req.session.name,     
//         });
 
//     } else {
 
//         req.flash('success', 'Please login first!');
//         res.redirect('/login.html');
//     }
// }
// );

//Function validateToken, which is middleware, used to verify user before fetching user specific dets
// async function validateToken(req, res, next) {
//     //get token from request header
//     try {
//         let token = req.headers['authorization'].split(" ")[1];
//         let decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
//         req.user = decoded;
//         next();
//     } catch (err) {
//         res.status(403).send("Token invalid")
//     }
// }


