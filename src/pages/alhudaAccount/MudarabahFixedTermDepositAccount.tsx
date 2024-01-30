import { AccountOpening } from '../../components/AccountOpening';

export interface IMudarabahFixedTermDepositAccountProps {}

export function MudarabahFixedTermDepositAccount(
  props: IMudarabahFixedTermDepositAccountProps
) {
  return (
    <AccountOpening
      productType='alhuda'
      accountType='Diaspora Mudarabah Fixed Term Deposit'
      headerSubTitle='Always there for your diaspora banking needs!'
      DescTitle='Diaspora Mudarabah Fixed Term Deposit'
      DescText='It is an account that depositors place their fund for profit sharing within specified period of time. The bank accepts investment amount from customers who are looking for short, medium and long term investment opportunity for their funds.'
      features={[
        'The minimum maturity period is three months',
        'The bank shall issue certificate of deposit',
        'The minimum deposit to open the account shall be 5,000 (USD, GBP or Euro) or equivalent in any of other acceptable currency',
      ]}
      benefits={[
        'Free withdrawals fee for foreign currency transactions',
        'Free transactions across all Coopbank branches',
        'Enables you to access all our E-channels',
        'You can get access to credit facilities',
        'There will be designated Personal Banker who support you in your banking with Coopbank.',
      ]}
    />
  );
}
