import * as React from "react";
import "../styles/home.scss";
import ReadMoreButton from "../components/Buttons/readMoreButton";
import ApplyNowButton from "../components/Buttons/applyNowButton";
import Slideshow from "../components/slideShow/slideShow";
import BasicButton from "../components/Buttons/basicButton";
export interface IHomeProps {}

export function Home(props: IHomeProps) {
  const stats = [
    {
      icon: "elementskit-funfact-icon fas fa-users",
      title: "Total Membership",
      value: "5 k+",
    },
    {
      icon: "elementskit-funfact-icon fas fa-money-bill-alt",
      title: "Deposit Amount",
      value: "10 M+",
    },
    {
      icon: "elementskit-funfact-icon fas fa-globe-americas",
      title: "Countries",
      value: "120 +",
    },
    {
      icon: "elementskit-funfact-icon fas fa-share-square",
      title: "Remmitance Agency",
      value: "13 +",
    },
  ];

  const resources = [
    {
      icons: "elementkit-infobox-icon icon icon-Money",
      title: "Foreign Exchange Rate",
      description:
        "Foreign Exchange Rate is defined as the price of the domestic currency with respect to another currency. The purpose of foreign exchange is to compare one currency with another for showing their relative values.",
    },
    {
      icons: "elementkit-infobox-icon icon icon-license",
      title: "Trade Registration and Licensing",
      description:
        "Obtaining a business license in Ethiopia. The Ministry of Trade and Industry is the main institution responsible for registering a business in Ethiopia.",
    },
    {
      icons: "elementkit-infobox-icon icon icon-bank1",
      title: "National Bank Directives",
      description:
        "The National Bank of Ethiopia was established in 1963 by proclamation 206 of 1963 and began operation in January 1964. Prior to this proclamation, the Bank used to carry out dual activities, i.e. commercial banking and central banking.",
    },
  ];
  const offers = [
    {
      icons: "elementkit-infobox-icon fas fa-home",
      title: "Mortgage Loan",
      description:
        "Mortgage/ Home loan is a secured Long-Term Loans provided to Ethiopian diaspora communities to purchase or construct real estate and homes in Ethiopia. The loan product is available to eligible Ethiopian Diasporas with verifiable and steady incomes.",
    },
    {
      icons: "elementkit-infobox-icon fas fa-building",
      title: "Investment Loan",
      description:
        "Coopbank offers Investment credit facility to enhance the potential of Diasporas to develop larger, more productive businesses investment in meaningful programs in their home country that can create jobs and economic growth back home.",
    },
    {
      icons: "elementkit-infobox-icon fasicon icon-tools",
      title: "Working Capital Loan",
      description:
        "Mortgage/ Home loan is a secured Long-Term Loans provided to Ethiopian diaspora communities to purchase or construct real estate and homes in Ethiopia. The loan product is available to eligible Ethiopian Diasporas with verifiable and steady incomes.",
    },
  ];
  const diaspora = [
    {
      title: "Diaspora Accounts",
      description:
        "Diaspora Banking Accounts allow Diasporas who resides and works outside the country to maintain and perform domestic and international transfers through their CoopBank Diaspora Accounts.",
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

  const howItWorks = [
    {
      icon: "elementkit-infobox-icon fas fa-edit icon-edit1",
      title: "Create Your Account",
      description:
        "Don’t have a Coopbank Diaspora account yet? Apply now and open your new account in under 3 minutes!",
    },
    {
      icon: "elementkit-infobox-icon fas fa-book fa-finance-book",
      title: "Your account Approved & Ready",
      description:
        "You will receive an e-mail with your account details, and you can begin depositing into it",
    },
    {
      icon: "elementkit-infobox-icon fas fa-loan",
      title: "Request For Loan",
      description:
        "You can use a different diaspora loan once you have a diaspora account",
    },
    {
      icon: "elementkit-infobox-icon fas fa-Document-Search",
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
      <div className="statsComp">
        <div className="container">
          <div className="stats">
            {stats.map((stat) => (
              <div className="stat">
                <div className="icon">
                  <i aria-hidden="true" className={stat.icon}></i>
                </div>
                <h3>{stat.value}</h3>
                <p className="title">{stat.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="whatweofferComp">
        <div className="container">
          <div className="header">
            <h3>
              What We <span>offer</span>
            </h3>
            <p>We are always there for your Diaspora Banking Needs!</p>
          </div>
          <div className="offers">
            {offers.map((offer) => (
              <div className="offer">
                <div className="icon">
                  <i aria-hidden="true" className={offer.icons}></i>
                </div>
                <h4>{offer.title}</h4>
                <p>{offer.description}</p>
                <ReadMoreButton link="#" text="Read More" />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="diaspora">
        <div className="container">
          <div className="cards">
            {diaspora.map((item, index) => {
              const isEven = index % 2 === 0;

              // Split the title into words
              const titleWords = item.title.split(" ");

              // Create a span element with a class for the last word
              const lastWord = (
                <span className="colouredspan">{titleWords.pop()}</span>
              );

              // Join the remaining words in the title
              const titleWithoutLastWord = titleWords.join(" ");
              return (
                <div className={`item ${isEven ? "even" : "odd"}`}>
                  <div className="image">
                    <img src={item.img} alt={item.title} />
                  </div>
                  <div className="content">
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
                  </div>
                </div>
              );
            })}
            <div className="card"></div>
          </div>
        </div>
      </div>

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
                  <div className="icon">
                    <i aria-hidden="true" className={work.icon}></i>
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

      <div className="whatweofferComp">
        <div className="container">
          <div className="header">
            <h3>
              Some Useful <span className="colouredspan">Diaspora</span>{" "}
              Resources
            </h3>
          </div>
          <div className="offers">
            {resources.map((offer) => (
              <div className="offer">
                <div className="icon">
                  <i aria-hidden="true" className={offer.icons}></i>
                </div>
                <h4>{offer.title}</h4>
                <p>{offer.description}</p>
                <ReadMoreButton link="#" text="Read More" />
              </div>
            ))}
          </div>
        </div>
      </div>

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
