const { connection } = require('../configs/db');

const BookingController = {

    addOrder: (req,res)=> {

        const username = req.session.user  
        const date_booking = new Date().toLocaleString().split(',')[0];
        const eventName = req.body.eventName;
        const date_event = req.body.date;
        const package = req.body.package;
        const status = "cancel"
        const payment = 400.000


        connection.query(
            `INSERT INTO booking (username, date_booking, date_event, package_booking, payment_1, payment_2, paid_off, status, event_name) VALUES('${username}','${date_booking}','${date_event}','${package}', '${payment}', '${payment}', '${status}', '${status}', '${eventName}')`,(err,result)=>{
                if(err)throw err
                res.redirect('/')
            }
        )
    },
    getBookingbyId: (req, res, cb) => {
        const username = req.session.user

        return connection.query(
            `SELECT * FROM booking WHERE username = '${username}'`, (err,result)=>{
                if(err) throw err
                return cb(result)
            }
        )
    }
}

module.exports = {BookingController}