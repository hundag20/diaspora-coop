import { Grid } from '@mui/material';
import { TopBanner } from './TopBanner';
import { AccountOpeningForm } from './AccountOpeningForm';
import '../styles/accountOpening.scss';
import { SwiftCode } from '../pages/MoneyTransfer';

export interface IAccountOpeningProps {
  productType: 'conventional' | 'alhuda';
  accountType:
    | 'Mudarabah Fixed Term Deposit'
    | 'Mudarabah Savings Account'
    | 'Wadia Savings Account'
    | 'ECOLFL Savings Account'
    | 'Non-Repatriable Account'
    | 'Current Account'
    | 'Fixed-Time Deposit';
  headerSubTitle: string;
  DescTitle: string;
  DescText: string;
  requirements: Node[];
  features: string[];
  benefits: string[];
}

const Title = () => (
  <Grid container xs={11}>
    <Grid item xs={12}>
      <div className='container-title'>
        <h2>Online Account Opening Form</h2>
      </div>
    </Grid>
  </Grid>
);

export function AccountOpening(props: IAccountOpeningProps) {
  return (
    <div className='open-account'>
      <TopBanner
        containerClass='gl hd-container'
        overlayClass='gl hd-background-overlay'
        contentClass='gl hd-content'
        footerClass='gl hd-footer'
        contentHeader={`Disapora ${props.accountType}`}
        contentParagraph={props.headerSubTitle}
      />
      <div className='container'>
        <Title />
        <Grid container xs={11} sm={10}>
          <Grid item xs={12} sm={8}>
            <AccountOpeningForm />
          </Grid>
          <Grid item xs={12} sm={4}>
            <div className='product-desc'>
              <div>
                <h4>Diaspora Non-repatriable Account</h4>
                <p>
                  Diaspora Non-repatriable Account is an account that may take
                  the form of saving deposit that can be used only for local
                  payments. The transferred balance will be exchanged to local
                  currency and deposited to the account.
                </p>
              </div>
              <div>
                <h4>Features</h4>
                <ul>
                  <li>
                    It’s available in local and foreign currency (GBP, USD, and
                    EURO)
                  </li>
                  <li>
                    It’s available in local and foreign currency (GBP, USD, and
                    EURO)
                  </li>
                  <li>
                    It’s available in local and foreign currency (GBP, USD, and
                    EURO)
                  </li>
                  <li>
                    It’s available in local and foreign currency (GBP, USD, and
                    EURO)
                  </li>
                  <li>
                    It’s available in local and foreign currency (GBP, USD, and
                    EURO)
                  </li>
                </ul>
              </div>
              <div>
                <h4>Benefits</h4>
                <ul>
                  <li>
                    Free withdrawals fee for foreign currency transactions,
                  </li>
                  <li>
                    Free withdrawals fee for foreign currency transactions,
                  </li>
                  <li>
                    Free withdrawals fee for foreign currency transactions,
                  </li>
                  <li>
                    Free withdrawals fee for foreign currency transactions,
                  </li>
                </ul>
              </div>
            </div>
          </Grid>
        </Grid>
        {/*
        <LoanItems />
        <LoanCalculatorButton />
      */}
      </div>
      <SwiftCode />
    </div>
  );
}
