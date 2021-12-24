const express = require("express");

const associationController = require("./controller/association");
const driverController = require("./controller/driver");
const freightController = require("./controller/freight");
const indexController = require("./controller/index");
const localController = require("./controller/local");
const loginController = require("./controller/login");
const lotController = require("./controller/lot");
const shippingCompanyController = require("./controller/shippingCompany");
const travelController = require("./controller/travel");
const truckController = require("./controller/truck");
const userController = require("./controller/user")

const router = express.Router();

router.route("/association/:mode/:id")
    .get(associationController.get)
    .post(associationController.post)

router.route("/driver")
    .get(driverController.get)
    .post(driverController.post)

router.route("/freight/:mode/:id")
    .get(freightController.get)
    .post(freightController.post)

router.route("/")
    .get(indexController.get)

router.route("/local/:mode/:id")
    .get(localController.get)
    .post(localController.post)

router.route("/login")
    .get(loginController.get)
    .post(loginController.post)

router.route("/lot")
    .post(lotController.post)

router.route("/shippingcompany/:mode/:id")
    .get(shippingCompanyController.get)
    .post(shippingCompanyController.post)

router.route("/travel/:mode/:id")
    .get(travelController.get)
    .post(travelController.post)

router.route("/truck/:mode/:id")
    .get(truckController.get)
    .post(truckController.post)

router.route("/user/:mode/:id")
    .get(userController.get)
    .post(userController.post)

module.exports = router;