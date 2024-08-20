import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button, Form, Carousel, Card } from 'react-bootstrap';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/system';
import { Rating } from '@mui/material';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import image1 from '../assets/car-loan.png';
import image2 from '../assets/mortgage-loan.png';
import image3 from '../assets/personal-loan.png';
import image4 from '../assets/business-loan.png';
import image5 from '../assets/student-loan.png';

// Styled components
const MainContainer = styled('div')(({ theme }) => ({
  backgroundColor: '#f9fafc',
  padding: theme.spacing(5),
  minHeight: '100vh',
  fontFamily: "'Roboto', sans-serif",
}));

const ReviewSection = styled('section')(({ theme }) => ({
  padding: theme.spacing(4),
  backgroundColor: '#ffffff',
  borderRadius: theme.shape.borderRadius,
  boxShadow: '0 8px 24px rgba(0, 0, 0, 0.1)',
  marginTop: theme.spacing(4),
  position: 'relative',
  maxWidth: '100%',
  overflowX: 'auto', // Prevent overflow
}));

const ReviewItem = styled(Card)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  padding: theme.spacing(2),
  display: 'flex',
  alignItems: 'center',
  borderRadius: theme.shape.borderRadius,
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
}));

const ReviewAvatar = styled(Avatar)(({ theme }) => ({
  marginRight: theme.spacing(2),
  width: theme.spacing(7),
  height: theme.spacing(7),
}));

const ReviewContent = styled('div')(({ theme }) => ({
  flex: 1,
}));

const ReviewText = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(1),
}));

const ReviewForm = styled(Form)(({ theme }) => ({
  marginBottom: theme.spacing(4),
}));

const ReviewButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(2),
  backgroundColor: '#007bff',
  color: '#ffffff',
  borderColor: '#007bff',
  '&:hover': {
    backgroundColor: '#0056b3',
    borderColor: '#0056b3',
  },
}));

const ProcessOverviewSection = styled(Box)(({ theme }) => ({
  padding: theme.spacing(4),
  backgroundColor: '#ffffff',
  borderRadius: theme.shape.borderRadius,
  boxShadow: '0 8px 24px rgba(0, 0, 0, 0.1)',
  marginTop: theme.spacing(4),
}));

const ProcessStep = styled(Typography)(({ theme }) => ({
  margin: theme.spacing(1, 0),
}));

const AIAssistantSection = styled(Box)(({ theme }) => ({
  padding: theme.spacing(4),
  backgroundColor: '#ffffff',
  borderRadius: theme.shape.borderRadius,
  boxShadow: '0 8px 24px rgba(0, 0, 0, 0.1)',
  marginTop: theme.spacing(4),
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
}));

const carouselImages = [image1, image2, image3, image4, image5];

