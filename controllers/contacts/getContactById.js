const helpers = require("../../helpers");
const serviceDB = require("../../services/contactsService");

const getContactById = async (req, res) => {
  console.log(typeof req.params.contactId);

  const response = await serviceDB.getContactById(req.params.contactId);

  if (response === null) throw helpers.httpError(404, "Not found");

  res.status(200).json({ response });
};

module.exports = getContactById;
