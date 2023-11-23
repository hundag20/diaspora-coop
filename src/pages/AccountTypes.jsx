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
      desc: "This account takes the form of current deposits where withdrawals may be made at any time upon demand by writing a check and/or a prearranged procedure adopted by the bank. Interest shall not be paid to a non-resident foreign currency current account.Diaspora Mortgage/ Home loan is a secured Long-Term Loans provided to Ethiopian diaspora communities to purchase or construct real estate and homes in Ethiopia. The loan product is available to eligible Ethiopian Diasporas with verifiable and steady incomes.",
      docLink:
        "https://diaspora.coopbankoromia.com.et/wp-content/uploads/2022/09/DOCUMENTS-REQUIRED-FOR-DIASPORA-MORTGAGE-LOAN-1.pdf",

      features: [
        "It’s available in local and foreign currency (GBP, USD, and EURO)",
        "This account has a personalized Cheque Books",
        "Debit Card can also be issued on request",
        "You will be provided with E-mail alerts and statements",
        "There is an option of Joint Signatory (e.g. with spouse, sibling or parent in Ethiopia)",
        "Coopbank also provides some sort of financial advisory services",
        "Facilitation of third-party payments",
      ],
      benefits: [
        "Free withdrawals fee for foreign currency transactions",
        "Free transactions across all CoopBank branches",
        "Enables you to access all our E-channels",
        "You can get access to credit facilities",
        "There will be designated Personal Banker who support you in your banking with Coopbank.",
      ],
    },
    {
      icon: <i aria-hidden="true" className="fas fa-car"></i>,
      title: "Diaspora Fixed-Time Account",
      desc: "Diaspora Fixed Time Account It is an account which takes the form of a deposit certificate, issued in the name of the depositor. The maturity period may vary based on the agreement made between the depositor and the bank. The bank and the depositor will also reach an agreement on the rate of interest on this account. Interest income on non-resident foreign currency fixed deposit account shall be free from income tax.Diaspora Automobile Loan is a term loan granted to the Diaspora for the purpose of purchase Only new brand automobile for non-commercial purpose only.",
      docLink:
        "https://diaspora.coopbankoromia.com.et/wp-content/uploads/2022/09/DOCUMENTS-REQUIRED-FOR-DIASPORA-AUTOMOBILE-LOAN-1.pdf",
    },
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
                <span className="req-doc">
                  {/* <a href={AccountItem.docLink}> Required Document</a> */}
                </span>
              </p>
            </div>
          </div>
          <div className="account-features">
            <h3 className="account-features-title">Features of the Account:</h3>
            <ul className='outer-ul' >
              {AccountItem.features  && AccountItem.features.map((feature, index) => (
               <li className="account-list">
               <span>
                 {typeof feature === 'string' && (
                   <i className='fas fa-check'> </i>
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
          <div className="account-item-footer">
            <i className="fas fa-arrow-circle-right"></i>
            <a href="#account_Request">Are You Interested?</a>
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
