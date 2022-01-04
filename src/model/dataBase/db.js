const Sequelize = require("sequelize");
const config = require("../../config")

const sequelize = new Sequelize(
    config.dataBase.name,
    config.dataBase.user,
    config.dataBase.password,
    {
        dialect:config.dataBase.dialect,
        host:config.dataBase.host,
        logging:false,
    }
);

module.exports = sequelize;