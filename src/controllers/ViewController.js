const ViewController = {

    homePage: (req,res)=>{
        res.render('home', 
            { 
                isLogin: req.session.login, 
                username: req.session.user  
            })
    },

    loginPage: (req,res)=>{
        res.render('login', { isLogin: req.session.login, username: req.session.user   })
    },

    registerPage: (req,res)=>{
        res.render('register', { isLogin: req.session.login, username: req.session.user   })
    },

}

module.exports = {ViewController}