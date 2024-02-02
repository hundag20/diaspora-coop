import * as React from "react";
import "../styles/home.scss";
import "../styles/form.scss";
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
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import AnimatedCounter from "../components/AnimatedCounter";
import { useNavigate } from "react-router-dom";
import { Divider } from "../components/Divider";
// import { Icon } from "@mui/material";

// import { FaCheckCircle } from "react-icons/fa";
// import { BsCheck2Circle } from "react-icons/bs";

import Carousel from "../components/slideShow/carousel";
import Gallery from "../components/slideShow/grid";
import KeenSlider from "../components/slideShow/keenSlider";
import AnimatedShake from "../components/AnimatedShake";
import HeroSlides from "../components/HeroSlides";
import {
  fetchApply,
  fetchHowToWork,
  fetchStats,
  fetchWhatWeOffer,
} from "../hooks/fetchStrapi";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconName, icon, library } from "@fortawesome/fontawesome-svg-core";
// Import all icons from solid package
// import * as solidIcons from "@fortawesome/free-solid-svg-icons";

// import { Icon } from "@mdi/react";
import * as mdiIcons from "@mdi/js";
import * as Icons from "@material-ui/icons";

import * as icons from "@material-ui/icons";
import stringSimilarity from "string-similarity";
import useIcons from "../components/icon";
import { fetchHomePage } from "../hooks/fetchFullStrapi";
import CoopLoader from "../components/coopLoader/coopLoader";
import { FileUpload } from "../components/LoanRequestForm";
import axios from "axios";
import { CircularProgress, Snackbar, TextField } from "@mui/material";

import { Widget, addResponseMessage } from "react-chat-widget";

import model1 from "../assets/img/Model-0001.png";
import model2 from "../assets/img/Model-002.png";
import model3 from "../assets/img/Model-003.png";
import Chat from "../components/Chat";
import ContactUs from "../components/ContactUs/contactUs";

const rootUrl = window.location.protocol + "//" + window.location.host;
const apiUrl = `${!rootUrl.includes("localhost") ? rootUrl : ""}/${
  process.env.REACT_APP_API_URL
}`;

