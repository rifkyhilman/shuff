const { connection } = require('../configs/db');


const ContactController = {
    postMessage: (req, res) => {
        const name = req.body.name;
        const email = req.body.email;
        const message = req.body.message;
        const isRead = 0

        connection.query(
            `INSERT INTO contact (name, email, message, isRead) VALUES ('${name}', '${email}','${message}','${isRead}')`,(err,result)=>{
                if(err)console.log(err)
                    res.render('contact',
                        { 
                            isLogin: req.session.login, 
                            username: req.session.user,
                            message:   `<script>
                                            Swal.fire({
                                            position: "center",
                                            icon: "success",
                                            title: "Your message has been send.",
                                            showConfirmButton: false,
                                            timer: 1500
                                            });
                                        </script>`
                        });
            }
        )
    }
}

module.exports = {ContactController}