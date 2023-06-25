const con = require('../Connection');

const Get1 = (req,res) => {
    const sql = 'select * from students';
    con.query(sql,(err,result) => {
        if(err) res.send(err);
        else res.send(result)
    })
}

module.exports = Get1;
