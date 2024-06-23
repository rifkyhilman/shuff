const express = require("express");
const path = require("path");
const app = express();
const bodyParser = require('body-parser');

const { ViewController } = require('./controllers/ViewController');
const { UserController } = require('./controllers/UserController');
// set tempalate engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"))

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static('public'))
app.use(express.urlencoded({extended: true}));
app.use(express.json());


// route prefix
// app.use("/", require("./routes"));
app.get('/',ViewController.homePage);
app.get('/login',ViewController.loginPage);
app.get('/register',ViewController.registerPage);


app.post('/login',UserController.login);
app.post('/register',UserController.register);
app.get('/logout',UserController.logout);

app.listen(4000, () => {
    console.log(`server is runing at port : 4000`)
  });