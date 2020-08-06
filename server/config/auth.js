//it is used to compare the client side token with server side token.
//comparing the client side token with server side token called as token based authentication.
//Where is server side token? token.js
let obj = require("../config/token"); //import server side token

let auth = (req, res, next) =>{ //next is judgement parameter(yes/no function)
    let allheaders = req.headers;
    if(allheaders.c_token ===  obj.token){
        next(); //tokens are matched, giving successful judgement
    }
    else{
        res.send({"message":"unauthorized user"});
    }
}
module.exports = auth;
