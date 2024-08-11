import React, { createContext, useState, useContext, useEffect } from 'react';

// Create context
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Check authentication status on initial render
  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsAuthenticated(!!token); // Update authentication status based on token presence
  }, []);

  // Mock function to simulate login status
  const login = () => {
    localStorage.setItem('token', 'your-auth-token'); // Save token or user data
    setIsAuthenticated(true);
  };

  const logout = () => {
    localStorage.removeItem('token'); // Remove token
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook for using the auth context
export const useAuth = () => useContext(AuthContext);
