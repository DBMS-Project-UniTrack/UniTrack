const User = require("../models").Login_user; //table
const bcrypt = require("bcryptjs");
const jwt =require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();
const path = require('path');
const { check, validationResult } = require('express-validator');

//new
var createError = require('http-errors');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var expressValidator = require('express-validator');
var flash = require('express-flash');
var session = require('express-session');
const bodyParser = require('body-parser');
const { resolve } = require("path");
const { rejects } = require("assert");


//Post request for handling signup
const signupUser = (req, res) => {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
        console.log('Fill empty fields');
    }
    const user = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    }
    //Validation
    User.findOne({ where: { email: req.body.email } }).then((user) => {
        if (user) {
            res.render('signup', {
                message: "Email is already in use!"
              });
            res.render('signup');
            // console.log("Email has been taken.");
            // res.render( "signup", {
            //     name,
            //     email,
            //     password,
            // }); //use res.redirect( status, url)?
        } else {
            //Validation
            const newUser = new User({
                name,
                email,
                password,
            });
            //Password Hashing
            bcrypt.genSalt(10, (err, salt) => 
            bcrypt.hash(newUser.password, salt, (err, hash) => {
                if (err) throw err;

                newUser.password = hash;
                newUser.save()
                .then(res.render('login'))
                .catch((err) => console.log(err));
            }));
        }
    })
}

function returnuser(req) {
    return new Promise((resolve, reject) => {
        if(User.findOne({ where: {email: req.body.email }})){
            resolve(User.findOne({ where: {email: req.body.email }}));
        } else {
            console.log('in rejected');
            reject('rejected');
        }
    })
}

async function loginUser (req, res, next) {

    try {
        const userfound = await returnuser(req);

        console.log('user found is: ');
        console.log(userfound);

        if(userfound != null){
            console.log('inside userfound!=rejected');
            req.user = userfound;
            next();
        } else {
            //res.status(404).json({ error: "User does not exist"});
            res.render('login', {message: 'User does not exist'})
        }
        
    } catch(error) {
        console.log(error);
    }
       
}

const checkpw = (req, res) => {
    console.log('inside chechpw');
    console.log(req.user);
    console.log(req.body.password);
    console.log(req.user.password);
    const isPwValid = bcrypt.compareSync(req.body.password, req.user.password);
    if (isPwValid) {
        console.log('pw is valid');
        // const token = jwt.sign({ "id": user.id, "email": user.email, "name": user.name}, process.env.JWT_SECRET_KEY);
        //new
        req.session.loggedin = true;
        req.session.email = req.user.email;
        res.redirect('/users/home');
        //res.status(200).json({message: "Welcome back", token: token})
        
    } else {
        console.log('incorrect pw');
        //res.status(400).json({ error: "Password Incorrect"})
        res.render('login', {message: 'Incorrect Password'})
    }
}


//logout 
const logout = function (req, res) {
    if (!req.session) {
            req.session.destroy(function(err){
            if(!err) {
                res.redirect('/');
            }
        })
    }
    else {
        res.redirect('/');
      }
    //req.flash('success', 'Login Again Here');
    //res.redirect('/login.html');
  }

//get home function
const getHome = function (req, res) {
    let user =  User.findOne({ where: { email: req.session.email }, attributes: { exclude: ["password"] } });
    if (user === null) {
        res.status(404).json({ 'msg': "User not found" });
     }
    // res.status(200).json(user);
    //new
    if (req.session.loggedin) {
         
        res.render('home');
        console.log(user.email);
 
    } else {
 
        //req.flash('success', 'Please login first!');
        res.send('Login First');
        res.render('login');
    }
}

//display home page
 const displayHome =  function(req, res) {
     res.render('home')
 }

 // For sign up page
const signupView = (req, res) => {
    res.render('signup');
}

// For log in page
const loginView = (req, res) => {
    res.render('login');
}

module.exports = { loginUser, signupUser, signupView, loginView, logout, getHome, displayHome, checkpw}


//     if (req.session.loggedin) {
         
//         res.render('/home.html', {
//             title:"Dashboard",
//             name: req.session.name,     
//         });
 
//     } else {
 
//         req.flash('success', 'Please login first!');
//         res.redirect('/login.html');
//     }
// };


