import React, { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, TextField, Button } from '@mui/material';
import axios from 'axios';

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
            autoFocus
            margin="dense"
            id="fullName"
            label="Full Name"
            type="text"
            fullWidth
            variant="outlined"
            className="mb-3"
            value={formData.fullName}
            onChange={handleChange}
          />
          <TextField
            margin="dense"
            id="dob"
            label="Date of Birth"
            type="date"
            fullWidth
            variant="outlined"
            InputLabelProps={{ shrink: true }}
            className="mb-3"
            value={formData.dob}
            onChange={handleChange}
          />
          <TextField
            margin="dense"
            id="address"
            label="Address"
            type="text"
            fullWidth
            variant="outlined"
            className="mb-3"
            value={formData.address}
            onChange={handleChange}
          />
          <TextField
            margin="dense"
            id="annualIncome"
            label="Annual Income"
            type="number"
            fullWidth
            variant="outlined"
            className="mb-3"
            value={formData.annualIncome}
            onChange={handleChange}
          />
          <TextField
            margin="dense"
            id="loanAmount"
            label="Loan Amount"
            type="number"
            fullWidth
            variant="outlined"
            className="mb-3"
            value={formData.loanAmount}
            onChange={handleChange}
          />
          <TextField
            margin="dense"
            id="loanPurpose"
            label="Loan Purpose"
            type="text"
            fullWidth
            variant="outlined"
            className="mb-3"
            value={formData.loanPurpose}
            onChange={handleChange}
          />
          <TextField
            margin="dense"
            id="repaymentTerm"
            label="Repayment Term"
            type="text"
            fullWidth
            variant="outlined"
            className="mb-3"
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

