const MAIN_MODEL = require("../model/"+__filename.split(/[\\/]/).pop())

const truckModel = require("../model/truck");

module.exports = {
    get: async function(req, res){
        try{
            if(req.user.superUser){
                let data = await MAIN_MODEL.findAll({include:truckModel});
                await res.send({data:data, succeess:true})
            }else{
                let data = await MAIN_MODEL.findAll({where:{status:"pending"}, include:truckModel});
                await res.send({data:data, succeess:true})
            }
        }catch (err){
            await res.send({message:err, succeess:false})
        }
    },
    put: async function(req, res){
        let now = new Date();
        let obj = await MAIN_MODEL.findOne({where:{id:req.params.id},include:truckModel})
        await obj.update(req.body)
        .then(data=>{
            if (new Date(data.expire).getMonth() == 12){
                var newExpire = new Date(new Date(data.expire).getFullYear()+1, new Date(data.expire).getMonth()+1, 5).toISOString().split('T')[0];
            }else{
                var newExpire = new Date(new Date(data.expire).getFullYear(), new Date(data.expire).getMonth()+1, 5).toISOString().split('T')[0];
            }
            if (new Date(data.expire).getMonth() == 12){
                var newReference = new Date(new Date(data.expire).getFullYear()+1, new Date(data.expire).getMonth(), 1).toISOString().split('T')[0];
            }else{
                var newReference = new Date(new Date(data.expire).getFullYear(), new Date(data.expire).getMonth(), 1).toISOString().split('T')[0];
            }
            MAIN_MODEL.create({
                truckId: data.truckId,
                value: 150,
                Date: null,
                expire: newExpire,
                reference: newReference,
                payer: req.body.payer,
                format: null,
                status: "pending"
            })
            res.send({data:data});
        })
        .catch(err=>res.send({message:err, succeess:false}))
    },
    delete: async function(req, res){
        let obj = await MAIN_MODEL.findOne({where:{id:req.params.id}})
        await obj.update({status:"canceled"})
        .then(obj=>{
            MAIN_MODEL.create({
                truckId: obj.dataValues.truckId,
                value: 150,
                Date: null,
                expire: obj.dataValues.expire,
                reference: obj.dataValues.reference,
                payer: req.body.payer,
                format: null,
                status: "pending"
            })
        })
        .then(()=>{
            res.send({succeess:true});
        })
        .catch(err=>res.send({message:err, succeess:false}))
    }
}