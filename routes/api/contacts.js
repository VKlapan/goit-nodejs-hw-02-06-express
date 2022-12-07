const Joi = require("joi");

const { removeContact, updateContact } = require("../../models/contacts");

const controllers = require("../../controllers/contacts");
const controllerlWrapper = require("../../helpers/controllerWrapper");

const express = require("express");
const router = express.Router();

router.get("/", controllerlWrapper(controllers.getListContacts));

router.get("/:contactId", controllerlWrapper(controllers.getContactById));

router.post("/", controllerlWrapper(controllers.addNewContact));

router.delete("/:contactId", controllerlWrapper(controllers.deleteContact));

router.put("/:contactId", controllerlWrapper(controllers.updateContact));

module.exports = router;
