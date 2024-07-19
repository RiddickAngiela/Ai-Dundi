import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Divider, IconButton, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import logo from '../assets/images/logo.png'; // Adjust the path according to your structure

const Header = () => {
  return (
    <>
      <Container fluid className="p-3 bg-dark text-light">
        <Row className="align-items-center">
          <Col xs="auto" className="d-flex align-items-center">
            <IconButton className="text-light">
              <MenuIcon />
            </IconButton>
            <img 
              src={logo} 
              alt="Logo" 
              style={{ height: '60px', marginLeft: '10px' }} // Increased height
            />
            <Typography variant='h4' className="ml-2">Ai-Dundi</Typography> {/* Placing the name next to the logo */}
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
      </Container>
      <Divider />
    </>
  )
}

export default Header;
