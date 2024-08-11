import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Typography, Grid, Card, CardContent, Button, Box } from '@mui/material';
import 'bootstrap/dist/css/bootstrap.min.css';

// Import images from assets folder
import personalLoanImage from '../../assets/personal-loan.png';
import mortgageLoanImage from '../../assets/mortgage-loan.png';
import carLoanImage from '../../assets/car-loan.png';
import businessLoanImage from '../../assets/business-loan.png';
import studentLoanImage from '../../assets/student-loan.png';

const loanCategories = [
  {
    title: 'Personal Loan',
    description: 'A personal loan is a type of unsecured loan that is offered based on your creditworthiness and ability to repay. Ideal for consolidating debt, making large purchases, or covering unexpected expenses.',
    image: personalLoanImage,
  },
  {
    title: 'Mortgage Loan',
    description: 'A mortgage loan is used to purchase or refinance a home. It is secured by the property itself, and typically has a long-term repayment plan. It can be tailored for first-time buyers, refinancers, or home equity lines.',
    image: mortgageLoanImage,
  },
  {
    title: 'Car Loan',
    description: 'A car loan is used to purchase a vehicle. The vehicle itself serves as collateral for the loan, which usually has a shorter repayment period compared to mortgages.',
    image: carLoanImage,
  },
  {
    title: 'Business Loan',
    description: 'A business loan is designed to help entrepreneurs and companies finance their operations, expansions, or start-up costs. It can come in the form of a term loan, line of credit, or equipment financing.',
    image: businessLoanImage,
  },
  {
    title: 'Student Loan',
    description: 'A student loan helps cover the cost of higher education. It may have favorable repayment terms and deferment options for students while they are still in school or during times of financial hardship.',
    image: studentLoanImage,
  }
];

const Offers = () => {
  const navigate = useNavigate(); // Initialize the navigate function

  const handleApplyClick = () => {
    navigate('/eligibility-check'); // Redirect to Eligibility Check
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>Loan Offers</Typography>
      <Grid container spacing={3}>
        {loanCategories.map((category, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card variant="outlined">
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  {category.title}
                </Typography>
                <Box display="flex" justifyContent="center" mb={2}>
                  <img
                    src={category.image}
                    alt={category.title}
                    style={{ maxWidth: '100%', height: 'auto', borderRadius: '8px' }}
                  />
                </Box>
                <Typography variant="body2" color="textSecondary" paragraph>
                  {category.description}
                </Typography>
                <Box textAlign="center">
                  <Button variant="contained" color="primary" onClick={handleApplyClick}>
                    Apply
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Offers;