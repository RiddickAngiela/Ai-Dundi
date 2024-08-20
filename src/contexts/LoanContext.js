import React, { createContext, useState, useContext } from 'react';

const LoanContext = createContext();

export const LoanProvider = ({ children }) => {
  const [loanStatus, setLoanStatus] = useState(''); // Default value can be an empty string or 'pending'
  const [notificationCount, setNotificationCount] = useState(0);

  const resetNotificationCount = () => {
    setNotificationCount(0);
  };

  const incrementNotificationCount = () => {
    setNotificationCount(prevCount => prevCount + 1);
  };

  return (
    <LoanContext.Provider value={{ loanStatus, setLoanStatus, notificationCount, resetNotificationCount, incrementNotificationCount }}>
      {children}
    </LoanContext.Provider>
  );
};

export const useLoan = () => useContext(LoanContext);
