import React from 'react';
import { Container, Typography, Grid, Card, CardContent, Button } from '@mui/material';
import { styled } from '@mui/material/styles';

// Styled component for Card
const PromoCard = styled(Card)(({ theme }) => ({
  maxWidth: 345,
  margin: theme.spacing(2),
  textAlign: 'center',
}));

const MarketingPromotions = () => {
  // Sample data for promotions
  const promotions = [
    {
      title: 'Low Interest Rates',
      description: 'Enjoy competitive and low-interest rates on our loans with flexible repayment terms.',
      buttonText: 'Learn More',
      link: '/low-interest-rates'
    },
    {
      title: 'Quick Approval',
      description: 'Get your loan approved quickly and easily with our streamlined application process.',
      buttonText: 'Apply Now',
      link: '/quick-approval'
    },
    {
      title: 'Exclusive Offers',
      description: 'Access exclusive offers and promotions tailored to your financial needs.',
      buttonText: 'View Offers',
      link: '/exclusive-offers'
    }
  ];

  return (
    <Container>
      <Typography variant="h3" gutterBottom align="center" style={{ margin: '2rem 0' }}>
        Marketing and Promotions
      </Typography>
      <Typography variant="h6" paragraph align="center">
        Discover our latest promotions and offers designed to help you achieve your financial goals.
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {promotions.map((promo, index) => (
          <Grid item key={index}>
            <PromoCard>
              <CardContent>
                <Typography variant="h5" component="div">
                  {promo.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {promo.description}
                </Typography>
                <Button 
                  variant="contained" 
                  color="primary" 
                  href={promo.link}
                  style={{ marginTop: '1rem' }}
                >
                  {promo.buttonText}
                </Button>
              </CardContent>
            </PromoCard>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default MarketingPromotions;
