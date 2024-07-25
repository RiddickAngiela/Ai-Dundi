// src/Contact.js

import React, { useState } from 'react';
import { Container, Alert, Button } from 'react-bootstrap';
import { TextField, Typography, Paper, Box } from '@mui/material';
import 'bootstrap/dist/css/bootstrap.min.css';
import { styled } from '@mui/system';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = formData;

    // Validate form inputs
    if (!name || !email || !message) {
      setError('Please fill in all fields.');
      setSuccess(false);
      return;
    }

    setError('');
    setSuccess(true);

    // Reset form
    setFormData({
      name: '',
      email: '',
      message: '',
    });

    // Here you can also add logic to send form data to your server
  };

  const StyledPaper = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(4),
    marginTop: theme.spacing(5),
    borderRadius: theme.shape.borderRadius,
    boxShadow: theme.shadows[3],
  }));

  const StyledButton = styled(Button)(({ theme }) => ({
    marginTop: theme.spacing(3),
    backgroundColor: theme.palette.primary.main,
    color: '#fff',
    '&:hover': {
      backgroundColor: theme.palette.primary.dark,
    },
  }));

  return (
    <Container>
      <Typography variant="h4" component="h2" align="center" gutterBottom>
        Contact Us
      </Typography>
      {error && <Alert variant="danger">{error}</Alert>}
      {success && <Alert variant="success">Message sent successfully!</Alert>}
      <StyledPaper elevation={3}>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Name"
            variant="outlined"
            fullWidth
            name="name"
            value={formData.name}
            onChange={handleChange}
            margin="normal"
            required
          />
          <TextField
            label="Email"
            variant="outlined"
            type="email"
            fullWidth
            name="email"
            value={formData.email}
            onChange={handleChange}
            margin="normal"
            required
          />
          <TextField
            label="Message"
            variant="outlined"
            fullWidth
            multiline
            rows={4}
            name="message"
            value={formData.message}
            onChange={handleChange}
            margin="normal"
            required
          />
          <Box textAlign="center">
            <StyledButton type="submit">Send Message</StyledButton>
          </Box>
        </form>
      </StyledPaper>
    </Container>
  );
};

export default Contact;
