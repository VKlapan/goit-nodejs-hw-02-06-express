const Joi = require("joi");

const controllers = require("../../controllers/contacts");
const controllerlWrapper = require("../../helpers/controllerWrapper");
const middlewares = require("../../middlewares");
const {
  schemaContact,
  schemaFavoriteContact,
} = require("../../schemas/contactsInputFields");

const express = require("express");
const router = express.Router();

router.get(
  "/", 
  middlewares.authMiddleware,
  controllerlWrapper(controllers.getListContacts));

router.get("/:contactId",
  middlewares.authMiddleware,
  controllerlWrapper(controllers.getContactById));

router.post(
  "/",
  middlewares.authMiddleware,
  middlewares.validateInput(schemaContact),
  controllerlWrapper(controllers.addNewContact)
);

router.delete("/:contactId", controllerlWrapper(controllers.deleteContact));

router.patch(
  "/:contactId/favorite",
  middlewares.validateInput(schemaFavoriteContact),
  controllerlWrapper(controllers.updateFavoriteContact)
);

router.put(
  "/:contactId",
  middlewares.validateInput(schemaContact),
  controllerlWrapper(controllers.updateContact)
);

module.exports = router;
