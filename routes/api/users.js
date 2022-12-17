const Joi = require("joi");

const controllers = require("../../controllers/users");
const controllerlWrapper = require("../../helpers/controllerWrapper");
const middlewares = require("../../middlewares");
const {
  schemaContact,
  schemaFavoriteContact,
} = require("../../schemas/contactsInputFields");

const express = require("express");
const router = express.Router();

router.post("/singup", controllerlWrapper(controllers.createUser));

router.post("/login", controllerlWrapper(controllers.loginUser));

module.exports = router;
