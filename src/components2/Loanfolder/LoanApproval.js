import React, { useEffect, useState } from 'react';
import { Container, Typography, Card, CardContent, Grid, Button } from '@mui/material';
import { useLocation } from 'react-router-dom';
import axios from 'axios'; // Ensure axios is installed and imported

const LoanApproval = () => {
  const location = useLocation();
  const [applicationData, setApplicationData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const applicationId = location.state?.applicationId; // Ensure applicationId is passed in location state

  useEffect(() => {
    const fetchApplicationData = async () => {
      try {
        // Fetch data from the API
        const response = await axios.get(`/api/loan-applications/${applicationId}`);
        setApplicationData(response.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (applicationId) {
      fetchApplicationData();
    }
  }, [applicationId]);

  if (loading) return <Typography>Loading...</Typography>;
  if (error) return <Typography>Error: {error}</Typography>;

  return (
    <Container className="my-4">
      <Typography variant="h4" gutterBottom>
        Loan Approval Process
      </Typography>
      <Card style={{ marginBottom: '16px', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
        <CardContent>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography variant="h6" gutterBottom>Eligibility Data</Typography>
              {applicationData ? (
                <div>
                  <Typography><strong>Full Name:</strong> {applicationData.fullName}</Typography>
                  <Typography><strong>Date of Birth:</strong> {new Date(applicationData.dob).toLocaleDateString()}</Typography>
                  <Typography><strong>Address:</strong> {applicationData.address}</Typography>
                  <Typography><strong>Annual Income:</strong> ${applicationData.annualIncome.toFixed(2)}</Typography>
                  <Typography><strong>Loan Amount:</strong> ${applicationData.loanAmount.toFixed(2)}</Typography>
                  <Typography><strong>Loan Purpose:</strong> {applicationData.loanPurpose}</Typography>
                  <Typography><strong>Repayment Term:</strong> {applicationData.repaymentTerm} months</Typography>
                </div>
              ) : (
                <Typography>No application data available.</Typography>
              )}
            </Grid>
          </Grid>
        </CardContent>
      </Card>
      {applicationData && (
        <Button
          variant="contained"
          color="success"
          style={{
            position: 'fixed',
            bottom: '16px',
            right: '16px',
            borderRadius: '8px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)'
          }}
        >
          Loan Pending
        </Button>
      )}
    </Container>
  );
};

export default LoanApproval;
