import React from 'react';
import { Button, Card, Container, Row, Col } from 'react-bootstrap';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/system';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement } from 'chart.js';

// Register Chart.js components
ChartJS.register(Title, Tooltip, Legend, ArcElement);

const WelcomeMessage = styled('div')(({ theme }) => ({
  marginTop: theme.spacing(4),
  padding: theme.spacing(2),
  backgroundColor: '#f5f5f5',
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[3],
  textAlign: 'left',
}));

const BalanceCard = styled(Card)(({ theme }) => ({
  textAlign: 'center',
  padding: theme.spacing(4),
  marginBottom: theme.spacing(4),
  backgroundColor: '#fff',
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[5],
  border: '1px solid #e0e0e0',
}));

const PartnersContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  flexWrap: 'wrap',
  gap: theme.spacing(3),
  marginTop: theme.spacing(4),
}));

const PartnerCard = styled(Card)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: theme.spacing(12),
  height: theme.spacing(12),
  borderRadius: '50%',
  boxShadow: theme.shadows[3],
  padding: theme.spacing(2),
  backgroundColor: '#fff',
  border: '1px solid #e0e0e0',
}));

const PartnerText = styled(Typography)(({ theme }) => ({
  marginLeft: theme.spacing(2),
}));

const AnalyticsCard = styled(Card)(({ theme }) => ({
  padding: theme.spacing(4),
  marginBottom: theme.spacing(4),
  backgroundColor: '#fff',
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[5],
  border: '1px solid #e0e0e0',
}));

const BankDetailsCard = styled(Card)(({ theme }) => ({
  padding: theme.spacing(4),
  marginBottom: theme.spacing(4),
  backgroundColor: '#fff',
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[5],
  border: '1px solid #e0e0e0',
}));

const LoanSummaryCard = styled(Card)(({ theme }) => ({
  padding: theme.spacing(4),
  marginBottom: theme.spacing(4),
  backgroundColor: '#fff',
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[5],
  border: '1px solid #e0e0e0',
}));

const Home = () => {
  // Sample data for the pie chart
  const data = {
    labels: ['Income', 'Expenses', 'Savings'],
    datasets: [{
      data: [3000, 1500, 2000],
      backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
    }],
  };

  return (
    <Container>
      <WelcomeMessage>
        <Typography variant="h4">Welcome, User!</Typography>
      </WelcomeMessage>
      <Row className="mt-5">
        <Col md={4} className="mb-4">
          <BalanceCard>
            <Typography variant="h5">Balance: $0.00</Typography>
            <Row className="mt-4">
              <Col>
                <Button variant="primary">Deposit</Button>
              </Col>
              <Col>
                <Button variant="secondary">Withdrawal</Button>
              </Col>
            </Row>
          </BalanceCard>
          <Button variant="success" className="d-block mx-auto mb-4">Apply</Button>
        </Col>
        <Col md={8}>
          <PartnersContainer>
            {['Bank A', 'Bank B', 'Bank C', 'Bank D'].map((bank) => (
              <PartnerCard key={bank}>
                <Avatar>{bank[0]}</Avatar>
                <PartnerText variant="body2">{bank}</PartnerText>
              </PartnerCard>
            ))}
          </PartnersContainer>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col md={4}>
          <AnalyticsCard>
            <Typography variant="h5" gutterBottom>Analytics</Typography>
            <Pie data={data} />
          </AnalyticsCard>
        </Col>
        <Col md={4}>
          <BankDetailsCard>
            <Typography variant="h5" gutterBottom>Bank Details</Typography>
            <Typography variant="body1">Account Number: 123456789</Typography>
            <Typography variant="body1">Sort Code: 12-34-56</Typography>
            <Typography variant="body1">Bank Name: Example Bank</Typography>
          </BankDetailsCard>
        </Col>
        <Col md={4}>
          <LoanSummaryCard>
            <Typography variant="h5" gutterBottom>Loan Summary</Typography>
            <Typography variant="body1">Total Loan Amount: $10,000</Typography>
            <Typography variant="body1">Remaining Balance: $5,000</Typography>
            <Typography variant="body1">Next Payment Due: 2024-08-15</Typography>
          </LoanSummaryCard>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
