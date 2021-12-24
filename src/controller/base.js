class baseController{
    constructor (modelName){
        this.mainModel = require("../model/"+modelName)
    }

    async list (req){
        this.mainModel.findAll()
        .then(data=>{
            return {data:data, succeess:true};
        })
        .catch(err=> {return {message:err, succeess:false}})
    }

    async one (req){
        this.mainModel.findOne({where:{id:req.params.id}})
        .then(data=>{
            return {data:data, succeess:true};
        })
        .catch(err=> {return {message:err, succeess:false}})
    }

    async get (req, res){
        try{
            res.send(this[req.params.mode](req));
        }catch (err){
            res.send({message:err, succeess:false})
        }
    }

    async post (req, res){
        this.mainModel.create(req.body)
        .then(data=>{
            res.send({data:data});
        })
        .catch(err=>res.send({message:err, succeess:false}))
    }

    async put (req, res){
        let obj = await this.mainModel.findOne({where:{id:req.params.id}})
        await obj.update(req.body)
        .then(data=>{
            res.send({data:data});
        })
        .catch(err=>res.send({message:err, succeess:false}))
    }

    async delete (req, res){
        let obj = await this.mainModel.findOne({where:{id:req.params.id}})
        await obj.destroy()
        .then(()=>{
            res.send({succeess:true});
        })
        .catch(err=>res.send({message:err, succeess:false}))
    }
}

module.exports = baseController;