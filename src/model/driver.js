const {DataTypes} = require("sequelize");
const sequelize = require("./dataBase/db");

const shippingCompany = require("./shippingCompany");

const driver = sequelize.define("driver", {
    name: DataTypes.CHAR,
    cpf: DataTypes.CHAR,
    phone: DataTypes.CHAR,
    password: DataTypes.CHAR,
    email: DataTypes.CHAR
})

module.exports = driver;