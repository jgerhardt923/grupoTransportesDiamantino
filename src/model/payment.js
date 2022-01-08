const {DataTypes} = require("sequelize");
const sequelize = require("./dataBase/db");

const truckModel = require("./truck");

const payment = sequelize.define("payment", {
    value: DataTypes.INTEGER,
    date: DataTypes.DATEONLY,
    expire: DataTypes.DATEONLY,
    reference: DataTypes.DATEONLY,
    payer: DataTypes.CHAR,
    format: DataTypes.CHAR,
    status: DataTypes.CHAR
});

payment.belongsTo(truckModel);

module.exports = payment;