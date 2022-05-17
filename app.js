//Create Express server
const express = require('express');
const app = express();
const mysql = require('mysql2');
const dotenv = require('dotenv');
const path = require('path');
const port = process.env.PORT || 5001

//new
var createError = require('http-errors');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var expressValidator = require('express-validator');
var flash = require('express-flash');
var session = require('express-session');
const bodyParser = require('body-parser');
const MySQLStore = require("express-mysql-session")(session);
const hbs = require('hbs');

app.use(bodyParser.json());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
//This built-in express middleware gives us the ability to process posted data and store it in the req.body
app.use(express.urlencoded( {extended: false}));

dotenv.config({ path: './.env'});

//Creating connection object to connect to database
const db = mysql.createConnection({
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  port: 3308,
  database: process.env.DATABASE
});

//Establishing connection
db.connect( (err) => {
if(err) {
    console.log(err);
} else {
    console.log("MySQL Connected...");
}
})

const dbase = require("./models");
dbase.sequelize.sync();

let sessionStore = new MySQLStore({
  expiration: 10800000,
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  port: 3308,
  database: process.env.DATABASE,
  createDatabaseTable: true,
  schema: {
    tableName: 'session1',
    columnNames: {
      session_id: 'session_id',
      expires: 'expires',
      data: 'data'
    }
  }
})

//new
app.use(session({ 
  key: 'keyin',
  secret: '123456cat',
  store: sessionStore,
  resave: false,
  saveUninitialized: true
  //cookie: { maxAge: 60000 }
}))

app.use(flash());
const { check, validationResult } = require('express-validator');



app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.use(express.static(path.join(__dirname, 'public')));


//Requests from /users will be routed to user.js (same as auth.js)
const userRoute = require('./routes/users.js');
app.use('/users', userRoute);

//Requests from /dashboard
const dashboardRoute = require('./routes/dashboard.js');
app.use('/dashboard', dashboardRoute);


//Get requests will render the html pages
app.get('/', (req, res) => {
  console.log(__dirname);
    res.render('index');
})

app.get('/login.hbs', (req, res) => {
  res.render('login');
})

app.get('/signup.hbs', (req, res) => {
  res.render('signup');
})
app.get('/index.hbs', (req, res) => {
  let notloggedin = true;
  if(req.session.loggedin){
    notloggedin = false;
    res.render('index', {notloggedin});
  }
  else {
    notloggedin = true;
    res.render('index', {notloggedin});
  }
  
})
app.get('/about.hbs', (req, res) => {
  let notloggedin = true;
  if(req.session.loggedin){
    notloggedin = false;
    res.render('about', {notloggedin});
  }
  else {
    notloggedin = true;
    res.render('about', {notloggedin});
  }
})
app.get('/contactUs.hbs', (req, res) => {
  let notloggedin = true;
  if(req.session.loggedin){
    notloggedin = false;
    res.render('contactUs', {notloggedin});
  }
  else {
    notloggedin = true;
    res.render('contactUs', {notloggedin});
  }
})
app.get('/roadmaps.hbs', (req, res) => {
  let notloggedin = true;
  if(req.session.loggedin){
    notloggedin = false;
    res.render('roadmaps', {notloggedin});
  }
  else {
    notloggedin = true;
    res.render('roadmaps', {notloggedin});
  }
})
app.get('/appDevelopment.hbs', (req, res) => {
  let notloggedin = true;
  if(req.session.loggedin){
    notloggedin = false;
    res.render('appDevelopment', {notloggedin});
  }
  else {
    notloggedin = true;
    res.render('appDevelopment', {notloggedin});
  }
})
app.get('/webDevelopment.hbs', (req, res) => {
  let notloggedin = true;
  if(req.session.loggedin){
    notloggedin = false;
    res.render('webDevelopment', {notloggedin});
  }
  else {
    notloggedin = true;
    res.render('webDevelopment', {notloggedin});
  }
})
app.get('/cloudComputing.hbs', (req, res) => {
  let notloggedin = true;
  if(req.session.loggedin){
    notloggedin = false;
    res.render('cloudComputing', {notloggedin});
  }
  else {
    notloggedin = true;
    res.render('cloudComputing', {notloggedin});
  }
})
app.get('/competitiveProgramming.hbs', (req, res) => {
  let notloggedin = true;
  if(req.session.loggedin){
    notloggedin = false;
    res.render('competitiveProgramming', {notloggedin});
  }
  else {
    notloggedin = true;
    res.render('competitiveProgramming', {notloggedin});
  }
})
app.get('/machineLearning.hbs', (req, res) => {
  let notloggedin = true;
  if(req.session.loggedin){
    notloggedin = false;
    res.render('machineLearning', {notloggedin});
  }
  else {
    notloggedin = true;
    res.render('machineLearning', {notloggedin});
  }
})

app.get('/profile.hbs', (req, res) => {
  res.render('profile');
})


//Server listening on port 5001
var server =  app.listen(port, () => {
  console.log('server is listening on port 5001');
})

server.setTimeout(500000);

module.exports = app;