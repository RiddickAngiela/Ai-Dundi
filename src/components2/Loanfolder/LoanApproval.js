import React from 'react';
import { Container, Typography, Card, CardContent, Grid, Button } from '@mui/material';
import { useLocation } from 'react-router-dom';

const LoanApproval = () => {
  const location = useLocation();
  const { applicationData } = location.state || {};
  const [loading] = React.useState(false); // Simulating loading state, modify as needed

  if (loading) return <Typography>Loading...</Typography>;

  // Default values and type-checking
  const annualIncome = Number(applicationData?.annualIncome) || 0;
  const loanAmount = Number(applicationData?.loanAmount) || 0;

  return (
    <Container className="my-4">
      <Typography variant="h4" gutterBottom>
        Loan Approval Process
      </Typography>
      <Card style={{ marginBottom: '16px', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
        <CardContent>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography variant="h6" gutterBottom>Loan Data</Typography>
              {applicationData ? (
                <div>
                  <Typography><strong>Full Name:</strong> {applicationData.fullName}</Typography>
                  <Typography><strong>Date of Birth:</strong> {new Date(applicationData.dob).toLocaleDateString()}</Typography>
                  <Typography><strong>Address:</strong> {applicationData.address}</Typography>
                  <Typography><strong>Annual Income:</strong> ${annualIncome.toFixed(2)}</Typography>
                  <Typography><strong>Loan Amount:</strong> ${loanAmount.toFixed(2)}</Typography>
                  <Typography><strong>Loan Purpose:</strong> {applicationData.loanPurpose}</Typography>
                  <Typography><strong>Repayment Term:</strong> {applicationData.repaymentTerm} months</Typography>
                  {applicationData && (
                    <Button
                      variant="contained"
                      color="success"
                      style={{
                        marginTop: '16px',
                        borderRadius: '8px',
                        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)'
                      }}
                    >
                      Loan Pending
                    </Button>
                  )}
                </div>
              ) : (
                <Typography>No application data available.</Typography>
              )}
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Container>
  );
};

export default LoanApproval