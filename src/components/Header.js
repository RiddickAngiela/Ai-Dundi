import React from 'react';
import { Container, Row, Col, Nav } from 'react-bootstrap';
import { Divider, IconButton, Typography, Button } from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AnchorTemporaryDrawer from './Sidebar';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext'; // Ensure the path is correct

const Header = () => {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const { isAuthenticated } = useAuth(); // Get authentication status and logout function

  // Define the toggleDrawer function
  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };

  return (
    <Container fluid className="p-3 bg-dark text-light">
      <Row className="align-items-center">
        <Col xs="auto" className="d-flex align-items-center">
          <Typography variant="h4" className="ml-2">Ai-Dundi</Typography>
        </Col>
        <Col className="d-flex justify-content-end align-items-center">
          {isAuthenticated ? (
            <>
              {/* Render hamburger menu and icons when authenticated */}
              <Link to="/account">
                <IconButton className="text-light mx-2">
                  <AccountCircleIcon />
                </IconButton>
              </Link>
              <IconButton className="text-light mx-2">
                <NotificationsIcon />
              </IconButton>
              <AnchorTemporaryDrawer state={state} setState={setState} toggleDrawer={toggleDrawer} />
            </>
          ) : (
            <Nav className="mr-auto">
              {/* Render Login and Signup buttons when not authenticated */}
              <Link to="/login">
                <Button variant="outlined" color="inherit" className="mx-2">
                  Login
                </Button>
              </Link>
              <Link to="/signup">
                <Button variant="contained" color="primary" className="mx-2">
                  Signup
                </Button>
              </Link>
            </Nav>
          )}
        </Col>
      </Row>
      <Divider />
    </Container>
  );
};

export default Header;

