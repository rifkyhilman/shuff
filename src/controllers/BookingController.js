const { connection } = require('../configs/db');

const BookingController = {
    updateOrder: (req, res, next) => {
        const img = req.file.filename;
        const id = req.body.id
        const payment_1 = req.body.payment_1
        const username = req.session.user
        const price = req.body.price

        const dp = req.body.dp == "true"

        let sqlQuery =  `UPDATE booking SET `
        
        if(dp){
            sqlQuery += `img_dp='${img}',payment_1='${Number(price) / 2}', paid_off = 'false'`
        } else {
            sqlQuery += `img_fp='${img}',payment_2='${Number(price) - Number(payment_1)}', paid_off = 'true', status = 'ongoing'`
        }
        sqlQuery += ` WHERE id_booking = '${id}' AND username='${username}'`
        
        connection.query(
            sqlQuery,(err,result)=>{
                if(err)console.log(err)
                res.redirect('/order')
            }
        )
    },
    addOrder: (req,res)=> {

        const date = new Date();
        const d = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
        let m = date.getMonth() + 1;
        const y = date.getFullYear();
        if(m < 10) {
            m = "0" + m
        }

        const username = req.session.user  
        const date_booking = d + "-" + m + "-" + y;
        const eventName = req.body.eventName;
        const date_event = req.body.date_event;
        const package = req.body.package;
        const status = "pending"
        const paid_off = false
        const payment = 0
        const image_dp = null
        const image_fp = null
        const price = package === "Big Package" 
        ? 10000000 : package === "Medium Package" ? 5000000 : 2000000

        connection.query(
            `INSERT INTO booking (price, username, date_booking, date_event, package_booking, payment_1, payment_2, paid_off, status, event_name, img_dp, img_fp) 
                        VALUES('${price}', '${username}','${date_booking}','${date_event}','${package}', '${payment}', '${payment}', '${paid_off}', '${status}', '${eventName}', '${image_dp}', '${image_fp}')`,(err,result)=>{
                if(err)console.log(err)
                res.redirect('/order')
            }
        )
    },
    getBooking: (req, res, cb) => {
        return connection.query(
            `SELECT * FROM users AS u JOIN booking as b ON u.username = b.username WHERE status != 'success' AND status != 'cancel'`, (err,result)=>{
                if(err) throw err
                return cb(result)
            }
        )
    },
    getBookingById: (req, res, cb) => {
        let id = req.params?.id;
        let username = req.session?.user;
        return connection.query(
            `SELECT * FROM booking WHERE id_booking='${id}' AND username='${username}'`, (err,result)=>{
                if(err) throw err
                return cb(result)
            }
        )
    },
    getBookingDate: (req, res) => {
        return connection.query(
            `SELECT date_event FROM booking `, (err,result)=>{
                if(err) throw err
                res.json(result)
            }
        )
    },
    getBookingbyUser: (req, res, cb) => {
        const username = req.session.user

        return connection.query(
            `SELECT * FROM booking WHERE username = '${username}' AND (status = 'ongoing' OR status = 'pending') ORDER BY paid_off ASC`, (err,result)=>{
                if(err) throw err
                return cb(result)
            }
        )
    },
    getBookingHistory: (req, res, cb) => {
        const username = req.session.user

        return connection.query(
            `SELECT * FROM booking WHERE username = '${username}' AND (status = 'success' OR status = 'cancel') ORDER BY id_booking DESC `, (err,result)=>{
                if(err) throw err
                return cb(result)
            }
        )
    },
    deleteBookingbyId: (req, res) => {

        const id = req.body.id
        
        connection.query(
            `DELETE FROM booking WHERE id_booking = '${id}'`,(err,result)=>{
                if(err) console.log(err)
                res.json(200)
            }
        )
    },
    updateStatus: (req, res) => {
        const id = req.body.id
        const newStatus = req.body.newStatus
        const newPaid_off = req.body.newPaid

        connection.query(
            `UPDATE booking SET status='${newStatus}', paid_off='${newPaid_off}' WHERE id_booking = '${id}'`,(err,result)=>{
                if(err) console.log(err)
                res.json(200)
            }
        )        
    }
}

module.exports = {BookingController}