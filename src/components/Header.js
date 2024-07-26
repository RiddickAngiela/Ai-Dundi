import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Divider, IconButton, Typography } from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import logo from '../assets/images/logo.png'; // Adjust the path according to your structure
import AnchorTemporaryDrawer from './Sidebar';

const Header = () => {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  // Define the toggleDrawer function
  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };

  return (
    <>
      <Container fluid className="p-3 bg-dark text-light">
        <Row className="align-items-center">
          <Col xs="auto" className="d-flex align-items-center">
            <img 
              src={logo} 
              alt="Logo" 
              style={{ 
                height: '60px', 
                width: '60px', // Set width equal to height
                borderRadius: '50%', // Makes the image round
                marginLeft: '10px' 
              }} 
            />
            <Typography variant="h4" className="ml-2">Ai-Dundi</Typography> {/* Placing the name next to the logo */}
          </Col>
          <Col className="d-flex justify-content-end">
            <IconButton className="text-light mx-2">
              <NotificationsIcon />
            </IconButton>
            <IconButton className="text-light mx-2">
              <AccountCircleIcon />
            </IconButton>
          </Col>
        </Row>
        {/* Ensure state and toggleDrawer are passed correctly */}
        <AnchorTemporaryDrawer state={state} setState={setState} toggleDrawer={toggleDrawer} />
      </Container>
      <Divider />
    </>
  );
}

export default Header;

