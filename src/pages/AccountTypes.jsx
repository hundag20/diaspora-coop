import { Grid } from "@mui/material";
import { TopBanner } from "../components/TopBanner";
import "../styles/accountTypes.scss";
import { LoanRequestForm } from "../components/LoanRequestForm";
import { useNavigate } from "react-router-dom";
import { left } from "@popperjs/core";
import alhudaLogo from "../assets/img/AlhudaLogo-removebg.png";

export const AccountTypes = () => {
  const AccountTypes_Interested = [
    {
      icon: <i aria-hidden="true" className="fas fa-home"></i>,
      title: "Diaspora Current Account",
      desc: " Takes the form of current deposits where withdrawals may be made at any time upon demand. Interest shall not be paid to a non-resident foreign currency current account.",
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
        "Access to credit facilities",
        "Designated Personal Banker for support",
      ],
    },
    {
      icon: <i aria-hidden="true" className="fas fa-car"></i>,
      title: "Diaspora Fixed-Time Account",
    desc: "Diaspora Fixed Time Account It is an account which takes the form of a deposit certificate, issued in the name of the depositor. The maturity period may vary based on the agreement made between the depositor and the bank. The bank and the depositor will also reach an agreement on the rate of interest on this account. Interest income on non-resident foreign currency fixed deposit account shall be free from income tax.Diaspora Automobile Loan is a term loan granted to the Diaspora for the purpose of purchase Only new brand automobile for non-commercial purpose only.",
      docLink:
        "https://diaspora.coopbankoromia.com.et/wp-content/uploads/2022/09/DOCUMENTS-REQUIRED-FOR-DIASPORA-AUTOMOBILE-LOAN-1.pdf",
      features:[
        'It is an interest-bearing account with an agreed maturity date',
        'The amount needed to open the account shall at least be USD 100 or its equivalent of the eligible currency',
        'The minimum maturity period is three months that could be opened with an initial deposit of USD 5,000',
        'Interest on such accounts shall be payable only if they are maintained at least for the minimum period.',
      
      ],
    
    benefits:[
      'Interest income on such accounts is tax-free.'  ]},
    {
      icon: <i aria-hidden="true" className="fas fa-truck-moving"></i>,
      title: "Diaspora Non-repatriable Account",
      desc: "Diaspora Vehicle Loan is a term loan granted to the Diaspora for the purpose of purchase Only new brand automobile for commercial purpose only.",
      docLink:
        "https://diaspora.coopbankoromia.com.et/wp-content/uploads/2022/09/DOCUMENTS-REQUIRED-FOR-DIASPORA-AUTOMOBILE-LOAN-1.pdf",
    },
    // {
    //   icon: <i aria-hidden="true" className="fas fa-user-tie"></i>,
    //   title: "Diaspora Personal Loan",
    //   desc: "Diaspora Personal loan is term loans granted to diaspora for the purpose of covering applicant’s urgent financial requirements, such as expenses for domestic or foreign travel, medical treatment of self or family member, education fee, or any kind of personal expenses.",
    //   docLink:
    //     "https://diaspora.coopbankoromia.com.et/wp-content/uploads/2022/09/DOCUMENTS-REQUIRED-FOR-DIASPORA-PERSONAL-LOAN.pdf",
    // },
   
    {
      icon: <i aria-hidden="true" className="fas fa-city"></i>,
      title:
        "Ethiopian Citizen or Origin Living in Foreign Land (ECOLFL) Savings Account",
      desc: "Diaspora Working Capital Loan is a loan provided to eligible Ethiopian Diasporas to finance their business’s everyday operations. These loans are used to provide the working capital that covers a Diaspora’s business short-term operational needs.",
      docLink:
        "https://diaspora.coopbankoromia.com.et/wp-content/uploads/2022/09/DOCUMENTS-REQUIRED-FOR-DIASPORA-WORKING-CAPITAL-LOAN-1.pdf",
        features: [ 'Age of the applicant(s) should be 18 years and above.',
        'Submission of the following documents before account opening:',
        [
          'Renewed passport for non-resident Ethiopians or renewed passport and yellow card for foreigners of Ethiopian Origin',
          'Residence and/or work permit',
          'One latest passport size photograph',
          'Power of attorney, copy of lD and one passport size photograph of the agent (if any)',
          'Bank Account statement from foreign sources (optional)',
          'For businesses, authenticated certificate of ownership entitlement of the business and/or article and memorandum of association.',
        ],
        'All deposits to the account shall be made in foreign currency (Dollar, Euro or Pound Sterling). The applicant can credit the account without limitation in accordance with the following:',
        [
          'Foreign currency cash (evidenced by customs declaration for amounts equivalent to or greater than USD 3,000 and/or per NBE Directive No. FxD/55/2018, but this figure may change based on amendments to the Directive)',
          'Direct credit to the account using SWIFT code of the Bank (CBORETAA) or via money transfer agents:',
          '  Transfer from Diaspora Fixed Time Deposit and/or Diaspora Current Account but not from Non-Repatriable Accounts.',
          'Deposit of cheques originated by foreign',
        ],
        'ECOLFL Savings Account can be opened in all branches of the bank.',
        'Couples can open Joint ECOLFL Savings Account.',
        'Full or partial withdrawals from ECOLFL Savings Account shall be allowed only in local currency at any point in time.',
        'ECOLFL Savings Account shall be closed when the applicant requests so before application for However, this does not restrict the applicant from opening another ECOLFL Savings Account.',
        'ECOLFL Savings Account shall bear the prevailing annual saving interest rate set by',
        'Foreign currency credits to ECOLFL Savings shall be converted to Local currency using the Bank’s particular currency buying rate on the date of transaction.',
        'If the account owner dies and the legal heir of the ECOLFL savings account requests to be eligible for Diaspora Mortgage Loan or Diaspora Car Loan or Personal Loan or Diaspora investment loan and/or Diaspora Working capital loan, the bank will assess the request as per its internal procedure.',
        'An applicant working for an international organization whose salary is in FCY can open ECOLFL Savings Account without documentary requirements of resident and/or work permit. However, the applicant should submit employment contract and Ethiopian passport.',
     
    
        ],
        benefits:[
          'Enables an applicant(s) to open in person or through his/her/their agent at a nearby branch of Cooperative Bank of Oromia.',
          'This account will bear annual interest equivalent to the prevailing NBE set savings interest rate.',
          'It enables couples to open Joint ECOLFL Savings Account.',
        ]
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
      icon: <i aria-hidden="true" className="fas fa-chart-line"></i>,
      title: "DIASPORA WADIA SAVING ACCOUNT",
      desc: "Diaspora Investment Loan is a loan facility provided to eligible Ethiopian Diasporas that come with new business idea which creates jobs and economic growth back home.",
      docLink:
        "https://diaspora.coopbankoromia.com.et/wp-content/uploads/2022/09/DOCUMENTS-REQUIRED-FOR-INVESTMENT-LOAN-1.pdf",
    },
    {
      icon: <i aria-hidden="true" className="fas fa-chart-line"></i>,
      title: "DIASPORA Mudarabah Saving Account",
      desc: "Diaspora Investment Loan is a loan facility provided to eligible Ethiopian Diasporas that come with new business idea which creates jobs and economic growth back home.",
      docLink:
        "https://diaspora.coopbankoromia.com.et/wp-content/uploads/2022/09/DOCUMENTS-REQUIRED-FOR-INVESTMENT-LOAN-1.pdf",
    },
    {
      icon: <i aria-hidden="true" className="fas fa-chart-line"></i>,
      title: "DIASPORA Mudarabah Fixed Time Deposit Account",
      desc: "Diaspora Investment Loan is a loan facility provided to eligible Ethiopian Diasporas that come with new business idea which creates jobs and economic growth back home.",
      docLink:
        "https://diaspora.coopbankoromia.com.et/wp-content/uploads/2022/09/DOCUMENTS-REQUIRED-FOR-INVESTMENT-LOAN-1.pdf",
    },
  ];

  const Title = () => (
    <Grid container xs={11}>
      <Grid item xs={12}>
        <div className="container-title">
          <h2>
            We offer a variety of <span>Accounts </span>
          </h2>
        </div>
      </Grid>
    </Grid>
  );

  const TitleAccount = (props) => (
    <Grid container xs={10}>
      {/* <Grid item xs={12} justifyContent={left}>
       
      </Grid> */}
      <div className="container-title-normal-account">
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
      xs={11.5}
      md={10}
      sm={11}
      className="account-items"
    >
      { AccountTypes_Interested.map((AccountItem) => (
        <Grid item className="account-item" xs={10} sm={5}>
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
                {/* <span className="req-doc">
                  <a href={AccountItem.docLink}> Required Document</a>
                </span> */}
              </p>
            </div>
            <hr />
         </div>
        
          {/* <hr /> */}
          <div className="account-features">
            <h3 className="account-features-title">Features:</h3>
            <ul className='outer-ul' >
              {AccountItem.features  && AccountItem.features.map((feature, index) => (
               <li className="account-list">
               <span>
               
                   <i className='fas fa-check'> </i>
                
               </span>
               {typeof feature === 'string' ? (
                 feature
               ) : (
                 <ul className='ul-inner'>
                   {feature.map((el) => (
                     <li className="list-items">{el}</li>
                   ))}
                 </ul>
               )}
             </li>
              ))}
      </ul>
         <hr />    </div>    
       
          <div className="account-features">
     
            <h3 className="account-features-title">Benefits:</h3>
            <ul className='outer-ul' >
              {AccountItem.benefits  && AccountItem.benefits.map((feature, index) => (
               <li className="account-list">
               <span>
                 {typeof feature === 'string' && (
                   <i className='fas fa-check-circle'> </i>
                 )}
               </span>
           
               {typeof feature === 'string' ? (
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
          </div>
          <div className="account-item-footer" onClick={() => navigate("/diaspora-current-account")}>
            <i className="fas fa-arrow-circle-right"></i>
            <a href=" ">Open Account</a>
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
    <div className="account-types">
      <TopBanner
        containerClass="gl hd-container"
        overlayClass="gl hd-background-overlay"
        contentClass="gl hd-content"
        footerClass="gl hd-footer"
        contentHeader="Disapora Account"
        contentParagraph="Always there for your Diaspora Banking Needs!"
      />

      <div className="container">
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
