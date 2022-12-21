const serviceDB = require("../../services/contactsService");
const helpers = require("../../helpers");

const updateFavoriteContact = async (req, res) => {
  const id = req.params.contactId;
  const { favorite } = req.body;
  const owner = req.user._id

  const response = await serviceDB.updateFavoriteContact(id, favorite, owner);

  if (response === null) throw helpers.httpError(404, "Not found");

  res.status(200).json({ response });
};

module.exports = updateFavoriteContact;
