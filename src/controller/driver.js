const baseController = require("./base");

const shippingCompanyModel = require("../model/shippingCompany");

const controller = new baseController(__filename.split(/[\\/]/).pop())

controller.list = async function(req){
    this.mainModel.findAll({include:shippingCompanyModel})
    .then(data=>{
        return {data:data, succeess:true};
    })
    .catch(err=> {return {message:err, succeess:false}})
}

module.exports = controller;