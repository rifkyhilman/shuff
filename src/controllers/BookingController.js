const { connection } = require('../configs/db');

const BookingController = {

    addOrder: (req,res)=> {

        //mengambil data dari form
        const eventName = req.body.eventName;
        const date = req.body.date;
        const addres = req.body.address;
        const package = req.body.package;


        //memasukan data kedalam database tabel user
        connection.query(
            `INSERT INTO booking (event, date, address, package) VALUES('${eventName}','${date}','${addres}','${package}')`,(err,result)=>{
                if(err)throw err //jika error maka akan mengembalikan error
                res.redirect('/') //jika berhasil akan di alihkan kehalaman login
            }
        )
    },
}

module.exports = {BookingController}