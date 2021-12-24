const MAIN_MODEL = require("../model/"+__filename.split(/[\\/]/).pop())

const shippingCompanyModel = require("../model/shippingCompany");

module.exports = {
    list: async function(req){
        MAIN_MODEL.findAll({include:shippingCompanyModel})
        .then(data=>{
            return {data:data, succeess:true};
        })
        .catch(err=> {return {message:err, succeess:false}})
    },
    one: async function(req){
        MAIN_MODEL.findOne({where:{id:req.params.id}})
        .then(data=>{
            return {data:data, succeess:true};
        })
        .catch(err=> {return {message:err, succeess:false}})
    },
    get: async function(req, res){
        try{
            res.send(this[req.params.mode](req));
        }catch (err){
            res.send({message:err, succeess:false})
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