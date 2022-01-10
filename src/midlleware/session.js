const config = require("../config")
const session = require("../model/session");
const user = require("../model/user");

module.exports = async(req, res, next)=>{
    if(req.path == "/login"){
        next();
    }else{
        try{
            let sess = await session.findOne({where:{id:req.cookies.sessionId}});
            if(Date.now() < sess.expire){
                let usr = await user.findOne({where:{id:sess.userId}})
                req.user = await usr
                await next()
            }else{
                throw "session expired";
            }
        }catch (err){
            console.log("error => "+err);
            res.redirect("/login");
        }
    }
};