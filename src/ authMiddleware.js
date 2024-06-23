const authMiddleware = {

    authLogin: (req,res,next)=>{

        if(req.session.login == true){
            return res.redirect('/')
        }
            return next();
    }
}


module.exports = {authMiddleware}