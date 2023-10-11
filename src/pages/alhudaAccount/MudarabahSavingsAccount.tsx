import { AccountOpening } from '../../components/AccountOpening';

export interface IMudarabahSavingsAccountProps {}

export function MudarabahSavingsAccount(props: IMudarabahSavingsAccountProps) {
  return (
    <AccountOpening
      productType='alhuda'
      accountType='Diaspora Mudarabah Savings Account'
      headerSubTitle='Always there for your diaspora banking needs!'
      DescTitle='Diaspora Mudarabah Savings Account'
      DescText='Mudarabah FCY Savings Account opened and mentioned by eligible personality mainly for the purpose of sharing pro‑t from the returns of investment made by the bank by using such deposit based on Sharia compliant.'
      features={[
        'Operated by passbook or certificate of deposit',
        'Initial deposit to open the account shall be 100 USD or its equivalent in any of other acceptable currencies',
        'Foreign currency is the only source of fund for the account',
      ]}
      benefits={[
        'Free withdrawals fee for foreign currency transactions',
        'Free transactions across all CoopBank branches',
        'Enables you to access all our E-channels',
        'You can get access to credit facilities',
        'There will be designated Personal Banker who support you in your banking with Coopbank.',
      ]}
    />
  );
}
