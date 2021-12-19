const {DataTypes} = require("sequelize");
const sequelize = require("./dataBase/db");

const driver = require("./driver");
const truck = require("./truck");

const association = sequelize.define("association", {
    active: DataTypes.BOOLEAN
})

association.belongsTo(driver);
association.belongsTo(truck);

module.exports = association