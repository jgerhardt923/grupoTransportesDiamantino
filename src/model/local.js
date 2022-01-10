const {DataTypes} = require("sequelize");
const sequelize = require("./dataBase/db");

const local = sequelize.define("local", {
    type: DataTypes.CHAR,
    name: DataTypes.CHAR,
    city: DataTypes.CHAR,
    state: DataTypes.CHAR,
    balance25mt: DataTypes.BOOLEAN,
    address: DataTypes.TEXT,
    phone: DataTypes.CHAR,
    email: DataTypes.CHAR
})

module.exports = local;