import React, { useState } from 'react';
import { Container, Typography, Checkbox, Button, FormControlLabel } from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom';

const Agreement = () => {
  const [checked, setChecked] = useState(false);
  const navigate = useNavigate(); // Import and initialize navigate
  const location = useLocation();
  const { applicationData, eligibilityData } = location.state || {};

  const handleCheckboxChange = (event) => {
    setChecked(event.target.checked);
  };

  const handleNextClick = () => {
    if (checked) {
      navigate('/loan-approval', { state: { applicationData, eligibilityData } });
    }
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Agreement
      </Typography>
      <Typography variant="body1" paragraph>
        This loan agreement (“Agreement”) is made between {applicationData?.fullName || '[Borrower Name]'} and [Lender Name]. This Agreement outlines the terms and conditions under which the lender agrees to provide a loan to the borrower.
      </Typography>
      <Typography variant="body1" paragraph>
        1. **Loan Amount**: The lender agrees to loan the borrower the principal sum of {applicationData?.loanAmount || '[Loan Amount]'}, to be disbursed on [Disbursement Date].
      </Typography>
      <Typography variant="body1" paragraph>
        2. **Interest Rate**: The loan will carry an interest rate of [Interest Rate] per annum. Interest will be calculated and compounded monthly.
      </Typography>
      <Typography variant="body1" paragraph>
        3. **Repayment Schedule**: The borrower agrees to repay the loan in [Number of Payments] installments of [Payment Amount] each, due on the [Due Date] of each month, beginning on [First Payment Date].
      </Typography>
      <Typography variant="body1" paragraph>
        4. **Late Payment Penalties**: Any payment not made within [Number of Days] days of the due date shall be subject to a late fee of [Late Fee Amount].
      </Typography>
      <Typography variant="body1" paragraph>
        5. **Prepayment**: The borrower may prepay the loan at any time without penalty. Any prepayment will first be applied to accrued interest, and then to the principal.
      </Typography>
      <Typography variant="body1" paragraph>
        6. **Default**: In the event of default, the lender may demand immediate repayment of the remaining loan balance, plus any accrued interest and fees. The lender may also pursue legal action to recover the amount owed.
      </Typography>
      <Typography variant="body1" paragraph>
        7. **Collateral**: [If applicable] The borrower agrees to provide [Collateral Description] as collateral for the loan. In the event of default, the lender has the right to take possession of the collateral.
      </Typography>
      <Typography variant="body1" paragraph>
        8. **Governing Law**: This Agreement shall be governed by and construed in accordance with the laws of [State/Country].
      </Typography>
      <Typography variant="body1" paragraph>
        By signing below, both parties agree to the terms and conditions of this loan agreement.
      </Typography>
      <FormControlLabel
        control={<Checkbox checked={checked} onChange={handleCheckboxChange} />}
        label="I agree to the terms and conditions"
      />
      {checked && (
        <Button variant="contained" color="primary" onClick={handleNextClick}>
          Next
        </Button>
      )}
    </Container>
  );
};

export default Agreement;
