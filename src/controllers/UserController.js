const bcrypt = require('bcrypt');
const { connection } = require('../configs/db');

const UserController = {
    register: async (req,res)=>{
        const fullname = req.body.fullname;
        const username = req.body.username;
        const phone = req.body.phone;
        const address = req.body.address;
        const password = req.body.password;
        const hashPassword = await bcrypt.hash(password,10);

        connection.query(
            `INSERT INTO users (fullName, username, phone_number, address, password) VALUES('${fullname}','${username}','${phone}','${address}','${hashPassword}')`,(err,result)=>{
                if(err)throw err 
                res.redirect('/login')
            }
        )
    },
    login: (req,res)=>{
        const username = req.body.username;
        const password = req.body.password;

        connection.query(
            `SELECT username, password From users WHERE username = '${username}'`, async (err,result)=>{
                if(err) throw res.send(err)  

                if(result.length > 0){
                    const hashPass = result[0].password;
                    const verifyPass = await bcrypt.compare(password, hashPass);
                    if(verifyPass){           
                        req.session.user = username;    
                        req.session.login = true;
                        return res.redirect('/') 
                    }    
            } return res.redirect('/login') 
        })
    },
    logout: (req,res)=>{
        req.session.destroy((err)=>{
            if(err) console.log(err);
            res.redirect('/login')
        });

    }
}

module.exports = {UserController}