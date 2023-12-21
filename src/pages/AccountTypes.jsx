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
export const AccountTypes = () => {
  const AccountTypes= [
    {
      icon: <i aria-hidden='true' className='fas fa-home'></i>,
      title: "Diaspora Current Account",
      desc: 
      " Takes the form of current deposits where withdrawals may be made at any time upon demand. Interest shall not be paid to a non-resident foreign currency current account.",
      docLink:
        "https://diaspora.coopbankoromia.com.et/wp-content/uploads/2022/09/DOCUMENTS-REQUIRED-FOR-DIASPORA-MORTGAGE-LOAN-1.pdf",

      features: [
        "Local and foreign currency (GBP, USD, and EURO) options",
        "Personalized Cheque Books",
        "Debit Card on request",
        "E-mail alerts and statements",
        "Joint Signatory Option",
        // "Financial advisory services",
        "Third-party payments",
      ],
      benefits: [
        "Free withdrawals fee for foreign currency transactions",
        "Free transactions across all CoopBank branches",
        "Access to all our E-channels",
        "Credit facilities",
        "Designated Personal Banker for support",
      ],
    },
    {
      icon: <i aria-hidden='true' className='fas fa-car'></i>,
      title: "Diaspora Fixed-Time Account",
      desc: 
      "Offers deposit certificates with variable maturity periods and negotiated interest rates. Interest income for non-resident foreign currency deposits is tax-exempt.",
      docLink:
        "https://diaspora.coopbankoromia.com.et/wp-content/uploads/2022/09/DOCUMENTS-REQUIRED-FOR-DIASPORA-AUTOMOBILE-LOAN-1.pdf",
      features: [
        "Interest-bearing account with a fixed maturity date.",
        "A minimum opening amount of USD 100 or equivalent currency.",
        "Minimum maturity period is three months with an initial deposit of USD 5,000.",
        "Interest payment applies only if the account is maintained for the minimum period.",
      ],

      benefits: ["Interest income is tax-free."],
    },
    {
      icon: <i aria-hidden='true' className='fas fa-truck-moving'></i>,
      title: "Diaspora Non-repatriable Account",
      desc: 
      "A savings deposit, is exclusively meant for local transactions. Transferred balances are converted into local currency and deposited into the account.",
      docLink:
        "https://diaspora.coopbankoromia.com.et/wp-content/uploads/2022/09/DOCUMENTS-REQUIRED-FOR-DIASPORA-AUTOMOBILE-LOAN-1.pdf",
      features: [
        "Available in local and foreign currencies: GBP, USD, and EURO.",
        "Personalized cheque books.",
        "Debit Card issuance upon request.",
        "Email alerts and statements.",
        "Joint Signatory (e.g., with spouse, sibling, or parent in Ethiopia).",
        "Financial advisory services.",
        "Facilitates third-party payments.",
      ],
      benefits: [
        "Free withdrawals fee for foreign currency transactions",
        "Free transactions across all CoopBank branches",
        "Access to all our E-channels",
        "Access to credit facilities",
        "Designated Personal Banker",
      ],
    },
    // {
    //   icon: <i aria-hidden="true" className="fas fa-user-tie"></i>,
    //   title: "Diaspora Personal Loan",
    //   desc: "Diaspora Personal loan is term loans granted to diaspora for the purpose of covering applicant’s urgent financial requirements, such as expenses for domestic or foreign travel, medical treatment of self or family member, education fee, or any kind of personal expenses.",
    //   docLink:
    //     "https://diaspora.coopbankoromia.com.et/wp-content/uploads/2022/09/DOCUMENTS-REQUIRED-FOR-DIASPORA-PERSONAL-LOAN.pdf",
    // },

    {
      icon: <i aria-hidden='true' className='fas fa-city'></i>,
      title:
        "Ethiopian Citizen or Origin Living in Foreign Land (ECOLFL) Savings Account",
      desc: "",
      docLink:
        "https://diaspora.coopbankoromia.com.et/wp-content/uploads/2022/09/DOCUMENTS-REQUIRED-FOR-DIASPORA-WORKING-CAPITAL-LOAN-1.pdf",
      features: [
        "Age of the applicant(s) should be 18 years and above.",
        "Submission of the following documents before account opening:",
        // [
        //   'Renewed passport for non-resident Ethiopians or renewed passport and yellow card for foreigners of Ethiopian Origin',
        //   'Residence and/or work permit',
        //   'One latest passport size photograph',
        //   'Power of attorney, copy of lD and one passport size photograph of the agent (if any)',
        //   'Bank Account statement from foreign sources (optional)',
        //   'For businesses, authenticated certificate of ownership entitlement of the business and/or article and memorandum of association.',
        // ],
        // 'All deposits to the account shall be made in foreign currency (Dollar, Euro or Pound Sterling). The applicant can credit the account without limitation in accordance with the following:',
        // [
        //   'Foreign currency cash (evidenced by customs declaration for amounts equivalent to or greater than USD 3,000 and/or per NBE Directive No. FxD/55/2018, but this figure may change based on amendments to the Directive)',
        //   'Direct credit to the account using SWIFT code of the Bank (CBORETAA) or via money transfer agents:',
        //   'Transfer from Diaspora Fixed Time Deposit and/or Diaspora Current Account but not from Non-Repatriable Accounts.',
        //   'Deposit of cheques originated by foreign',
        // ],
        " ECOLFL Savings Account is available in all bank branches.",
        "Withdrawals allowed only in local currency.",
        "Closure upon request; new account allowed.",
         "Foreign currency credited converted using bank's rate.",
        "Legal heirs eligible for loans post owner's death.",
        "Applicants with foreign currency salaries from international organizations need only submit an employment contract and Ethiopian passport, exempt from resident/work permit requirements",
      ],
      benefits: [
        "Enables an applicant(s) to open in person or through his/her/their agent at a nearby branch of Cooperative Bank of Oromia.",
        "Annual Interest Rate",
        "Joint ECOLFL Savings Account for couples.",
      ],
    },
    // {
    //   icon: <i aria-hidden="true" className="fas fa-chart-line"></i>,
    //   title: "Diaspora Investment Financing Loan",
    //   desc: "Diaspora Investment Loan is a loan facility provided to eligible Ethiopian Diasporas that come with new business idea which creates jobs and economic growth back home.",
    //   docLink:
    //     "https://diaspora.coopbankoromia.com.et/wp-content/uploads/2022/09/DOCUMENTS-REQUIRED-FOR-INVESTMENT-LOAN-1.pdf",
    // },
  ];

  const AccountTypes_Alhunda = [
    {
      icon: <i aria-hidden='true' className='fas fa-chart-line'></i>,
      title: "DIASPORA WADIA SAVING ACCOUNT",
      desc: "Diaspora Investment Loan is a loan facility provided to eligible Ethiopian Diasporas that come with new business idea which creates jobs and economic growth back home.",
      docLink:
        "https://diaspora.coopbankoromia.com.et/wp-content/uploads/2022/09/DOCUMENTS-REQUIRED-FOR-INVESTMENT-LOAN-1.pdf",
    },
    {
      icon: <i aria-hidden='true' className='fas fa-chart-line'></i>,
      title: "DIASPORA Mudarabah Saving Account",
      desc: "Diaspora Investment Loan is a loan facility provided to eligible Ethiopian Diasporas that come with new business idea which creates jobs and economic growth back home.",
      docLink:
        "https://diaspora.coopbankoromia.com.et/wp-content/uploads/2022/09/DOCUMENTS-REQUIRED-FOR-INVESTMENT-LOAN-1.pdf",
    },
    {
      icon: <i aria-hidden='true' className='fas fa-chart-line'></i>,
      title: "DIASPORA Mudarabah Fixed Time Deposit Account",
      desc: "Diaspora Investment Loan is a loan facility provided to eligible Ethiopian Diasporas that come with new business idea which creates jobs and economic growth back home.",
      docLink:
        "https://diaspora.coopbankoromia.com.et/wp-content/uploads/2022/09/DOCUMENTS-REQUIRED-FOR-INVESTMENT-LOAN-1.pdf",
    },
  ];
 const [state, setState] = useState(false);
  // const [collapsed, setCollapsed] = useState(null);

 const [collapsedStates, setCollapsedStates] = useState(
   Array(AccountTypes.length).fill(true)
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
            We offer a variety of <span>Conventional Accounts </span>
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
      {AccountTypes.map((AccountItem, index) => (
        <Grid item className='account-item' xs={10} sm={5} key={index} md={6}>
          <div className='account-item-header' key={index}>
            {/* <div className="icon">{AccountItem.icon}</div> */}
            <div className='account-item-title'>
              <h3>{AccountItem.title}</h3>
            </div>
          </div>
          <div className='account-item-body'>
            <div className='desc'>
              <p>
                {AccountItem.desc}
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
                <div key={index}>
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
