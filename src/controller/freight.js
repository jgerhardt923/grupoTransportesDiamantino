const baseController = require("./base");

const lotModel = require("../model/lot");

const controller = new baseController(__filename.split(/[\\/]/).pop())

controller.list = async function(req){
    this.mainModel.findAll({include:lotModel})
    .then(data=>{
        return {data:data, succeess:true};
    })
    .catch(err=> {return {message:err, succeess:false}})
}

controller.list = async function(req){
    this.mainModel.findOne({where:{id:req.params.id}, include:lotModel})
    .then(data=>{
        return {data:data, succeess:true};
    })
    .catch(err=> {return {message:err, succeess:false}})
}

module.exports = controller;