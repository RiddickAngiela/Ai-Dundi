import React, { useState } from 'react';
import { Button, ButtonGroup, Box, Typography, AppBar, Toolbar, CssBaseline, Container, Paper } from '@mui/material';
import ApplicationForm from './ApplicationForm';
import EligibilityCheck from './EligibilityCheck';
import LoanApproval from './LoanApproval';
import Offers from './Offers';
import Agreement from './Agreement';

const Loan = () => {
  const [isApplicationFormOpen, setApplicationFormOpen] = useState(false);

  const openApplicationForm = () => setApplicationFormOpen(true);
  const closeApplicationForm = () => setApplicationFormOpen(false);

  const [currentView, setCurrentView] = useState(''); 

  const handleViewChange = (view) => {
    setCurrentView(view);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <CssBaseline />
      <AppBar position="static" sx={{ mb: 4, backgroundColor: '#2196f3' }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: 'white' }}>
            Loan Services
          </Typography>
          <ButtonGroup variant="text" aria-label="text button group">
            <Button onClick={() => handleViewChange('eligibility-check')} color="inherit">Eligibility Check</Button>
            <Button onClick={openApplicationForm} color="inherit">Application Form</Button>
            <Button onClick={() => handleViewChange('loan-approval')} color="inherit">Loan Approval</Button>
            <Button onClick={() => handleViewChange('offers')} color="inherit">Offers</Button>
            <Button onClick={() => handleViewChange('agreement')} color="inherit">Agreement</Button>
          </ButtonGroup>
        </Toolbar>
      </AppBar>
      <Container maxWidth="lg" sx={{ p: 3 }}>
        <Paper elevation={3} sx={{ p: 3, borderRadius: 2 }}>
          {currentView === 'eligibility-check' && <EligibilityCheck />}
          {currentView === 'application-form' && <ApplicationForm open={false} handleClose={() => {}} />}
          {currentView === 'loan-approval' && <LoanApproval />}
          {currentView === 'offers' && <Offers />}
          {currentView === 'agreement' && <Agreement />}
        </Paper>
      </Container>
      <ApplicationForm open={isApplicationFormOpen} handleClose={closeApplicationForm} />
    </Box>
  );
};

export default Loan;
