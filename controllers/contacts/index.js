const getListContacts = require("./getListContacts");
const getContactById = require("./getContactById");
const addNewContact = require("./addNewContact");
const deleteContact = require("./deleteContact");
const updateContact = require("./updateContact");
const updateFavoriteContact = require("./updateFavoriteContact");

module.exports = {
  getListContacts,
  getContactById,
  addNewContact,
  deleteContact,
  updateContact,
  updateFavoriteContact,
};
