//Create Express server
const express = require('express');
const app = express();
const mysql = require('mysql2');
const dotenv = require('dotenv');
const path = require('path');

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

// catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   next(createError(404));
// });

// // error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};
 
//   // render the error page
//   res.status(err.status || 500);
//   res.send('error');
// });

//For using static files like html, css, js
//app.use(express.static(path.join(`${__dirname}/static`)));

//or
//app.use(express.static(__dirname + '/views'));

//new, for using ejs, but for that you need index.ejs etc files, and then you can include html files in it
// app.set("view options", {layout: false});
// app.engine('.html', require('ejs').renderFile);

//app.use('/views', express.static('views'));
//app.engine('hbs', hbs.engine);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.use(express.static(path.join(__dirname, 'public')));


//Requests from /users will be routed to user.js (same as auth.js)
const userRoute = require('./routes/users.js');
app.use('/users', userRoute);

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
  res.render('index');
})
app.get('/home.hbs', (req, res) => {
  res.render('home');
})
app.get('/about.hbs', (req, res) => {
  res.render('about');
})
app.get('/index.hbs', (req, res) => {
  res.render('index');
})
app.get('/contactUs.hbs', (req, res) => {
  res.render('contactUs');
})
app.get('/roadmaps.hbs', (req, res) => {
  res.render('roadmaps');
})
app.get('/appDevelopment.hbs', (req, res) => {
  res.render('appDevelopment');
})
app.get('/webDevelopment.hbs', (req, res) => {
  res.render('webDevelopment');
})
app.get('/cloudComputing.hbs', (req, res) => {
  res.render('cloudComputing');
})
app.get('/competitiveProgramming.hbs', (req, res) => {
  res.render('competitiveProgramming');
})
app.get('/machineLearning.hbs', (req, res) => {
  res.render('machineLearning');
})
app.get('/semester.hbs', (req, res) => {
  res.render('semester');
})
app.get('/profile.hbs', (req, res) => {
  res.render('profile');
})
app.get('/todo.hbs', (req, res) => {
  res.render('todo');
})

//Server listening on port 5001
app.listen(5001, () => {
  console.log('server is listening on port 5001');
})

module.exports = app;