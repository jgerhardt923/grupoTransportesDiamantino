const baseController = require("./base");

//const associationModel = require("../model/association");
//const freightModel = require("../model/freight");

const controller = new baseController(__filename.split(/[\\/]/).pop())

controller.list = async function(req){
    this.mainModel.findAll({
        where:{
            date:new Date().toLocaleString().substr(0, 10)
        },
        include:{
            all: true,
            nested: true
        }
    })
    .then(data=>{
        return {data:data, succeess:true};
    })
    .catch(err=> {return {message:err, succeess:false}})
}

controller.one = null;
controller.put = null;

module.exports = controller;