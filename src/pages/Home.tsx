import * as React from "react";
import "../styles/home.scss";
import ReadMoreButton from "../components/Buttons/readMoreButton";
import ApplyNowButton from "../components/Buttons/applyNowButton";
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
      icons: "elementkit-infobox-icon fas fa-home",
      title: "Foreign Exchange Rate",
      description:
        "Foreign Exchange Rate is defined as the price of the domestic currency with respect to another currency. The purpose of foreign exchange is to compare one currency with another for showing their relative values.",
    },
    {
      icons: "elementkit-infobox-icon fas fa-home",
      title: "Trade Registration and Licensing",
      description:
        "Obtaining a business license in Ethiopia. The Ministry of Trade and Industry is the main institution responsible for registering a business in Ethiopia.",
    },
    {
      icons: "elementkit-infobox-icon fas fa-home",
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
  return (
    <div>
      <p style={{ display: "flex", padding: "10rem" }}>
        Body here Body here Body here
      </p>
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

      <p style={{ display: "flex", padding: "10rem" }}>
        Body here Body here Body here
      </p>
    </div>
  );
}
