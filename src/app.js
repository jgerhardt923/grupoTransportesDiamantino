const express = require("express");

//midllewares
const cookieParser = require("cookie-parser");
const sessionMidlleware = require("./midlleware/session");

//router
const router = require("./routes");

const app = express()

//midllewares
app.use(
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