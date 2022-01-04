const {DataTypes} = require("sequelize");
const sequelize = require("./dataBase/db");

const user = sequelize.define("user", {
    name: {
        type: DataTypes.TEXT,
        allowNull: false,
        unique: true
    },
    password: DataTypes.CHAR,
    superUser: DataTypes.BOOLEAN
});

module.exports = user;