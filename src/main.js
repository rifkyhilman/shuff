const express = require("express");
const multer = require("multer");
const path = require("path");
const app = express();
const session = require("express-session");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, '../public/uploads/'))
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname)
  }
})

const upload = multer({ storage: storage })

const { ViewController } = require('./controllers/ViewController');
const { UserController } = require('./controllers/UserController');
const { ContactController } = require('./controllers/ContactController');
const { BookingController } = require('./controllers/BookingController');
const { authMiddleware } = require("./ authMiddleware");

// set tempalate engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"))

app.locals.baseURL = "http://localhost:4000"

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static('public'))


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
app.get('/admin',authMiddleware.authAdmin,ViewController.adminPage);
app.get('/login',authMiddleware.authLogin, ViewController.loginPage);
app.get('/register',authMiddleware.authLogin, ViewController.registerPage);
app.get('/booking/:booking',authMiddleware.authUser, ViewController.bookingPage);
app.get('/history',authMiddleware.authUser, ViewController.historyPage);
app.get('/order',authMiddleware.authUser, ViewController.oderPage);
app.get('/checkout/:id',authMiddleware.authUser, ViewController.checkoutPage);
app.get('/about',ViewController.aboutPage);
app.get('/contact',ViewController.contactPage);
app.get('/portofolio',ViewController.portofolioPage);
app.get('/blog',ViewController.blogPage);
app.get('/blog-detail/:id',ViewController.blog01Page);


//route controller
app.get('/getBookingEvent', authMiddleware.authUser, BookingController.getBookingDate);
app.post('/login',authMiddleware.authLogin,UserController.login);
app.post('/register',authMiddleware.authLogin,UserController.register);
app.post('/booking',authMiddleware.authUser, BookingController.addOrder);
app.post('/deleteBooking', authMiddleware.authUser, BookingController.deleteBookingbyId);
app.post('/updateStatus', authMiddleware.authUser, BookingController.updateStatus);
app.post('/updateOrder', upload.single('uploaded_file'),authMiddleware.authUser, BookingController.updateOrder)
app.post('/sendMessage',ContactController.postMessage );
app.get('/logout',UserController.logout);

app.listen(4000, () => {
    console.log(`server is runing at port : 4000`)
  });