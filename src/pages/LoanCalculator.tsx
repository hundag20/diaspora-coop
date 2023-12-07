import React, { useState, useEffect, ChangeEvent } from "react";
import { Divider } from "../components/Divider";
import { TopBanner } from "../components/TopBanner";
import "../styles/moneyTransfer.scss";
import "../styles/loanCalcu.scss";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Grid,
  TextField,
} from "@mui/material";
import {
  PlayLesson,
  PersonSearch,
  LocalAtm,
  Description,
  WorkspacePremium,
  OtherHouses,
  AccountBalanceWallet,
  TextFields,
  Calculate,
  Print,
  Report,
  Info,
} from "@mui/icons-material";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchangeOutlined";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUserOutlined";
import AccountBalanceIcon from "@mui/icons-material/AccountBalanceOutlined";
import ReadMoreButton from "../components/Buttons/readMoreButton";

import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import DialogActions from "@mui/material/DialogActions";

export interface IMoneyTransferProps {}

const howItWorks = [
  {
    icon: <Description className="muicon" />,
    title: "Click the Clear Button",
    description:
      "Click the clear button to clear the sample data from forms before entering loan information.",
  },
  {
    icon: <Info className="muicon" />,
    title: "Insert All Information",
    description: "Make sure all the necessary information is included",
  },
  {
    icon: <Calculate className="muicon" />,
    title: "Click Calculate Button",
    description:
      "You can get the total amount by clicking the calculator button after inserting the information",
  },
  {
    icon: <Print className="muicon" />,
    title: "Print the Results",
    description: "You can print your loan detail information",
  },
  {
    icon: <Report className="muicon" />,
    title: "Check out Report",
    description: "Finally, you can view the loan report",
  },
];

interface HelpDialogProps {
  open: boolean;
  onClose: () => void;
}

