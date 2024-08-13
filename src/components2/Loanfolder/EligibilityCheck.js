import React, { useState } from 'react';
import axios from 'axios';
import { Container, Typography, TextField, Button, Grid, Paper } from '@mui/material';
import ApplicationForm from './ApplicationForm';
import { useNavigate } from 'react-router-dom';

const EligibilityCheck = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    idNumber: '',
    age: '',
    bankStatements: null,
    employmentStatus: '',
    workId: '',
    nextOfKin: '',
    accountNumber: '',
    dateOfBirth: '',
    gender: ''
  });
  const [openDialog, setOpenDialog] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'file' ? files[0] : value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      if (value !== null && value !== '') {
        data.append(key, value);
      }
    });

    // Log FormData entries for debugging
    console.log('FormData entries:');
    for (let pair of data.entries()) {
      console.log(`${pair[0]}: ${pair[1]}`);
    }

    try {
      const response = await axios.post('http://localhost:3000/api/eligibility-check', data, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });
      console.log('Server response:', response.data);
      setOpenDialog(true);
    } catch (error) {
      console.error('Error submitting the form:', error.response ? error.response.data : error.message);
    }
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    navigate('/loan-approval', { state: { eligibilityData: formData } });
  };

  return (
    <Container className="my-4">
      <Paper elevation={3} style={{ padding: '16px', backgroundColor: '#f9f9f9', borderRadius: '8px' }}>
        <Typography variant="h4" gutterBottom className="text-center mb-4">
          Eligibility Check
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                label="First Name"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Last Name"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="ID Number"
                name="idNumber"
                value={formData.idNumber}
                onChange={handleChange}
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Age"
                name="age"
                type="number"
                value={formData.age}
                onChange={handleChange}
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Bank Statements"
                name="bankStatements"
                type="file"
                onChange={handleChange}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Employment Status"
                name="employmentStatus"
                value={formData.employmentStatus}
                onChange={handleChange}
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Work ID"
                name="workId"
                value={formData.workId}
                onChange={handleChange}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Next of Kin"
                name="nextOfKin"
                value={formData.nextOfKin}
                onChange={handleChange}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Account Number"
                name="accountNumber"
                value={formData.accountNumber}
                onChange={handleChange}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Date of Birth"
                name="dateOfBirth"
                type="date"
                value={formData.dateOfBirth}
                onChange={handleChange}
                fullWidth
                InputLabelProps={{ shrink: true }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Gender"
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} className="text-center">
              <Button type="submit" variant="contained" color="primary" className="mt-3">
                Submit
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>

      <ApplicationForm
        open={openDialog}
        handleClose={handleCloseDialog}
      />
    </Container>
  );
};

export default EligibilityCheck;
