import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Tabs, Tab } from 'react-bootstrap';
import { TextField, Typography, Card, CardContent } from '@mui/material';

const PaymentProcess = () => {
  const [key, setKey] = useState('card');

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col md={6}>
          <Card>
            <CardContent>
              <Typography variant="h5" component="div" gutterBottom>
                Payment Process
              </Typography>
              <Tabs
                id="payment-method-tabs"
                activeKey={key}
                onSelect={(k) => setKey(k)}
                className="mb-3"
              >
                <Tab eventKey="card" title="Credit/Debit Card">
                  <Form>
                    <Form.Group controlId="formCardNumber">
                      <TextField
                        label="Card Number"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        required
                      />
                    </Form.Group>

                    <Form.Group controlId="formCardName">
                      <TextField
                        label="Card Holder Name"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        required
                      />
                    </Form.Group>

                    <Form.Group controlId="formExpiryDate">
                      <TextField
                        label="Expiry Date"
                        type="month"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        required
                      />
                    </Form.Group>

                    <Form.Group controlId="formCVC">
                      <TextField
                        label="CVC"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        required
                      />
                    </Form.Group>

                    <Button variant="primary" type="submit" className="mt-3">
                      Submit Payment
                    </Button>
                  </Form>
                </Tab>
                <Tab eventKey="mpesa" title="M-Pesa">
                  <Form>
                    <Form.Group controlId="formMpesaNumber">
                      <TextField
                        label="M-Pesa Number"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        required
                      />
                    </Form.Group>

                    <Form.Group controlId="formMpesaCode">
                      <TextField
                        label="M-Pesa Confirmation Code"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        required
                      />
                    </Form.Group>

                    <Button variant="primary" type="submit" className="mt-3">
                      Submit Payment
                    </Button>
                  </Form>
                </Tab>
              </Tabs>
            </CardContent>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default PaymentProcess;
