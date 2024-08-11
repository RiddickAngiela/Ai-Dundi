import React from 'react';
import { Container, createTheme, ThemeProvider } from '@mui/material';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import Contact from './components/Contact';
import { Login } from './Authentication/Login';
import { Signup } from './Authentication/Signup';
import Logout from './Authentication/Logout'; // Corrected import statement
import './index.css';

import Loan from './components2/Loanfolder/Loan';
import PaymentProcess from './components2/PaymentProcess';
import DIC from './components2/DIC';
import CustomerSupport from './components2/CustomerSupport';
import SecurityCompliance from './components2/SecurityCompliance';
import AnalyticReport from './components2/AnalyticReport';
import MarketingPromotions from './components2/MarketingPromotions';
import Investment from './components2/Investment';
import FAQ from './components2/FAQ';
import Trash from './components2/Trash';
import EligibilityCheck from './components2/Loanfolder/EligibilityCheck'; // Corrected import
import LoanApproval from './components2/Loanfolder/LoanApproval';

import { TrashProvider } from './contexts/TrashContext';

function App() {
  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <TrashProvider>
        <Router>
          <Container>
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/home" element={<Home />} />
              <Route path="/loan" element={<Loan />} />
              <Route path="/payment-process" element={<PaymentProcess />} />
              <Route path="/dic" element={<DIC />} />
              <Route path="/customer-support" element={<CustomerSupport />} />
              <Route path="/security-compliance" element={<SecurityCompliance />} />
              <Route path="/analytic-report" element={<AnalyticReport />} />
              <Route path="/marketing-promotions" element={<MarketingPromotions />} />
              <Route path="/investment" element={<Investment />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/trash" element={<Trash />} />
              <Route path="/eligibility-check" element={<EligibilityCheck />} /> {/* Added Eligibility Check */}
              <Route path="/loan-approval" element={<LoanApproval />} />
              <Route path="/logout" element={<Logout />} /> {/* Added Logout route */}
            </Routes>
            <Footer />
          </Container>
        </Router>
      </TrashProvider>
    </ThemeProvider>
  );
}

export default App;
