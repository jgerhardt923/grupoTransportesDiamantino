const sC = require("../model/shippingCompany")

module.exports = {
    get:async(req, res)=>{
        console.log(req.body)
        sC.findOne({where:req.body})
        .then(nSC=>{
            res.send({shippingCompany:nSC});
        })
        .catch(err=>res.send({message:err}))
    },
    post:async(req, res)=>{
        console.log(req.body)
        sC.create(req.body)
        .then(nSC=>{
            res.send({newShippingCompany:nSC});
        })
        .catch(err=>res.send({message:err}))
    }
};