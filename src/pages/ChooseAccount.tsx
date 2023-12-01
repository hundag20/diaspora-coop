import * as React from "react";
import "../styles/pricingTable.scss";
import { TopBanner } from "../components/TopBanner";
import AccountTypeCard from "../components/AccountTypeCard";

export interface IChooseAccountProps {}

interface CardProps {
  title: string;
  description: string;
  benefits: string[];
  features: string[];
}

const PricingCard: React.FC<CardProps> = ({
  title,
  description,
  benefits,
  features,
}) => (
  <div className="pricing-card">
    <h2 className="card-title">{title}</h2>
    <p className="card-description">{description}</p>
    <div className="action">
      <button>Get started</button>
    </div>
    {/* <div className="card-section">
      <h3 className="section-title">Benefits</h3>
      <ul className="section-list">
        {benefits.map((benefit, index) => (
          <li key={index}>{benefit}</li>
        ))}
      </ul>
    </div>
    <div className="card-section">
      <h3 className="section-title">Features</h3>
      <ul className="section-list">
        {features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
    </div> */}
    {/* <div className="action">
      <button>Get started</button>
    </div> */}
  </div>
);

export function ChooseAccount(props: IChooseAccountProps) {
  const [selected, setSelected] = React.useState<number | null>(null);
  const cardsData: CardProps[] = [
    {
      title: "Diaspora Current Account",
      description:
      " Takes the form of current deposits where withdrawals may be made at any time upon demand. Interest shall not be paid to a non-resident foreign currency current account.",
      //"This account takes the form of current deposits where withdrawals may be made at any time upon demand by writing a check and/or a prearranged procedure adopted by the bank. Interest shall not be paid to a non-resident foreign currency current account.",
      benefits: [
        "Free withdrawals fee for foreign currency transactions",
        "Free transactions across all CoopBank branches",
        "Access to all our E-channels",
        "Access to credit facilities",
        "Designated Personal Banker for support",
      ],
      features: [
        "Local and foreign currency (GBP, USD, and EURO) options",
        "Personalized Cheque Books",
        "Debit Card on request",
        "E-mail alerts and statements",
        "Joint Signatory Option",
        // "Financial advisory services",
        "Third-party payments",
      ],
    },
    {
      title: "Fixed-Time Deposit",
      description:
      "Offers deposit certificates with variable maturity periods and negotiated interest rates. Interest income for non-resident foreign currency deposits is tax-exempt.",
       // "Diaspora Fixed Time Account It is an account which takes the form of a deposit certificate, issued in the name of the depositor. The maturity period may vary based on the agreement made between the depositor and the bank. The bank and the depositor will also reach an agreement on the rate of interest on this account.",
      benefits: ["Interest income is tax-free."],
      features: [
        "Interest-bearing account with a fixed maturity date.",
        "Requires a minimum opening amount of USD 100 or equivalent currency.",
        "Minimum maturity period is three months with an initial deposit of USD 5,000.",
        "Interest payment applies only if the account is maintained for the minimum period.",
      ],
    },
    {
      title: "Non-Repatriable Account",
      description:
      "A savings deposit, is exclusively meant for local transactions. Transferred balances are converted into local currency and deposited into the account.",
     //   "Diaspora Non-repatriable Account is an account that may take the form of saving deposit that can be used only for local payments. The transferred balance will be exchanged to local currency and deposited to the account.",
      benefits: [
        "Free withdrawals fee for foreign currency transactions",
        "Free transactions across all CoopBank branches",
        "Enables you to access all our E-channels",
        "Access to credit facilities",
        "Designated Personal Banker",
      ],
      features: [
        "Available in local and foreign currencies: GBP, USD, and EURO.",
        "Offers personalized cheque books.",
        "Option for Debit Card issuance upon request.",
        "Provides email alerts and statements.",
        "Allows Joint Signatory (e.g., with spouse, sibling, or parent in Ethiopia).",
        "Offers financial advisory services.",
        "Facilitates third-party payments.",
      ],
    },
    {
      title: "ECOLFL Savings Account",
      description:
   "The Ethiopian Citizen or Origin Living in Foreign Land (ECOLFL) is for non-resident Ethiopians or foreign nationals of Ethiopian origin. It's designed for personal emergencies, housing, business, and investments in Ethiopia",
      benefits: [
        "Enables an applicant(s) to open in person or through his/her/their agent at a nearby branch of Cooperative Bank of Oromia.",
        "Annual Interest Rate",
        "Joint ECOLFL Savings Account for couples.",
    ],
      features: [
        " ECOLFL Savings Account is available in all bank branches.",
        "Withdrawals allowed only in local currency.",
        "Closure upon request; new account allowed.",
         "Foreign currency credited converted using bank's rate.",
        "Legal heirs eligible for loans post owner's death.",
        "Applicants with foreign currency salaries from international organizations need only submit an employment contract and Ethiopian passport, exempt from resident/work permit requirements",
     ],
    },
  ];

  const handleSelect = (id: number) => {
    setSelected(id);
  };

  return (
    <div>
      {/* <TopBanner
        containerClass="gl hd-container"
        overlayClass={`gl hd-background-overlay conventional`}
        contentClass="gl hd-content"
        footerClass="gl hd-footer"
        contentHeader="Chhose plan"
        contentParagraph="description"
      /> */}

      <div className="pricing-table">
        {cardsData.map((card, index) => (
          // <PricingCard key={index} {...card} />
          <div onClick={() => handleSelect(index)}>
            <AccountTypeCard
              key={index}
              title={card.title}
              description={card.description}
              benefits={card.benefits}
              features={card.features}
              active={index === selected ? true : false}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
