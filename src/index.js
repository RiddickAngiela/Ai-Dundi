import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'typeface-roboto';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AuthProvider } from './contexts/AuthContext'; // Import AuthProvider
import { LoanProvider } from './contexts/LoanContext'; // Import LoanProvider

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <AuthProvider>
      <LoanProvider>
        <App />
      </LoanProvider>
    </AuthProvider>
  </React.StrictMode>
);


