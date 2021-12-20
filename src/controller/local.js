const localModel = require("../model/local");

module.exports = {
    get:async(req, res)=>{
        localModel.findAll({where:req.post})
        .then(lcl=>res.send({data:lcl}))
        .catch(err=>res.send({message:err}))
    },
    post:async(req, res)=>{
        localModel.create(req.body)
        .then(lcl=>{
            res.send({newShippingCompany:lcl});
        })
        .catch(err=>res.send({message:err}))
    }
};