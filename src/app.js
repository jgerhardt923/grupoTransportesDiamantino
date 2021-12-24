const express = require("express");

const config = require("./config");

//midllewares
const cookieParser = require("cookie-parser");
const sessionMidlleware = require("./midlleware/session");

//router
const router = require("./routes");

const app = express()

//midllewares
app.use(
    express.static(config.app.staticDir),
    cookieParser(),
    express.json(),
    express.urlencoded({ extended: true }), 
    sessionMidlleware
);

//router
app.use(
    router
);

module.exports = app;