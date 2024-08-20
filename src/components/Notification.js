import React from 'react';
import { Typography, List, ListItem, ListItemText } from '@mui/material';
import { useLoan } from '../contexts/LoanContext';

const Notification = () => {
  const { notifications, resetNotificationCount } = useLoan(); // Get notifications and reset function

  const handleClose = () => {
    resetNotificationCount();
  };

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      right: 0,
      width: '50%',
      height: '100%',
      backgroundColor: '#ffffff',
      borderLeft: '1px solid #eeeeee',
      boxShadow: '-2px 0 10px rgba(0, 0, 0, 0.1)',
      padding: '16px',
      zIndex: 1200, // Ensure it appears above other content
      overflowY: 'auto', // Allow scrolling if notifications exceed the view height
    }}>
      <Typography variant="h6" gutterBottom>
        Notifications
      </Typography>
      {notifications.length > 0 ? (
        <List>
          {notifications.map((notification) => (
            <ListItem key={notification.id}>
              <ListItemText primary={notification.message} />
            </ListItem>
          ))}
        </List>
      ) : (
        <Typography variant="body2" color="textSecondary">
          No new notifications.
        </Typography>
      )}
      <button onClick={handleClose} style={{
        position: 'absolute',
        bottom: '16px',
        right: '16px',
        border: 'none',
        backgroundColor: '#007bff',
        color: '#ffffff',
        padding: '8px 16px',
        borderRadius: '4px',
        cursor: 'pointer',
      }}>
        Close
      </button>
    </div>
  );
};

export default Notification;

