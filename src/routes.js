const express = require("express");

const loginController = require("./controller/login")
const userController = require("./controller/user")

const router = express.Router();

router.route("/login")
    .post(loginController.post)

router.route("/user")
    .get(userController.get)
    .post(userController.post)


module.exports = router;