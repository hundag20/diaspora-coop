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
} from "@mui/icons-material";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchangeOutlined";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUserOutlined";
import AccountBalanceIcon from "@mui/icons-material/AccountBalanceOutlined";
import ReadMoreButton from "../components/Buttons/readMoreButton";
export interface IMoneyTransferProps {}

const howItWorks = [
  {
    icon: <Description className="muicon" />,
    title: "Create Your Account",
    description:
      "Don’t have a Coopbank Diaspora account yet? Apply now and open your new account in under 3 minutes!",
  },
  {
    icon: <PlayLesson className="muicon" />,
    title: "Your account Approved & Ready",
    description:
      "You will receive an e-mail with your account details, and you can begin depositing into it",
  },
  {
    icon: <LocalAtm className="muicon" />,
    title: "Request For Loan",
    description:
      "You can use a different diaspora loan once you have a diaspora account",
  },
  {
    icon: <PersonSearch className="muicon" />,
    title: "CoopBank Review Your Request",
    description:
      "In less than 24 hours, Coopbank will review your document and provide you with a response",
  },
];
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
          <div className="calculator">
            <div className="box">
              <h3>Loan Calculator</h3>
              <Box className="inputBox">
                <div className="form-field">
                  <label htmlFor="">Loan Amount?:</label>
                  <input type="number" placeholder="$3,000,000.00" />
                </div>
                <div className="form-field">
                  <label htmlFor="">Number of Months? (#):</label>
                  <input type="number" placeholder="60" />
                </div>
                <div className="form-field">
                  <label htmlFor="">Annual Interest Rate?:</label>
                  <input type="number" placeholder="5.5000%" />
                </div>
                <div className="form-field">
                  <label htmlFor="">Payment Method?:</label>
                  <select>
                    <option value="end">End-of-Period</option>
                    <option value="start">Start-of-Period</option>
                  </select>
                </div>
                <hr className="bar"></hr>
                <div className="form-field">
                  <label htmlFor="">Monthly Payment:</label>
                  <input type="number" placeholder="$0.00" />
                </div>
                <div className="form-field">
                  <label htmlFor="">Total Interest:</label>
                  <input type="number" placeholder="$0.00" />
                </div>
                <div className="form-field">
                  <label htmlFor="">Total Principal & Interest:</label>
                  <input type="number" placeholder="$0.00" />
                </div>
              </Box>
            </div>
          </div>
        </div>
        {/* <DiasporaResources /> */}
      </div>
    </div>
  );
}
