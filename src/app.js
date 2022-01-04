const express = require("express");

const config = require("./config");

//midllewares
const cookieParser = require("cookie-parser");
const sessionMidlleware = require("./midlleware/session");
const preventSqlInjection = require("./midlleware/preventSqlInjection");

//router
const router = require("./routes");

const app = express()

//error handlling
app.use(function(err, req, res, next) {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

//midllewares
app.use(
    express.static(config.app.staticDir),
    cookieParser(),
    express.json(),
    express.urlencoded({ extended: true }),
    preventSqlInjection,
    sessionMidlleware
);

//router
app.use(
    router
);

module.exports = app;