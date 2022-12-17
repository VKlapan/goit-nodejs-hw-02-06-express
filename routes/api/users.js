const Joi = require("joi");

const controllers = require("../../controllers/users");
const controllerlWrapper = require("../../helpers/controllerWrapper");
const middlewares = require("../../middlewares");
const { schemaUser } = require("../../schemas/contactsInputFields");

const express = require("express");
const router = express.Router();

router.post(
  "/singup",
  middlewares.validateInput(schemaUser),
  controllerlWrapper(controllers.createUser)
);

router.post("/login", controllerlWrapper(controllers.loginUser));

module.exports = router;
