import React, { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, TextField, Button } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const ApplicationForm = ({ open, handleClose }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    dob: '',
    address: '',
    annualIncome: '',
    loanAmount: '',
    loanPurpose: '',
    repaymentTerm: ''
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate(); // Hook to navigate between pages

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (Object.values(formData).some(field => field === '')) {
      alert("Please fill out all fields.");
      return;
    }

    try {
      setLoading(true);
      const response = await axios.post('http://localhost:3000/api/loan-applications/submit', formData);
      console.log(response.data);
      setLoading(false);
      alert("Loan application submitted successfully!");
      handleClose(); // Close dialog
      navigate('/agreement', { state: { applicationData: formData } }); // Route to Agreement page with formData
    } catch (error) {
      setLoading(false);
      console.error("Error submitting loan application:", error);
      alert("Failed to submit the loan application. Please try again.");
    }
  };

  return (
    <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
      <DialogTitle>Loan Application</DialogTitle>
      <DialogContent>
        <form onSubmit={handleSubmit}>
          <TextField
            id="fullName"
            label="Full Name"
            variant="outlined"
            fullWidth
            margin="normal"
            value={formData.fullName}
            onChange={handleChange}
          />
          <TextField
            id="dob"
            label="Date of Birth"
            type="date"
            variant="outlined"
            fullWidth
            margin="normal"
            InputLabelProps={{ shrink: true }}
            value={formData.dob}
            onChange={handleChange}
          />
          <TextField
            id="address"
            label="Address"
            variant="outlined"
            fullWidth
            margin="normal"
            value={formData.address}
            onChange={handleChange}
          />
          <TextField
            id="annualIncome"
            label="Annual Income"
            type="number"
            variant="outlined"
            fullWidth
            margin="normal"
            value={formData.annualIncome}
            onChange={handleChange}
          />
          <TextField
            id="loanAmount"
            label="Loan Amount"
            type="number"
            variant="outlined"
            fullWidth
            margin="normal"
            value={formData.loanAmount}
            onChange={handleChange}
          />
          <TextField
            id="loanPurpose"
            label="Purpose of Loan"
            variant="outlined"
            fullWidth
            margin="normal"
            value={formData.loanPurpose}
            onChange={handleChange}
          />
          <TextField
            id="repaymentTerm"
            label="Repayment Term"
            variant="outlined"
            fullWidth
            margin="normal"
            value={formData.repaymentTerm}
            onChange={handleChange}
          />
          <DialogActions>
            <Button onClick={handleClose} color="secondary">Cancel</Button>
            <Button onClick={handleSubmit} color="primary" disabled={loading}>
              {loading ? 'Submitting...' : 'Submit'}
            </Button>
          </DialogActions>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ApplicationForm;
