import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, TextField, Button } from '@mui/material';
import { Form } from 'react-bootstrap';

const ApplicationForm = ({ open, handleClose }) => {
  return (
    <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
      <DialogTitle>Loan Application</DialogTitle>
      <DialogContent>
        <Form>
          <TextField
            autoFocus
            margin="dense"
            id="fullName"
            label="Full Name"
            type="text"
            fullWidth
            variant="outlined"
            className="mb-3"
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
          />
          <TextField
            margin="dense"
            id="address"
            label="Address"
            type="text"
            fullWidth
            variant="outlined"
            className="mb-3"
          />
          <TextField
            margin="dense"
            id="annualIncome"
            label="Annual Income"
            type="number"
            fullWidth
            variant="outlined"
            className="mb-3"
          />
          <TextField
            margin="dense"
            id="loanAmount"
            label="Loan Amount Requested"
            type="number"
            fullWidth
            variant="outlined"
            className="mb-3"
          />
          <TextField
            margin="dense"
            id="loanPurpose"
            label="Loan Purpose"
            type="text"
            fullWidth
            variant="outlined"
            className="mb-3"
          />
          <TextField
            margin="dense"
            id="repaymentTerm"
            label="Repayment Term (in months)"
            type="number"
            fullWidth
            variant="outlined"
            className="mb-3"
          />
        </Form>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Cancel
        </Button>
        <Button onClick={() => {
          // Handle form submission logic
          handleClose();
        }} color="primary">
          Submit
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default ApplicationForm;

