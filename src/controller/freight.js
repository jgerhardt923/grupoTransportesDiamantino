const freightModel = require("../model/freight");

module.exports = {
    get:async(req, res)=>{
        freightModel.findAll({where:req.post})
        .then(frght=>res.send({data:frght}))
        .catch(err=>res.send({message:err}))
    },
    post:async(req, res)=>{
        freightModel.create(req.body)
        .then(frght=>{
            res.send({newShippingCompany:frght});
        })
        .catch(err=>res.send({message:err}))
    }
};