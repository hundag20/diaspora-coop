import { Grid } from '@mui/material';
import { TopBanner } from './TopBanner';
import { AccountOpeningForm } from './AccountOpeningForm';
import '../styles/accountOpening.scss';
import { SwiftCode } from '../pages/MoneyTransfer';

const DiasporaAccountInfo = {
  title: 'DIASPORA ACCOUNT',
  desc: 'Diaspora Banking Account allows Diaspora who resides and works  outside the country to maintain and perform domestic and  international transfers through their Coopbank accounts.',
};

export interface IAccountOpeningProps {
  productType: 'conventional' | 'alhuda';
  accountType:
    | 'Mudarabah Fixed Term Deposit'
    | 'Mudarabah Savings Account'
    | 'Wadia Savings Account'
    | 'ECOLFL Savings Account'
    | 'Disapora Non-Repatriable Account'
    | 'Disapora Current Account'
    | 'Disapora Fixed-Time Deposit';
  headerSubTitle: string;
  DescTitle: string;
  DescText: string;
  features: (string | string[])[];
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
        contentHeader={props.accountType}
        contentParagraph={props.headerSubTitle}
      />
      <div className='container'>
        <Title />
        <Grid container xs={11} md={10}>
          <Grid item xs={12} md={7.5}>
            <AccountOpeningForm />
          </Grid>
          <Grid item xs={12} md={4.5}>
            <div className='product-info-side'>
              <div className='diaspora-desc'>
                <h2>{DiasporaAccountInfo.title}</h2>
                <p>{DiasporaAccountInfo.desc}</p>
              </div>
              <div className='product-desc'>
                <h2>{props.DescTitle}</h2>
                <p>{props.DescText}</p>
              </div>
              <div className='product-features'>
                <h2>Features</h2>
                <ul className='ul'>
                  {props.features.map((feature: string | string[]) => (
                    <li className='li'>
                      <span>
                        {typeof feature === 'string' && (
                          <i className='fas fa-check'></i>
                        )}
                      </span>
                      {typeof feature === 'string' ? (
                        feature
                      ) : (
                        <ul className='ul-inner'>
                          {feature.map((el: string) => (
                            <li>{el}</li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
              <div className='product-benefits'>
                <h2>Benefits</h2>
                <ul className='ul'>
                  {props.benefits.map((benefit: string) => (
                    <li className='li'>
                      <span>
                        <i className='fas fa-check-circle'></i>
                      </span>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
      <SwiftCode />
    </div>
  );
}
