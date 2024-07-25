import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Typography } from '@mui/material';
import { styled } from '@mui/system';

const GradientCard = styled(Card)(({ theme }) => ({
  borderRadius: '20px',
  boxShadow: theme.shadows[10],
  overflow: 'hidden',
  background: 'linear-gradient(135deg, #f5f7fa, #c3cfe2)',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  '&:hover': {
    transform: 'translateY(-10px)',
    boxShadow: theme.shadows[15],
  },
}));

const StyledButton = styled(Button)(({ theme }) => ({
  borderRadius: '20px',
  padding: '10px 20px',
  fontSize: '16px',
  transition: 'background-color 0.3s ease',
  '&:hover': {
    backgroundColor: theme.palette.primary.dark,
  },
}));

const About = () => {
  return (
    <Container fluid className="p-5">
      <Typography variant="h2" align="center" gutterBottom color="primary">
        About Ai-Dundi
      </Typography>

      <Row className="my-5">
        <Col md={6}>
          <GradientCard>
            <Card.Body>
              <Typography variant="h4" gutterBottom color="textSecondary">
                Our Story
              </Typography>
              <Typography variant="body1">
                At Ai-Dundi, we revolutionize the way people access loans by leveraging advanced AI technology to provide personalized and efficient financial solutions. Founded in [Year], our mission is to make the borrowing process seamless and transparent.
              </Typography>
            </Card.Body>
          </GradientCard>
        </Col>
        <Col md={6}>
          <GradientCard>
            <Card.Body>
              <Typography variant="h4" gutterBottom color="textSecondary">
                Our Mission
              </Typography>
              <Typography variant="body1">
                Our mission is to empower individuals and businesses by providing accessible and customized financial solutions. We strive to foster financial inclusion and support economic growth through innovative technology.
              </Typography>
            </Card.Body>
          </GradientCard>
        </Col>
      </Row>

      <Row className="my-5">
        <Col md={12}>
          <GradientCard>
            <Card.Body>
              <Typography variant="h4" gutterBottom color="textSecondary">
                Our Team
              </Typography>
              <Typography variant="body1">
                Our team consists of experienced professionals in finance, technology, and customer service, dedicated to delivering exceptional service and innovative solutions. Meet the passionate individuals driving Ai-Dundi forward.
              </Typography>
              <StyledButton variant="contained" className="mt-3">
                Meet the Team
              </StyledButton>
            </Card.Body>
          </GradientCard>
        </Col>
      </Row>

      <Row className="my-5">
        <Col md={12}>
          <GradientCard>
            <Card.Body>
              <Typography variant="h4" gutterBottom color="textSecondary">
                Contact Us
              </Typography>
              <Typography variant="body1">
                We’d love to hear from you! For inquiries or feedback, please reach out to us at:
              </Typography>
              <Typography variant="body1">
                Email: support@ai-dundi.com<br />
                Phone: +123-456-7890
              </Typography>
            </Card.Body>
          </GradientCard>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
