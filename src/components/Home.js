import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button, Form, Carousel } from 'react-bootstrap';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/system';
import { Rating } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import IconButton from '@mui/material/IconButton';
import image4 from '../assets/business-loan.png'; // Example image
import image1 from '../assets/car-loan.png'; // Replace with your image paths
import image2 from '../assets/mortgage-loan.png';
import image3 from '../assets/personal-loan.png';
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

const carouselImages = [image1, image2, image3, image4, image5]; // Add paths to your images

const Home = () => {
  const [reviewData, setReviewData] = useState({ review: '', rating: 1, username: '', image: '' });
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    // Fetch reviews from the backend
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

  const toggleLikeReview = (id) => {
    setReviews((prev) =>
      prev.map((review) =>
        review.id === id ? { ...review, liked: !review.liked } : review
      )
    );
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
              We offer a range of flexible loan options to meet your financial needs. From personal loans to business financing, explore our solutions designed to make your life easier.
            </Typography>
            <Typography variant="h6" paragraph>
              Check out our latest reviews and share your experience with us. Your feedback helps us improve and provide better services.
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
                  <ReviewContent>
                    <div style={{ flex: 1 }}>
                      <Typography variant="h6">{review.username}</Typography>
                      <Rating value={review.rating} readOnly />
                      <Typography variant="body1">{review.review}</Typography>
                    </div>
                  </ReviewContent>
                  <IconContainer>
                    <IconButton
                      style={{ color: review.liked ? 'red' : 'inherit' }}
                      onClick={() => toggleLikeReview(review.id)}
                    >
                      {review.liked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
                    </IconButton>
                    <IconButton
                      style={{ color: 'inherit' }}
                      onClick={() => handleDeleteReview(review.id)}
                    >
                      <DeleteOutlineIcon />
                    </IconButton>
                  </IconContainer>
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
