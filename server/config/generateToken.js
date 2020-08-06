//it is used to generate the token by using jwt-simple module
//encrypted format is called token 
//What is token? encryption format we can call token.

let jwt = require("jwt-simple");

let generateToken = (data, password) =>{
    return jwt.encode(data, password);
}
module.exports = generateToken;