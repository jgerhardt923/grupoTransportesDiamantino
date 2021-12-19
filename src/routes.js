const express = require("express");

const loginController = require("./controller/login")
const userController = require("./controller/user")

const router = express.Router();

router.route("/login")
    .post(loginController.post)

router.unsubscribe("/user")
    .get(userController.get)
    .post(userController.post)


module.exports = router;