import { Grid } from "@mui/material";
import { TopBanner } from "./TopBanner";
import { AccountOpeningForm } from "./AccountOpeningForm";
import "../styles/accountOpening.scss";
import { SwiftCode } from "./SwiftCode";
import { AccountOpeningWizardForm } from "./AccountOpeningWizardForm";

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
    | "Disapora Fixed-Time Deposit";
  headerSubTitle: string;
  DescTitle: string;
  DescText: string;
  features: (string | string[])[];
  benefits: string[];
}

export function AccountOpening(props: IAccountOpeningProps) {
  const Title = () => (
    <Grid container xs={11}>
      <Grid item xs={12}>
        <div className={`container-title ${props.productType}`}>
          <h2 className={props.productType}>Online Account Opening Form</h2>
        </div>
      </Grid>
    </Grid>
  );

  return (
    <div className="open-account">
      <TopBanner
        containerClass="gl hd-container"
        overlayClass={`gl hd-background-overlay ${props.productType}`}
        contentClass="gl hd-content"
        footerClass="gl hd-footer"
        contentHeader={props.accountType}
        contentParagraph={props.headerSubTitle}
      />
      <div className="container">
        <Title />
        <Grid
          container
          xs={11}
          md={10}
          gap={2}
          style={{ boxSizing: "border-box" }}
        >
          <Grid item xs={12} md={12}>
            {/* <AccountOpeningForm productType={props.productType} /> */}

            <AccountOpeningWizardForm productType={props.productType} />
          </Grid>
          {/* <Grid item xs={12} md={2.8}>
            <div className="product-info-side">
              <div className="info-item">
                <h2 className={props.productType}>
                  {DiasporaAccountInfo.title}
                </h2>
                <p>{DiasporaAccountInfo.desc}</p>
              </div>
              <div className="info-item">
                <h2 className={props.productType}>{props.DescTitle}</h2>
                <p>{props.DescText}</p>
              </div>
              <div className="info-item">
                <h2 className={props.productType}>Features</h2>
                <ul className="ul">
                  {props.features.map((feature: string | string[]) => (
                    <li className={`li ${props.productType}`}>
                      <span>
                        {typeof feature === "string" && (
                          <i className="fas fa-check"></i>
                        )}
                      </span>
                      {typeof feature === "string" ? (
                        feature
                      ) : (
                        <ul className="ul-inner">
                          {feature.map((el: string) => (
                            <li>{el}</li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="info-item">
                <h2 className={props.productType}>Benefits</h2>
                <ul className="ul">
                  {props.benefits.map((benefit: string) => (
                    <li className={`li ${props.productType}`}>
                      <span>
                        <i className="fas fa-check-circle"></i>
                      </span>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Grid> */}
        </Grid>
      </div>
      <SwiftCode productType={props.productType} />
    </div>
  );
}
