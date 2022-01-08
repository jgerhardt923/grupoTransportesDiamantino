const Sequelize = require("sequelize");
const config = require("../../config")

require("dotenv").config()

sequelize = new Sequelize(process.env.DATABASE_URL, {
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false
      }
    }
  }
);

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });


/*const sequelize = new Sequelize(
    config.dataBase.name,
    config.dataBase.user,
    config.dataBase.password,
    {
        dialect:config.dataBase.dialect,
        host:config.dataBase.host,
        logging:false,
    }
);*/

module.exports = sequelize;