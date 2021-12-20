const express = require("express");

const associationController = require("./controller/association");
const driverController = require("./controller/driver");
const freightController = require("./controller/freight");
const localController = require("./controller/local");
const loginController = require("./controller/login");
const shippingCompanyController = require("./controller/shippingCompany");
const travelController = require("./controller/travel");
const truckController = require("./controller/truck");
const userController = require("./controller/user")

const router = express.Router();

router.route("/association")
    .get(associationController.get)
    .post(associationController.post)

router.route("/driver")
    .get(driverController.get)
    .post(driverController.post)

router.route("/freight")
    .get(freightController.get)
    .post(freightController.post)

router.route("/local")
    .get(localController.get)
    .post(localController.post)

router.route("/login")
    .post(loginController.post)

router.route("/shippingcompany")
    .get(shippingCompanyController.get)
    .post(shippingCompanyController.post)

router.route("/travel")
    .get(travelController.get)
    .post(travelController.post)

router.route("/truck")
    .get(truckController.get)
    .post(truckController.post)

router.route("/user")
    .get(userController.get)
    .post(userController.post)

module.exports = router;