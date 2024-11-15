import React, { useState, useEffect } from 'react';
import { TextField, Button, Grid, Paper } from '@mui/material';
import axios from 'axios';


const ContactForm = ({ contact, onSave, onCancel }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    company: '',
    jobTitle: '',
  });

  useEffect(() => {
    if (contact) {
      setFormData(contact);
    }
  }, [contact]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (contact) {
      await axios.put(`http://localhost:5000/api/contacts/${contact._id}`, formData);
    } else {
      await axios.post('http://localhost:5000/api/contacts', formData);
    }
    onSave();
  };

  return (
    <Paper elevation={3} style={{ padding: '20px', backgroundColor: '#f9f9ff' }}>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <TextField
              name="firstName"
              label="First Name"
              fullWidth
              value={formData.firstName}
              onChange={handleChange}
              required
              style={{ marginBottom: '10px' }}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              name="lastName"
              label="Last Name"
              fullWidth
              value={formData.lastName}
              onChange={handleChange}
              required
              style={{ marginBottom: '10px' }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="email"
              label="Email"
              fullWidth
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              style={{ marginBottom: '10px' }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="phoneNumber"
              label="Phone Number"
              fullWidth
              value={formData.phoneNumber}
              onChange={handleChange}
              required
              style={{ marginBottom: '10px' }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="company"
              label="Company"
              fullWidth
              value={formData.company}
              onChange={handleChange}
              style={{ marginBottom: '10px' }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="jobTitle"
              label="Job Title"
              fullWidth
              value={formData.jobTitle}
              onChange={handleChange}
              style={{ marginBottom: '10px' }}
            />
          </Grid>
          <Grid item xs={12} style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Button
              variant="contained"
              color="primary"
              type="submit"
              style={{
                backgroundColor: '#9694FF',
                color: '#fff',
                border: 'none',
                padding: '10px 20px',
                borderRadius: '5px',
              }}
            >
              {contact ? 'Update' : 'Add'} Contact
            </Button>
            <Button
              onClick={onCancel}
              style={{
                marginLeft: '10px',
                padding: '10px 20px',
                borderRadius: '5px',
                border: '1px solid #9694FF',
                color: '#9694FF',
              }}
            >
              Cancel
            </Button>
          </Grid>
        </Grid>
      </form>
    </Paper>
  );
};

export default ContactForm;
