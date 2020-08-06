//it is used to create and export the connection object.

let obj = require("./db_properties");
let mysql = require("mysql");

let conn = {
    getConnection : ()=>{
        return mysql.createConnection(obj)
    }
};

module.exports = conn;