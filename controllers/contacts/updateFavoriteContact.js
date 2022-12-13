const serviceDB = require("../../services");
const helpers = require("../../helpers");

const updateFavoriteContact = async (req, res, next) => {
  const id = req.params.contactId;
  const { favorite } = req.body;

  const response = await serviceDB.updateFavoriteContact(id, favorite);

  if (response === null) throw helpers.httpError(404, "Not found");

  res.status(200).json({ response });
};

module.exports = updateFavoriteContact;
