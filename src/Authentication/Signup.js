import React, { useState } from "react";
import { Button, TextField, Typography } from "@mui/material";
import { ThemeProvider } from "@mui/material";
import customTheme from "../components/theme";
import Stack from "react-bootstrap/Stack";
import { Container } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import { useNavigate } from "react-router-dom";
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
      firstName: fullName.split(" ")[0],
      lastName: fullName.split(" ")[1] || ""
    };

    try {
      const response = await axios.post("http://localhost:3000/api/users/register", userData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.status === 201) {
        const { token } = response.data;
        localStorage.setItem('token', token); // Store the token in local storage
        navigate("/"); // Redirect to the homepage
      } else {
        setError("Signup failed. Please try again.");
      }
    } catch (error) {
      setError("Signup failed. Please try again.");
    }
  };

  return (
    <ThemeProvider theme={customTheme}>
      <Container fluid>
        <Row className="form-container">
          <Col lg={6} md={8} sm={10} xs={12} className="form-col">
            <form onSubmit={handleSubmit}>
              <Stack gap={1}>
                <Typography variant="h3" className="title">
                  Welcome to Ai-Dundi
                </Typography>
                <Typography variant="h4" className="subtitle">
                  Create Your Account
                </Typography>

                {error && (
                  <Typography color="error" variant="h6" className="error-message">
                    {error}
                  </Typography>
                )}

                <TextField
                  className="auth_text_field"
                  type="text"
                  label="Full Name"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  fullWidth
                  sx={{
                    "& .MuiInputBase-root": {
                      borderRadius: "12px",
                      backgroundColor: "#f0f0f0",
                    },
                    "& .MuiOutlinedInput-root": {
                      "&.Mui-focused fieldset": {
                        borderColor: "#3f51b5",
                      },
                    },
                  }}
                />

                <TextField
                  className="auth_text_field"
                  type="email"
                  label="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  fullWidth
                  sx={{
                    "& .MuiInputBase-root": {
                      borderRadius: "12px",
                      backgroundColor: "#f0f0f0",
                    },
                    "& .MuiOutlinedInput-root": {
                      "&.Mui-focused fieldset": {
                        borderColor: "#3f51b5",
                      },
                    },
                  }}
                />

                <TextField
                  className="auth_text_field"
                  type="password"
                  label="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  fullWidth
                  sx={{
                    "& .MuiInputBase-root": {
                      borderRadius: "12px",
                      backgroundColor: "#f0f0f0",
                    },
                    "& .MuiOutlinedInput-root": {
                      "&.Mui-focused fieldset": {
                        borderColor: "#3f51b5",
                      },
                    },
                  }}
                />

                <TextField
                  className="auth_text_field"
                  type="password"
                  label="Confirm Password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  fullWidth
                  sx={{
                    "& .MuiInputBase-root": {
                      borderRadius: "12px",
                      backgroundColor: "#f0f0f0",
                    },
                    "& .MuiOutlinedInput-root": {
                      "&.Mui-focused fieldset": {
                        borderColor: "#3f51b5",
                      },
                    },
                  }}
                />

                <Button
                  className="authButton"
                  type="submit"
                  variant="contained"
                  color="primary"
                  sx={{ borderRadius: "16px", width: "100%", height: 45 }}
                >
                  <Typography variant="h5">Sign Up</Typography>
                </Button>

                <Typography variant="h6" className="login-redirect">
                  Already have an account?{" "}
                  <Button
                    sx={{
                      textDecoration: "underline",
                      color: "#3f51b5",
                      borderRadius: "16px",
                    }}
                    onClick={handleLoginRedirect}
                  >
                    Login
                  </Button>
                </Typography>
              </Stack>
            </form>
          </Col>
          <Col lg={6} className="background-image"></Col>
        </Row>
      </Container>
    </ThemeProvider>
  );
};
