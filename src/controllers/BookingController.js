const { connection } = require('../configs/db');

const BookingController = {

    addOrder: (req,res)=> {

        const username = req.session.user  
        const date_booking = new Date().toLocaleString().split(',')[0];

        console.log(date_booking)

        //mengambil data dari form
        const eventName = req.body.eventName;
        const date_event = req.body.date;
        const package = req.body.package;
        const status = null
        const payment = 400.000


        //memasukan data kedalam database tabel user
        connection.query(
            `INSERT INTO booking (username, date_booking, date_event, package_booking, payment_1, payment_2, paid_off, status, event_name) VALUES('${username}','${date_booking}','${date_event}','${package}', '${payment}', '${payment}', '${status}', '${status}', '${eventName}')`,(err,result)=>{
                if(err)throw err //jika error maka akan mengembalikan error
                res.redirect('/') //jika berhasil akan di alihkan kehalaman login
            }
        )
    },
    getBookingbyId: (req, res, cb) => {
        const username = req.session.user

        //memasukan data kedalam database tabel user
        return connection.query(
            `SELECT * FROM booking WHERE username = '${username}'`, (err,result)=>{
                if(err) throw err //jika error maka akan mengembalikan error
                return cb(result)
            }
        )
    }
}

module.exports = {BookingController}