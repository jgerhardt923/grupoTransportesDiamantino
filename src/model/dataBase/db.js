const Sequelize = require("sequelize");
const config = require("../../config")

if(!config.debug & config.deployPlatform == "heroku"){
  const sequelize = new Sequelize(config.dataBase.dataBaseUrl, {
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

  module.exports = sequelize;
}else{
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
}