const associationModel = require("../model/association");

module.exports = {
    get:async(req, res)=>{
        associationModel.findAll({where:req.post})
        .then(ass=>res.send({data:ass}))
        .catch(err=>res.send({message:err}))
    },
    post:async(req, res)=>{
        associationModel.create(req.body)
        .then(ass=>{
            res.send({newShippingCompany:ass});
        })
        .catch(err=>res.send({message:err}))
    }
};