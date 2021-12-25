const MAIN_MODEL = require("../model/"+__filename.split(/[\\/]/).pop())

module.exports = {
    get: async function(req, res){
        if(! req.user.superUser) res.send({message:"your not allowed to do this.", succeess:false});
        try{
            if(req.params.mode === "list"){
                let data = await MAIN_MODEL.findAll();
                await res.send({data:data, succeess:true})
            }else{
                await res.send({data:req.user, succeess:true})
            }
        }catch (err){
            await res.send({message:err, succeess:false})
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