const helpers = require("../../helpers");
const serviceDB = require("../../services/contactsService");

const getContactById = async (req, res) => {
  const contactId = req.params.contactId;
  const owner = req.user._id

  const response = await serviceDB.getContactById(contactId, owner);

  if (response === null) throw helpers.httpError(404, "Not found");

  res.status(200).json({ response });
};

module.exports = getContactById;
