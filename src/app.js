const express = require("express");

//midllewares


//router
const router = require("./routes");

const app = express()

app.use(
    router
);

module.exports = app;