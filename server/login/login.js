//login rest api

let conn = require("../config/db_connection");
let connection = conn.getConnection(); //used to getconnection object
let obj = require("../config/token"); //save the server side token
let generateToken = require("../config/generateToken"); //generate the token

let login = require("express")
  .Router()
  .post("/", (req, res) => {
    //importing express module, calling router function
    connection.query(
      `select * from login_details where uname='${req.body.uname}' and upwd='${req.body.upwd}'`,
      (err, records, fields) => { //fields contains table metadata.
        if (err) throw err;
        else {
          if (records.length > 0) {
            let token = generateToken(
              { "uname": req.body.uname, 
                "upwd": req.body.upwd },"hr@nareshit.in");
            obj.token = token;
            res.send({login:"success", token:token})
          }else{
              res.send({login:"fail"});
          }
        }
      }
    );
  });

module.exports = login;
