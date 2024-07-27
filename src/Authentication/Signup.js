import React from "react";
import { Button, TextField, Typography } from "@mui/material";
import { ThemeProvider } from "@mui/material";
import Stack from "react-bootstrap/Stack";
import { Container } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from "react-router-dom";
import customTheme from "../components/theme";
import "./Signup.css";

export const Signup = () => {
  const navigate = useNavigate();

  const handleLoginRedirect = () => {
    navigate("/login"); // Adjust this path if your routing structure is different
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your signup logic here (e.g., API call to register the user)
    // If signup is successful, navigate to the Home page
    navigate("/home");
  };

  return (
    <>
      <ThemeProvider theme={customTheme}>
        <Container fluid style={{ height: "600px", textAlign: "center" }}>
          <Row>
            <Col lg={6}>
              <form onSubmit={handleSubmit}>
                <Stack gap={1}>
                  <div className="pt-3"></div>
                  <div className="pt-5"></div>
                  <div>
                    <Typography variant="h3">
                      Welcome to Ai-Dundi 
                    </Typography>
                  </div>
                  <div>
                    <Typography variant="h3">Create Your Account</Typography>
                  </div>
                  <div className="pt-3 d-flex justify-content-center">
                    <Col lg={8}>
                      <TextField
                        style={{ marginBottom: 20 }}
                        className="auth_text_field"
                        type="text"
                        label="Full Name"
                        color="black"
                        fullWidth
                      />
                    </Col>
                  </div>
                  <div className="d-flex justify-content-center">
                    <Col lg={8}>
                      <TextField
                        style={{ marginBottom: 20 }}
                        className="auth_text_field"
                        type="email"
                        label="Email"
                        color="black"
                        fullWidth
                      />
                    </Col>
                  </div>
                  <div className="d-flex justify-content-center">
                    <Col lg={8}>
                      <TextField
                        style={{ marginBottom: 20 }}
                        className="auth_text_field"
                        type="password"
                        label="Password"
                        color="black"
                        fullWidth
                      />
                    </Col>
                  </div>
                  <div className="d-flex justify-content-center">
                    <Col lg={8}>
                      <TextField
                        style={{ marginBottom: 20 }}
                        className="auth_text_field"
                        type="password"
                        label="Confirm Password"
                        color="black"
                        fullWidth
                      />
                    </Col>
                  </div>
                  <div className="pt-1 d-flex justify-content-center">
                    <Col lg={8}>
                      <Button
                        className="authButton"
                        type="submit"
                        variant="contained"
                        color="black"
                        sx={{ borderRadius: "16px", width: "100%", height: 45 }}
                      >
                        <Typography variant="h5">Sign Up</Typography>
                      </Button>
                    </Col>
                  </div>
                  <div className="pt-3">
                    <Typography variant="h4">
                      Already have an account?
                      <span>
                        <Button
                          sx={{
                            borderRadius: "16px",
                            marginBottom: "5px",
                            textDecoration: "underline",
                          }}
                          color="black"
                          onClick={handleLoginRedirect}
                        >
                          <Typography
                            variant="h4"
                            style={{ textDecoration: "underline" }}
                          >
                            Login
                          </Typography>
                        </Button>
                      </span>
                    </Typography>
                  </div>
                </Stack>
              </form>
            </Col>
            <Col className="background-image"></Col>
          </Row>
        </Container>
      </ThemeProvider>
    </>
  );
};
