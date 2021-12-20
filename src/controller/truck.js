const truckModel = require("../model/truck")

module.exports = {
    get:async(req, res)=>{
        truckModel.findAll({where:req.post})
        .then(trck=>res.send({data:trck}))
        .catch(err=>res.send({message:err}))
    },
    post:async(req, res)=>{
        truckModel.create(req.body)
        .then(trck=>{
            res.send({newShippingCompany:trck});
        })
        .catch(err=>res.send({message:err}))
    }
};