export interface IHomeProps {}
interface Header {
  title: string;
  description: string;
}
interface DiasporaItem {
  title: string;
  description: string;
  bullets: string[];
  img: string;
  link: string;
  action: string;
}
const Diasport: React.FC = () => {
  const diaspora: DiasporaItem[] = [
    {
      title: "Diaspora Accounts",
      description:
        "Diaspora Banking Accounts allow Diasporas who reside and work outside the country to maintain and perform domestic and international transfers through their Coopbank Diaspora Accounts.",
      bullets: [
        "Diaspora Current Account",
        "Diaspora Fixed-Time Deposit Account",
        "Diaspora Non-Repatriable Account",
        "Ethiopian Citizen Or Origin Living In Foreign Land (ECOLFL) Savings Account",
      ],
      img: "https://diaspora.coopbankoromia.com.et/wp-content/uploads/2022/09/Model-002.png",
      link: "/diaspora-current-account",
      action: "Open an Account",
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
      link: "/get-a-loan",
      action: "Apply Now",
    },
  ];
  // const navigate = useNavigate();
  interface ItemsProps {
    index: number;
    item: DiasporaItem;
  }

  const Items: React.FC<ItemsProps> = ({ index, item }) => {
    const isEven = index % 2 === 0;
    const [ref, inView] = useInView({
      triggerOnce: true, // Only trigger the animation once
      threshold: 0.4, // Adjust as needed
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
              <li key={bulletIndex}>
                {/* <BsCheck2Circle className="icon" />  */}
                {bullet}
              </li>
            ))}
          </ul>
          <ApplyNowButton text={item.action} link={item.link} target="_self" />
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
  icon: IconName;
}
interface OfferComponentProps {
  offer: WhatWeOfferItem;
}
interface WhatWeOfferItemProp {
  header: Header;
  offers: WhatWeOfferItem[];
}
const offers: WhatWeOfferItemProp = {
  header: {
    title: "What We Offer",
    description: "We are always there for your diaspora banking needs!",
  },
  offers: [
    {
      icon: "MdOtherHouses" as IconName,
      title: "Mortgage Loan",
      description:
        "Mortgage/ Home loan is a secured Long-Term Loans provided to Ethiopian diaspora communities to purchase or construct real estate and homes in Ethiopia. The loan product is available to eligible Ethiopian Diasporas with verifiable and steady incomes.",
    },
    {
      icon: "MdBusiness" as IconName,
      title: "Investment Loan",
      description:
        "Coopbank offers Investment credit facility to enhance the potential of Diasporas to develop larger, more productive businesses investment in meaningful programs in their home country that can create jobs and economic growth back home.",
    },
    {
      icon: "MdHandyman" as IconName,
      title: "Working Capital Loan",
      description:
        "Diaspora Working Capital Loan is a loan provided to eligible Ethiopian Diasporas to finance their business’s everyday operations. These loans are used to provide the working capital that covers a Diaspora’s business short-term operational needs.",
    },
  ],
};
const WhatWeOffer: React.FC<WhatWeOfferItemProp> = ({ header, offers }) => {
  // Use the useInView hook to detect when the "offers" section is in view
  const navigate = useNavigate();
  const [ref, inView] = useInView({
    triggerOnce: true, // Only trigger the animation once
    threshold: 0.2, // Adjust as needed
  });
  console.log("offer", offers);

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
  function redirectToAnotherPage() {
    window.location.href = "/get-a-loan"; // Replace with the URL of the destination page
  }
  const OfferComponent: React.FC<OfferComponentProps> = ({ offer }) => {
    // Assuming IconName is the type for your icon names
    const Icon = useIcons(offer.icon ? offer.icon.toLowerCase() : "");

    return (
      <div className="offer" onClick={() => navigate("/get-a-loan")}>
        <div className="icon">
          <Icon className="muicon" />
        </div>
        <h4>{offer.title}</h4>
        <p>{offer.description}</p>
      </div>
    );
  };

  return (
    <div className="whatweofferComp">
      <div className="container">
        <div className="header">
          <h3>
            {/* What We <span className="colouredspan">offer</span> */}
            {header.title}
          </h3>
          <p>{header.description}</p>
        </div>
        <motion.div
          className="offers"
          ref={ref} // Attach the ref to the "offers" section
          initial="hidden"
          animate={inView ? "visible" : "hidden"} // Animate when in view
          variants={offersAnimationVariants} // Apply animation variants
        >
          {offers.map((offer, index) => (
            <OfferComponent key={index} offer={offer} />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

const OfflineForm: React.FC = () => {
  // Use the useInView hook to detect when the "offers" section is in view
  const controls = useAnimation();
  const [ref, inView] = useInView();
  const navigate = useNavigate();

  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [loader, setLoader] = useState<boolean>(false);
  const [error, setError] = useState<{ [key: string]: boolean }>({});
  const [uploadNotif, setUploadNotif] = useState<any>({});
  const [file, setFile] = useState<null | File>(null);

  useEffect(() => {
    if (inView) {
      const sequence = async () => {
        await controls.start({ scale: 1.1, transition: { duration: 0.1 } }); // Zoom in
        await controls.start({ rotate: -5, transition: { duration: 0.1 } }); // Tilt left
        await controls.start({ rotate: 5, transition: { duration: 0.1 } }); // Tilt right
        await controls.start({ rotate: -5, transition: { duration: 0.1 } }); // Tilt left
        await controls.start({ rotate: 5, transition: { duration: 0.1 } }); // Tilt right
        await controls.start({ scale: 1, transition: { duration: 0.1 } }); // Zoom out
        await controls.start({ rotate: 0, transition: { duration: 0.1 } }); // Back to center
      };

      sequence();
    }
  }, [controls, inView]);

  const animationVariants = {
    initial: {
      scale: 1,
      rotate: 0,
    },
    animationSequence: {
      scale: 1.2,
      rotate: -10,
      transition: { duration: 0.3 },
      yoyo: 1,
      repeatType: "mirror",
      repeat: 2,
    },
  };
  const isValidEmail = (email: string) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  const handleSubmit = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.preventDefault();
    setError({});
    setUploadNotif({});
    setError({});
    if (email === "" || name === "" || file === null || !isValidEmail(email)) {
      let err: { [key: string]: boolean } = {};
      if (email === "") err.email = true;
      if (!isValidEmail(email)) err.email = true;
      if (name === "") err.name = true;
      if (file === null) err.file = true;
      setError(err);
      return;
    }
    const formdata = new FormData();
    formdata.append("fullName", name);
    formdata.append("email", email);
    formdata.append("file", file);

    setLoader(true);
    axios
      .post(`${apiUrl}api/v1/offline-accounts`, formdata)
      .then((res) => {
        setUploadNotif({ msg: "File uploaded successfully!", status: "ok" });
        setLoader(false);
      })
      .catch(async (err) => {
        // setTimeout(() => {
        setUploadNotif({ msg: "File uploaded Failed!", status: "error" });
        // setUploadNotif('File uploaded successfully!')
        setError(err?.response?.data?.message || "Network error");
        setLoader(false);

        // }, 2000)
      });
    // .finally(() => {
    //   setLoader(false);
    // });
  };

  return (
    <div className="offlineForm">
      <div className="container">
        <div className="box">
          <div className="left">
            <h3>Offline Form</h3>
            <Divider />
            <p>
              Please <span className="orangecolor">Download</span> Diaspora
              Account Opening Offline Form and{" "}
              <span className="orangecolor">Upload.</span>{" "}
              <span className="or-apply-online">
                (Or apply online{" "}
                <p onClick={() => navigate("/open-account")}>here</p>)
              </span>
            </p>

            <motion.div
              ref={ref}
              initial={{ scale: 1, rotate: 0 }}
              animate={controls}
            >
              <ApplyNowButton
                link="/downloads/2022/09/Diaspora-Account-Opening-Form-FINFINE-1.pdf"
                text="Download Now"
                target="_blank"
              />
            </motion.div>
          </div>
          <div className="right">
            <form action="#">
              <div className="formcontrol">
                <p>
                  Name <span className="requiredcolor">*</span>
                </p>
                <TextField
                  type="text"
                  placeholder="Name"
                  value={name}
                  fullWidth
                  error={error.name}
                  onChange={(e) => {
                    error.name = false;
                    setName(e.target.value);
                  }}
                />
              </div>
              <div className="formcontrol">
                <p>
                  Email Address <span className="requiredcolor">*</span>
                </p>
                <TextField
                  type="email"
                  placeholder="E.g. abdi@gmail.com"
                  value={email}
                  error={error.email}
                  onChange={(e) => {
                    error.email = false;
                    setEmail(e.target.value);
                  }}
                  fullWidth
                />
              </div>
              <div className="formcontrol form-row">
                <p>
                  Upload Form <span className="requiredcolor">*</span>
                </p>
                {/* <input type="file" placeholder="E.g. abdi@gmail.com" /> */}

                <div className="row1">
                  <div className="form-col form-col-4 ">
                    <div className="form-field">
                      <div
                        className="file-upload-container"
                        data-element="upload-2_651becd154b31"
                        aria-describedby="form-field-upload-2_651becd154b31-description"
                      >
                        <FileUpload
                          name="upload-2[]"
                          error={error.file ? true : false}
                          stateFunction={file}
                          setStateFunction={setFile}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row1">
                  <div className="form-col form-col-4 ">
                    <div className="form-field">
                      {uploadNotif.msg && (
                        <p
                          style={{
                            marginTop: 10,
                            fontSize: "16px",
                            color:
                              uploadNotif.status === "error" ? "red" : "green",
                          }}
                        >
                          {uploadNotif.msg}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <div className="action">
                {/* <p></p> */}
                {/* <BasicButton text="Choose file" link="" /> */}
                {/* {error && <p>{error}</p>} */}
                {loader ? (
                  <CircularProgress />
                ) : (
                  <div onClick={(e) => handleSubmit(e)}>
                    <BasicButton text="Upload" link="" />
                  </div>
                )}
              </div>
              {/* <button type="submit">Upload file</button> */}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

interface UsefullDiasporaResoursesItems {
  title: string;
  description: string;
  icons: React.ReactNode;
  link: string;
}
const UsefullDiasporaResourses: React.FC = () => {
  const resources: UsefullDiasporaResoursesItems[] = [
    {
      icons: <AccountBalanceWallet className="muicon" />,
      title: "Foreign Exchange Rate",
      description:
        "Foreign Exchange Rate is defined as the price of the domestic currency with respect to another currency. The purpose of foreign exchange is to compare one currency with another for showing their relative values.",
      link: "https://coopbankoromia.com.et/daily-exchange-rates/",
    },
    {
      icons: <WorkspacePremium className="muicon" />,
      title: "Trade Registration and Licensing",
      description:
        "Obtaining a business license in Ethiopia. The Ministry of Trade and Industry is the main institution responsible for registering a business in Ethiopia.",
      link: "https://etrade.gov.et/",
    },
    {
      icons: <AccountBalance className="muicon" />,
      title: "National Bank Directives",
      description:
        "The National Bank of Ethiopia was established in 1963 by proclamation 206 of 1963 and began operation in January 1964. Prior to this proclamation, the Bank used to carry out dual activities, i.e. commercial banking and central banking.",
      link: "https://nbe.gov.et/directives/",
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
              <ReadMoreButton
                link={offer.link}
                text="Read More"
                target="_blank"
              />
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
interface StatComponentProps {
  offer: StatItems;
}
interface StatHomeProps {
  stat: StatItems[] | null;
}
const staticStats: StatItems[] = [
  {
    icon: "MdPeopleAlt",
    title: "Total Membership",
    value: 5000,
  },
  {
    icon: "MdAttachMoney",
    title: "Deposit Amount",
    value: 10000000,
  },
  {
    icon: "Countries",
    title: "Countries",
    value: 120,
  },
  {
    icon: "share",
    title: "Remmitance Agency",
    value: 13,
  },
];
const Stats: React.FC<StatHomeProps> = ({ stat }) => {
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

  const navigate = useNavigate();
  const StatComponent: React.FC<StatComponentProps> = ({ offer }) => {
    // Assuming IconName is the type for your icon names
    const Icon = useIcons(offer.icon ? offer.icon.toLowerCase() : "");

    return (
      <div className="stat">
        <div className="icon">
          {/* <i aria-hidden="true" className={offer.icon}></i> */}
          <Icon className="muicon" />
        </div>
        {/* <h3>{stat.value} +</h3> */}
        {/* <AnimatedValue value={stat.value} /> */}
        <h3>
          <AnimatedCounter
            from={0} // You can set the initial value to 0 or any other value as needed
            to={
              offer.value >= 1000000
                ? Math.round(offer.value / 1000000)
                : offer.value >= 1000
                ? Math.round(offer.value / 1000)
                : Math.round(offer.value)
            } // Set the target value to animate to
            duration={2.5} // Set the animation duration
            fontFamily="Arial" // Set the font family
            fontSize={60} // Set the font size
            color="#ffffff" // Set the color
          />
          {offer.value >= 1000000 ? " M" : offer.value >= 1000 ? " K" : ""} +
        </h3>

        <p className="title">{offer.title}</p>
      </div>
    );
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
          {stat &&
            stat.map((statof, index) => (
              <StatComponent key={index} offer={statof} />
            ))}
        </div>
      </div>
    </motion.div>
  );
};

interface HeroItems {
  topTitle: string;
  bottomTitle: string;
  description: string;
  buttons: {
    data: {
      id: number;
    }[];
  };
  url: {
    data: {
      attributes: {
        url: string;
      };
    };
  };
}
interface HeroItemsComp {
  id: number;
  slide: HeroItems;
}

const slideData: HeroItems[] = [
  {
    topTitle: "Diaspora",
    bottomTitle: "Banking",
    description:
      "Coopbank of Oromia is one of the leading private banks in Ethiopia with very distinctive banking history. Diaspora Banking is one of the banking segments of Coopbank which has been given due emphasis.",
    url: {
      data: {
        attributes: {
          url: model1,
        },
      },
    },
    buttons: {
      data: [
        {
          id: 2,
        },
        {
          id: 1,
        },
      ],
    },
  },
  {
    topTitle: "Diaspora",
    bottomTitle: "Accounts",
    description:
      "Diaspora Banking Accounts allow Diasporas who resides and works outside the country to maintain and perform domestic and international transfers through their Coopbank Diaspora Accounts.",
    url: {
      data: {
        attributes: {
          url: model2,
        },
      },
    },
    buttons: {
      data: [
        {
          id: 2,
        },
      ],
    },
  },
  {
    topTitle: "Diaspora",
    bottomTitle: "Loan",
    description:
      "The bank provides business and investment loan along with expertise free consultancy services on different opportunities.",
    url: {
      data: {
        attributes: {
          url: model3,
        },
      },
    },
    buttons: {
      data: [
        {
          id: 1,
        },
      ],
    },
  },
];
const Hero: React.FC = () => {
  // Use the useInView hook to detect when the "offers" section is in view
  const navigate = useNavigate();
  return (
    <div className="heroComp">
      <div className="container">
        <div className="content">
          <div className="top">
            <h3>Diaspora</h3>
            <h2>Banking</h2>
          </div>
          <p className="discription">
            Coopbank of Oromia is one of the leading private banks in Ethiopia
            with very distinctive banking history. Diaspora Banking is one of
            the banking segments of Coopbank which has been given due emphasis.
            Coopbank Diaspora Account has been operational since August 2012.
          </p>
          <div className="hero_button_joins">
            <button
              className="open_account"
              onClick={() => navigate("/diaspora-current-account")}
            >
              <i aria-hidden="true" className="far fa-address-card"></i>{" "}
              <span>Open An Account</span>
            </button>
            <div className="or-container">
              <span className="or-sign">or</span>
            </div>
            <button className="loans" onClick={() => navigate("/get-a-loan")}>
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
  );
};

const staticApply: ApplyItems = {
  title: "Open Account In 3 Minutes",
  description:
    "Don't have Coopbank Diaspora account yet? Apply now and open your new account in under 3 minutes!",
  button: "apply now",
  background: {
    data: {
      attributes: {
        url: "string",
      },
    },
  },
};
interface ApplyItems {
  title: string;
  description: string;
  button: string;
  background: {
    data: {
      attributes: {
        url: string;
      };
    };
  };
}
const ApplyNow: React.FC<ApplyItems> = ({
  title,
  description,
  button,
  background,
}) => {
  return (
    <div className="applyComp">
      <div className="container">
        <h3>{title}</h3>
        <p>{description}</p>
        <AnimatedShake>
          <ApplyNowButton target="_self" link="/open-account" text={button} />
        </AnimatedShake>
      </div>
    </div>
  );
};

const Remittance: React.FC = () => {
  // Use the useInView hook to detect when the "offers" section is in view
  return (
    <div className="slideShowComp" id="#money">
      <div className="container">
        <h3>
          International <span className="colouredspan">Remittance</span>{" "}
        </h3>
        <p>
          We partner with over <span className="coloured">13+</span> world best
          money transfer agents
        </p>
        {/* <Slideshow /> */}
        {/* <Carousel /> */}
        {/* <Gallery /> */}
        <KeenSlider />
      </div>
    </div>
  );
};

interface HowItWorksItems {
  title: string;
  description: string;
  type: string;
}
interface HowItWorksItemsPro {
  header: {
    title: string;
    description: string;
  };
  content: HowItWorksItems[];
}
const howItWorksObejct: HowItWorksItemsPro = {
  header: {
    title: "",
    description: "",
  },
  content: [
    {
      title: "Create Your Account!",
      description:
        "Don’t have a Coopbank Diaspora account yet? Apply now and open your new account in under 3 minutes!",
      type: "account",
    },
    {
      title: "Your account Approved & Ready",
      description:
        "You will receive an e-mail with your account details, and you can begin depositing into it",
      type: "account",
    },
    {
      title: "Request For Loan",
      description:
        "You can use a different diaspora loan once you have a diaspora account",
      type: "loan",
    },
    {
      title: "Coopbank Review Your Request",
      description:
        "In less than 24 hours, Coopbank will review your document and provide you with a response",
      type: "loan",
    },
    {
      title: "You will get the loan",
      description:
        "In less than 24 hours, Coopbank will review your document and provide you with a response",
      type: "loan",
    },
  ],
};
const HowItWorks: React.FC<HowItWorksItemsPro> = ({ header, content }) => {
  // Use the useInView hook to detect when the "offers" section is in view
  return (
    <div className="worksComp">
      <div className="container">
        <div className="header">
          <h3>
            {/* How It <span className="colouredspan">Works ?</span>{" "} */}
            {header.title}
          </h3>
          <p>{header.description}</p>
        </div>
        <div className="content">
          <div className="left">
            {content.map((work, index) => (
              <div className="works">
                {/* <div className="icon">{work.icon}</div> */}
                <div
                  className={`iconNum ${
                    work.type === "loan" ? "loan" : "account"
                  }`}
                >
                  <div className="muicon">{index + 1} </div>{" "}
                </div>
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
  );
};

interface HomeDataItems {
  stat: {
    id: number;
    stat: StatItems[];
  };
  apply: ApplyItems;
  hero: HeroItemsComp;
  HowItWork: {
    header: {
      id: number;
      title: string;
      description: string;
    };
    content: HowItWorksItems[];
  };
  offer: {
    header: Header;
    offers: WhatWeOfferItem[];
  };
}

export function Home(props: IHomeProps) {
  const [datas, setData] = useState<HomeDataItems | null>(null);

  const [loader, setLoader] = useState(false);
  useEffect(() => {
    fetchHomePage(setData, setLoader);
  }, []);
  // if (loader) return <CoopLoader loader={loader} />;

  return (
    <div>
      {/* <Hero /> */}
      <HeroSlides slides={datas ? datas.hero.slide : slideData} />

      <div className="halfpage">
        <HowItWorks
          header={datas ? datas.HowItWork.header : howItWorksObejct.header}
          content={datas ? datas?.HowItWork.content : howItWorksObejct.content}
        />
        <ApplyNow
          title={datas ? datas.apply.title : staticApply.title}
          description={
            datas ? datas.apply.description : staticApply.description
          }
          button={datas ? datas.apply.button : staticApply.button}
          background={datas ? datas.apply.background : staticApply.background}
        />
      </div>

      <WhatWeOffer
        header={datas ? datas.offer.header : offers.header}
        offers={datas ? datas?.offer.offers : offers.offers}
      />
      {/* <Diasport /> */}

      <OfflineForm />

      <Stats stat={datas ? datas.stat.stat : staticStats} />

      <div id="money-transfer">
        <Remittance />
      </div>
      <ContactUs />
      {/* <UsefullDiasporaResourses /> */}
      {/* <Chat /> */}
      {/* <Widget
        handleNewUserMessage={handleNewUserMessage}
        title="COOP Kapcha"
        subtitle="welcome"
        showCloseButton
      /> */}
    </div>
  );
}
