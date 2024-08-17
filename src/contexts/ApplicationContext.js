// src/contexts/ApplicationContext.js
import React, { createContext, useState, useEffect } from 'react';

// Create Context
export const ApplicationContext = createContext();

// Create Provider Component
export const ApplicationProvider = ({ children }) => {
  const [applicationData, setApplicationData] = useState(() => {
    // Get data from localStorage if it exists
    const savedData = localStorage.getItem('applicationData');
    return savedData ? JSON.parse(savedData) : null;
  });

  useEffect(() => {
    // Store applicationData in localStorage
    if (applicationData) {
      localStorage.setItem('applicationData', JSON.stringify(applicationData));
    } else {
      localStorage.removeItem('applicationData');
    }
  }, [applicationData]);

  return (
    <ApplicationContext.Provider value={{ applicationData, setApplicationData }}>
      {children}
    </ApplicationContext.Provider>
  );
};
