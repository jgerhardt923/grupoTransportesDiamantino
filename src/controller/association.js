const MAIN_MODEL = require("../model/"+__filename.split(/[\\/]/).pop())

const truckModel = require("../model/truck");
const driverModel = require("../model/driver");

module.exports = {
    get: async function(req, res){
        try{
            if(req.params.mode === "list"){
                let data = await MAIN_MODEL.findAll({include:[{model:truckModel},{model:driverModel}]});
                await res.send({data:data, succeess:true})
            }else{
                let data = await MAIN_MODEL.findOne({where:{id:req.params.id}, include:[{model:truckModel},{model:driverModel}]});
                await res.send({data:data, succeess:true})
            }
        }catch (err){
            await res.send({message:err, succeess:false})
        }
    },
    post: async function(req, res){
        MAIN_MODEL.create(req.body)
        .then(data=>{
            res.send({data:data});
        })
        .catch(err=>res.send({message:err, succeess:false}))
    },
    put: async function(req, res){
        let obj = await MAIN_MODEL.findOne({where:{id:req.params.id}})
        await obj.update(req.body)
        .then(data=>{
            res.send({data:data});
        })
        .catch(err=>res.send({message:err, succeess:false}))
    },
    delete: async function(req, res){
        let obj = await MAIN_MODEL.findOne({where:{id:req.params.id}})
        await obj.destroy()
        .then(()=>{
            res.send({succeess:true});
        })
        .catch(err=>res.send({message:err, succeess:false}))
    }
}