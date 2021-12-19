require("dotenv").config()

module.exports = {
    dataBase:{
        dialect: process.env.DATA_BASE || "postgres",
        name: process.env.DB_NAME || "grupoTransportesDiamantino",
        user: process.env.DB_USER || "postgres",
        password: process.env.DB_PASSWORD,
        host: process.env.DB_HOST || "localhost",
        port: process.env.DB_PORT || 5432
    }
}