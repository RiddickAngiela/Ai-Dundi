import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import PaymentIcon from '@mui/icons-material/Payment';
import InfoIcon from '@mui/icons-material/Info';
import SupportIcon from '@mui/icons-material/Support';
import SecurityIcon from '@mui/icons-material/Security';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import CampaignIcon from '@mui/icons-material/Campaign';
import InvestIcon from '@mui/icons-material/AccountBalance';
import FaqIcon from '@mui/icons-material/QuestionAnswer';
import DeleteIcon from '@mui/icons-material/Delete';
import LogoutIcon from '@mui/icons-material/Logout';
import { useNavigate } from 'react-router-dom';
import { styled } from '@mui/system';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';

// Styled components
const StyledDrawer = styled(Drawer)(({ theme }) => ({
  '& .MuiDrawer-paper': {
    backgroundColor: '#1c1c1c', // Dark background for the sidebar
    color: '#ffffff',
    width: 250,
    borderRadius: '0 20px 20px 0', // Rounded corners
    padding: theme.spacing(2),
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)', // Subtle shadow effect
  },
}));

const StyledListItemButton = styled(ListItemButton)(({ theme }) => ({
  borderRadius: theme.shape.borderRadius,
  margin: theme.spacing(1, 0), // Spacing between items
  padding: theme.spacing(1.5, 2), // Increased padding for larger clickable area
  transition: 'background-color 0.3s ease', // Smooth transition
  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.1)', // Light hover effect
  },
}));

const StyledListItemIcon = styled(ListItemIcon)(({ theme }) => ({
  color: '#ffffff', // White icons
  minWidth: '40px', // Increased icon spacing
}));

const SidebarHeader = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: theme.spacing(2),
  marginBottom: theme.spacing(2),
}));

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setIsOpen(open);
  };

  const navigateTo = (path) => {
    navigate(path);
    setIsOpen(false);
  };

  const handleLogout = () => {
    navigate('/logout');
    setIsOpen(false);
  };

  const list = () => (
    <Box
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <SidebarHeader>
        <Typography variant="h6" color="inherit">
          My Application
        </Typography>
      </SidebarHeader>
      <Divider sx={{ backgroundColor: '#ffffff' }} />
      <List>
        {[
          { text: 'Home', icon: <HomeIcon />, path: '/home' },
          { text: 'Loan', icon: <AttachMoneyIcon />, path: '/loan' },
          { text: 'Payment Process', icon: <PaymentIcon />, path: '/payment-process' },
          { text: 'Interest Calculation', icon: <InfoIcon />, path: '/dic' },
          { text: 'Customer Support', icon: <SupportIcon />, path: '/customer-support' },
          { text: 'Security & Compliance', icon: <SecurityIcon />, path: '/security-compliance' },
          { text: 'Analytic Report', icon: <AnalyticsIcon />, path: '/analytic-report' },
          { text: 'Marketing & Promotions', icon: <CampaignIcon />, path: '/marketing-promotions' },
          { text: 'Investment', icon: <InvestIcon />, path: '/investment' },
          { text: 'F.A.Q', icon: <FaqIcon />, path: '/faq' },
          { text: 'Trash', icon: <DeleteIcon />, path: '/trash' },
        ].map(({ text, icon, path }) => (
          <ListItem key={text} disablePadding>
            <StyledListItemButton onClick={() => navigateTo(path)}>
              <StyledListItemIcon>{icon}</StyledListItemIcon>
              <ListItemText primary={text} />
            </StyledListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider sx={{ backgroundColor: '#ffffff' }} />
      <List>
        <ListItem disablePadding>
          <StyledListItemButton onClick={handleLogout}>
            <StyledListItemIcon><LogoutIcon /></StyledListItemIcon>
            <ListItemText primary="Log Out" />
          </StyledListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <div>
      <IconButton
        edge="start"
        color="inherit"
        aria-label="menu"
        onClick={toggleDrawer(true)}
      >
        <MenuIcon />
      </IconButton>
      <StyledDrawer
        anchor="left"
        open={isOpen}
        onClose={toggleDrawer(false)}
      >
        {list()}
      </StyledDrawer>
    </div>
  );
}