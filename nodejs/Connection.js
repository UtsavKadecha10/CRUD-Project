const mysql = require('mysql');


const con = mysql.createConnection({
    host : '127.0.0.1',
    port: 3306,
    user : 'root',
    password : 'utsav',
    database : 'demojecrc'
})

con.connect((err) => {
    if(err) console.log("error in connecting to the database : "+err)
    else console.log("connected");
})

module.exports = con;
