const {DataTypes} = require("sequelize");
const sequelize = require("./dataBase/db");

const freight = require("./freight");

const lot = sequelize.define("lot", {
    number: DataTypes.CHAR
})

lot.belongsTo(freight);

module.exports = lot;