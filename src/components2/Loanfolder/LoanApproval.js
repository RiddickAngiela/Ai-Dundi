import React from 'react';
import { Container, Typography, Card, CardContent, Grid } from '@mui/material';
import { useLocation } from 'react-router-dom';

const LoanApproval = () => {
  const location = useLocation();
  console.log('Location state:', location.state); // Log to check if data is passed
  const { eligibilityData, applicationData } = location.state || {};

  return (
    <Container className="my-4">
      <Typography variant="h4" gutterBottom>
        Loan Approval Process
      </Typography>
      <Card style={{ marginBottom: '16px', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
        <CardContent>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography variant="h6" gutterBottom></Typography>
              {eligibilityData ? (
                <div>
                  <Typography><strong>First Name:</strong> {eligibilityData.firstName}</Typography>
                  <Typography><strong>Last Name:</strong> {eligibilityData.lastName}</Typography>
                  <Typography><strong>ID Number:</strong> {eligibilityData.idNumber}</Typography>
                  <Typography><strong>Age:</strong> {eligibilityData.age}</Typography>
                  <Typography><strong>Employment Status:</strong> {eligibilityData.employmentStatus}</Typography>
                  <Typography><strong>Work ID:</strong> {eligibilityData.workId}</Typography>
                  <Typography><strong>Next of Kin:</strong> {eligibilityData.nextOfKin}</Typography>
                  <Typography><strong>Account Number:</strong> {eligibilityData.accountNumber}</Typography>
                  <Typography><strong>Date of Birth:</strong> {eligibilityData.dateOfBirth}</Typography>
                  <Typography><strong>Gender:</strong> {eligibilityData.gender}</Typography>
                </div>
              ) : (
                <Typography>No eligibility data available.</Typography>
              )}
            </Grid>
            <Grid item xs={12} style={{ borderTop: '1px solid #ddd', paddingTop: '16px' }}>
              <Typography variant="h6" gutterBottom>Loan Application Details</Typography>
              {applicationData ? (
                <div>
                  <Typography><strong>Full Name:</strong> {applicationData.fullName}</Typography>
                  <Typography><strong>Date of Birth:</strong> {applicationData.dob}</Typography>
                  <Typography><strong>Address:</strong> {applicationData.address}</Typography>
                  <Typography><strong>Annual Income:</strong> {applicationData.annualIncome}</Typography>
                  <Typography><strong>Loan Amount:</strong> {applicationData.loanAmount}</Typography>
                  <Typography><strong>Loan Purpose:</strong> {applicationData.loanPurpose}</Typography>
                  <Typography><strong>Repayment Term:</strong> {applicationData.repaymentTerm}</Typography>
                  <Typography
                    style={{
                      color: 'red',
                      fontWeight: 'bold',
                      marginTop: '8px'
                    }}
                  >
                    <strong>Status:</strong> Pending
                  </Typography>
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

export default LoanApproval;
