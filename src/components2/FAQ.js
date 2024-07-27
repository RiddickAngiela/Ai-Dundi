// src/FAQ.js
import React from 'react';
import { Container, Typography, Accordion, AccordionSummary, AccordionDetails, Divider, Box } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { styled } from '@mui/material/styles';

const CustomContainer = styled(Container)(({ theme }) => ({
  padding: theme.spacing(4),
  maxWidth: '900px',
}));

const QuestionTypography = styled(Typography)(({ theme }) => ({
  fontWeight: theme.typography.fontWeightBold,
}));

const AnswerTypography = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
}));

const FAQ = () => {
  const faqs = [
    {
      question: "What is Ai-Dundi?",
      answer: "Ai-Dundi is an innovative loan management platform that simplifies the borrowing and lending process. We aim to provide a seamless experience for both lenders and borrowers through our user-friendly interface and transparent processes."
    },
    {
      question: "How do I apply for a loan?",
      answer: "Applying for a loan on Ai-Dundi is straightforward. First, sign up on our platform. Then, fill out the loan application form with accurate information about yourself and your financial situation. Once submitted, our team will review your application and get back to you with the next steps."
    },
    {
      question: "What documents are required for loan application?",
      answer: "To apply for a loan, you'll need to provide several documents: a government-issued ID (such as a passport or driver's license), proof of income (like pay stubs or tax returns), and proof of residence (such as a utility bill). Depending on the type of loan, additional documentation may be required."
    },
    {
      question: "How can I track the status of my loan application?",
      answer: "You can track the status of your loan application by logging into your Ai-Dundi account and navigating to the 'My Loans' section. Here, you'll find updates on your application status and any additional steps required."
    },
    {
      question: "What should I do if I face any issues with my loan application?",
      answer: "If you encounter any issues or have questions about your loan application, please contact our customer support team. You can reach them through the 'Contact Us' page on our website or by emailing support@aibundi.com. Our team is here to assist you with any concerns you may have."
    }
  ];

  return (
    <CustomContainer>
      <Typography variant="h4" gutterBottom align="center">
        Frequently Asked Questions
      </Typography>
      {faqs.map((faq, index) => (
        <Box key={index} mb={2}>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls={`panel${index}-content`}
              id={`panel${index}-header`}
            >
              <QuestionTypography variant="h6">
                {faq.question}
              </QuestionTypography>
            </AccordionSummary>
            <AccordionDetails>
              <AnswerTypography>
                {faq.answer}
              </AnswerTypography>
            </AccordionDetails>
          </Accordion>
          {index < faqs.length - 1 && <Divider />}
        </Box>
      ))}
    </CustomContainer>
  );
};

export default FAQ;

