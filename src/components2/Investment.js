import React from 'react';
import { Container, Typography, Grid, Card, CardContent, Button, Tabs, Tab, Box } from '@mui/material';
import { styled } from '@mui/material/styles';

// Styled components
const StyledCard = styled(Card)(({ theme }) => ({
  borderRadius: '12px',
  boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
  transition: 'transform 0.3s',
  '&:hover': {
    transform: 'scale(1.05)',
  },
}));

const Investment = () => {
  const [currentTab, setCurrentTab] = React.useState(0);

  const handleChange = (event, newValue) => {
    setCurrentTab(newValue);
  };

  const investmentOptions = [
    {
      category: 'Growth Fund',
      items: [
        {
          title: 'High Growth Equity',
          description: 'Invest in high-growth companies with the potential for significant capital appreciation.',
          link: '/investment/high-growth-equity'
        },
        {
          title: 'Tech Innovation Fund',
          description: 'Invest in cutting-edge technologies and innovative startups for high returns.',
          link: '/investment/tech-innovation-fund'
        }
      ]
    },
    {
      category: 'Income Fund',
      items: [
        {
          title: 'Dividend Yield Fund',
          description: 'Focused on companies that pay high dividends, providing steady income.',
          link: '/investment/dividend-yield-fund'
        },
        {
          title: 'Bond Income Fund',
          description: 'Invest in a diversified portfolio of bonds for stable and predictable returns.',
          link: '/investment/bond-income-fund'
        }
      ]
    },
    {
      category: 'Balanced Fund',
      items: [
        {
          title: 'Growth & Income Blend',
          description: 'A balanced approach to investing in both growth and income-producing assets.',
          link: '/investment/growth-income-blend'
        },
        {
          title: 'Diversified Balanced Fund',
          description: 'Invest in a diversified portfolio that balances risk and reward.',
          link: '/investment/diversified-balanced-fund'
        }
      ]
    }
  ];

  return (
    <Container>
      <Typography variant="h3" gutterBottom align="center" style={{ margin: '2rem 0', fontWeight: 'bold' }}>
        Investment Opportunities
      </Typography>
      <Typography variant="h6" paragraph align="center">
        Choose from a range of investment options designed to meet your financial goals.
      </Typography>
      <Box sx={{ width: '100%', marginTop: 2 }}>
        <Tabs value={currentTab} onChange={handleChange} aria-label="investment tabs">
          {investmentOptions.map((option, index) => (
            <Tab label={option.category} key={index} />
          ))}
        </Tabs>
        {investmentOptions.map((option, index) => (
          <TabPanel value={currentTab} index={index} key={index}>
            <Grid container spacing={3} justifyContent="center">
              {option.items.map((item, idx) => (
                <Grid item xs={12} sm={6} md={4} key={idx}>
                  <StyledCard>
                    <CardContent>
                      <Typography variant="h5" component="div" gutterBottom>
                        {item.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {item.description}
                      </Typography>
                    </CardContent>
                    <Box sx={{ padding: 2, textAlign: 'center' }}>
                      <Button variant="contained" color="primary" href={item.link}>
                        Invest Now
                      </Button>
                    </Box>
                  </StyledCard>
                </Grid>
              ))}
            </Grid>
          </TabPanel>
        ))}
      </Box>
    </Container>
  );
};

// TabPanel component to handle tab content display
const TabPanel = (props) => {
  const { value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ padding: 3 }}>
          {props.children}
        </Box>
      )}
    </div>
  );
};

export default Investment;
