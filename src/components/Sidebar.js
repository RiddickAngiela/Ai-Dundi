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
import { useNavigate } from 'react-router-dom';
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

  const list = () => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {[
          { text: 'Home', icon: <HomeIcon />, path: '/home' },
          { text: 'Loan', icon: <AttachMoneyIcon />, path: '/loan' },
          { text: 'Payment Process', icon: <PaymentIcon />, path: '/payment-process' },
          { text: 'D.I.C', icon: <InfoIcon />, path: '/dic' },
          { text: 'Customer Support', icon: <SupportIcon />, path: '/customer-support' },
          { text: 'Security & Compliance', icon: <SecurityIcon />, path: '/security-compliance' },
          { text: 'Analytic Report', icon: <AnalyticsIcon />, path: '/analytic-report' },
          { text: 'Marketing & Promotions', icon: <CampaignIcon />, path: '/marketing-promotions' },
          { text: 'Investment', icon: <InvestIcon />, path: '/investment' },
          { text: 'F.A.Q', icon: <FaqIcon />, path: '/faq' },
          { text: 'Trash', icon: <DeleteIcon />, path: '/trash' },
        ].map(({ text, icon, path }) => (
          <ListItem key={text} disablePadding>
            <ListItemButton onClick={() => navigateTo(path)}>
              <ListItemIcon>{icon}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
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
      <Drawer
        anchor="left"
        open={isOpen}
        onClose={toggleDrawer(false)}
      >
        {list()}
      </Drawer>
    </div>
  );
}
