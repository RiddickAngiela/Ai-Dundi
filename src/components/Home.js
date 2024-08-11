import React, { useState, useEffect } from 'react';
import { Button, Card, Container, Row, Col, Form } from 'react-bootstrap';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/system';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement } from 'chart.js';
import ApplicationForm from '../components2/Loanfolder/ApplicationForm'; // Import the ApplicationForm component

// Register Chart.js components
ChartJS.register(Title, Tooltip, Legend, ArcElement);

const WelcomeMessage = styled('div')(({ theme }) => ({
  marginTop: theme.spacing(4),
  padding: theme.spacing(2),
  backgroundColor: '#f5f5f5',
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[3],
  textAlign: 'center',
}));

const StyledCard = styled(Card)(({ theme }) => ({
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
  width: theme.spacing(14),
  height: theme.spacing(14),
  borderRadius: '50%',
  boxShadow: theme.shadows[3],
  padding: theme.spacing(2),
  backgroundColor: '#fff',
  border: '1px solid #e0e0e0',
  textAlign: 'center',
}));

const PartnerText = styled(Typography)(({ theme }) => ({
  marginTop: theme.spacing(1),
}));

const ReviewFormContainer = styled('div')(({ theme }) => ({
  marginTop: theme.spacing(4),
  padding: theme.spacing(2),
  backgroundColor: '#f5f5f5',
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[3],
  position: 'relative',
}));

const ReviewList = styled('div')(({ theme }) => ({
  marginTop: theme.spacing(4),
}));

const ReviewItem = styled(Card)(({ theme }) => ({
  padding: theme.spacing(2),
  marginBottom: theme.spacing(2),
  backgroundColor: '#fff',
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[1],
}));

const SendButton = styled(Button)(({ theme }) => ({
  position: 'absolute',
  right: theme.spacing(1),
  bottom: theme.spacing(1),
  padding: theme.spacing(1),
}));

const Home = () => {
  // State for dialog
  const [open, setOpen] = useState(false);
  const [reviewData, setReviewData] = useState({
    username: '',
    image: '',
    review: '',
    rating: 1,
  });
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    // Fetch existing reviews from backend
    fetch('http://localhost:3000/api/reviews')
      .then((response) => response.json())
      .then((data) => setReviews(data))
      .catch((error) => console.error('Error fetching reviews:', error));
  }, []);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleReviewChange = (e) => {
    const { name, value } = e.target;
    setReviewData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleRatingChange = (e) => {
    setReviewData((prev) => ({
      ...prev,
      rating: Number(e.target.value),
    }));
  };

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    const { username, image, review, rating } = reviewData;

    if (username && review.trim()) {
      fetch('http://localhost:3000/api/reviews', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, image, review, rating }),
      })
        .then((response) => response.json())
        .then((newReview) => {
          setReviews((prev) => [newReview, ...prev]);
          setReviewData({ username: '', image: '', review: '', rating: 1 });
        })
        .catch((error) => console.error('Error creating review:', error));
    }
  };

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
        <Typography variant="h4">Welcome to Your Financial Future!</Typography>
        <Typography variant="body1">Explore our loan options and take control of your finances today.</Typography>
      </WelcomeMessage>

      <Row className="mt-5">
        <Col md={4} className="mb-4">
          <StyledCard>
            <Typography variant="h5">Balance: $0.00</Typography>
            <Row className="mt-4">
              <Col>
                <Button variant="primary">Deposit</Button>
              </Col>
              <Col>
                <Button variant="secondary">Withdrawal</Button>
              </Col>
            </Row>
          </StyledCard>
          <Button variant="success" className="d-block mx-auto mb-4" onClick={handleClickOpen}>Apply for a Loan</Button>
        </Col>
        <Col md={8}>
          <PartnersContainer>
            <PartnerCard>
              <Avatar>💡</Avatar>
              <PartnerText variant="body2">Financial Tips</PartnerText>
            </PartnerCard>
            <PartnerCard>
              <Avatar>📈</Avatar>
              <PartnerText variant="body2">Featured Loan Offer</PartnerText>
            </PartnerCard>
            <PartnerCard>
              <Avatar>👥</Avatar>
              <PartnerText variant="body2">Customer Testimonials</PartnerText>
            </PartnerCard>
          </PartnersContainer>
        </Col>
      </Row>

      <Row className="mt-4">
        <Col md={4}>
          <StyledCard>
            <Typography variant="h5" gutterBottom>Analytics</Typography>
            <Pie data={data} />
          </StyledCard>
        </Col>
        <Col md={4}>
          <StyledCard>
            <Typography variant="h5" gutterBottom>Featured Loan Offer</Typography>
            <Typography variant="body1">Get our special offer with low interest rates and flexible terms. Apply now and take advantage of this limited-time offer!</Typography>
            <Button variant="info" className="mt-3">Learn More</Button>
          </StyledCard>
        </Col>
        <Col md={4}>
          <StyledCard>
            <Typography variant="h5" gutterBottom>Customer Testimonials</Typography>
            <Typography variant="body1">"Great service and support throughout the application process!" - Alex Smith</Typography>
            <Typography variant="body1">"The application was straightforward and quick. Highly recommended!" - Jessica Lee</Typography>
          </StyledCard>
        </Col>
      </Row>

      {/* Review Input Form */}
      <ReviewFormContainer>
        <Form onSubmit={handleReviewSubmit}>
          <Form.Group controlId="username">
            <Form.Control
              type="text"
              name="username"
              value={reviewData.username}
              onChange={handleReviewChange}
              placeholder="Username"
            />
          </Form.Group>
          <Form.Group controlId="image">
            <Form.Control
              type="text"
              name="image"
              value={reviewData.image}
              onChange={handleReviewChange}
              placeholder="Image URL (optional)"
            />
          </Form.Group>
          <Form.Group controlId="review">
            <Form.Control
              as="textarea"
              rows={2}
              name="review"
              value={reviewData.review}
              onChange={handleReviewChange}
              placeholder="Share your feedback..."
              style={{ resize: 'none' }}
            />
          </Form.Group>
          <Form.Group controlId="rating">
            <Form.Label>Rating</Form.Label>
            <Form.Control
              as="select"
              name="rating"
              value={reviewData.rating}
              onChange={handleRatingChange}
            >
              {[1, 2, 3, 4, 5].map((rating) => (
                <option key={rating} value={rating}>{rating}</option>
              ))}
            </Form.Control>
          </Form.Group>
          <SendButton
            variant="outline-primary"
            type="submit"
            title="Send"
          >
            <Typography variant="body1">→</Typography>
          </SendButton>
        </Form>
      </ReviewFormContainer>

      {/* Display Reviews */}
      <ReviewList>
        {reviews.length > 0 ? (
          reviews.map((review) => (
            <ReviewItem key={review.id}>
              <Typography variant="h6">{review.username}</Typography>
              {review.image && <Avatar src={review.image} />}
              <Typography variant="body1">{review.review}</Typography>
              <Typography variant="body2">Rating: {review.rating}</Typography>
              <Typography variant="body2">{new Date(review.createdAt).toLocaleDateString()}</Typography>
            </ReviewItem>
          ))
        ) : (
          <Typography variant="body1">No reviews yet. Be the first to leave a review!</Typography>
        )}
      </ReviewList>

      {/* Loan Application Dialog */}
      <ApplicationForm open={open} handleClose={handleClose} />
    </Container>
  );
};

export default Home;
