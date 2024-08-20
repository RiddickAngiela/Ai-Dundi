import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button, Form, Carousel } from 'react-bootstrap';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/system';
import { Rating } from '@mui/material';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import image1 from '../assets/car-loan.png';
import image2 from '../assets/mortgage-loan.png';
import image3 from '../assets/personal-loan.png';
import image4 from '../assets/business-loan.png';
import image5 from '../assets/student-loan.png';

// Styled components
const MainContainer = styled('div')(({ theme }) => ({
  backgroundColor: '#f4f4f9',
  padding: theme.spacing(5),
  minHeight: '100vh',
}));

const ReviewSection = styled('section')(({ theme }) => ({
  padding: theme.spacing(4),
  backgroundColor: '#ffffff',
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[2],
  marginTop: theme.spacing(4),
}));

const ReviewItem = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  padding: theme.spacing(2),
  borderBottom: '1px solid #eeeeee',
  position: 'relative',
}));

const ReviewAvatar = styled(Avatar)(({ theme }) => ({
  marginRight: theme.spacing(2),
  width: theme.spacing(7),
  height: theme.spacing(7),
}));

const ReviewContent = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
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

const IconContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  marginTop: theme.spacing(1),
}));

const ProcessOverviewSection = styled(Box)(({ theme }) => ({
  padding: theme.spacing(4),
  backgroundColor: '#ffffff',
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[1],
  marginTop: theme.spacing(4),
}));

const ProcessStep = styled(Typography)(({ theme }) => ({
  margin: theme.spacing(1, 0),
}));

const AIAssistantSection = styled(Box)(({ theme }) => ({
  padding: theme.spacing(4),
  backgroundColor: '#f9f9f9',
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[1],
  marginTop: theme.spacing(4),
}));

const carouselImages = [image1, image2, image3, image4, image5];

const Home = () => {
  const [reviewData, setReviewData] = useState({ review: '', rating: 1, username: '', image: '' });
  const [reviews, setReviews] = useState([]);
  const [loanInfo, setLoanInfo] = useState('');
  const [aiResponse, setAiResponse] = useState('');
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
    setAiResponse('');

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
      setAiResponse(data.details || 'No details available');
    } catch (error) {
      console.error('Error fetching AI response:', error);
      setAiError('Failed to get response from AI.');
    }
  };

  return (
    <MainContainer>
      <Container>
        <Row>
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
                    style={{ height: '400px', objectFit: 'cover' }}
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
              <Form onSubmit={handleAiSubmit}>
                <Form.Group controlId="aiQuestion">
                  <Form.Control
                    as="textarea"
                    rows={3}
                    placeholder="Type your question here..."
                    value={loanInfo}
                    onChange={(e) => setLoanInfo(e.target.value)}
                  />
                </Form.Group>
                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Form>
              {aiResponse && (
                <Typography variant="body1" paragraph>
                  {aiResponse}
                </Typography>
              )}
              {aiError && (
                <Typography variant="body2" color="error" paragraph>
                  {aiError}
                </Typography>
              )}
            </AIAssistantSection>
          </Col>
          <Col xs={12} md={4}>
            <ReviewSection>
              <Typography variant="h5" gutterBottom>
                Share Your Experience
              </Typography>
              <ReviewForm onSubmit={handleReviewSubmit}>
                <Form.Group controlId="username">
                  <Form.Control
                    type="text"
                    placeholder="Enter your name"
                    name="username"
                    value={reviewData.username}
                    onChange={handleInputChange}
                  />
                </Form.Group>
                <Form.Group controlId="review">
                  <Form.Control
                    as="textarea"
                    rows={3}
                    placeholder="Write your review here..."
                    name="review"
                    value={reviewData.review}
                    onChange={handleInputChange}
                  />
                </Form.Group>
                <Form.Group controlId="rating">
                  <Rating
                    name="rating"
                    value={reviewData.rating}
                    onChange={(e, value) => setReviewData((prev) => ({ ...prev, rating: value }))}
                  />
                </Form.Group>
                <ReviewButton type="submit">Submit Review</ReviewButton>
              </ReviewForm>

              {/* Review Items */}
              {reviews.map((review) => (
                <ReviewItem key={review.id}>
                  <ReviewContent>
                    <div>
                      <ReviewAvatar alt={review.username} src={review.image} />
                      <Typography variant="h6">{review.username}</Typography>
                      <Typography variant="body2">{review.review}</Typography>
                      <Rating value={review.rating} readOnly />
                    </div>
                    <IconButton onClick={() => handleDeleteReview(review.id)}>
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

