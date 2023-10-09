import * as React from "react";
import "../styles/home.scss";
import ReadMoreButton from "../components/Buttons/readMoreButton";
import ApplyNowButton from "../components/Buttons/applyNowButton";
import Slideshow from "../components/slideShow/slideShow";
import BasicButton from "../components/Buttons/basicButton";
import {
  PlayLesson,
  PersonSearch,
  LocalAtm,
  Description,
  WorkspacePremium,
  OtherHouses,
  AccountBalanceWallet,
  AccountBalance,
  Handyman,
  Business,
} from "@mui/icons-material";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import AnimatedCounter from "../components/AnimatedCounter";

export interface IHomeProps {}

interface DiasporaItem {
  title: string;
  description: string;
  bullets: string[];
  img: string;
}
const Diasport: React.FC = () => {
  const diaspora: DiasporaItem[] = [
    {
      title: "Diaspora Accounts",
      description:
        "Diaspora Banking Accounts allow Diasporas who reside and work outside the country to maintain and perform domestic and international transfers through their CoopBank Diaspora Accounts.",
      bullets: [
        "Diaspora Current Account",
        "Diaspora Fixed-Time Deposit Account",
        "Diaspora Non-Repatriable Account",
        "Ethiopian Citizen Or Origin Living In Foreign Land (ECOLFL) Savings Account",
      ],
      img: "https://diaspora.coopbankoromia.com.et/wp-content/uploads/2022/09/Model-002.png",
    },
    {
      title: "Diaspora Loan",
      description:
        "The bank provides business and investment loan along with expertise free consultancy services on different opportunities.",
      bullets: [
        "Diaspora consumer loans",
        "Mortgage loan",
        "Car/Vehicle loan",
        "Personal loan",
        "Diaspora Business loans",
        "Investment financing",
        "Working capital loans",
      ],
      img: "https://diaspora.coopbankoromia.com.et/wp-content/uploads/2022/09/Model-0001.png",
    },
  ];

  interface ItemsProps {
    index: number;
    item: DiasporaItem;
  }

  const Items: React.FC<ItemsProps> = ({ index, item }) => {
    const isEven = index % 2 === 0;
    const [ref, inView] = useInView({
      triggerOnce: true, // Only trigger the animation once
    });

    // Define animation variants for the image and content
    const imageAnimationVariants = {
      hidden: {
        x: isEven ? "100%" : "-100%",
        opacity: 0,
      },
      visible: {
        x: 0,
        opacity: 1,
        transition: {
          duration: 0.8,
          ease: "easeOut",
        },
      },
    };

    const contentAnimationVariants = {
      hidden: {
        x: isEven ? "-100%" : "100%",
        opacity: 0,
      },
      visible: {
        x: 0,
        opacity: 1,
        transition: {
          duration: 0.8,
          ease: "easeOut",
        },
      },
    };

    // Split the title into words
    const titleWords = item.title.split(" ");

    // Create a span element with a class for the last word
    const lastWord = <span className="colouredspan">{titleWords.pop()}</span>;

    // Join the remaining words in the title
    const titleWithoutLastWord = titleWords.join(" ");

    return (
      <motion.div
        className={`item ${isEven ? "even" : "odd"}`}
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <motion.div className="image" variants={imageAnimationVariants}>
          <img src={item.img} alt={item.title} />
        </motion.div>
        <motion.div className="content" variants={contentAnimationVariants}>
          <h2>
            {titleWithoutLastWord} {lastWord}
          </h2>
          <p>{item.description}</p>
          <ul>
            {item.bullets.map((bullet, bulletIndex) => (
              <li key={bulletIndex}>{bullet}</li>
            ))}
          </ul>
          <ApplyNowButton text="Apply now" link="#" />
        </motion.div>
      </motion.div>
    );
  };

  return (
    <div className="diaspora">
      <div className="container">
        <div className="cards">
          {diaspora.map((item, index) => (
            <Items key={index} item={item} index={index} />
          ))}
          <div className="card"></div>
        </div>
      </div>
    </div>
  );
};

