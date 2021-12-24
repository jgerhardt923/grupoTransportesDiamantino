const baseController = require("./base");

const controller = new baseController(__filename.split(/[\\/]/).pop())

controller.get = null;
controller.put = null;

module.exports = controller;