const HelpDialog: React.FC<HelpDialogProps> = ({ open, onClose }) => {
  return (
    <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
      <DialogTitle>Loan Calculator Help...</DialogTitle>
      <DialogContent>
        <div>
          <p>
            Using the calculator is straight forward. User enters a "loan
            amount", "number of months", "annual interest rate". The calculator
            calculates the number of monthly payments.
          </p>
          <p>
            The "Payment Method" determines when the first payment is due. With
            the default selection, "End-of-Period", the first payment will be
            due one month after the loan is made. If "Start-of-Period" is
            selected, then the first payment will be due on the loan date.
          </p>
          <div>
            <p>
              The term (duration) of the loan is expressed as a number of
              months.
            </p>
            <ul>
              <li>60 months = 5 years</li>
              <li>120 months = 10 years</li>
              <li>180 months = 15 year</li>
              <li>240 months = 20 years</li>
              <li>360 months = 30 years</li>
            </ul>
          </div>
          <p>
            Need more options including the ability to solve for other unknowns,
            change payment / compounding frequency and the ability to print an
            amortization schedule? Please visit,
            <a href="https://AccurateCalculators.com/loan-calculator">
              https://AccurateCalculators.com/loan-calculator
            </a>
          </p>
        </div>
        {/* Add your help content here */}
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

interface FormData {
  loanAmount: string;
  numberOfMonths: string;
  annualInterestRate: string;
  paymentMethod: string;
  monthlyPayment: string;
  totalInterest: string;
  totalPrincipalAndInterest: string;
}

const Calculator = () => {
  const [isHelpDialogOpen, setIsHelpDialogOpen] = useState(false); // State for the Help Dialog
  const [formData, setFormData] = useState<FormData>({
    loanAmount: "",
    numberOfMonths: "",
    annualInterestRate: "",
    paymentMethod: "end", // default value is 'end'
    monthlyPayment: "",
    totalInterest: "",
    totalPrincipalAndInterest: "",
  });

  // Function to handle changes in form fields
  const handleInputChange = (
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleCalculate = () => {
    const loanAmount = parseFloat(formData.loanAmount);
    const numberOfMonths = parseInt(formData.numberOfMonths);
    const annualInterestRate = parseFloat(formData.annualInterestRate) / 100;
    const isStartOfPeriod = formData.paymentMethod === "start";

    const monthlyInterestRate = annualInterestRate / 12;
    const totalPrincipal = loanAmount;

    // Adjust the payment timing based on the selected method
    const paymentTimingAdjustment = isStartOfPeriod ? 1 : 0;

    // Monthly Payment Calculation
    const monthlyPayment = (
      (loanAmount * monthlyInterestRate) /
      (1 -
        Math.pow(
          1 + monthlyInterestRate,
          -numberOfMonths - paymentTimingAdjustment
        ))
    ).toFixed(2);

    // Total Interest Calculation
    const totalInterest = (
      parseFloat(monthlyPayment) * numberOfMonths -
      totalPrincipal
    ).toFixed(2);

    // Total Principal & Interest Calculation
    const totalPrincipalAndInterest = (
      parseFloat(totalInterest) + totalPrincipal
    ).toFixed(2);

    setFormData((prevData) => ({
      ...prevData,
      monthlyPayment,
      totalInterest,
      totalPrincipalAndInterest,
    }));
  };

  const handleClear = () => {
    setFormData({
      loanAmount: "",
      numberOfMonths: "",
      annualInterestRate: "",
      paymentMethod: "end", // default value is 'end'
      monthlyPayment: "",
      totalInterest: "",
      totalPrincipalAndInterest: "",
    });
  };

  const handlePrint = () => {
    // Add a print-specific class to the container div
    const container = document.getElementById("loanCalculatorContainer");
    if (container) {
      container.classList.add("printable");
      window.print();
      // Remove the print-specific class after printing
      container.classList.remove("printable");
    }
  };

  const handleHelp = () => {
    setIsHelpDialogOpen(true);
  };

  const closeHelpDialog = () => {
    setIsHelpDialogOpen(false);
  };

  return (
    <div className="calculator" id="loanCalculatorContainer">
      <div className="box">
        <h3>Loan Calculator</h3>
        <Box className="inputBox">
          <div className="form-field">
            <label htmlFor="loanAmount">Loan Amount:</label>
            <input
              type="number"
              name="loanAmount"
              placeholder="$3,000,000.00"
              value={formData.loanAmount}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-field">
            <label htmlFor="numberOfMonths">Number of Months:</label>
            <input
              type="number"
              name="numberOfMonths"
              placeholder="60"
              value={formData.numberOfMonths}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-field">
            <label htmlFor="annualInterestRate">Annual Interest Rate:</label>
            <input
              type="number"
              name="annualInterestRate"
              placeholder="5.5000%"
              value={formData.annualInterestRate}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-field">
            <label htmlFor="paymentMethod">Payment Method:</label>
            <select
              name="paymentMethod"
              value={formData.paymentMethod}
              onChange={handleInputChange}
            >
              <option value="end">End-of-Period</option>
              <option value="start">Start-of-Period</option>
            </select>
          </div>
          <hr className="bar"></hr>
          <div className="form-field">
            <label htmlFor="monthlyPayment">Monthly Payment:</label>
            <input
              type="number"
              name="monthlyPayment"
              placeholder="$0.00"
              disabled
              value={formData.monthlyPayment}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-field">
            <label htmlFor="totalInterest">Total Interest:</label>
            <input
              type="number"
              name="totalInterest"
              placeholder="$0.00"
              disabled
              value={formData.totalInterest}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-field">
            <label htmlFor="totalPrincipalAndInterest">
              Total Principal & Interest:
            </label>
            <input
              type="number"
              name="totalPrincipalAndInterest"
              placeholder="$0.00"
              disabled
              value={formData.totalPrincipalAndInterest}
              onChange={handleInputChange}
            />
          </div>
          <div className="action-field">
            <button onClick={handleCalculate}>Calculate</button>
            <button onClick={handleClear}>Clear</button>
            <button onClick={handlePrint}>Print</button>
            <button onClick={handleHelp}>Help</button>
          </div>
        </Box>
        <HelpDialog open={isHelpDialogOpen} onClose={closeHelpDialog} />
      </div>
    </div>
  );
};

export function LoanCalculator(props: IMoneyTransferProps) {
  return (
    <div className="loanCalcComp">
      <div className="container">
        <div className="header">
          <h3>
            Diaspora Loan <span className="colouredspan">Calculator</span>{" "}
          </h3>
          <p>
            Please fill in the following information in order to calculate your
            loan amount
          </p>
        </div>
        <div className="mainContent">
          <div className="description">
            {howItWorks.map((work) => (
              <div className="works">
                <div className="icon">{work.icon}</div>
                <div className="texts">
                  <h3>{work.title}</h3>
                  <p>{work.description}</p>
                </div>
              </div>
            ))}
          </div>
          <Calculator />
        </div>
        {/* <DiasporaResources /> */}
      </div>
    </div>
  );
}
