// src/components/Account.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Account = () => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/profile'); // Use the correct API endpoint
        setUser(response.data);
      } catch (err) {
        setError('Failed to fetch user details');
        console.error(err);
      }
    };

    fetchUserDetails();
  }, []);

  if (error) return <div>{error}</div>;
  if (!user) return <div>Loading...</div>;

  return (
    <div>
      <h1>Account Details</h1>
      <p><strong>Full Name:</strong> {user.firstName} {user.lastName}</p>
      <p><strong>Email:</strong> {user.email}</p>
    </div>
  );
};

export default Account;
