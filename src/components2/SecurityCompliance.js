// src/SecurityCompliance.js
import React from 'react';
import { Container, Typography, Box, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';

const CustomContainer = styled(Container)(({ theme }) => ({
  padding: theme.spacing(4),
  maxWidth: '900px',
  backgroundColor: theme.palette.background.paper,
}));

const Section = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(4),
}));

const SecurityCompliance = () => {
  return (
    <CustomContainer component={Paper} elevation={3}>
      <Typography variant="h4" gutterBottom align="center">
        Security and Compliance
      </Typography>
      
      <Section>
        <Typography variant="h6" gutterBottom>
          Introduction
        </Typography>
        <Typography variant="body1">
          At Ai-Dundi, we prioritize the security and compliance of our platform to ensure the protection of your personal and financial information. Our comprehensive security measures and compliance practices are designed to safeguard your data and maintain the highest standards of privacy and integrity.
        </Typography>
      </Section>

      <Section>
        <Typography variant="h6" gutterBottom>
          Data Protection Practices
        </Typography>
        <Typography variant="body1">
          We implement robust data protection practices to keep your information secure. These include:
        </Typography>
        <ul>
          <li><Typography variant="body1">Encryption: All data transmitted between your device and our servers is encrypted using industry-standard protocols.</Typography></li>
          <li><Typography variant="body1">Secure Storage: Your data is stored in secure environments with restricted access to authorized personnel only.</Typography></li>
          <li><Typography variant="body1">Regular Audits: We conduct regular security audits and assessments to identify and mitigate potential vulnerabilities.</Typography></li>
        </ul>
      </Section>

      <Section>
        <Typography variant="h6" gutterBottom>
          Compliance Certifications
        </Typography>
        <Typography variant="body1">
          Ai-Dundi is committed to adhering to the highest standards of regulatory compliance. We have obtained the following certifications:
        </Typography>
        <ul>
          <li><Typography variant="body1">ISO 27001: Information Security Management System certification</Typography></li>
          <li><Typography variant="body1">GDPR: General Data Protection Regulation compliance</Typography></li>
          <li><Typography variant="body1">PCI DSS: Payment Card Industry Data Security Standard compliance</Typography></li>
        </ul>
      </Section>

      <Section>
        <Typography variant="h6" gutterBottom>
          User Responsibilities
        </Typography>
        <Typography variant="body1">
          While we take extensive measures to protect your data, users also have a role in maintaining security. We recommend the following best practices:
        </Typography>
        <ul>
          <li><Typography variant="body1">Use strong, unique passwords for your accounts.</Typography></li>
          <li><Typography variant="body1">Enable two-factor authentication (2FA) where available.</Typography></li>
          <li><Typography variant="body1">Be cautious of phishing attempts and suspicious emails.</Typography></li>
          <li><Typography variant="body1">Regularly update your software and devices to the latest versions.</Typography></li>
        </ul>
      </Section>

      <Section>
        <Typography variant="h6" gutterBottom>
          Contact Us
        </Typography>
        <Typography variant="body1">
          If you have any questions or concerns about our security and compliance practices, please do not hesitate to contact us at <a href="mailto:support@aibundi.com">support@aibundi.com</a>.
        </Typography>
      </Section>
    </CustomContainer>
  );
}

export default SecurityCompliance;

