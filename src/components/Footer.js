import React from 'react';
import { Box, Container, Typography, Link } from '@mui/material';

const Footer = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
      }}
    >
      <Box
        component="footer"
        sx={{
          mt: 'auto',
          bgcolor: 'background.default',
          color: 'text.primary',
          py: 2,
          textAlign: 'center',
        }}
      >
        <Container>
          <Typography variant="body1">
            <Link href="/about" color="inherit" sx={{ mx: 1 }}>
              About
            </Link>
            &copy; 2024. Terms of Service and use of Privacy Policy.
            <Link href="/contact" color="inherit" sx={{ mx: 1 }}>
              Contact
            </Link>
          </Typography>
        </Container>
      </Box>
    </Box>
  );
};

export default Footer;
