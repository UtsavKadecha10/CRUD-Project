const con = require('../Connection');

const Get2 = (req,res) => {
    const sql = 'select * from Person';
    con.query(sql,(err,result) => {
        if(err) res.send(err);
        else res.send(result)
    })
}

module.exports = Get2;
