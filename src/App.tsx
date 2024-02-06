import { ReactNode, useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import * as pdfjs from "pdfjs-dist";

import { Home } from "./pages/Home";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import "./styles/app.scss";
import { MoneyTransfer } from "./pages/MoneyTransfer";
import { GetALoan } from "./pages/GetALoan";
import { LoanCalculator } from "./pages/LoanCalculator";
import ScrollToTopButton from "./components/ScrollToTopButton";
import { CurrentAccount } from "./pages/conventionalAccount/CurrentAccount";
import { FixedTimeAccount } from "./pages/conventionalAccount/FixedTimeAccount";
import { NonDepreciableAccount } from "./pages/conventionalAccount/NonDepreciableAccount";
import { EcolfSavingAccount } from "./pages/conventionalAccount/EcolfSavingAccount";
import About from "./pages/About";
import { WadiyaSavingsAccount } from "./pages/alhudaAccount/WadiyaSavingsAccount";
import { MudarabahSavingsAccount } from "./pages/alhudaAccount/MudarabahSavingsAccount";
import { MudarabahFixedTermDepositAccount } from "./pages/alhudaAccount/MudarabahFixedTermDepositAccount";
import { AboutCoopbankAlhuda } from "./pages/AboutCoopbankAlhuda";
import { AccountTypes } from "./pages/AccountTypes";
import { AccountTypes_Alhuda } from "./pages/AccountTypes_Alhuda";
import ScrollToTop from "./components/scrollToTop";
import { ChooseAccount } from "./pages/ChooseAccount";
import { AccountOpen } from "./pages/conventionalAccount/AccountOpen";
import NotFound from "./pages/404/notfound";
import { LoanRequestPage } from "./pages/LoanRequest";
import { Widget, addResponseMessage, toggleWidget } from "react-chat-widget";
import "react-chat-widget/lib/styles.css";
import Chat from "./components/Chat";

interface BodyeRouteProps {
  // TODO: move to types
  children: ReactNode;
}

const BodyRoute = ({ children }: BodyeRouteProps) => {
  const [isWidgetOpen, setIsWidgetOpen] = useState(false);

  const toggleWidget = () => {
    setIsWidgetOpen((prevState) => !prevState);
  };
  const handleNewUserMessage = (newMessage: any) => {
    // console.log(`New message incoming! ${newMessage}`);
    // Now send the message throught the backend API
    // addResponseMessage(response);
  };
  useEffect(() => {
    // addResponseMessage("Welcome to coop chat!");
  }, []);
  const DisabledInput = () => {
    return (
      <input
        className="rcw-new-message"
        placeholder="Chat is currently disabled"
        disabled
      />
    );
  };
  return (
    <div className="app">
      <body>
        <Header />
        {children}
        <Footer />
        <ScrollToTopButton />
      </body>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <ScrollToTop />
      <Routes>
        <Route
          path="/"
          element={
            <BodyRoute>
              <Home />
            </BodyRoute>
          }
        />
        <Route
          path="/about"
          element={
            <BodyRoute>
              <About />
            </BodyRoute>
          }
        />
        <Route
          path="/money-transfer-service"
          element={
            <BodyRoute>
              <MoneyTransfer />
            </BodyRoute>
          }
        />
        <Route
          path="/loan-request"
          element={
            <BodyRoute>
              <LoanRequestPage />
            </BodyRoute>
          }
        />
        <Route
          path="/get-a-loan"
          element={
            <BodyRoute>
              <GetALoan />
            </BodyRoute>
          }
        />
        <Route
          path="/loan-calculator"
          element={
            <BodyRoute>
              <LoanCalculator />
            </BodyRoute>
          }
        />

        <Route
          path="/choose-account"
          element={
            <BodyRoute>
              <ChooseAccount />
            </BodyRoute>
          }
        />
        <Route
          path="/diaspora-conventional-accounts"
          element={
            <BodyRoute>
              <AccountTypes />
            </BodyRoute>
          }
        />
        <Route
          path="/diaspora-IFB-accounts"
          element={
            <BodyRoute>
              <AccountTypes_Alhuda />
            </BodyRoute>
          }
        />
        {/* <Route
          path="/diaspora-current-account"
          element={
            <BodyRoute>
              <CurrentAccount />
            </BodyRoute>
          }
        /> */}
        <Route
          path="/open-account/:id?"
          element={
            <BodyRoute>
              <AccountOpen />
            </BodyRoute>
          }
        />
        <Route
          path="/about-coopbank-alhuda"
          element={
            <BodyRoute>
              <AboutCoopbankAlhuda />
            </BodyRoute>
          }
        />
        <Route
          path="/diaspora-fixed-time-deposit"
          element={
            <BodyRoute>
              <FixedTimeAccount />
            </BodyRoute>
          }
        />
        <Route
          path="/diaspora-non-depreciable-account"
          element={
            <BodyRoute>
              <NonDepreciableAccount />
            </BodyRoute>
          }
        />
        <Route
          path="/diaspora-ecolf-saving-account"
          element={
            <BodyRoute>
              <EcolfSavingAccount />
            </BodyRoute>
          }
        />
        <Route
          path="/diaspora-wadia-savings-account"
          element={
            <BodyRoute>
              <WadiyaSavingsAccount />
            </BodyRoute>
          }
        />
        <Route
          path="/diaspora-mudarabah-savings-account"
          element={
            <BodyRoute>
              <MudarabahSavingsAccount />
            </BodyRoute>
          }
        />
        <Route
          path="/diaspora-mudarabah-fixed-term-deposit"
          element={
            <BodyRoute>
              <MudarabahFixedTermDepositAccount />
            </BodyRoute>
          }
        />

        {/* Catch-all route for 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};
export default App;
