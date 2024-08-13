import React, { useState, useEffect } from 'react';
import { Button, Container, Row, Col, Form } from 'react-bootstrap';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/system';
import { Rating } from '@mui/material';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement } from 'chart.js';
import ApplicationForm from '../components2/Loanfolder/ApplicationForm';

ChartJS.register(Title, Tooltip, Legend, ArcElement);

// Styled components
const MainContainer = styled(Container)(({ theme }) => ({
  backgroundColor: '#f4f4f9',
  padding: theme.spacing(5),
  minHeight: '100vh',
}));

const HeaderSection = styled('header')(({ theme }) => ({
  textAlign: 'center',
  marginBottom: theme.spacing(5),
}));

const HeroSection = styled('section')(({ theme }) => ({
  backgroundColor: '#ffffff',
  color: '#333',
  padding: theme.spacing(5),
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[4],
  textAlign: 'center',
  marginBottom: theme.spacing(5),
}));

const CardGrid = styled(Row)(({ theme }) => ({
  marginTop: theme.spacing(4),
  gap: theme.spacing(4),
}));

const Card = styled(Col)(({ theme }) => ({
  backgroundColor: '#ffffff',
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[2],
  padding: theme.spacing(3),
  textAlign: 'center',
  height: '100%',
}));

const ChartCard = styled(Card)(({ theme }) => ({
  height: '350px',
}));

const ReviewSection = styled('section')(({ theme }) => ({
  marginTop: theme.spacing(4),
  padding: theme.spacing(4),
  backgroundColor: '#ffffff',
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[2],
}));

const ReviewItem = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(2),
  borderBottom: '1px solid #eeeeee',
}));

const ReviewAvatar = styled(Avatar)(({ theme }) => ({
  marginRight: theme.spacing(2),
  width: theme.spacing(7),
  height: theme.spacing(7),
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

const Home = () => {
  const [open, setOpen] = useState(false);
  const [reviewData, setReviewData] = useState({ review: '', rating: 1, username: '', image: '' });
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
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
        body: JSON.stringify({
          username: reviewData.username,
          image: reviewData.image,
          review: reviewData.review,
          rating: reviewData.rating,
        }),
      })
        .then((response) => response.json())
        .then((newReview) => {
          setReviews((prev) => [newReview, ...prev]);
          setReviewData({ review: '', rating: 1, username: '', image: '' });
        })
        .catch((error) => console.error('Error creating review:', error));
    }
  };

  const pieData = {
    labels: ['Income', 'Expenses', 'Savings'],
    datasets: [{
      data: [3000, 1500, 2000],
      backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
    }],
  };

  return (
    <MainContainer>
      <HeaderSection>
        <Typography variant="h2" gutterBottom>
          Welcome to Your Financial Future
        </Typography>
        <Typography variant="h6" color="textSecondary">
          Explore our financial products and take control of your finances with ease.
        </Typography>
      </HeaderSection>

      <HeroSection>
        <Typography variant="h4" gutterBottom>
          Special Offer: Low Interest Rates
        </Typography>
        <Button variant="primary" onClick={handleClickOpen}>Apply Now</Button>
      </HeroSection>

      <CardGrid>
        <Card xs={12} md={4}>
          <Typography variant="h6">Account Balance</Typography>
          <Typography variant="h4">$0.00</Typography>
          <Button variant="outline-primary" className="mt-2">Deposit</Button>
          <Button variant="outline-secondary" className="mt-2 ml-2">Withdraw</Button>
        </Card>
        <ChartCard xs={12} md={8}>
          <Typography variant="h6">Financial Overview</Typography>
          <Pie data={pieData} />
        </ChartCard>
        <Card xs={12} md={4}>
          <Typography variant="h6">Loan Offer</Typography>
          <Typography variant="body1">Take advantage of our special loan offer with flexible terms.</Typography>
          <Button variant="outline-info" className="mt-2">Learn More</Button>
        </Card>
      </CardGrid>

      <ReviewSection>
        <Typography variant="h5" gutterBottom>
          Share Your Experience
        </Typography>
        <ReviewForm onSubmit={handleReviewSubmit}>
          <Form.Group controlId="username">
            <Form.Control
              type="text"
              name="username"
              value={reviewData.username}
              onChange={handleInputChange}
              placeholder="Your Name"
              required
            />
          </Form.Group>
          <Form.Group controlId="image">
            <Form.Control
              type="text"
              name="image"
              value={reviewData.image}
              onChange={handleInputChange}
              placeholder="Image URL (optional)"
            />
          </Form.Group>
          <Form.Group controlId="rating">
            <Rating
              name="rating"
              value={parseInt(reviewData.rating)}
              onChange={(event, newValue) => setReviewData((prev) => ({ ...prev, rating: newValue }))}
              precision={0.5}
            />
          </Form.Group>
          <Form.Group controlId="review">
            <Form.Control
              as="textarea"
              rows={3}
              name="review"
              value={reviewData.review}
              onChange={handleInputChange}
              placeholder="Your Review"
              required
            />
          </Form.Group>
          <ReviewButton type="submit">Submit Review</ReviewButton>
        </ReviewForm>
        {reviews.map((review) => (
          <ReviewItem key={review.id}>
            <ReviewAvatar src={review.image || '/default-avatar.png'} />
            <div>
              <Typography variant="h6">{review.username}</Typography>
              <Rating value={review.rating} readOnly />
              <Typography variant="body1">{review.review}</Typography>
            </div>
          </ReviewItem>
        ))}
      </ReviewSection>

      <ApplicationForm open={open} handleClose={handleClose} />
    </MainContainer>
  );
};

export default Home;
