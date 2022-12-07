const contacts = require("../../models/contacts");
const helpers = require("../../helpers");

const deleteContact = async (req, res, next) => {
  const response = await contacts.removeContact(req.params.contactId);

  if (response === null) throw helpers.httpError(404, "Not found");

  res.status(200).json({ response });
};

module.exports = deleteContact;
