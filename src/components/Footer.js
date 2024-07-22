import React from 'react';
import { Box, Container, Typography, Link } from '@mui/material';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap CSS is imported

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
        className="bg-light text-dark py-3" // Bootstrap classes for background and text color
      >
        <Container>
          <Typography variant="body1" className="d-flex justify-content-center align-items-center">
            <Link href="/about" color="inherit" sx={{ mx: 1 }} className="mx-2">
              About
            </Link>
            &copy; 2024. Terms of Service and use of Privacy Policy.
            <Link href="/contact" color="inherit" sx={{ mx: 1 }} className="mx-2">
              Contact
            </Link>
          </Typography>
        </Container>
      </Box>
    </Box>
  );
};

export default Footer;
