import React, { useState } from 'react';
import { Container, Typography, TextField, Button, Grid, FormControl, InputLabel, Select, MenuItem } from '@mui/material';

const EligibilityCheck = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    idNumber: '',
    age: '',
    bankStatements: '',
    employmentStatus: '',
    workId: '',
    nextOfKin: '',
    accountNumber: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
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
          <Grid item xs={12}>
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
              onChange={(e) => setFormData({ ...formData, bankStatements: e.target.files[0] })}
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth required>
              <InputLabel>Employment Status</InputLabel>
              <Select
                name="employmentStatus"
                value={formData.employmentStatus}
                onChange={handleChange}
              >
                <MenuItem value="employed">Employed</MenuItem>
                <MenuItem value="self-employed">Self-Employed</MenuItem>
                <MenuItem value="unemployed">Unemployed</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Work ID"
              name="workId"
              value={formData.workId}
              onChange={handleChange}
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Next of Kin"
              name="nextOfKin"
              value={formData.nextOfKin}
              onChange={handleChange}
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Account Number"
              name="accountNumber"
              value={formData.accountNumber}
              onChange={handleChange}
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="primary">
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default EligibilityCheck;
