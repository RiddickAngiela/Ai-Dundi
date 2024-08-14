import React from 'react';
import { Button, TextField, Typography } from "@mui/material";
import { Container, Row, Col } from "react-bootstrap";
import customTheme from "./theme";
import { ThemeProvider } from "@mui/material/styles";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import FacebookIcon from "@mui/icons-material/Facebook";
import Instagram from "@mui/icons-material/Instagram";
import Twitter from "@mui/icons-material/Twitter";
import WhatsApp from "@mui/icons-material/WhatsApp";
import { Link } from 'react-router-dom'; // Import Link

const Footer = () => {
  return (
    <ThemeProvider theme={customTheme}>
      <Container className="pt-5">
        <div className="pt-3 pb-5">
          <hr />
        </div>
        <Row>
          <Col lg={4}>
            <Button
              sx={{ borderRadius: "16px", marginBottom: "20px" }}
              color="black"
            >
              <Typography variant="h3">Ai-Dundi</Typography>
            </Button>
            <Typography variant="h6">
              AI-powered loan platform offering quick approvals, personalized solutions, and seamless support to meet your financial needs.
            </Typography>
            <Typography
              variant="h4"
              sx={{ fontSize: 16, fontWeight: "bolder", paddingTop: "15px" }}
            >
              Subscribe to Newsletter
            </Typography>
            <div className="d-flex align-items-center pt-3">
              <TextField
                sx={{ borderRadius: "16px", width: 350 }}
                type="email"
                label="Email"
                color="black"
              />
              <Button
                type="submit"
                variant="contained"
                color="black"
                sx={{
                  borderRadius: "16px",
                  width: "100%",
                  height: 45,
                  marginLeft: 3,
                }}
              >
                <Typography variant="h5">Subscribe</Typography>
              </Button>
            </div>
          </Col>
          <Col>
            <Typography
              variant="h6"
              sx={{ fontSize: 16, fontWeight: "bolder" }}
            >
              Product
            </Typography>
            <Typography variant="h6">Pricing</Typography>
            <Typography variant="h6">Case Studies</Typography>
            <Typography variant="h6">Reviews</Typography>
            <Typography variant="h6">Updates</Typography>
            <Typography variant="h6">Features</Typography>
          </Col>
          <Col>
            <Typography
              variant="h6"
              sx={{ fontSize: 16, fontWeight: "bolder" }}
            >
              Company
            </Typography>
            <Link to="/about">
              <Typography variant="h6">About</Typography>
            </Link>
            <Typography variant="h6">News</Typography>
            <Typography variant="h6">Blog</Typography>
            <Link to="/contact">
              <Typography variant="h6">Contact</Typography>
            </Link>
            <Typography variant="h6">Careers</Typography>
          </Col>
          <Col>
            <Typography
              variant="h6"
              sx={{ fontSize: 16, fontWeight: "bolder" }}
            >
              Support
            </Typography>
            <Typography variant="h6">Help Center</Typography>
            <Typography variant="h6">Status</Typography>
            <Typography variant="h6">Report a bug</Typography>
            <Typography variant="h6">Chat Support</Typography>
          </Col>
          <Col>
            <Typography
              variant="h6"
              sx={{ fontSize: 16, fontWeight: "bolder" }}
            >
              Contact Us
            </Typography>
            <Button
              sx={{ borderRadius: "16px" }}
              color="black"
              startIcon={<MailOutlineIcon />}
            >
              <Typography variant="h6">riddickangiela@chama.design</Typography>
            </Button>
            <Button
              sx={{ borderRadius: "16px" }}
              color="black"
              startIcon={<PhoneIcon />}
            >
              <Typography variant="h6">0743878088</Typography>
            </Button>
            <Button
              sx={{ borderRadius: "16px" }}
              color="black"
              startIcon={<LocationOnIcon />}
            >
              <Typography variant="h6">Jogoo Rd, Nairobi</Typography>
            </Button>
          </Col>
        </Row>
        <Col className="pt-4">
          <hr />
        </Col>
        <Row className="pt-3 pb-5">
          <Col>
            <Typography
              variant="h6"
              sx={{ fontSize: 16, fontWeight: "bolder" }}
            >
              2024 Ai-Dundi - All Rights Reserved
            </Typography>
          </Col>
          <Col>
            <Row>
              <Col>
                <FacebookIcon />
              </Col>
              <Col>
                <WhatsApp />
              </Col>
              <Col>
                <Instagram />
              </Col>
              <Col>
                <Twitter />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </ThemeProvider>
  );
};

export default Footer;
