const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'sql12.freesqldatabase.com',
    user: 'sql12724718',
    password: '6Hks9f12iE',
    database: 'shuff'
});

module.exports = {connection}
