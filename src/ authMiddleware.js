const authMiddleware = {

    authLogin: (req,res,next)=>{

        if(req.session.login == true){
            return res.redirect('/')
        }
            return next();
    }, 
    authUser: (req,res,next)=>{
        if(req.session.login !== true){
            return res.redirect('/login')
        }
            return next();
    },
    authAdmin: (req,res,next)=>{
        if(req.session.login !== true){
            return res.redirect('/login')
        }else if(req.session.user !== "admin"){
            return res.redirect('/')
        }
            return next();
    }
}


module.exports = {authMiddleware}