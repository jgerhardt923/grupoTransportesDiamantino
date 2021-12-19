const {DataTypes} = require("sequelize");
const sequelize = require("./dataBase/db");

const shippingCompany = sequelize.define("shippingCompany", {
    name: DataTypes.CHAR,
    cnpj: DataTypes.CHAR,
    adminName: DataTypes.CHAR,
    adminCpf: DataTypes.CHAR,
    adminPassword: DataTypes.CHAR
})

module.exports = shippingCompany;