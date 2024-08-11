import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import { TextField, Typography, Alert } from '@mui/material';

const DIC = () => {
  const [principal, setPrincipal] = useState('');
  const [rate, setRate] = useState('');
  const [term, setTerm] = useState('');
  const [interest, setInterest] = useState(null);
  const [error, setError] = useState('');

  const calculateInterest = () => {
    if (!principal || !rate || !term) {
      setError('Please fill in all fields.');
      return;
    }

    const P = parseFloat(principal);
    const R = parseFloat(rate) / 100 / 12; // monthly interest rate
    const T = parseInt(term) * 12; // loan term in months

    if (isNaN(P) || isNaN(R) || isNaN(T)) {
      setError('Invalid input. Please enter valid numbers.');
      return;
    }

    const interestAmountUSD = P * R * T;
    const exchangeRate = 140; // Exchange rate from USD to KES
    const interestAmountKES = (interestAmountUSD * exchangeRate).toFixed(2);

    setInterest(interestAmountKES);
    setError('');
  };

  const resetForm = () => {
    setPrincipal('');
    setRate('');
    setTerm('');
    setInterest(null);
    setError('');
  };

  return (
    <Container style={{ backgroundColor: '#fff', padding: '2rem', borderRadius: '15px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
      <Row className="justify-content-md-center mt-4">
        <Col md={8}>
          <Card style={{ border: '2px solid #007bff', borderRadius: '15px', boxShadow: '0 4px 8px rgba(0,0,0,0.2)' }}>
            <Card.Body style={{ padding: '2rem' }}>
              <Typography variant="h4" component="div" gutterBottom style={{ marginBottom: '1rem', textAlign: 'center', color: '#007bff' }}>
                Interest Calculation
              </Typography>
              {error && <Alert severity="error" style={{ marginBottom: '1rem' }}>{error}</Alert>}
              <Form>
                <Form.Group controlId="formPrincipal">
                  <TextField
                    label="Principal Amount"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    value={principal}
                    onChange={(e) => setPrincipal(e.target.value)}
                    required
                    style={{ marginBottom: '1rem' }}
                  />
                </Form.Group>

                <Form.Group controlId="formRate">
                  <TextField
                    label="Interest Rate (%)"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    value={rate}
                    onChange={(e) => setRate(e.target.value)}
                    required
                    style={{ marginBottom: '1rem' }}
                  />
                </Form.Group>

                <Form.Group controlId="formTerm">
                  <TextField
                    label="Loan Term (Years)"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    value={term}
                    onChange={(e) => setTerm(e.target.value)}
                    required
                    style={{ marginBottom: '1rem' }}
                  />
                </Form.Group>

                <Button variant="primary" className="mt-3" onClick={calculateInterest} style={{ marginRight: '1rem' }}>
                  Calculate Interest
                </Button>
                <Button variant="secondary" className="mt-3" onClick={resetForm}>
                  Reset
                </Button>
              </Form>
              {interest !== null && (
                <Typography variant="h5" component="div" className="mt-3" style={{ textAlign: 'center', color: '#28a745' }}>
                  Total Interest: KES {interest}
                </Typography>
              )}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default DIC;

