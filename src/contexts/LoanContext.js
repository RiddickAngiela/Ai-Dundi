import React, { createContext, useState, useContext } from 'react';

const LoanContext = createContext();

export const LoanProvider = ({ children }) => {
  const [loanStatus, setLoanStatus] = useState(null); // Manage loan status here

  return (
    <LoanContext.Provider value={{ loanStatus, setLoanStatus }}>
      {children}
    </LoanContext.Provider>
  );
};

export const useLoan = () => useContext(LoanContext);