const Home = () => {
  const [reviewData, setReviewData] = useState({ review: '', rating: 1, username: '', image: '' });
  const [reviews, setReviews] = useState([]);
  const [loanInfo, setLoanInfo] = useState('');
  const [aiResponse, setAiResponse] = useState([]);
  const [aiError, setAiError] = useState('');

  useEffect(() => {
    fetch('http://localhost:3000/api/reviews')
      .then((response) => response.json())
      .then((data) => setReviews(data))
      .catch((error) => console.error('Error fetching reviews:', error));
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setReviewData((prev) => ({ ...prev, [name]: value }));
  };

  const handleReviewSubmit = (e) => {
    e.preventDefault();

    if (reviewData.review.trim()) {
      fetch('http://localhost:3000/api/reviews', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(reviewData),
      })
        .then((response) => response.json())
        .then((newReview) => {
          setReviews((prev) => [newReview, ...prev]);
          setReviewData({ review: '', rating: 1, username: '', image: '' });
        })
        .catch((error) => console.error('Error creating review:', error));
    }
  };

  const handleDeleteReview = (id) => {
    fetch(`http://localhost:3000/api/reviews/${id}`, {
      method: 'DELETE',
    })
      .then((response) => {
        if (response.ok) {
          setReviews((prev) => prev.filter((review) => review.id !== id));
        } else {
          console.error('Failed to delete review');
        }
      })
      .catch((error) => console.error('Error deleting review:', error));
  };

  const handleAiSubmit = async (e) => {
    e.preventDefault();
    setAiError('');
    setAiResponse([]);

    try {
      const response = await fetch('http://localhost:3000/api/loans-Ai', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ loanInfo }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      const points = data.details ? data.details.split('\n') : ['No details available'];
      setAiResponse(points);
    } catch (error) {
      console.error('Error fetching AI response:', error);
      setAiError('Failed to get response from AI.');
    }
  };

  return (
    <MainContainer>
      <Container>
        <Row>
          {/* Main content */}
          <Col xs={12} md={8}>
            <Typography variant="h4" gutterBottom>
              Welcome to Ai-Dundi Loan App
            </Typography>
            <Typography variant="h6" paragraph>
              Explore our flexible loan options tailored to your needs, from personal loans to business financing.
            </Typography>
            <Typography variant="h6" paragraph>
              Check out our latest reviews and share your experience with us.
            </Typography>

            {/* Image Carousel */}
            <Carousel interval={2000}>
              {carouselImages.map((img, index) => (
                <Carousel.Item key={index}>
                  <img
                    className="d-block w-100"
                    src={img}
                    alt={`Slide ${index + 1}`}
                    style={{ height: '500px', objectFit: 'cover' }}
                  />
                </Carousel.Item>
              ))}
            </Carousel>

            {/* Process Overview Section */}
            <ProcessOverviewSection>
              <Typography variant="h5" gutterBottom>
                Loan Process Overview
              </Typography>
              <Row>
                <Col xs={12} md={6}>
                  <ProcessStep variant="body1">1. Apply online</ProcessStep>
                  <ProcessStep variant="body1">2. Get approved</ProcessStep>
                  <ProcessStep variant="body1">3. Accept offer</ProcessStep>
                  <ProcessStep variant="body1">4. Receive funds</ProcessStep>
                </Col>
                <Col xs={12} md={6}>
                  <Typography variant="body2" color="textSecondary">
                    Follow these steps to process your loan smoothly and with transparency.
                  </Typography>
                </Col>
              </Row>
            </ProcessOverviewSection>

            {/* AI Assistant Section */}
            <AIAssistantSection>
              <Typography variant="h5" gutterBottom>
                Ask Our AI Assistant
              </Typography>
              <Typography variant="body1" paragraph>
                Have questions or need assistance? Our AI assistant is ready to help with any inquiries about our loan services or application process.
              </Typography>
              <Form onSubmit={handleAiSubmit} style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <Form.Group controlId="aiQuestion" style={{ flexGrow: 1 }}>
                  <Form.Control
                    as="textarea"
                    rows={2}
                    placeholder="Type your question here..."
                    value={loanInfo}
                    onChange={(e) => setLoanInfo(e.target.value)}
                    style={{ borderRadius: '30px', padding: '1rem', fontSize: '1rem' }}
                  />
                </Form.Group>
                <IconButton type="submit" color="primary" aria-label="ask">
                  <ArrowUpwardIcon />
                </IconButton>
              </Form>
              {aiResponse.length > 0 && (
                <ul>
                  {aiResponse.map((point, index) => (
                    <li key={index}>{point}</li>
                  ))}
                </ul>
              )}
              {aiError && <Typography color="error">{aiError}</Typography>}
            </AIAssistantSection>
          </Col>

          {/* Review Section */}
          <Col xs={12} md={4}>
            <ReviewSection>
              <Typography variant="h5" gutterBottom>
                Reviews
              </Typography>
              <ReviewForm onSubmit={handleReviewSubmit}>
                <Form.Group controlId="username">
                  <Form.Control
                    type="text"
                    placeholder="Your name"
                    name="username"
                    value={reviewData.username}
                    onChange={handleInputChange}
                    required
                  />
                </Form.Group>
                <Form.Group controlId="review">
                  <Form.Control
                    as="textarea"
                    rows={3}
                    placeholder="Your review"
                    name="review"
                    value={reviewData.review}
                    onChange={handleInputChange}
                    required
                  />
                </Form.Group>
                <Form.Group controlId="rating">
                  <Form.Label>Rating</Form.Label>
                  <Rating
                    name="rating"
                    value={reviewData.rating}
                    onChange={(event, newValue) => setReviewData((prev) => ({ ...prev, rating: newValue }))}
                  />
                </Form.Group>
                <Form.Group controlId="image">
                  <Form.Control
                    type="text"
                    placeholder="Image URL (optional)"
                    name="image"
                    value={reviewData.image}
                    onChange={handleInputChange}
                  />
                </Form.Group>
                <ReviewButton type="submit">Submit Review</ReviewButton>
              </ReviewForm>

              {reviews.map((review) => (
                <ReviewItem key={review.id}>
                  <ReviewAvatar src={review.image || ''} alt={review.username} />
                  <ReviewContent>
                    <Typography variant="h6">{review.username}</Typography>
                    <ReviewText variant="body2">{review.review}</ReviewText>
                    <Rating readOnly value={review.rating} />
                    <IconButton onClick={() => handleDeleteReview(review.id)} color="error">
                      <DeleteOutlineIcon />
                    </IconButton>
                  </ReviewContent>
                </ReviewItem>
              ))}
            </ReviewSection>
          </Col>
        </Row>
      </Container>
    </MainContainer>
  );
};

export default Home;

