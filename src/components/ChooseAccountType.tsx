import * as React from "react";
import "../styles/pricingTable.scss";
import { TopBanner } from "../components/TopBanner";
import AccountTypeCard from "../components/AccountTypeCard";

interface FormItem {
  id: number | null;
  accountType: number | null;
  fullName: string;
  surname: string;
  motherName: string;
  email: string;
  phone: string;
  streetAddress: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
  occupation: string;
  initialDeposit: number | null;
  monthlyIncome: number | null;
  sex: string;
  confirm: boolean;
  branch: string;
  currency: number | null;
  stage: string;
  error: string | boolean;
  percentageCompleted: number;
  // add other properties as needed
}

export type TProductType = "conventional" | "alhuda";

interface ChooseAccountTypeProps {
  state: FormItem; // Replace YourStateType with the actual type of your state
  setState: React.Dispatch<React.SetStateAction<FormItem>>; // Replace YourStateType accordingly
  accountType: TProductType;
}

interface CardProps {
  title: string;
  description: string;
  benefits: string[];
  features: string[];
  id: number;
  type: TProductType;
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

const ChooseAccountType: React.FC<ChooseAccountTypeProps> = ({
  state,
  setState,
  accountType,
}) => {
  const [selected, setSelected] = React.useState<number | null>(null);
  const cardsData: CardProps[] = [
    {
      title: "Diaspora Current Account",
      description:
        "This account takes the form of current deposits where withdrawals may be made at any time upon demand by writing a check and/or a prearranged procedure adopted by the bank. Interest shall not be paid to a non-resident foreign currency current account.",
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
      id: 1,
      type: "conventional",
    },
    {
      title: "Fixed-Time Deposit",
      description:
        "Diaspora Fixed Time Account It is an account which takes the form of a deposit certificate, issued in the name of the depositor. The maturity period may vary based on the agreement made between the depositor and the bank. The bank and the depositor will also reach an agreement on the rate of interest on this account.",
      benefits: ["Interest income is tax-free."],
      features: [
        "Interest-bearing account with a fixed maturity date.",
        "Requires a minimum opening amount of USD 100 or equivalent currency.",
        "Minimum maturity period is three months with an initial deposit of USD 5,000.",
        "Interest payment applies only if the account is maintained for the minimum period.",
      ],
      id: 2,
      type: "conventional",
    },
    {
      title: "Non-Repatriable Account",
      description:
        "Diaspora Non-repatriable Account is an account that may take the form of saving deposit that can be used only for local payments. The transferred balance will be exchanged to local currency and deposited to the account.",
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
      id: 3,
      type: "conventional",
    },
    {
      title: "ECOLFL Savings Account",
      description:
        "Ethiopian Citizen or Origin Living in Foreign Land (ECOLFL) Savings Account Is a Local Currency savings account opened by non-resident Ethiopians or non-resident foreign nationals of Ethiopian origin for the purpose of personal emergency expenses, purchase or construction of residential/ commercial houses, for business and investment in Ethiopia.",
      benefits: [
        "Enables an applicant(s) to open in person or through his/her/their agent at a nearby branch of Cooperative Bank of Oromia.",
        "Annual Interest Rate",
        "Joint ECOLFL Savings Account for couples.",
      ],
      features: [
        " ECOLFL Savings Account is available in all bank branches.",
        "Couples can open a Joint ECOLFL Savings Account.",
        "Withdrawals are allowed only in local currency.",
        "Closure upon request; new account allowed.",
        "Earns prevailing annual interest rate.",
        "Foreign currency credited converted using bank's rate.",
        "Legal heirs eligible for loans post owner's death.",
        "Applicants with foreign currency salaries from international organizations need only submit an employment contract and Ethiopian passport, exempt from resident/work permit requirements",
      ],
      id: 4,
      type: "conventional",
    },
    {
      title: "WADIA SAVING ACCOUNT",
      description:
        "Wadia is a trust agreement by CoopBank for secure fund placement without interest. It's a non-profit deposit account in USD, Pound Sterling, and Euro for eligible customers.",
      features: [
        "Fund source: Abroad in FCY",
        "Account accessible for overseas residents",
        "  FCY credited via cash, SWIFT, or cheque",
        "  Minimum initial deposit: 100 USD or equivalent",
        "  No associated benefits",
        "  Withdrawal options: Cash, transfers, mobile banking",
        "  Unlimited deposits and withdrawals",
        "  Operated using a passbook",
      ],
      benefits: [
        "Free foreign currency withdrawal fees",
        "Free transactions at all CoopBank branches",
        "Access to all E-channels",
        "Access to credit facilities",
        "Designated Personal Banker support",
      ],
      id: 5,
      type: "alhuda",
    },
    {
      title: "Mudarabah Saving Account",
      description:
        "The Mudarabah FCY Savings Account shares profits from the bank's Sharia-compliant investments based on eligible individuals' deposits.", // "Mudarabah FCY Savings Account opened and mentioned by eligible personality mainly for the purpose of sharing pro‑t from the returns of investment made by the bank by using such deposit based on Sharia compliant.",
      features: [
        "Operated by passbook or certificate of deposit",
        "Initial deposit to open the account shall be 100 USD or its equivalent in any of other acceptable currencies",
        "Only foreign currency as source of fund",
      ],
      benefits: [
        "Free withdrawals for foreign currency transactions",
        "Free transactions at all CoopBank branches",
        "Access to all E-channels",
        "Access to credit facilities",
        "Designated Personal Banker support",
      ],
      id: 6,
      type: "alhuda",
    },
    {
      title: "Mudarabah Fixed Time Deposit Account",
      description:
        "Allows depositors to share profits within a specified period by investing funds. The bank accepts investments for short, medium, and long-term opportunities.",
      features: [
        "Minimum maturity period: 3 months",
        "Certificate of deposit issued by the bank",
        "Minimum deposit to open: 5,000 (USD, GBP, or Euro) or equivalent",
      ],
      benefits: [
        "Free foreign currency withdrawal fees",
        "Free transactions at all CoopBank branches",
        "Access to all E-channels",
        "Access to credit facilities",
        "Designated Personal Banker support",
      ],
      id: 7,
      type: "alhuda",
    },
  ];

  const handleSelect = (id: number) => {
    setSelected(id);
  };

  return (
    <div>
      <div className="pricing-table">
        {cardsData
          .filter((item) => item.type === accountType)
          .map((card, index) => (
            // <PricingCard key={index} {...card} />
            <div
              onClick={() => {
                setState({ ...state, accountType: card.id });
                handleSelect(index);
              }}
            >
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
};

export default ChooseAccountType;
