import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ element: Component, ...rest }) => {
  const isAuthenticated = !!localStorage.getItem('token'); // or use a more complex auth check

  return isAuthenticated ? Component : <Navigate to="/login" />;
};

export default PrivateRoute;
