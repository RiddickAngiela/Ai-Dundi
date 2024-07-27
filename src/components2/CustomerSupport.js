import React from 'react';
import { Container, Row, Col, Card, ListGroup, Button } from 'react-bootstrap';
import { Typography, ThemeProvider, createTheme } from '@mui/material';

// Create a Material UI theme
const theme = createTheme({
  palette: {
    primary: {
      main: '#007bff',
      light: '#5bc0de',
      dark: '#0056b3',
      contrastText: '#fff',
    },
    background: {
      default: '#f5f5f5',
      paper: '#fff',
    },
  },
  typography: {
    h3: {
      fontWeight: 500,
    },
    h5: {
      fontWeight: 500,
    },
    body1: {
      fontSize: '1rem',
    },
    body2: {
      fontSize: '0.875rem',
    },
  },
});

const CustomerSupport = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container className="my-5">
        <Row>
          <Col>
            <Typography variant="h3" color="primary" align="center" gutterBottom>
              Customer Support
            </Typography>
            <Typography variant="body1" align="center" paragraph>
              We are here to assist you with any queries or issues you may have. Our dedicated customer support team is always ready to help you. Below are the different ways you can reach us and find answers to your questions.
            </Typography>
          </Col>
        </Row>
        
        <Row className="mb-5">
          <Col md={6}>
            <Card>
              <Card.Header style={{ backgroundColor: theme.palette.primary.light, color: theme.palette.primary.contrastText }}>
                <Typography variant="h5">Contact Us</Typography>
              </Card.Header>
              <Card.Body>
                <Typography variant="body1">
                  Feel free to reach out to us through any of the following channels:
                </Typography>
                <ul>
                  <li><strong>Email:</strong> support@aidundi.com</li>
                  <li><strong>Phone:</strong> +123 456 7890</li>
                  <li><strong>Address:</strong> 123 Loan Street, Finance City, Country</li>
                </ul>
                <Button variant="contained" color="primary" href="mailto:support@aidundi.com">Email Us</Button>
              </Card.Body>
            </Card>
          </Col>
          
          <Col md={6}>
            <Card>
              <Card.Header style={{ backgroundColor: theme.palette.primary.light, color: theme.palette.primary.contrastText }}>
                <Typography variant="h5">Live Chat</Typography>
              </Card.Header>
              <Card.Body>
                <Typography variant="body1">
                  Get instant support from our customer service agents through our live chat feature. Click the button below to start chatting with us.
                </Typography>
                <Button variant="contained" color="primary" href="#">Start Live Chat</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        
        <Row className="mb-5">
          <Col>
            <Card>
              <Card.Header style={{ backgroundColor: theme.palette.primary.light, color: theme.palette.primary.contrastText }}>
                <Typography variant="h5">Frequently Asked Questions</Typography>
              </Card.Header>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <Typography variant="body1"><strong>Q1:</strong> How do I apply for a loan?</Typography>
                  <Typography variant="body2">You can apply for a loan through our online application form available on the homepage.</Typography>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Typography variant="body1"><strong>Q2:</strong> What documents are required for loan approval?</Typography>
                  <Typography variant="body2">We require a valid ID, proof of income, and a completed application form.</Typography>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Typography variant="body1"><strong>Q3:</strong> How long does it take to process a loan application?</Typography>
                  <Typography variant="body2">Loan applications are typically processed within 24-48 hours.</Typography>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Typography variant="body1"><strong>Q4:</strong> What are the repayment options available?</Typography>
                  <Typography variant="body2">We offer flexible repayment options including monthly and bi-weekly payments.</Typography>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Typography variant="body1"><strong>Q5:</strong> How can I check my loan balance?</Typography>
                  <Typography variant="body2">You can check your loan balance by logging into your account on our website or by contacting our customer support.</Typography>
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
        </Row>

        <Row className="mb-5">
          <Col>
            <Card>
              <Card.Header style={{ backgroundColor: theme.palette.primary.light, color: theme.palette.primary.contrastText }}>
                <Typography variant="h5">Feedback</Typography>
              </Card.Header>
              <Card.Body>
                <Typography variant="body1">
                  We value your feedback and suggestions. Please share your experience with us so we can continue to improve our services.
                </Typography>
                <Button variant="contained" color="primary" href="#">Give Feedback</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        
        <Row className="mb-5">
          <Col>
            <Card>
              <Card.Header style={{ backgroundColor: theme.palette.primary.light, color: theme.palette.primary.contrastText }}>
                <Typography variant="h5">Help Center</Typography>
              </Card.Header>
              <Card.Body>
                <Typography variant="body1">
                  Visit our Help Center for more detailed guides and troubleshooting tips. Find answers to common issues and learn how to use our services effectively.
                </Typography>
                <Button variant="contained" color="primary" href="#">Visit Help Center</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </ThemeProvider>
  );
};

export default CustomerSupport;

