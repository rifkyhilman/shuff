const { BokkingController, BookingController } = require('./BookingController');

const ViewController = {

    homePage: (req,res)=>{
        res.render('home', 
            { 
                isLogin: req.session.login, 
                username: req.session.user  
            })
    },
    loginPage: (req,res)=>{
        res.render('login', { isLogin: req.session.login })
    },
    registerPage: (req,res)=>{
        res.render('register', { isLogin: req.session.login })
    },
    bookingPage: (req,res)=>{
        res.render('booking', { isLogin: req.session.login, username: req.session.user})
    },
    historyPage: (req,res)=>{
        BookingController.getBookingbyId(req, res, data => {        
            res.render('history', { isLogin: req.session.login, username: req.session.user, data})
        });
        
    },
}

module.exports = {ViewController}