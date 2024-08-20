import React, { createContext, useContext, useState } from 'react';

const LoanContext = createContext();

export const LoanProvider = ({ children }) => {
  const [loanStatus, setLoanStatus] = useState(null);
  const [notificationCount, setNotificationCount] = useState(0);

  const updateLoanStatus = (status) => {
    setLoanStatus(status);
    if (status === 'pending') {
      setNotificationCount(prevCount => prevCount + 1);
    }
  };

  const resetNotificationCount = () => {
    setNotificationCount(0);
  };

  return (
    <LoanContext.Provider value={{ loanStatus, setLoanStatus: updateLoanStatus, notificationCount, resetNotificationCount }}>
      {children}
    </LoanContext.Provider>
  );
};

export const useLoan = () => useContext(LoanContext);
