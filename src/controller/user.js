const res = require("express/lib/response");
const userModel = require("../model/user")

module.exports = {
    get:async(req, res)=>{
        res.send(req.user);
    },
    post:async(req, res)=>{
        if(req.user.superUser){
            userModel.create(
                req.body
            )
            .then(obj=>res.send({newUser:obj}))
            .catch(err=>res.send({message:"it does not work =>"+err}))
        }else{
            res.send({message:"your not allowed to do this."})
        }
    }
};