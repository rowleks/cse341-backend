const Contact = require('../model/contact')

const getAllContacts = async (_, res) => {
  try {
    const contacts = await Contact.find()
    res.json(contacts)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}

const getContactById = async (req, res) => {
  try {
    const contact = await Contact.findById(req.params.id)
    if (!contact) return res.status(404).json({ message: 'Contact not found' })
    res.json(contact)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}

const createContact = async (req, res) => {
  try {
    const contact = new Contact(req.body)
    await contact.save()
    res.status(201).json(contact)
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
}

const updateContact = async (req, res) => {
  try {
    const contact = await Contact.findByIdAndUpdate(req.params.id, req.body, {
      returnDocument: 'after',
    })
    if (!contact) return res.status(404).json({ message: 'Contact not found' })
    res.json(contact)
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
}

const deleteContact = async (req, res) => {
  try {
    const contact = await Contact.findByIdAndDelete(req.params.id)
    if (!contact) return res.status(404).json({ message: 'Contact not found' })
    res.status(204).end()
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}

module.exports = {
  getAllContacts,
  getContactById,
  createContact,
  updateContact,
  deleteContact,
}
