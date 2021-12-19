const {DataTypes} = require("sequelize");
const sequelize = require("./dataBase/db");

const user = sequelize.define("user", {
    name: DataTypes.CHAR,
    password: DataTypes.CHAR,
    superUser: DataTypes.BOOLEAN
});

module.exports = user;