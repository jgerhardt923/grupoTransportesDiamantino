const {DataTypes} = require("sequelize");
const sequelize = require("./dataBase/db");

const shippingCompany = require("./shippingCompany");

const truck = sequelize.define("truck", {
    plate: DataTypes.CHAR,
    plate1: DataTypes.CHAR,
    plate2: DataTypes.CHAR,
    plate3: DataTypes.CHAR,
    axes: DataTypes.CHAR,
    capacity: DataTypes.INTEGER,
    mt25: DataTypes.BOOLEAN,
})

truck.belongsTo(shippingCompany);

module.exports = truck;