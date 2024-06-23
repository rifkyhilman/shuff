const ViewController = {

    homePage: (req,res)=>{
        res.render('home')
    },

    loginPage: (req,res)=>{
        res.render('login')
    },

    registerPage: (req,res)=>{
        res.render('register')
    },

}

module.exports = {ViewController}