interface WhatWeOfferItem {
  title: string;
  description: string;
  icons: React.ReactNode;
}
const WhatWeOffer: React.FC = () => {
  const offers: WhatWeOfferItem[] = [
    {
      icons: <OtherHouses className="muicon" />,
      title: "Mortgage Loan",
      description:
        "Mortgage/ Home loan is a secured Long-Term Loans provided to Ethiopian diaspora communities to purchase or construct real estate and homes in Ethiopia. The loan product is available to eligible Ethiopian Diasporas with verifiable and steady incomes.",
    },
    {
      icons: <Business className="muicon" />,
      title: "Investment Loan",
      description:
        "Coopbank offers Investment credit facility to enhance the potential of Diasporas to develop larger, more productive businesses investment in meaningful programs in their home country that can create jobs and economic growth back home.",
    },
    {
      icons: <Handyman className="muicon" />,
      title: "Working Capital Loan",
      description:
        "Mortgage/ Home loan is a secured Long-Term Loans provided to Ethiopian diaspora communities to purchase or construct real estate and homes in Ethiopia. The loan product is available to eligible Ethiopian Diasporas with verifiable and steady incomes.",
    },
  ];

  // Use the useInView hook to detect when the "offers" section is in view
  const [ref, inView] = useInView({
    triggerOnce: true, // Only trigger the animation once
    threshold: 0.2, // Adjust as needed
  });

  // Define animation variants for the "offers" section
  const offersAnimationVariants = {
    hidden: {
      opacity: 0,
      y: 100, // Start off-screen
    },
    visible: {
      opacity: 1,
      y: 0, // Slide up to its original position
      transition: {
        duration: 0.8, // Adjust the animation duration as needed
      },
    },
  };

  return (
    <div className="whatweofferComp">
      <div className="container">
        <div className="header">
          <h3>
            What We <span className="colouredspan">offer</span>
          </h3>
          <p>We are always there for your Diaspora Banking Needs!</p>
        </div>
        <motion.div
          className="offers"
          ref={ref} // Attach the ref to the "offers" section
          initial="hidden"
          animate={inView ? "visible" : "hidden"} // Animate when in view
          variants={offersAnimationVariants} // Apply animation variants
        >
          {offers.map((offer) => (
            <div className="offer">
              <div className="icon">{offer.icons}</div>
              <h4>{offer.title}</h4>
              <p>{offer.description}</p>
              <ReadMoreButton link="#" text="Read More" />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

interface UsefullDiasporaResoursesItems {
  title: string;
  description: string;
  icons: React.ReactNode;
}
const UsefullDiasporaResourses: React.FC = () => {
  const resources: UsefullDiasporaResoursesItems[] = [
    {
      icons: <AccountBalanceWallet className="muicon" />,
      title: "Foreign Exchange Rate",
      description:
        "Foreign Exchange Rate is defined as the price of the domestic currency with respect to another currency. The purpose of foreign exchange is to compare one currency with another for showing their relative values.",
    },
    {
      icons: <WorkspacePremium className="muicon" />,
      title: "Trade Registration and Licensing",
      description:
        "Obtaining a business license in Ethiopia. The Ministry of Trade and Industry is the main institution responsible for registering a business in Ethiopia.",
    },
    {
      icons: <AccountBalance className="muicon" />,
      title: "National Bank Directives",
      description:
        "The National Bank of Ethiopia was established in 1963 by proclamation 206 of 1963 and began operation in January 1964. Prior to this proclamation, the Bank used to carry out dual activities, i.e. commercial banking and central banking.",
    },
  ];

  // Use the useInView hook to detect when the "offers" section is in view
  const [ref, inView] = useInView({
    triggerOnce: true, // Only trigger the animation once
    threshold: 0.2, // Adjust as needed
  });

  // Define animation variants for the "offers" section
  const offersAnimationVariants = {
    hidden: {
      opacity: 0,
      y: 100, // Start off-screen
    },
    visible: {
      opacity: 1,
      y: 0, // Slide up to its original position
      transition: {
        duration: 0.8, // Adjust the animation duration as needed
      },
    },
  };

  return (
    <div className="whatweofferComp">
      <div className="container">
        <div className="header">
          <h3>
            Some Useful <span className="colouredspan">Diaspora</span> Resources
          </h3>
        </div>
        <motion.div
          className="offers"
          ref={ref} // Attach the ref to the "offers" section
          initial="hidden"
          animate={inView ? "visible" : "hidden"} // Animate when in view
          variants={offersAnimationVariants} // Apply animation variants
        >
          {resources.map((offer) => (
            <div className="offer">
              <div className="icon">{offer.icons}</div>
              <h4>{offer.title}</h4>
              <p>{offer.description}</p>
              <ReadMoreButton link="#" text="Read More" />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

interface StatItems {
  icon: string;
  title: string;
  value: number;
}
const Stats: React.FC = () => {
  const stats: StatItems[] = [
    {
      icon: "elementskit-funfact-icon fas fa-users",
      title: "Total Membership",
      value: 5000,
    },
    {
      icon: "elementskit-funfact-icon fas fa-money-bill-alt",
      title: "Deposit Amount",
      value: 10000000,
    },
    {
      icon: "elementskit-funfact-icon fas fa-globe-americas",
      title: "Countries",
      value: 120,
    },
    {
      icon: "elementskit-funfact-icon fas fa-share-square",
      title: "Remmitance Agency",
      value: 13,
    },
  ];

  // Use the useInView hook to detect when the "offers" section is in view
  const [ref, inView] = useInView({
    triggerOnce: true, // Only trigger the animation once
    threshold: 0, // Adjust as needed
  });

  // Define animation variants for the "offers" section
  const offersAnimationVariants = {
    hidden: {
      opacity: 0,
      y: 100, // Start off-screen
    },
    visible: {
      opacity: 1,
      y: 0, // Slide up to its original position
      transition: {
        duration: 0.8, // Adjust the animation duration as needed
      },
    },
    exit: {
      opacity: 0,
      y: 100, // Animate it off-screen when exiting
      transition: {
        duration: 0.05,
      },
    },
  };

  return (
    <motion.div
      className="statsComp"
      ref={ref} // Attach the ref to the "offers" section
      initial="hidden"
      animate={inView ? "visible" : "hidden"} // Animate when in view
      exit="exit" // Use the exit animation
      variants={offersAnimationVariants} // Apply animation variants
    >
      <div className="container">
        <div className="stats">
          {stats.map((stat, index) => (
            <div className="stat">
              <div className="icon">
                <i aria-hidden="true" className={stat.icon}></i>
              </div>
              {/* <h3>{stat.value} +</h3> */}
              {/* <AnimatedValue value={stat.value} /> */}
              <h3>
                <AnimatedCounter
                  from={0} // You can set the initial value to 0 or any other value as needed
                  to={
                    stat.value >= 1000000
                      ? Math.round(stat.value / 1000000)
                      : stat.value >= 1000
                      ? Math.round(stat.value / 1000)
                      : stat.value
                  } // Set the target value to animate to
                  duration={2.5} // Set the animation duration
                  fontFamily="Arial" // Set the font family
                  fontSize={60} // Set the font size
                  color="#ffffff" // Set the color
                />
                {stat.value >= 1000000 ? "M" : stat.value >= 1000 ? "K" : ""} +
              </h3>

              <p className="title">{stat.title}</p>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export function Home(props: IHomeProps) {
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
  return (
    <div>
      <div className="heroComp">
        <div className="container">
          <div className="content">
            <div className="top">
              <h3>Diaspora</h3>
              <h2>Banking</h2>
            </div>
            <p className="discription">
              CoopBank of Oromia is one of the leading private banks in Ethiopia
              with very distinctive banking history. Diaspora Banking is one of
              the banking segments of CoopBank which has been given due
              emphasis. CoopBank Diaspora Account has been operational since
              August 2012.
            </p>
            <div className="hero_button_joins">
              <button className="open_account">
                <i aria-hidden="true" className="far fa-address-card"></i>{" "}
                <span>Open An Account</span>
              </button>
              <div className="or-container">
                <span className="or-sign">or</span>
              </div>
              <button className="loans">
                <i aria-hidden="true" className="icon icon-save-money"></i>
                <span>Request A Loan</span>
              </button>
            </div>
          </div>
          <div className="image">
            <img
              src="https://diaspora.coopbankoromia.com.et/wp-content/uploads/2022/09/Model-0001.png"
              alt="Coop bank"
            />
          </div>
        </div>
      </div>

      <Stats />

      <WhatWeOffer />

      <Diasport />

      <div className="applyComp">
        <div className="container">
          <h3>Apply In 3 Minutes</h3>
          <p>
            Don't have Coopbank Diaspora account yet? Apply now and open your
            new account in under 3 minutes!
          </p>
          <ApplyNowButton link="#" text="apply now" />
        </div>
      </div>

      <div className="worksComp">
        <div className="container">
          <div className="header">
            <h3>
              How It <span className="colouredspan">Work?</span>{" "}
            </h3>
            <p>
              Follow our step-by-step guide to creating an account and
              requesting a loan
            </p>
          </div>
          <div className="content">
            <div className="left">
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
            <div className="right">
              <img
                src="https://diaspora.coopbankoromia.com.et/wp-content/uploads/2023/05/099A9988-2-1.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>

      <UsefullDiasporaResourses />

      <div className="offlineForm">
        <div className="container">
          <div className="box">
            <div className="left">
              <h3>Offline Form</h3>
              <p>
                Please <span className="orangecolor">Download</span> Diaspora
                Account Opening Offline Form and{" "}
                <span className="orangecolor">Upload</span>
              </p>
              <ApplyNowButton link="#" text="Download Now" />
            </div>
            <div className="right">
              <form action="#">
                <div className="formcontrol">
                  <p>
                    Name <span className="requiredcolor">*</span>
                  </p>
                  <input type="text" placeholder="Name" />
                </div>
                <div className="formcontrol">
                  <p>
                    Email Address <span className="requiredcolor">*</span>
                  </p>
                  <input type="text" placeholder="E.g. abdi@gmail.com" />
                </div>
                <div className="action">
                  <BasicButton text="Upload file" link="#" />
                </div>
                {/* <button type="submit">Upload file</button> */}
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="slideShowComp">
        <Slideshow />
      </div>
    </div>
  );
}
