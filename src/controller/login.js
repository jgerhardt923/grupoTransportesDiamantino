const userModel = require("../model/user");
const sessionModel = require("../model/session");

const config = require("../config");

module.exports = {
    post:async(req, res)=>{
            userModel.findOne({
                where:req.body
            })
            .then(usr=>{
                if(usr != null || undefined){
                    sessionModel.create({
                        expire:Date.now()+(config.app.sessionDuration * 60000),
                        userId:usr.id
                    })
                    .then(sess=>{
                        res.cookie("sessionId", sess.id, {expires:sess.expire});
                        res.send({message:"loged"});
                    })
                }else{
                    res.send({message:"login or password invalid"})
                }
            })
            .catch(err=>res.send({message:"it does not work =>"+err}))
    }
};