const express = require("express");
const path = require("path");
const app = express();
const bodyParser = require('body-parser');
const session = require("express-session");

const { ViewController } = require('./controllers/ViewController');
const { UserController } = require('./controllers/UserController');
const { BookingController } = require('./controllers/BookingController');
const { authMiddleware } = require("./ authMiddleware");

// set tempalate engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"))

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static('public'))
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use(session({
  secret: "SECRET-KEY",
  resave: false,
  saveUninitialized: true
}))

app.use(function(req, res, next) {
  res.setHeader('Cache-Control', 'no-cache, private, no-store, must-revalidate, max-stale=0, post-check=0, pre-check=0');
  res.setHeader('Pragma', 'no-cache');
  next();
});

// route prefix view
app.get('/',ViewController.homePage);
app.get('/login',authMiddleware.authLogin,ViewController.loginPage);
app.get('/register',authMiddleware.authLogin,ViewController.registerPage);
app.get('/booking',authMiddleware.authUser,ViewController.bookingPage);

//route controller
app.post('/login',authMiddleware.authLogin,UserController.login);
app.post('/register',authMiddleware.authLogin,UserController.register);
app.post('/booking',BookingController.addOrder);
app.get('/logout',UserController.logout);

app.listen(4000, () => {
    console.log(`server is runing at port : 4000`)
  });