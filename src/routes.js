const express = require("express");

const loginController = require("./controller/login");
const shippingCompanyController = require("./controller/shippingCompany");
const userController = require("./controller/user")

const router = express.Router();

router.route("/login")
    .post(loginController.post)

router.route("/user")
    .get(userController.get)
    .post(userController.post)

router.route("/shippingcompany")
    .get(shippingCompanyController.get)
    .post(shippingCompanyController.post)

module.exports = router;