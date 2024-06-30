const { BookingController } = require('./BookingController');

const ViewController = {

    homePage: (req,res)=>{
        res.render('home', 
            { 
                isLogin: req.session.login, 
                username: req.session.user  
            })
    },
    adminPage: (req, res) => {
        BookingController.getBooking(req, res, data => {        
            res.render('admin', { isLogin: req.session.login, username: req.session.user, data})
        });
    },
    loginPage: (req,res)=>{
        res.render('login', { isLogin: req.session.login })
    },
    registerPage: (req,res)=>{
        res.render('register', { isLogin: req.session.login })
    },
    bookingPage: (req,res)=>{
        res.render('booking', { isLogin: req.session.login, username: req.session.user, booking: req.params.booking})
    },
    historyPage: (req,res)=>{
        BookingController.getBookingHistory(req, res, data => {        
            res.render('history', { isLogin: req.session.login, username: req.session.user, data})
        });
    },
    oderPage: (req, res) => {
        BookingController.getBookingbyUser(req, res, data => {        
            res.render('order', { isLogin: req.session.login, username: req.session.user, data})
        });
    },
    checkoutPage: (req, res) => {
        BookingController.getBookingById(req, res, data => {
            res.render('checkout',
                { 
                    isLogin: req.session.login, 
                    username: req.session.user ,
                    data 
                });
        })
    },
    aboutPage: (req, res) => {
        res.render('about',
            { 
                isLogin: req.session.login, 
                username: req.session.user  
            });
    },
    contactPage: (req, res) => {
        res.render('contact',
            { 
                isLogin: req.session.login, 
                username: req.session.user,
                message: ''
            });
    },
    portofolioPage: (req, res) => {
        res.render('portofolio',
            { 
                isLogin: req.session.login, 
                username: req.session.user  
            });
    },
    blogPage: (req, res) => {
        res.render('blog',
            { 
                isLogin: req.session.login, 
                username: req.session.user  
            });
    },
    blog01Page: (req, res) => {
        const id = req.params.id

        res.render('detailBlog/blog0'+id,
            { 
                isLogin: req.session.login, 
                username: req.session.user  
            });
    },
}

module.exports = {ViewController}