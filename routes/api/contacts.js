const Joi = require("joi");

const { removeContact, updateContact } = require("../../models/contacts");

const controllers = require("../../controllers/contacts");

const express = require("express");
const router = express.Router();

const schema = Joi.object({
  name: Joi.string().alphanum().min(3).max(30).required(),
  email: Joi.string().email({
    minDomainSegments: 2,
  }),
  phone: Joi.string()
    .pattern(/^[0-9]+$/)
    .length(10),
});

const validateInput = (contact) => {
  const validationResult = schema.validate(contact);
  return validationResult;
};

router.get("/", controllers.getListContacts);

router.get("/:contactId", controllers.getContactById);

router.post("/", controllers.addNewContact);

router.delete("/:contactId", controllers.deleteContact);

router.put("/:contactId", controllers.updateContact);

module.exports = router;
