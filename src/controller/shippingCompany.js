const shippingCompanyModel = require("../model/shippingCompany")

module.exports = {
    get:async(req, res)=>{
        shippingCompanyModel.findOne({where:req.body})
        .then(shpngcmpn=>{
            res.send({shippingCompany:shpngcmpn});
        })
        .catch(err=>res.send({message:err}))
    },
    post:async(req, res)=>{
        shippingCompanyModel.create(req.body)
        .then(shpngcmpn=>{
            res.send({newShippingCompany:shpngcmpn});
        })
        .catch(err=>res.send({message:err}))
    }
};