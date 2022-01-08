const config = require("../config")
const session = require("../model/session");
const user = require("../model/user");

module.exports = async(req, res, next)=>{
    if(req.cookies.sessionId){
        let sess = await session.findOne({where:{id:req.cookies.sessionId}})
        if(sess !== null | undefined){
            if(Date.now() >= sess.expire){
                
                next();
            }else{
                let usr = await user.findOne({where:{id:sess.userId}})
                req.user = await usr
                await next()
            }
        }else{
            res.redirect("/login");
        }
    }else{
        if(req.path === "/login"){
            next();
        }else{
            res.redirect("/login")
        }
    }
};