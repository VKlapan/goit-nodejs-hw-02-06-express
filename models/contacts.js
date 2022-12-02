const fs = require("fs/promises");
const path = require("path");

const filePath = path.resolve("./models/contacts.json");

const listContacts = async () => {
  try {
    const contactsFile = await fs.readFile(filePath);
    return JSON.parse(contactsFile);
  } catch (error) {
    console.log(error);
  }
};

const getContactById = async (contactId) => {
  const contacts = await listContacts();
  const contact = contacts.filter((contact) => contact.id === contactId);
  console.log(contact.length);
  return contact.length === 0 ? null : contact;
};

const removeContact = async (contactId) => {
  const contacts = await listContacts();
  const index = contacts.findIndex((contact) => contact.id === contactId);

  if (index === -1) return null;

  const deletedContact = contacts.splice(index, 1);
  try {
    await fs.writeFile(filePath, JSON.stringify(contacts));
    return deletedContact;
  } catch (error) {
    console.log(error);
  }
};

const addContact = async (body) => {};

const updateContact = async (contactId, body) => {};

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
};
