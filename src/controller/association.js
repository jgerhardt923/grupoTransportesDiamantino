const baseController = require("./base");

const truckModel = require("../model/truck");
const driverModel = require("../model/driver");

const controller = new baseController(__filename.split(/[\\/]/).pop())

controller.list = async function(req){
    this.mainModel.findAll({include:[{model:truckModel},{model:driverModel}]})
    .then(data=>{
        return {data:data, succeess:true};
    })
    .catch(err=> {return {message:err, succeess:false}})
}

controller.one = async function(req){
    this.mainModel.findOne({where:{id:req.params.id}, include:[{model:truckModel},{model:driverModel}]})
    .then(data=>{
        return {data:data, succeess:true};
    })
    .catch(err=> {return {message:err, succeess:false}})
}

module.exports = controller;