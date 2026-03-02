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

module.exports = { getAllContacts, getContactById }
