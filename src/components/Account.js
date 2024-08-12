import React from 'react';
import { Container, Card, Avatar, Typography, Divider } from '@mui/material';

// Hardcoded user data for demonstration
const user = {
  name: 'John Doe',
  email: 'john.doe@example.com',
  bio: 'Lorem ipsum dolor sit amet...',
  profileImage: 'https://via.placeholder.com/150'
};

const Account = () => {
  return (
    <Container>
      <Card sx={{ maxWidth: 600, margin: 'auto', padding: 3 }}>
        <div style={{ textAlign: 'center' }}>
          <Avatar 
            src={user.profileImage} 
            alt={user.name} 
            sx={{ width: 100, height: 100, margin: 'auto' }}
          />
          <Typography variant="h4" component="h1" gutterBottom>
            {user.name}
          </Typography>
          <Typography variant="body1" color="textSecondary">
            {user.email}
          </Typography>
          <Divider sx={{ my: 2 }} />
          <Typography variant="body2" color="textSecondary">
            {user.bio}
          </Typography>
        </div>
      </Card>
    </Container>
  );
};

export default Account;
