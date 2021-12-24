const baseController = require("./base");

const controller = new baseController(__filename.split(/[\\/]/).pop())

controller.list = async function(req){
    if(req.user.superUser)
    this.mainModel.findAll()
    .then(data=>{
        return {data:data, succeess:true};
    })
    .catch(err=> {return {message:err, succeess:false}})
    else return {message:"your not allowed to do this.", succeess:false}
}

controller.one = async function(req, res){
    return {data:req.user, succeess:true};
}

controller.post = async function(req, res){
    if(req.user.superUser){
        this.mainModel.create(req.body)
        .then(obj=>res.send({data:obj, success:true}))
        .catch(err=>res.send({message:err, success:true}))
    }else{
        res.send({message:"your not allowed to do this.", success:true})
    }
}

controller.put = async function(req, res){
    let obj = await this.mainModel.findOne({where:{id:req.user.id}})
    await obj.update(req.body)
    .then(data=>{
        res.send({data:data});
    })
    .catch(err=>res.send({message:err, succeess:false}))
}

controller.delete = async function(req, res){
    let obj = await this.mainModel.findOne({where:{id:req.user.id}})
    await obj.destroy()
    .then(()=>{
        res.send({succeess:true});
    })
    .catch(err=>res.send({message:err, succeess:false}))
}

module.exports = controller;