const sessionModel = require("../model/session");
const userModel = require("../model/user");

const config = require("../config");

module.exports = {
    get:(req, res)=>{
        res.sendFile(config.app.staticDir + "template/login.html")
    },
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
                        res.redirect("/");
                    })
                }else{
                    res.send({message:"login or password invalid"})
                }
            })
            .catch(err=>res.send({message:"it does not work =>"+err}))
    }
};