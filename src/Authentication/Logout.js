import React, { useCallback, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = useCallback(() => {
    // Clear user data and tokens from local storage
    localStorage.removeItem('token'); // Adjust based on your storage method
    localStorage.removeItem('userPreferences'); // Clear user preferences if needed

    // Optionally, you could store other details necessary for login or future sessions here
    // localStorage.setItem('loggedOut', 'true'); // Optional flag

    // Redirect to the login page after logout
    navigate('/login'); // Redirect to login page after logout
  }, [navigate]);

  useEffect(() => {
    handleLogout();
  }, [handleLogout]);

  return (
    <div>
      <h1>Logging Out...</h1>
    </div>
  );
};

export default Logout;
