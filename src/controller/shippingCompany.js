const baseController = require("./base");

const controller = new baseController(__filename.split(/[\\/]/).pop())

module.exports = controller;