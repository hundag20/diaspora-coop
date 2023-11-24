import * as React from "react";
import "../styles/pricingTable.scss";
import { TopBanner } from "../components/TopBanner";

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
  const cardsData: CardProps[] = [
    {
      title: "Diaspora Current Account",
      description:
        "This account takes the form of current deposits where withdrawals may be made at any time upon demand by writing a check and/or a prearranged procedure adopted by the bank. Interest shall not be paid to a non-resident foreign currency current account.",
      benefits: [
        "Free withdrawals fee for foreign currency transactions",
        "Free transactions across all CoopBank branches",
        "Enables you to access all our E-channels",
        "You can get access to credit facilities",
        "There will be designated Personal Banker who support you in your banking with Coopbank.",
      ],
      features: [
        "It’s available in local and foreign currency (GBP, USD, and EURO)",
        "This account has a personalized Cheque Books",
        "Debit Card can also be issued on request",
        "You will be provided with E-mail alerts and",
      ],
    },
    {
      title: "Fixed-Time Deposit",
      description:
        "Diaspora Fixed Time Account It is an account which takes the form of a deposit certificate, issued in the name of the depositor. The maturity period may vary based on the agreement made between the depositor and the bank. The bank and the depositor will also reach an agreement on the rate of interest on this account.",
      benefits: [
        "Free withdrawals fee for foreign currency transactions",
        "Free transactions across all CoopBank branches",
        "Enables you to access all our E-channels",
        "You can get access to credit facilities",
        "There will be designated Personal Banker who support you in your banking with Coopbank.",
      ],
      features: [
        "It’s available in local and foreign currency (GBP, USD, and EURO)",
        "This account has a personalized Cheque Books",
        "Debit Card can also be issued on request",
        "You will be provided with E-mail alerts and",
      ],
    },
    {
      title: "Non-Repatriable Account",
      description:
        "Diaspora Non-repatriable Account is an account that may take the form of saving deposit that can be used only for local payments. The transferred balance will be exchanged to local currency and deposited to the account.",
      benefits: [
        "Free withdrawals fee for foreign currency transactions",
        "Free transactions across all CoopBank branches",
        "Enables you to access all our E-channels",
        "You can get access to credit facilities",
        "There will be designated Personal Banker who support you in your banking with Coopbank.",
      ],
      features: [
        "It’s available in local and foreign currency (GBP, USD, and EURO)",
        "This account has a personalized Cheque Books",
        "Debit Card can also be issued on request",
        "You will be provided with E-mail alerts and",
      ],
    },
    {
      title: "ECOLFL Savings Account",
      description:
        "Ethiopian Citizen or Origin Living in Foreign Land (ECOLFL) Savings Account Is a Local Currency savings account opened by non-resident Ethiopians or non-resident foreign nationals of Ethiopian origin for the purpose of personal emergency expenses, purchase or construction of residential/ commercial houses, for business and investment in Ethiopia.",
      benefits: [
        "Free withdrawals fee for foreign currency transactions",
        "Free transactions across all CoopBank branches",
        "Enables you to access all our E-channels",
        "You can get access to credit facilities",
        "There will be designated Personal Banker who support you in your banking with Coopbank.",
      ],
      features: [
        "It’s available in local and foreign currency (GBP, USD, and EURO)",
        "This account has a personalized Cheque Books",
        "Debit Card can also be issued on request",
        "You will be provided with E-mail alerts and",
      ],
    },
  ];

  return (
    <div>
      <TopBanner
        containerClass="gl hd-container"
        overlayClass={`gl hd-background-overlay conventional`}
        contentClass="gl hd-content"
        footerClass="gl hd-footer"
        contentHeader="Chhose plan"
        contentParagraph="description"
      />

      <div className="pricing-table">
        {cardsData.map((card, index) => (
          <PricingCard key={index} {...card} />
        ))}
      </div>
    </div>
  );
}
