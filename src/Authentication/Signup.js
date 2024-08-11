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
import axios from 'axios'; // Import axios
import "./Signup.css";

export const Signup = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLoginRedirect = () => {
    navigate("/login"); // Adjust this path if your routing structure is different
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    const userData = {
      email,
      password,
      firstName: fullName.split(" ")[0], // Assumes first part of name is first name
      lastName: fullName.split(" ")[1] || "" // Assumes second part of name is last name
    };

    try {
      const response = await axios.post("http://localhost:3000/api/users/register", userData, {
         headers: {
                'Content-Type': 'application/json', // Specify the content type
                // Add any other headers you need here, e.g., Authorization
                // 'Authorization': `Bearer ${token}`
            }
      });

      if (response.status === 201) { // Assuming 201 status code for successful creation
        navigate("/home");
      } else {
        setError("Signup failed. Please try again.");
      }
    } catch (error) {
      console.error("Error during signup:", error);
      setError("Signup failed. Please try again.");
    }
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
                  {error && (
                    <Typography variant="h6" color="error">
                      {error}
                    </Typography>
                  )}
                  <div className="pt-3 d-flex justify-content-center">
                    <Col lg={8}>
                      <TextField
                        style={{ marginBottom: 20 }}
                        className="auth_text_field"
                        type="text"
                        label="Full Name"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
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
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
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
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
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
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
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
