const {DataTypes} = require("sequelize");
const sequelize = require("./dataBase/db");

const user = require("./user")

const session = sequelize.define("session",{
    expire:DataTypes.DATE
})

session.belongsTo(user)

module.exports = session