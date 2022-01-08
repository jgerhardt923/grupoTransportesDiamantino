const {DataTypes} = require("sequelize");
const sequelize = require("./dataBase/db");

const association = require("./association");
const freight = require("./freight")

const travel = sequelize.define("travel", {
    date: DataTypes.DATEONLY,
    status: DataTypes.CHAR,
    weight: DataTypes.INTEGER,
})

travel.belongsTo(association,{onDelete:"CASCADE"});
travel.belongsTo(freight,{onDelete:"CASCADE"});

module.exports = travel;