import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
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
  const startLiveChat = () => {
    // Replace with your Google Meet link or function to create a meeting
    const meetLink = "https://meet.google.com/agi-dgib-qbr"; // Example link to create a new meeting
    window.open(meetLink, "_blank");
  };

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
                <Button variant="contained" color="primary" onClick={startLiveChat}>Start Live Chat</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        
        {/* Other sections... */}
      </Container>
    </ThemeProvider>
  );
};

export default CustomerSupport;
