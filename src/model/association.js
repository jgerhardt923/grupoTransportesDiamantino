const {DataTypes} = require("sequelize");
const sequelize = require("./dataBase/db");

const driver = require("./driver");
const truck = require("./truck");

const association = sequelize.define("association", {
    active: DataTypes.BOOLEAN
})

association.belongsTo(driver,{onDelete:"CASCADE"});
association.belongsTo(truck,{onDelete:"CASCADE"});

module.exports = association