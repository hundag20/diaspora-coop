import * as React from "react";
import "../styles/aboutCoopbankAlhuda.scss";

import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";

import { Chrono } from "react-chrono";

import coopLogo from "../assets/img/cooplogo.png";
import alhudaLogo from "../assets/img/AlhudaLogo-removebg.png";
import { motion, useAnimation } from "framer-motion";
import { AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export interface IAboutCoopbankAlhudaProps {}

interface AlhudaAccount {
  name: string;
  type: string;
  description: string;
  features: Array<String>;
}
const AlhudAccountProps: React.FC = () => {
  const alhudaAccounts: AlhudaAccount[] = [
    {
      name: "WADIA",
      type: "SAVING ACCOUNT",
      description:
        "Wadia is a trust agreement whereby the bank keeps funds of depositors who want to place their funds under safe custody without any benefit. It is a non-pro‑t sharing deposit account that the bank provides for the persons who fulfill the bank’s policies and requirements. Customers who fulfill the eligibility criteria can open this Diaspora Wadia Safe Keeping Accounts in line with the requirement in USD dollar, Pound Sterling and Euro currency.",
      features: [
        "The source of the fund is from abroad in FCY",
        "Customers living abroad can open the account",
        "FCY shall be credited to the account through FCY cash deposit, SWIFT transfer or cheque deposit",
        "The minimum amount required for an initial deposit to open the account shall be 100 USD or its equivalent in any of other acceptable currencies",
        "No benefit is attached to this account",
        "Withdrawal can be done thorough cash, account to account transfer and mobile banking",
        "Limitless deposit and withdrawal,",
        "Operated by passbook",
      ],
    },
    {
      name: "Mudarabah",
      type: "Saving Account",
      description:
        "Mudarabah FCY Savings Account opened and mentioned by eligible personality mainly for the purpose of sharing pro‑t from the returns of investment made by the bank by using such deposit based on Sharia compliant.",
      features: [
        "Operated by passbook or certificate of deposit",
        "Initial deposit to open the account shall be 100 USD or its equivalent in any of other acceptable currencies",
        "Foreign currency is the only source of fund for the account",
      ],
    },
    {
      name: "Mudarabah",
      type: "Fixed Time Deposit Account",
      description:
        "It is an account that depositors place their fund for pro‑t sharing within specified period of time. The bank accepts investment amount from customers who are looking for short, medium and long term investment opportunity for their funds.",
      features: [
        "The minimum maturity period is three months",
        "The bank shall issue certificate of deposit",
        "The minimum deposit to open the account shall be 5,000 (USD, GBP or Euro) or equivalent in any of other acceptable currency",
      ],
    },
  ];

  const chronoRef = useRef<typeof Chrono | null>(null);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (chronoRef.current) {
        // chronoRef.current.next(); // Programmatically advance to the next slide
      }
    }, 4000); // Set the interval to 4000 milliseconds (4 seconds)

    return () => {
      clearInterval(intervalId); // Clear the interval on component unmount
    };
  }, []);

  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY - window.innerHeight);
      // setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const progressBarControls = useAnimation();

  useEffect(() => {
    progressBarControls.start({
      height: `${(scrollY / document.documentElement.scrollHeight) * 100}%`,
    });
  }, [scrollY]);

  // Add an extra point without a card
  const extraPoint = [
    {
      card: false, // This item won't have a card
      date: "",
    },
  ];

  return (
    <div className="accountHolderContainer">
      <motion.div
        className="progress-bar"
        initial={{ height: "0%" }}
        animate={progressBarControls}
      ></motion.div>

      <div>
        <AnimatePresence>
          <Chrono
            mode="VERTICAL"
            slideShow
            slideItemDuration={4000}
            scrollable={{ scrollbar: false }}
            slideShowType="slide_from_sides"
            allowDynamicUpdate
            cardHeight={300}
            // textOverlay
            focusActiveItemOnLoad
            enableDarkToggle
            // cardWidth={450}
            onScrollEnd={() => console.log("end reached")}
            verticalBreakPoint={1920}
            enableBreakPoint
            hideControls={true} // Hide the controller at the bottom
            autoPlay={true} // Enable autoplay
          >
            {alhudaAccounts.map((items) => (
              <div className="accountHolder">
                <div className="header">
                  <h3>{items.name}</h3>
                  <h3 className="type">{items.type}</h3>
                </div>
                <div className="box">
                  <h2>
                    DIASPORA {items.name} {items.type}
                  </h2>
                  <p>{items.description}</p>
                  <div className="features">
                    <h3>Features of the Account:</h3>
                    <ul>
                      {items.features.map((feature) => (
                        <li>{feature}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
            {/* {extraPoint} */}
          </Chrono>
        </AnimatePresence>
      </div>
    </div>
  );
};

interface IFBfinancingItem {
  name: string;
  description: string;
  features: Array<String>;
  eligible: Array<String>;
  benefits: Array<String>;
  requirements: Array<String>;
  purpose: Array<String>;
  img: string;
}
const IFBfinancing: React.FC = () => {
  const IFBfinancingServices: IFBfinancingItem[] = [
    {
      name: "Alhuda Mortgage Financing",
      description:
        "Mortgage/Home financing is a secured long-term ‑financing Sharia based provided to Ethiopian Diaspora communities to purchase or construct real estate and homes in Ethiopia. The ‑financing product is available to eligible Ethiopian Diasporas with verifiable and steady incomes.",
      features: [
        "Loan duration is up to 20 years for local and foreign currency lending",
        "Equity Contribution: starting from 20% of the house to be purchased or constructed",
        "The bank shall give grace period of one year",
        "The loan will be secured by the house or building to be purchased/constructed",
        "The bank may require or accept other collaterals in addition to the house",
      ],
      benefits: [],
      eligible: [],
      requirements: [],
      purpose: [
        "Construction of new residential house",
        "Construction of additional house within an existing compound",
        "Purchase/acquisition of residential house etc.",
      ],
      img: "https://diaspora.coopbankoromia.com.et/wp-content/uploads/2022/09/pngwing.com-64.png",
    },
    {
      name: "IFB DIASPORA INVESTMENT FINANCING",
      description:
        "Coopbank Alhuda offers Investment financing facility to enhance the potential of Diasporas to develop larger, more productive businesses investment in meaningful programs in their home country that can create jobs and economic growth back home.",
      features: [
        "Term for financing of projects such as manufacturing or purchase of capital assets.",
        "The bank can finance up to 80% of the feasible project promoted by diaspora,",
        "20% of the project shall be financed by the promoter from his/her own equity,",
      ],
      benefits: [],
      eligible: [],
      requirements: [
        "IFB Diaspora Investment financing Application forms properly filled and signed by the applicant.",
        "A valid passport and/or identification card.",
        "Investment license,",
        "TIN,",
        "Landholding certificate/lease agreement,",
        "An approved construction plan,",
        "Memorandum and article of association (if any) and",
        "Project proposal.",
      ],
      purpose: [],
      img: "https://diaspora.coopbankoromia.com.et/wp-content/uploads/2022/10/pngwing.com-2022-10-03T104842.320.png",
    },
    {
      name: "IFB DIASPORA AUTOMOBILE FINANCING",
      description:
        "Diaspora Automobile Financing is a term finance granted to the Diaspora for the purpose of purchase/ acquisition of a brand new or used personal automobiles.",
      features: [
        "It is a term of finance granted for financing the acquisition of a brand-new automobile",
        "The bank shall grant the finance for the acquisition of used Automobile whose manufacturing year is 7 years or less.",
        "The finance repayment period shall be up to 10 years",
        "The bank gives grace period of six-months",
        "The Bank require the client to purchase the car from approved vendors, and come up with Performa for new cars and sales agreement for used car.",
      ],
      benefits: [
        "It enables customers to use funds that would have been expended on vehicle purchase for other purposes.",
        "The repayment is through monthly installments or at other agreed installment frequency.",
        "Attractive markup (bank profit) and repayment plan",
        "Fast processing and approval time",
      ],
      eligible: [
        "Non-resident Ethiopian Nationals living and working outside Ethiopia.",
        "Non-resident foreign nationals of Ethiopian origin.",
        "Companies owned by the above-mentioned nonresidents and located outside the Ethiopian territory for more than one year.",
        "Ethiopian nationals living and working abroad who can produce authenticated documents.",
      ],
      requirements: [
        "Application forms properly filled and signed by the applicant.",
        "Valid passport and/or identification card.",
        "For businesses, Certificates of ownership entitlement for the organization and/or Articles and Memorandum of Association.",
        "Performa Invoice or quotation from the dealer / vendors",
        "The vehicle needs to be insured throughout the terms of the finance scheme.",
        "Others as required by the Bank.",
      ],
      purpose: [],
      img: "https://diaspora.coopbankoromia.com.et/wp-content/uploads/2022/10/pngwing.com-2022-10-03T110149.294.png",
    },
    {
      name: "IFB DIASPORA VEHICLE FINANCING",
      description:
        "Coopbank Alhuda diaspora Vehicle financing is for purchasing a business vehicle Diaspora who is running a business in Ethiopia either for his company service or rental business uses.  ",
      features: [
        "Term for financing of projects such as manufacturing or purchase of capital assets.",
        "The bank can finance up to 80% of the feasible project promoted by diaspora,",
        "20% of the project shall be financed by the promoter from his/her own equity,",
      ],
      benefits: [],
      eligible: [],
      requirements: [],
      purpose: [],
      img: "https://diaspora.coopbankoromia.com.et/wp-content/uploads/2022/10/pngwing.com-2022-10-03T110912.863.png",
    },
  ];
  return (
    <div className="IFBfinacingContainer">
      <h3 className="topHead">IFB Diaspora Financing</h3>
      <div className="financess">
        {IFBfinancingServices.map((item, index) => {
          // Determine if the image should be on the left or right
          const isImageOnLeft = index % 2 === 0;
          return (
            <div className={`finances ${isImageOnLeft ? "even" : "odd"}`}>
              <div className={`side`}>
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                {item.purpose && item.purpose.length ? (
                  <div className="purpose">
                    <p className="listHead">Purpose</p>
                    <ul>
                      {item.purpose.map((purpose) => (
                        <li>{purpose}</li>
                      ))}
                    </ul>
                  </div>
                ) : (
                  ""
                )}
                {item.benefits && item.benefits.length ? (
                  <div className="benefits">
                    <p className="listHead">Benefits</p>
                    <ul>
                      {item.benefits.map((benefit) => (
                        <li>{benefit}</li>
                      ))}
                    </ul>
                  </div>
                ) : (
                  ""
                )}
                {item.requirements && item.requirements.length ? (
                  <div className="requirements">
                    <p className="listHead">Requirements</p>
                    <ul>
                      {item.requirements.map((requirement) => (
                        <li>{requirement}</li>
                      ))}
                    </ul>
                  </div>
                ) : (
                  ""
                )}
                {!(
                  item.requirements.length ||
                  item.benefits.length ||
                  item.purpose.length
                ) ? (
                  item.features && item.features.length ? (
                    <div className="features">
                      <p className="listHead">Features</p>
                      <ul>
                        {item.features.map((feauter) => (
                          <li>{feauter}</li>
                        ))}
                      </ul>
                    </div>
                  ) : (
                    ""
                  )
                ) : (
                  ""
                )}
              </div>
              <div className={`side`}>
                <div className="photo">
                  <img src={item.img} alt="" />
                </div>
                {item.requirements.length ||
                item.benefits.length ||
                item.purpose.length ? (
                  item.features && item.features.length ? (
                    <div className="features">
                      <p className="listHead">Features</p>
                      <ul>
                        {item.features.map((feauter) => (
                          <li>{feauter}</li>
                        ))}
                      </ul>
                    </div>
                  ) : (
                    ""
                  )
                ) : (
                  ""
                )}
                {item.eligible && item.eligible.length ? (
                  <div className="eligible">
                    <p className="listHead">Eligible</p>
                    <ul>
                      {item.eligible.map((eligible) => (
                        <li>{eligible}</li>
                      ))}
                    </ul>
                  </div>
                ) : (
                  ""
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export function AboutCoopbankAlhuda(props: IAboutCoopbankAlhudaProps) {
  return (
    <div className="aboutCoopAlhuda">
      <div className="container">
        <div className="alhudaAccounts">
          <div className="header">
            {/* <img src={coopLogo} alt="coop" /> */}
            <img src={alhudaLogo} alt="alhuda" />
            <p>
              Cooperative Bank of Oromia is one of the fastest growing private
              banks in Ethiopia. The bank has a separate segment and value
              propositions for Sharia compliant customers through which several
              services and products are provided. Diaspora banking service is
              one of the highly offered products by the bank. Diaspora Banking
              service is a platform that allows Ethiopians living and working
              outside the country to maintain transactional accounts and perform
              domestic and foreign transfers through their accounts with
              Cooperative Bank of Oromia. In addition to this, Diasporas can get
              Sharia complaint mortgage, Investment, Vehicles and automobile
              ‑financing. Coopbank provides top of the range investment
              opportunities for Diasporas.
            </p>
          </div>
          <AlhudAccountProps />
          <IFBfinancing />
        </div>
      </div>
    </div>
  );
}
