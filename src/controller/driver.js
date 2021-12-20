const driverModel = require("../model/driver");

module.exports = {
    get:async(req, res)=>{
        driverModel.findAll({where:req.post})
        .then(drvr=>res.send({data:drvr}))
        .catch(err=>res.send({message:err}))
    },
    post:async(req, res)=>{
        driverModel.create(req.body)
        .then(drvr=>{
            res.send({newShippingCompany:drvr});
        })
        .catch(err=>res.send({message:err}))
    }
};