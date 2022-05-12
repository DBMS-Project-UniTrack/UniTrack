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



