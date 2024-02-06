import { Grid } from "@mui/material";
import { TopBanner } from "./TopBanner";
import { AccountOpeningForm } from "./AccountOpeningForm";
import "../styles/accountOpening.scss";
import { SwiftCode } from "./SwiftCode";
import { AccountOpeningWizardForm } from "./AccountOpeningWizardForm";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

// const rootUrl = window.location.protocol + "//" + window.location.host;
// // const apiUrl = `${process.env.REACT_APP_API_URL}`;
// const apiUrl = `${rootUrl}/${process.env.REACT_APP_API_URL}`;
const rootUrl = window.location.protocol + "//" + window.location.host;
const apiUrl = `${!rootUrl.includes('localhost')? `${rootUrl}/`:''}${process.env.REACT_APP_API_URL}`;

const DiasporaAccountInfo = {
  title: "DIASPORA ACCOUNT",
  desc: "Diaspora Banking Account allows Diaspora who resides and works  outside the country to maintain and perform domestic and  international transfers through their Coopbank accounts.",
};

export type TProductType = "conventional" | "alhuda";
export interface IAccountOpeningProps {
  productType: TProductType;
  accountType:
    | "Diaspora Mudarabah Fixed Term Deposit"
    | "Diaspora Mudarabah Savings Account"
    | "Diaspora Wadia Savings Account"
    | "ECOLFL Savings Account"
    | "Disapora Non-Repatriable Account"
    | "Disapora Current Account"
    | "Open Account"
    | "Disapora Fixed-Time Deposit";
  headerSubTitle: string;
  DescTitle: string;
  DescText: string;
  features: (string | string[])[];
  benefits: string[];
}

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

export function AccountOpening(props: IAccountOpeningProps) {
  const [accountType, setAccountType] = useState<TProductType>("conventional");
  const [initialAccountState, setInitialAccountState] = useState<FormItem>({
    id: null,
    accountType: null,
    fullName: "",
    surname: "",
    motherName: "",
    email: "",
    phone: "",
    streetAddress: "",
    city: "",
    state: "",
    zipCode: "",
    country: "",
    occupation: "",
    initialDeposit: null,
    monthlyIncome: null,
    confirm: false,
    sex: "",
    branch: "",
    currency: 1,
    stage: "",
    error: false,
    percentageCompleted: 0,
  });
  const Title = () => (
    <Grid container xs={11}>
      <Grid item xs={12}>
        <div className={`container-title ${accountType}`}>
          <h2 className={props.productType}>Online Account Opening Form </h2>
        </div>
      </Grid>
    </Grid>
  );

  const { id } = useParams();
  // console.log("id: ", id);

  useEffect(() => {
    const performLogicOnId = async (inputId: string) => {
      try {
        const enc = atob(inputId);
        const url = `${apiUrl}api/v1/accounts/${enc}`;
        // console.log("url", url);
        const response = await axios.get(url);
        const data = response.data;
        // console.log("data:", data);

        setInitialAccountState({
          id: data.id,
          accountType: data.accountType,
          fullName: data.fullName,
          surname: data.surname,
          motherName: data.motherName,
          email: data.email,
          phone: data.phone,
          streetAddress: data.streetAddress,
          city: data.city,
          state: data.state,
          zipCode: data.zipCode,
          country: data.country,
          occupation: data.occupation ? data.occupation : "",
          initialDeposit: data.initialDeposit,
          monthlyIncome: data.monthlyIncome,
          confirm: false,
          sex: data.sex,
          branch: data.branch,
          currency: data.currency | 1,
          stage: data.stage ? data.stage : "",
          error: data.error,
          percentageCompleted: data.percentageCompleted,
        });
      } catch (error) {
        console.error(error);
        // Handle error if needed
      }
    };

    if (id !== undefined) {
      performLogicOnId(id);
    }
  }, [id]);

  return (
    <div className="open-account">
      <TopBanner
        containerClass="gl hd-container"
        overlayClass={`gl hd-background-overlay ${accountType}`}
        // overlayClass={`gl hd-background-overlay ${props.productType}`}
        contentClass="gl hd-content"
        footerClass="gl hd-footer"
        contentHeader={props.accountType}
        contentParagraph={props.headerSubTitle}
        accountType={accountType}
        setAccountType={setAccountType}
      />
      <div className="container">
        <Title />
        {accountType && (
          <div className="accountType">
            {/* <h4 className="head">Choose account type</h4> */}
            <div className="accountButtons">
              <button
                className={
                  accountType === "conventional" ? "active left" : "left"
                }
                onClick={() => setAccountType!("conventional")}
              >
                conventional
              </button>
              <button
                className={accountType === "alhuda" ? "active right" : "right"}
                onClick={() => setAccountType!("alhuda")}
              >
                alhuda
              </button>
            </div>
          </div>
        )}
        <div
          style={{
            alignContent: "flex-start",
            display: "flex",
            alignItems: "center",
            textAlign: "center",
            padding: "0 5px",
            font: "inherit",
          }}
        >
          {accountType === "conventional" ? (
            <p>A conventional account earns or charges interest.</p>
          ) : (
            <p>
              An interest-free banking account not involving earning or paying
              interest.
            </p>
          )}
        </div>
        <Grid
          container
          xs={11}
          md={10}
          gap={2}
          style={{ boxSizing: "border-box" }}
        >
          <Grid item xs={12} md={12}>
            {/* <AccountOpeningForm productType={props.productType} /> */}

            <AccountOpeningWizardForm
              productType={accountType}
              prevData={id === undefined ? null : initialAccountState}
            />
          </Grid>
        </Grid>
      </div>
      <SwiftCode productType={props.productType} />
    </div>
  );
}
