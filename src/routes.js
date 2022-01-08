const express = require("express");

const associationController = require("./controller/association");
const driverController = require("./controller/driver");
const freightController = require("./controller/freight");
const indexController = require("./controller/index");
const localController = require("./controller/local");
const loginController = require("./controller/login");
const paymentController = require("./controller/payment");
const shippingCompanyController = require("./controller/shippingCompany");
const travelController = require("./controller/travel");
const truckController = require("./controller/truck");
const userController = require("./controller/user");

const router = express.Router();

router.route("/association/:mode/:id")
    .get(associationController.get)
    .post(associationController.post)
    .put(associationController.put)
    .delete(associationController.delete)

router.route("/driver/:mode/:id")
    .get(driverController.get)
    .post(driverController.post)
    .put(driverController.put)
    .delete(driverController.delete)

router.route("/freight/:mode/:id")
    .get(freightController.get)
    .post(freightController.post)
    .put(freightController.put)
    .delete(freightController.delete)

router.route("/")
    .get(indexController.get)

router.route("/local/:mode/:id")
    .get(localController.get)
    .post(localController.post)
    .put(localController.put)
    .delete(localController.delete)

router.route("/login")
    .get(loginController.get)
    .post(loginController.post)

router.route("/payment/:mode/:id")
    .get(paymentController.get)
    .put(paymentController.put)
    .delete(paymentController.delete)

router.route("/shippingcompany/:mode/:id")
    .get(shippingCompanyController.get)
    .post(shippingCompanyController.post)
    .put(shippingCompanyController.put)
    .delete(shippingCompanyController.delete)

router.route("/travel/:mode/:id")
    .get(travelController.get)
    .post(travelController.post)
    .put(travelController.put)
    .delete(travelController.delete)

router.route("/truck/:mode/:id")
    .get(truckController.get)
    .post(truckController.post)
    .put(truckController.put)
    .delete(truckController.delete)

router.route("/user/:mode/:id")
    .get(userController.get)
    .post(userController.post)
    .put(userController.put)
    .delete(userController.delete)

module.exports = router;