const bcrypt = require('bcrypt');
const { connection } = require('../configs/db');

const UserController = {

    register: async (req,res)=>{
        
        //mengambil data dari form
        const fullname = req.body.fullname;
        const username = req.body.username;
        const password = await bcrypt.hash(req.body.password,10);//password akan di hash supaya kata asli tidak terlihat didalam database sehingga lebih aman


        //memasukan data kedalam database tabel user
        connection.query(
            `INSERT INTO users (fullName, username, password) VALUES('${fullname}','${username}','${password}')`,(err,result)=>{
                if(err)throw err //jika error maka akan mengembalikan error

                console.log("Data berhasil dibuat");
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
                       //mencocokan password dari form dengan data password di database
                       const verifyPass = await bcrypt.compare(password, hashPass);
                       if(verifyPass){
                            console.log("Ada Masalah Broo !!")
                            return res.redirect('/') //jika benar maka akan di alihkan ke halaman admin
                       }    
               } return res.redirect('/login') //jika salah username / password maka akan di kembalikan ke halaman login
           })
    },

    logout: (req,res)=>{
        //logika logout
    }

}

module.exports = {UserController}