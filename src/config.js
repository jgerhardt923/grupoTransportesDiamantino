require("dotenv").config()

const path = require("path")

module.exports = {
    dataBase:{
        dialect: process.env.DATA_BASE || "postgres",
        name: process.env.DB_NAME || "grupoTransportesDiamantino",
        user: process.env.DB_USER || "postgres",
        password: process.env.DB_PASSWORD,
        host: process.env.DB_HOST || "localhost",
        port: process.env.DB_PORT || 5432
    },
    superUser:{
        name: process.env.APP_ADMIN_USERNAME,
        password: process.env.APP_ADMIN_PASSWORD
    },
    app:{
        sessionDuration: 60,
        staticDir: path.join(__dirname ,"/public/")
    },
    server:{
        host: process.env.HOST || "localhost",
        port: process.env.PORT || 5000
    }
}