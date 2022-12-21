const serviceDB = require("../../services/contactsService");
const helpers = require("../../helpers");

const deleteContact = async (req, res) => {
  const contactId = req.params.contactId;
  const owner = req.user._id

  const response = await serviceDB.removeContact(contactId, owner);

  if (response === null) throw helpers.httpError(404, "Not found");

  res.status(200).json({ response });
};

module.exports = deleteContact;
