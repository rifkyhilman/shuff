const express = require("express");
const path = require("path");
const app = express();
const flash = require('req-flash');

// Definisi lokasi file router
const appRoutes = require('./src/routes/router-app');
const loginRoutes = require('./routes/router-login');
const registerRoutes = require('./src/routes/router-register');

// set tempalate engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"))

app.use(express.static('public'))
app.use(express.urlencoded({extended: true}));
app.use(express.json());

// Configurasi library session
app.use(session({
  resave: false,
  saveUninitialized: false,
  secret: 't@1k0ch3ng',
  name: 'secretName',
  cookie: {
      sameSite: true,
      maxAge: 60000
  },
}))
app.use(flash());

// route prefix
app.use('/', appRoutes);
app.use('/login', loginRoutes);
app.use('/register', registerRoutes);

app.listen(4000, () => {
    console.log(`server is runing at port : 4000`)
  });