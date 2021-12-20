const travelModel = require("../model/travel");

module.exports = {
    get:async(req, res)=>{
        travelModel.findAll({where:req.post})
        .then(trvl=>res.send({data:trvl}))
        .catch(err=>res.send({message:err}))
    },
    post:async(req, res)=>{
        travelModel.create(req.body)
        .then(trvl=>{
            res.send({newShippingCompany:trvl});
        })
        .catch(err=>res.send({message:err}))
    }
};