import React, { useState } from "react";
import { Button, TextField, Typography } from "@mui/material";
import { ThemeProvider } from "@mui/material";
import Stack from "react-bootstrap/Stack";
import { Container } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from "react-router-dom";
import customTheme from "../components/theme";
import "./Login.css";
import axios from "axios";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSignupRedirect = () => {
    navigate("/signup");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const userData = {
      email,
      password,
    };

    try {
      const response = await axios.post("http://localhost:3000/api/users/login", userData, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      // Check if login was successful
      if (response.status === 200) {
        // Assuming the backend sends a token or some sort of indication for success
        const { token } = response.data; // Adjust based on the actual response structure
        localStorage.setItem('token', token); // Store token or user data as needed
        navigate("/home");
      } else {
        setError("Invalid credentials. Please check your email and password.");
      }
    } catch (error) {
      // Handle different types of errors
      if (error.response) {
        // Server responded with a status other than 200 range
        setError(error.response.data.message || "An unexpected error occurred. Please try again.");
      } else if (error.request) {
        // No response was received
        setError("No response from server. Please check your connection.");
      } else {
        // Something happened in setting up the request
        setError("Error in setting up the request. Please try again.");
      }
    }
  };

  return (
    <ThemeProvider theme={customTheme}>
      <Container fluid style={{ height: "500px", textAlign: "center" }}>
        <Row>
          <Col lg={6}>
            <form onSubmit={handleSubmit}>
              <Stack gap={1}>
                <div className="pt-3"></div>
                <div className="pt-5"></div>
                <div>
                  <Typography variant="h3">Welcome to Ai-Dundi</Typography>
                </div>
                <div>
                  <Typography variant="h3">Login</Typography>
                </div>
                <div>
                  <Typography variant="h4" className="pt-5">
                    Don't you have an account
                    <span>
                      <Button
                        sx={{
                          borderRadius: "16px",
                          marginBottom: "5px",
                          textDecoration: "underline",
                        }}
                        color="black"
                        onClick={handleSignupRedirect}
                      >
                        <Typography
                          variant="h4"
                          style={{ textDecoration: "underline" }}
                        >
                          Create an account
                        </Typography>
                      </Button>
                    </span>
                  </Typography>
                </div>

                {error && (
                  <Typography color="error" variant="h6" className="pt-3">
                    {error}
                  </Typography>
                )}

                <div className="pt-3 d-flex justify-content-center">
                  <Col lg={8}>
                    <TextField
                      style={{ marginBottom: 20 }}
                      className="auth_text_field"
                      type="email"
                      label="Email"
                      color="black"
                      fullWidth
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
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
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
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
                      <Typography variant="h5">Login</Typography>
                    </Button>
                  </Col>
                </div>
                <div className="d-flex justify-content-end pt-3">
                  <Col lg={8}>
                    <Button
                      sx={{
                        borderRadius: "16px",
                        marginBottom: "5px",
                        textDecoration: "underline",
                      }}
                      color="black"
                    >
                      <Typography
                        variant="h4"
                        style={{ textDecoration: "underline" }}
                      >
                        Forgot password
                      </Typography>
                    </Button>
                  </Col>
                </div>
              </Stack>
            </form>
          </Col>
          <Col className="background-image"></Col>
        </Row>
      </Container>
    </ThemeProvider>
  );
};
