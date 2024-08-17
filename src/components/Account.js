import React, { useEffect, useState } from "react";
import {
  Button,
  Typography,
  Container,
  Avatar,
  IconButton,
  Paper,
  Grid,
  CircularProgress,
  TextField,
  Snackbar
} from "@mui/material";
import { ThemeProvider } from "@mui/material";
import axios from "axios";
import customTheme from "../components/theme";
import { useNavigate } from "react-router-dom";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export const Account = () => {
  const [userDetails, setUserDetails] = useState(null);
  const [error, setError] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [loading, setLoading] = useState(true);
  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    bio: ''
  });
  const [snackbarOpen, setSnackbarOpen] = useState(false);
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
          const { user } = response.data;
          setUserDetails(user);
          setFormData({
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            bio: user.bio || ''
          });
          if (user.profilePicture) {
            setImagePreview(user.profilePicture);
          }
        } else {
          setError("Failed to fetch user details.");
        }
      } catch (err) {
        console.error("Error fetching user details:", err.response?.data || err.message);
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
    if (file) {
      setSelectedImage(file);
      setImagePreview(URL.createObjectURL(file));
    }
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
        setUserDetails(prevDetails => ({
          ...prevDetails,
          profilePicture: response.data.imagePath,
        }));
        setSelectedImage(null);
        setImagePreview(response.data.imagePath);
        setSnackbarOpen(true); // Show success snackbar
      } else {
        setError("Failed to upload image.");
      }
    } catch (err) {
      console.error("Error uploading image:", err.response?.data || err.message);
      setError("Error uploading image.");
    }
  };

  const handleFormChange = (event) => {
    const { name, value } = event.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSaveChanges = async () => {
    const token = localStorage.getItem("token");

    if (!token) {
      setError("You are not logged in.");
      return;
    }

    try {
      const response = await axios.post("http://localhost:3000/api/profile", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      if (response.status === 200) {
        setUserDetails(prevDetails => ({
          ...prevDetails,
          ...formData
        }));
        setEditMode(false);
        setSnackbarOpen(true); // Show success snackbar
      } else {
        setError("Failed to update profile.");
      }
    } catch (err) {
      console.error("Error updating profile:", err.response?.data || err.message);
      setError("Error updating profile.");
    }
  };

  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
  };

  if (loading) {
    return (
      <Container>
        <CircularProgress />
      </Container>
    );
  }

  return (
    <ThemeProvider theme={customTheme}>
      <Container maxWidth="md" sx={{ paddingTop: 4 }}>
        <Paper elevation={3} sx={{ padding: 3 }}>
          <Typography variant="h4" gutterBottom>Account Details</Typography>
          {error && <Typography color="error">{error}</Typography>}
          {userDetails && (
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                {editMode ? (
                  <>
                    <TextField
                      fullWidth
                      label="First Name"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleFormChange}
                      margin="normal"
                    />
                    <TextField
                      fullWidth
                      label="Last Name"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleFormChange}
                      margin="normal"
                    />
                    <TextField
                      fullWidth
                      label="Email"
                      name="email"
                      value={formData.email}
                      onChange={handleFormChange}
                      margin="normal"
                      type="email"
                    />
                    <TextField
                      fullWidth
                      label="Bio"
                      name="bio"
                      value={formData.bio}
                      onChange={handleFormChange}
                      margin="normal"
                      multiline
                      rows={4}
                    />
                  </>
                ) : (
                  <>
                    <Typography variant="h6">First Name: {userDetails.firstName}</Typography>
                    <Typography variant="h6">Last Name: {userDetails.lastName}</Typography>
                    <Typography variant="h6">Email: {userDetails.email}</Typography>
                    <Typography variant="h6">Bio: {userDetails.bio || 'No bio available'}</Typography>
                  </>
                )}
              </Grid>
              <Grid item xs={12} sm={6} container direction="column" alignItems="center">
                <Avatar
                  alt={`${userDetails.firstName} ${userDetails.lastName}`}
                  src={imagePreview || userDetails.profilePicture}
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
                {editMode ? (
                  <>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={handleSaveChanges}
                      sx={{ mt: 2 }}
                    >
                      Save Changes
                    </Button>
                    <Button
                      variant="outlined"
                      color="secondary"
                      onClick={() => setEditMode(false)}
                      sx={{ mt: 2 }}
                    >
                      Cancel
                    </Button>
                  </>
                ) : (
                  <Button
                    variant="outlined"
                    color="primary"
                    onClick={() => setEditMode(true)}
                    sx={{ mt: 2 }}
                  >
                    Edit Profile
                  </Button>
                )}
                <Button
                  variant="outlined"
                  color="secondary"
                  onClick={handleLogout}
                  sx={{ mt: 2 }}
                >
                  Logout
                </Button>
              </Grid>
            </Grid>
          )}
        </Paper>
      </Container>
      <Snackbar open={snackbarOpen} autoHideDuration={6000} onClose={handleCloseSnackbar}>
        <Alert onClose={handleCloseSnackbar} severity="success">
          Operation successful!
        </Alert>
      </Snackbar>
    </ThemeProvider>
  );
};
