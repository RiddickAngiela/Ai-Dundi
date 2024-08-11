import React, { useState } from 'react';
import { Box, Typography, AppBar, Toolbar, CssBaseline, Container, Paper } from '@mui/material';
import Offers from './Offers';
import EligibilityCheck from './EligibilityCheck';
import ApplicationForm from './ApplicationForm';
import LoanApproval from './LoanApproval';
import Agreement from './Agreement';

const Loan = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const handleNextStep = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <Offers onComplete={handleNextStep} />;
      case 2:
        return <EligibilityCheck onComplete={handleNextStep} />;
      case 3:
        return <ApplicationForm onComplete={handleNextStep} />;
      case 4:
        return <LoanApproval onComplete={handleNextStep} />;
      case 5:
        return <Agreement />;
      default:
        return <Typography variant="h6">All steps completed</Typography>;
    }
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <CssBaseline />
      <AppBar position="static" sx={{ mb: 4, backgroundColor: '#2196f3' }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: 'white' }}>
            Loan Services
          </Typography>
        </Toolbar>
      </AppBar>
      <Container maxWidth="lg" sx={{ p: 3 }}>
        <Paper elevation={3} sx={{ p: 3, borderRadius: 2 }}>
          {renderStep()}
        </Paper>
      </Container>
    </Box>
  );
};

export default Loan;

