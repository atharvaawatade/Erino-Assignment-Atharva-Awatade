const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');

router.get('/', async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.json(contacts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.post('/', async (req, res) => {
  const { firstName, lastName, email, phoneNumber, company, jobTitle } = req.body;

  try {
    const newContact = new Contact({
      firstName,
      lastName,
      email,
      phoneNumber,
      company,
      jobTitle,
    });
    const savedContact = await newContact.save();
    res.status(201).json(savedContact);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const updatedContact = await Contact.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedContact);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const deletedContact = await Contact.findByIdAndDelete(req.params.id);
    res.json({ message: 'Contact deleted', deletedContact });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
