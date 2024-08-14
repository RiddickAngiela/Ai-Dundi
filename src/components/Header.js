import React from 'react';
import { Container, Row, Col, Nav } from 'react-bootstrap';
import { Divider, IconButton, Typography, Button } from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CheckCircleIcon from '@mui/icons-material/CheckCircle'; // Professional icon for approval
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
    <Container fluid className="p-3" style={{ backgroundColor: '#ffffff', borderBottom: '1px solid #eeeeee' }}>
      <Row className="align-items-center">
        <Col xs="auto" className="d-flex align-items-center">
          <Typography variant="h4" className="ml-2" style={{ color: '#000000' }}>Ai-Dundi</Typography>
        </Col>
        <Col className="d-flex justify-content-end align-items-center">
          {isAuthenticated ? (
            <>
              {/* Render hamburger menu and icons when authenticated */}
              <Link to="/loan-approval">
                <IconButton className="text-dark mx-2">
                  <CheckCircleIcon />
                </IconButton>
              </Link>
                <IconButton className="text-dark mx-2">
                               <Link to="/account">

                  <AccountCircleIcon />
                                </Link>

                </IconButton>
              <IconButton className="text-dark mx-2">
                <NotificationsIcon />
              </IconButton>
              <AnchorTemporaryDrawer state={state} setState={setState} toggleDrawer={toggleDrawer} />
            </>
          ) : (
            <Nav className="mr-auto">
              {/* Render Login and Signup buttons when not authenticated */}
              <Link to="/login">
                <Button variant="outlined" className="mx-2" style={{ borderColor: '#000000', color: '#000000' }}>
                  Login
                </Button>
              </Link>
              <Link to="/signup">
                <Button variant="contained" className="mx-2" style={{ backgroundColor: '#007bff', color: '#ffffff' }}>
                  Signup
                </Button>
              </Link>
            </Nav>
          )}
        </Col>
      </Row>
      <Divider style={{ backgroundColor: '#eeeeee' }} />
    </Container>
  );
};

export default Header;

