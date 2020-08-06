const { response } = require("express");

//compare 2 tokena
let connection  = conn.getConnection();

//arg2 is comparison
let about = require("express").Router().get("/", [require("../config/auth"), (req, res)=>{
    connection.query(`select * from about`, (err, records, fields)=>{
        if(err) throw err;
        else{
            res.send(records);
        }

    })

}])

module.exports = about;