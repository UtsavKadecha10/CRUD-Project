const mysql = require('mysql');


const con = mysql.createConnection({
    host : '85.10.205.173',
    port: 3306,
    user : 'satyapriya',
    password : 'Password@123',
    database : 'demojecrc'
})

con.connect((err) => {
    if(err) console.log("error in connecting to the database : "+err)
    else console.log("connected");
})

module.exports = con;
