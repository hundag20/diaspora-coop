/** @format */

import { Grid } from "@mui/material";
import { TopBanner } from "../components/TopBanner";
import "../styles/accountTypes.scss";
import { LoanRequestForm } from "../components/LoanRequestForm";
import { useNavigate } from "react-router-dom";
import { left } from "@popperjs/core";
import alhudaLogo from "../assets/img/AlhudaLogo-removebg.png";
import { useState, useEffect } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
export const AccountTypes_Alhuda = () => {

  const AccountTypes_Alhunda =  [
    {
    name: "WADIA",
      type: "SAVING ACCOUNT",
      description:
        "Wadia is a trust agreement by Coopbank for secure fund placement without interest. It's a non-profit deposit account in USD, Pound Sterling, and Euro for eligible customers.",
      features: [
        "Fund source: Abroad in FCY",
        "Account accessible for overseas residents",
        "  FCY credited via cash, SWIFT, or cheque",
        "  Minimum initial deposit: 100 USD or equivalent",
        "  No associated benefits",
        "  Withdrawal options: Cash, transfers, mobile banking",
        "  Unlimited deposits and withdrawals",
        "  Operated using a passbook",
      ],
      benefits:[
        "Free foreign currency withdrawal fees",
    "Free transactions at all Coopbank branches",
    "Access to all E-channels",
    "Access to credit facilities",
    "Designated Personal Banker support"]
    },
    {
      name: "Mudarabah",
      type: "Saving Account",
      description:
        "The Mudarabah FCY Savings Account shares profits from the bank's Sharia-compliant investments based on eligible individuals' deposits.", // "Mudarabah FCY Savings Account opened and mentioned by eligible personality mainly for the purpose of sharing pro‑t from the returns of investment made by the bank by using such deposit based on Sharia compliant.",
      features: [
        "Operated by passbook or certificate of deposit",
        "Initial deposit to open the account shall be 100 USD or its equivalent in any of other acceptable currencies",
        "Only foreign currency as source of fund",
      ],
      benefits:[
        "Free withdrawals for foreign currency transactions",
        "Free transactions at all Coopbank branches",
        "Access to all E-channels",
        "Access to credit facilities",
        "Designated Personal Banker support"]
    },
    {
      name: "Mudarabah",
      type: "Fixed Time Deposit Account",
      description:
        "Allows depositors to share profits within a specified period by investing funds. The bank accepts investments for short, medium, and long-term opportunities.",
      features: [
        "Minimum maturity period: 3 months",
        "Certificate of deposit issued by the bank",
        "Minimum deposit to open: 5,000 (USD, GBP, or Euro) or equivalent" ],
        benefits: [
          "Free foreign currency withdrawal fees",
    "Free transactions at all Coopbank branches",
    "Access to all E-channels",
    "Access to credit facilities",
    "Designated Personal Banker support"]
    }
  ]
 const [state, setState] = useState(false);
  // const [collapsed, setCollapsed] = useState(null);

 const [collapsedStates, setCollapsedStates] = useState(
   Array(AccountTypes_Alhunda.length).fill(true)
 );

 const handleCollapse = (index) => {
   const updatedCollapsedStates = [...collapsedStates];
   updatedCollapsedStates[index] = !updatedCollapsedStates[index];
   setCollapsedStates(updatedCollapsedStates);
 };

// const resetCollapsed = () => {
//   setCollapsed(null);
// };


  const Title = () => (
    <Grid container xs={11}>
      <Grid item xs={12}>
        <div className='container-title'>
          <h2>
            We offer a variety of <span style={{color:"#e38524"}}>IFB - ALHUDA </span>Accounts 
          </h2>
        </div>
      </Grid>
    </Grid>
  );

  const TitleAccount = (props) => (
    <Grid container xs={10}>
      {/* <Grid item xs={12} justifyContent={left}>
       
      </Grid> */}
      <div className='container-title-normal-account'>
        <h2>
          <span> {props.span} </span> {props.name} {props.img}{" "}
        </h2>
      </div>
    </Grid>
  );

  const navigate = useNavigate(); 

  const AccountItems = () => (
    <Grid
      container
      columnSpacing={4}
      rowSpacing={4}
      // xs={12}
      // md={4}
      // lg={4}
      // sm={4}
      className='account-items'>
      {AccountTypes_Alhunda.map((AccountItem, index) => (
        <Grid item className='account-item' xs={10} sm={5} key={index} md={6}>
          <div className='account-item-header' key={index}>
            {/* <div className="icon">{AccountItem.icon}</div> */}
            <div className='account-item-title'>
              <h3>{AccountItem.name} {AccountItem.type}</h3>
            </div>
          </div>
          <div className='account-item-body'>
            <div className='desc'>
              <p>
                {AccountItem.description}
                {/* <span className="req-doc">
                  <a href={AccountItem.docLink}> Required Document</a>
                </span> */}
              </p>
            </div>
            {/* <hr /> */}
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              columnGap: "1em",

            }}>
            <div className='account-features' key={index}>
              {/* <FontAwesomeIcon
              icon='fa-regular fa-chevron-up'
              size='2xl'
              style={{ color: "#00adef" }}
            /> */}
              <div
                className='account-collapse'
                onClick={() => handleCollapse(index)}>
                {collapsedStates[index] ? (
                  <ExpandMoreIcon
                    style={{ color: "#00adef", fontSize: "5rem" }}
                  />
                ) : (
                  <ExpandLessIcon
                    style={{ color: "#00adef", fontSize: "5rem" }}
                  />
                )}
                  <div
              className='account-item-footer'
              onClick={() => {
                navigate("/diaspora-current-account");
                // resetCollapsed();
              }}>
              <i className='fas fa-arrow-circle-right'></i>
              <a href=' '>Open Account</a>
            </div>
              </div>
              {
              collapsedStates[index] === false && (
                <div key={index} style={{display: "block"}}>
                  {" "}
                  <h3 className='account-features-title'>Features:</h3>
                  <ul className='outer-ul'>
                    {AccountItem.features &&
                      AccountItem.features.map((feature, index) => (
                        <li className='account-list' key={index}>
                          <>
                            <span>
                              <i className='fas fa-check'> </i>
                            </span>
                            {typeof feature === "string" ? (
                              feature
                            ) : (
                              <ul className='ul-inner'>
                                {Array.isArray(feature) &&
                                  feature.map((el, index) => (
                                    <li key={index}>{el}</li>
                                  ))}
                              </ul>
                            )}
                          </>
                        </li>
                      ))}
                  </ul>
                  <hr />
                  <h3 className='account-features-title'> Benefits:</h3>
                  <ul className='outer-ul'>
                    {AccountItem.benefits &&
                      AccountItem.benefits.map((benefits, index) => (
                        <li className='account-list'>
                          <span>
                            {typeof benefits === "string" && (
                              <i className='fas fa-check-circle'> </i>
                            )}
                          </span>

                          {typeof benefits === "string" ? (
                            benefits
                          ) : (
                            <ul className='ul-inner'>
                              {Array.isArray(benefits) &&
                                benefits.map((el) => <li>{el}</li>)}
                            </ul>
                          )}
                        </li>
                      ))}
                  </ul>
                  {/* <hr /> */}
                </div>
              )}
            </div>
            {/* <div
              className='account-item-footer'
              onClick={() => {
                navigate("/diaspora-current-account");
                // resetCollapsed();
              }}>
              <i className='fas fa-arrow-circle-right'></i>
              <a href=' '>Open Account</a>
            </div> */}
            {/* <div className='account-features'>
              <h3 className='account-features-title'> Benefits:</h3>
              <ul className='outer-ul'>
                {AccountItem.benefits &&
                  AccountItem.benefits.map((feature, index) => (
                    <li className='account-list'>
                      <span>
                        {typeof feature === "string" && (
                          <i className='fas fa-check-circle'> </i>
                        )}
                      </span>

                      {typeof feature === "string" ? (
                        feature
                      ) : (
                        <ul className='ul-inner'>
                          {feature.map((el) => (
                            <li>{el}</li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
              </ul>
            </div> */}
          </div>
        </Grid>
      ))}
      {/* < TitleAccount 
           img={<img src={alhudaLogo} alt="alhuda" />}
        name={"Banking"}
        span={"Interest Free"} 
       /> */}

      {/* {AccountTypes_Alhunda.map((AccountItem) => (
        <Grid item className="account-item" xs={12} sm={6}>
          <div className="account-item-header">
            <div className="icon">{AccountItem.icon}</div>
            <div className="account-item-title">
              <h3>{AccountItem.title}</h3>
            </div>
          </div>
          <div className="account-item-body">
            <div className="desc">
              <p>
                {AccountItem.desc}
                <span className="req-doc">
         </span>
              </p>
            </div>
          </div>
          <div className="account-item-footer">
            <i className="fas fa-arrow-circle-right"></i>
            <a href="#account_Request">Are You Interested?</a>
          </div>
        </Grid>

        
      ))} */}
    </Grid>
  );

  // loan calculator
  // const LoanCalculatorButton = () => {
  //   const navigate = useNavigate();
  //   return (
  //     <div className="calc-button" onClick={() => navigate("/loan-calculator")}>
  //       <a>LOAN CALCULATOR</a>
  //     </div>
  //   );
  // };

  return (
    <div className='account-types'>
      <TopBanner
        containerClass='gl hd-container'
        overlayClass='gl hd-background-overlay'
        contentClass='gl hd-content'
        footerClass='gl hd-footer'
        contentHeader='Disapora Account'
        contentParagraph='Always there for your Diaspora Banking Needs!'
      />

      <div className='container'>
        <Title />
        {/* < TitleAccount 
          name={"Banking"}
          span={"Interesed"}/> */}
        <AccountItems />
        {/* <AccountCalculatorButton /> */}
        {/* <AccountRequestForm /> */}
      </div>
    </div>
  );
};
