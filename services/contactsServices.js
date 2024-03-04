import Contact from "../models/Contacts.js";

export const listContacts = () => Contact.find();
export const getContactsByFilter = (filter, query = {}) =>
  Contact.find(filter, "-createdAt -updatedAt", query);

export const getContactsCountByFilter = (filter) =>
  Contact.countDocuments(filter);
export const getContactById = async (id) => {
  return Contact.findById(id);
};

export const removeContact = async (id) => Contact.findByIdAndDelete(id);

export const removeContactByFilter = (filter) =>
  Contact.findOneAndDelete(filter);
export const addContact = async (data) => Contact.create(data);

export const updateContactById = async (id, data) =>
  Contact.findByIdAndUpdate(id, data, { new: true, runValidators: true });

export const updateContactByFilter = (filter, data) =>
  Contact.findOneAndUpdate(filter, data);

export const updateStatusContact = async (id, data) =>
  Contact.findByIdAndUpdate(id, data, {
    new: true,
  });
