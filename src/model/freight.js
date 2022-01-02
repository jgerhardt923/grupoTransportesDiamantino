const {DataTypes} = require("sequelize");
const sequelize = require("./dataBase/db");

const localModel = require("./local");

const freight = sequelize.define("freight", {
    price: DataTypes.FLOAT,
    product: DataTypes.CHAR,
    lot: DataTypes.CHAR,
    format: DataTypes.CHAR,
    start: DataTypes.DATEONLY,
    end: DataTypes.DATEONLY,
    charging: DataTypes.INTEGER,
    discharging: DataTypes.INTEGER,
    available: DataTypes.BOOLEAN
})

module.exports = freight;