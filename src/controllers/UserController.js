const bcrypt = require('bcrypt');
const { connection } = require('../configs/db');
// const session = require("express-session");

const UserController = {

    register: async (req,res)=>{
        
        //mengambil data dari form
        const fullname = req.body.fullname;
        const username = req.body.username;
        const password = req.body.password
        console.log(password)
        const hashPassword = await bcrypt.hash(password,10); //password akan di hash supaya kata asli tidak terlihat didalam database sehingga lebih aman

        //memasukan data kedalam database tabel user
        connection.query(
            `INSERT INTO users (fullName, username, password) VALUES('${fullname}','${username}','${hashPassword}')`,(err,result)=>{
                if(err)throw err //jika error maka akan mengembalikan error

                res.redirect('/login') //jika berhasil akan di alihkan kehalaman login
            }
        )


    },

    login: (req,res)=>{
        
        //mengambil data dari form login
        const username = req.body.username;
        const password = req.body.password;

        connection.query(
            `SELECT username, password From users WHERE username = '${username}'`, async (err,result)=>{
                if(err) throw res.send(err)

                
                // cek apakah username ada di database atau tidak
                if(result.length > 0){
                    const hashPass = result[0].password;
                    //mencocokan password dari form dengan data password di database
                    const verifyPass = await bcrypt.compare(password, hashPass);
                    if(verifyPass){           
                        req.session.user = username;    
                        req.session.login = true; //session login bernilai true setiap login berhasil
                        return res.redirect('/') //jika benar maka akan di alihkan ke halaman admin
                    }    
            } return res.redirect('/login') //jika salah username / password maka akan di kembalikan ke halaman login
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