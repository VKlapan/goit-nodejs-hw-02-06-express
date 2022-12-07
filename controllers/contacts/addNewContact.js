const contacts = require("../../models/contacts");
const validateInput = require("../../helpers/validateInput");
const helpers = require("../../helpers");

const addNewContact = async (req, res, next) => {
  const { name, email, phone } = req.body;

  if (!name || !email || !phone)
    throw helpers.httpError(400, "missing required name field");

  const validationResult = validateInput({ name, email, phone });
  if (validationResult.error === undefined) {
    const response = await contacts.addContact({ name, email, phone });

    return res.status(201).json({ response });
  }
  throw helpers.httpError(400, validationResult.error.message);
};

module.exports = addNewContact;
