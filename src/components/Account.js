import React, { useEffect, useState } from "react";
import { Button, Typography, Container, Grid, Avatar, IconButton, Paper, CircularProgress } from "@mui/material";
import { ThemeProvider } from "@mui/material";
import axios from "axios";
import customTheme from "../components/theme";
import { useNavigate } from "react-router-dom";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";

export const Account = () => {
  const [userDetails, setUserDetails] = useState(null);
  const [error, setError] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserDetails = async () => {
      const token = localStorage.getItem("token");

      if (!token) {
        setError("You are not logged in.");
        setLoading(false);
        return;
      }

      try {
        const response = await axios.get("http://localhost:3000/api/users/profile", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.status === 200) {
          setUserDetails(response.data);
        } else {
          setError("Failed to fetch user details.");
        }
      } catch (error) {
        setError("Error fetching user details. Please log in again.");
      } finally {
        setLoading(false);
      }
    };

    fetchUserDetails();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setSelectedImage(file);
    setImagePreview(URL.createObjectURL(file)); // Create a preview URL for the selected image
  };

  const handleImageUpload = async () => {
    const token = localStorage.getItem("token");

    if (!token) {
      setError("You are not logged in.");
      return;
    }

    try {
      const formData = new FormData();
      formData.append("image", selectedImage);

      const response = await axios.post("http://localhost:3000/api/users/profile/image", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });

      if (response.status === 200) {
        setUserDetails((prevDetails) => ({
          ...prevDetails,
          user: {
            ...prevDetails.user,
            profilePicture: URL.createObjectURL(selectedImage), // Update with the new image
          },
        }));
        setSelectedImage(null);
        setImagePreview(null);
        alert("Image uploaded successfully!");
      } else {
        setError("Failed to upload image.");
      }
    } catch (error) {
      setError("Error uploading image.");
    }
  };

  if (loading) {
    return (
      <Container>
        <CircularProgress />
      </Container>
    );
  }

  if (error) {
    return (
      <Container>
        <Typography variant="h4" color="error">
          {error}
        </Typography>
      </Container>
    );
  }

  if (!userDetails) {
    return (
      <Container>
        <Typography variant="h4">Loading...</Typography>
      </Container>
    );
  }

  return (
    <ThemeProvider theme={customTheme}>
      <Container maxWidth="md" sx={{ paddingTop: 4 }}>
        <Paper elevation={3} sx={{ padding: 3 }}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <Typography variant="h3" gutterBottom>Account Details</Typography>
              <Typography variant="h6">First Name: {userDetails.user.firstName}</Typography>
              <Typography variant="h6">Last Name: {userDetails.user.lastName}</Typography>
              <Typography variant="h6">Email: {userDetails.user.email}</Typography>
              <Button
                variant="contained"
                color="primary"
                onClick={handleLogout}
                sx={{ marginTop: 2 }}
              >
                Logout
              </Button>
            </Grid>
            <Grid item xs={12} sm={6} container direction="column" alignItems="center">
              <Typography variant="h4" gutterBottom>Profile Picture</Typography>
              <Avatar
                alt={`${userDetails.user.firstName} ${userDetails.user.lastName}`}
                src={imagePreview || userDetails.user.profilePicture}
                sx={{ width: 150, height: 150, mb: 2 }}
              />
              <input
                accept="image/*"
                id="profile-picture-upload"
                type="file"
                style={{ display: "none" }}
                onChange={handleImageChange}
              />
              <label htmlFor="profile-picture-upload">
                <IconButton component="span" color="primary">
                  <PhotoCameraIcon />
                </IconButton>
              </label>
              <Button
                variant="contained"
                color="primary"
                onClick={handleImageUpload}
                sx={{ mt: 2 }}
                disabled={!selectedImage}
              >
                Upload Image
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </ThemeProvider>
  );
};
