import React, { useState, useEffect } from 'react';
import { Typography, Container, Paper } from '@mui/material';
import ContactForm from '../components/ContactForm';
import axios from 'axios';

const HomePage = () => {
  const [contacts, setContacts] = useState([]);
  const [editingContact, setEditingContact] = useState(null);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/contacts');
      setContacts(response.data);
    } catch (error) {
      console.error('Error fetching contacts:', error);
    }
  };

  const handleSave = async () => {
    await fetchContacts();
    setShowForm(false);
    setEditingContact(null);
  };

  const handleEdit = (contact) => {
    setEditingContact(contact);
    setShowForm(true);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/contacts/${id}`);
      await fetchContacts();
    } catch (error) {
      console.error('Error deleting contact:', error);
    }
  };

  const handleAddNew = () => {
    setEditingContact(null);
    setShowForm(true);
  };

  return (
    <Container style={{ marginTop: '20px', textAlign: 'center' }}>
      <Typography variant="h4" style={{ marginBottom: '20px', color: '#9694FF' }}>
        Contact Management System for Erino
      </Typography>
      {showForm ? (
        <ContactForm
          contact={editingContact}
          onSave={handleSave}
          onCancel={() => setShowForm(false)}
        />
      ) : (
        <Paper elevation={3} style={{ padding: '20px', backgroundColor: '#f9f9ff' }}>
          {contacts.length === 0 ? (
            <Typography style={{ marginBottom: '20px', color: '#9694FF' }}>
              No contacts available. Click the button below to add a new contact.
            </Typography>
          ) : (
            contacts.map((contact) => (
              <div
                key={contact._id}
                style={{
                  marginBottom: '10px',
                  padding: '10px',
                  border: '1px solid #9694FF',
                  borderRadius: '5px',
                  textAlign: 'left',
                  backgroundColor: '#fff',
                }}
              >
                <Typography>
                  <strong>Name:</strong> {contact.firstName} {contact.lastName}
                </Typography>
                <Typography>
                  <strong>Email:</strong> {contact.email}
                </Typography>
                <Typography>
                  <strong>Phone:</strong> {contact.phoneNumber}
                </Typography>
                <Typography>
                  <strong>Company:</strong> {contact.company}
                </Typography>
                <Typography>
                  <strong>Job Title:</strong> {contact.jobTitle}
                </Typography>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px' }}>
                  <button
                    style={{
                      backgroundColor: '#9694FF',
                      color: '#fff',
                      border: 'none',
                      padding: '5px 10px',
                      borderRadius: '5px',
                      cursor: 'pointer',
                    }}
                    onClick={() => handleEdit(contact)}
                  >
                    Edit
                  </button>
                  <button
                    style={{
                      backgroundColor: '#ff4d4f',
                      color: '#fff',
                      border: 'none',
                      padding: '5px 10px',
                      borderRadius: '5px',
                      cursor: 'pointer',
                    }}
                    onClick={() => handleDelete(contact._id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))
          )}
          <button
            style={{
              marginTop: '20px',
              backgroundColor: '#9694FF',
              color: '#fff',
              border: 'none',
              padding: '10px 20px',
              borderRadius: '5px',
              cursor: 'pointer',
            }}
            onClick={handleAddNew}
          >
            Add New Contact
          </button>
        </Paper>
      )}

    </Container>
  );
};

export default HomePage;
