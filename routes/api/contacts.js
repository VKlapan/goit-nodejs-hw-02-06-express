const Joi = require("joi");

const controllers = require("../../controllers/contacts");
const controllerlWrapper = require("../../helpers/controllerWrapper");
const middlewares = require("../../middlewares");
const inputSchema = require("../../schemas/contactsInputFields");

const express = require("express");
const router = express.Router();

router.get("/", controllerlWrapper(controllers.getListContacts));

router.get("/:contactId", controllerlWrapper(controllers.getContactById));

router.post(
  "/",
  middlewares.validateInput(inputSchema),
  controllerlWrapper(controllers.addNewContact)
);

router.delete("/:contactId", controllerlWrapper(controllers.deleteContact));

router.put(
  "/:contactId",
  middlewares.validateInput(inputSchema),
  controllerlWrapper(controllers.updateContact)
);

module.exports = router;
