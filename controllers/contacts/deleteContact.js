const contacts = require("../../models/contacts");

const deleteContact = async (req, res, next) => {
  const response = await contacts.removeContact(req.params.contactId);

  response === null
    ? res.status(404).json({ message: "Not found" })
    : res.status(200).json({ response });
};

module.exports = deleteContact;
