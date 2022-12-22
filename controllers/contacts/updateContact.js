const serviceDB = require("../../services/contactsService");
const helpers = require("../../helpers");

const updateContact = async (req, res) => {
  const id = req.params.contactId;
  const updatedContact = req.body;
  const owner = req.user._id

  const response = await serviceDB.updateContact(id, updatedContact, owner);
  if (response === null) throw helpers.httpError(404, "Not found");

  res.status(200).json({ response });
};

module.exports = updateContact;
