import React, { useState } from 'react';
import { Container, Typography, Card, CardContent, Grid, Button, Paper } from '@mui/material';
import { useLocation } from 'react-router-dom';

const LoanApproval = () => {
  const location = useLocation();
  const { applicationData } = location.state || {};
  const [loading, setLoading] = useState(false); // State for loading
  const [error, setError] = useState(null); // State for error handling
  const [submitted, setSubmitted] = useState(false); // State for submission status

  // Default values and type-checking
  const annualIncome = Number(applicationData?.annualIncome) || 0;
  const loanAmount = Number(applicationData?.loanAmount) || 0;

  const handleSubmit = async () => {
    setLoading(true); // Start loading
    setError(null); // Reset error state

    try {
      const response = await fetch('http://localhost:3000/api/loanapproval/submit', { // Updated URL
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(applicationData),
      });

      if (!response.ok) {
        throw new Error('Failed to submit loan application');
      }

      const data = await response.json();
      console.log('Loan application submitted successfully:', data);

      // Handle successful submission
      setSubmitted(true);
      alert('Loan application submitted successfully!');
    } catch (error) {
      console.error('Error submitting loan application:', error);
      setError('Failed to submit loan application. Please try again.');
    } finally {
      setLoading(false); // Stop loading
    }
  };

  if (loading) return <Typography>Loading...</Typography>;

  return (
    <Container className="my-4">
      <Typography variant="h4" gutterBottom>
        Loan Approval Process
      </Typography>
      <Card
        style={{
          marginBottom: '16px',
          borderRadius: '8px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        }}
      >
        <CardContent>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography variant="h6" gutterBottom>
                Loan Data
              </Typography>
              {applicationData ? (
                <div>
                  <Typography>
                    <strong>Full Name:</strong> {applicationData.fullName}
                  </Typography>
                  <Typography>
                    <strong>Date of Birth:</strong> {new Date(applicationData.dob).toLocaleDateString()}
                  </Typography>
                  <Typography>
                    <strong>Address:</strong> {applicationData.address}
                  </Typography>
                  <Typography>
                    <strong>Annual Income:</strong> ${annualIncome.toFixed(2)}
                  </Typography>
                  <Typography>
                    <strong>Loan Amount:</strong> ${loanAmount.toFixed(2)}
                  </Typography>
                  <Typography>
                    <strong>Loan Purpose:</strong> {applicationData.loanPurpose}
                  </Typography>
                  <Typography>
                    <strong>Repayment Term:</strong> {applicationData.repaymentTerm} months
                  </Typography>
                  {submitted ? (
                    <Paper
                      elevation={3}
                      style={{
                        padding: '16px',
                        marginTop: '16px',
                        borderRadius: '8px',
                        backgroundColor: '#f0f4f7',
                        color: '#4caf50',
                        textAlign: 'center',
                      }}
                    >
                      <Typography variant="h6">
                        <strong>Loan Application is Pending.</strong>
                      </Typography>
                      <Typography variant="body1">
                        Your loan application has been successfully submitted and is under review. We will notify you of any updates.
                      </Typography>
                    </Paper>
                  ) : (
                    <Button
                      variant="contained"
                      color="success"
                      style={{
                        marginTop: '16px',
                        borderRadius: '8px',
                        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                      }}
                      onClick={handleSubmit}
                    >
                      Submit Loan Application
                    </Button>
                  )}
                </div>
              ) : (
                <Typography>No application data available.</Typography>
              )}
              {error && (
                <Typography color="error" style={{ marginTop: '16px' }}>
                  {error}
                </Typography>
              )}
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Container>
  );
};

export default LoanApproval;
