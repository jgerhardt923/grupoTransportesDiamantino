const MAIN_MODEL = require("../model/"+__filename.split(/[\\/]/).pop())
const sequelize = require("../model/dataBase/db");

module.exports = {
    get: async function(req, res){
        try{
            if(req.params.mode === "list"){
                let query = await sequelize.query(`
                SELECT 
                    "freight"."id" AS "id",
                    "freight"."price" AS "price", 
                    "freight"."product" AS "product",
                    "freight"."format" AS "format",
                    "freight"."start" AS "start",
                    "freight"."end" AS "end",
                    "freight"."lot" AS "lot",
                    "freight"."charging" AS "chargingId",
                    "freight"."discharging" AS "dischargingId",
                    "charging"."type" AS "chargingType",
                    "charging"."name" AS "chargingName",
                    "charging"."city" AS "chargingCity",
                    "discharging"."type" AS "dischargingType",
                    "discharging"."name" AS "dischargingName",
                    "discharging"."city" AS "dischargingCity",
                    "freight"."available" AS "available" 
                FROM 
                    "freights" AS "freight"
                LEFT JOIN 
                    "locals" AS "charging" ON "freight"."charging" = "charging"."id"
                LEFT JOIN 
                    "locals" AS "discharging" ON "freight"."discharging" = "discharging"."id"`);
                let data = await query[0];
                await res.send({data:data, succeess:true})
            }else{
                let data = await MAIN_MODEL.findOne({where:{id:req.params.id}, include:lotModel});
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