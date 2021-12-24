const MAIN_MODEL = require("../model/"+__filename.split(/[\\/]/).pop())

module.exports = {
    list: async function(req){
        if(req.user.superUser)
        MAIN_MODEL.findAll()
        .then(data=>{
            return {data:data, succeess:true};
        })
        .catch(err=> {return {message:err, succeess:false}})
        else return {message:"your not allowed to do this.", succeess:false}
    },
    one: async function(req, res){
        return {data:req.user, succeess:true};
    },
    get: async function(req, res){
        try{
            res.send(this[req.params.mode](req));
        }catch (err){
            res.send({message:err, succeess:false})
        }
    },
    post: async function(req, res){
        if(req.user.superUser){
            MAIN_MODEL.create(req.body)
            .then(obj=>res.send({data:obj, success:true}))
            .catch(err=>res.send({message:err, success:true}))
        }else{
            res.send({message:"your not allowed to do this.", success:true})
        }
    },
    put: async function(req, res){
        let obj = await MAIN_MODEL.findOne({where:{id:req.user.id}})
        await obj.update(req.body)
        .then(data=>{
            res.send({data:data});
        })
        .catch(err=>res.send({message:err, succeess:false}))
    },
    delete: async function(req, res){
        let obj = await MAIN_MODEL.findOne({where:{id:req.user.id}})
        await obj.destroy()
        .then(()=>{
            res.send({succeess:true});
        })
        .catch(err=>res.send({message:err, succeess:false}))
    }
}