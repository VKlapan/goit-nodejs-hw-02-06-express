const fs = require("fs/promises");
const path = require("path");

const filePath = path.resolve("./models/contacts.json");

const listContacts = async () => {
  const contactsFile = await fs.readFile(filePath);
  const contacts = JSON.parse(contactsFile);
  return contacts;
};

const getContactById = async (contactId) => {
  const contactsFile = await fs.readFile(filePath);
  const contacts = JSON.parse(contactsFile);
  const contact = contacts.filter((contact) => contact.id === contactId);
  console.log(contact);
  return contact;
};

const removeContact = async (contactId) => {};

const addContact = async (body) => {};

const updateContact = async (contactId, body) => {};

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
};
