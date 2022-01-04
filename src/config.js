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
        name:"adm",
        password:"adm123"
    },
    app:{
        sessionDuration: 12*60,
        staticDir: path.join(__dirname ,"/public/")
    },
    server:{
        host:"localhost",
        port:5000
    }
}