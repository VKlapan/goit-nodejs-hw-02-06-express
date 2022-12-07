const contacts = require("../../models/contacts");
const validateInput = require("../../helpers/validateInput");

const helpers = require("../../helpers");

const updateContact = async (req, res, next) => {
  const id = req.params.contactId;
  const updatedContact = req.body;

  if (Object.keys(updatedContact).length === 0)
    throw helpers.httpError(400, "missing fields");

  const validationResult = validateInput(updatedContact);

  if (validationResult.error === undefined) {
    const response = await contacts.updateContact(id, updatedContact);

    if (response === null) throw helpers.httpError(404, "Not found");

    res.status(200).json({ response });
  }

  throw helpers.httpError(400, validationResult.error.message);
};

module.exports = updateContact;
