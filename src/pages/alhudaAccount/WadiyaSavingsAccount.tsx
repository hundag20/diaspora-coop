import { AccountOpening } from '../../components/AccountOpening';

export interface IWadiyaSavingsAccountProps {}

export function WadiyaSavingsAccount(props: IWadiyaSavingsAccountProps) {
  return (
    <AccountOpening
      productType='alhuda'
      accountType='Diaspora Wadia Savings Account'
      headerSubTitle='Always there for your diaspora banking needs!'
      DescTitle='Diaspora Wadia Savings Account'
      DescText='Wadia is a trust agreement whereby the bank keeps funds of depositors who want to place their funds under safe custody without any benefit. It is a non-pro‑t sharing deposit account that the bank provides for the persons who fulfill the bank’s policies and requirements. Customers who fulfill the eligibility criteria can open this Diaspora Wadia Safe Keeping Accounts in line with the requirement in USD dollar, Pound Sterling and Euro currency.'
      features={[
        'The source of the fund is from abroad in FCY',
        'Customers living abroad can open the account',
        'FCY shall be credited to the account through FCY cash deposit, SWIFT transfer or cheque deposit',
        'The minimum amount required for an initial deposit to open the account shall be 100 USD or its equivalent in any of other acceptable currencies',
        'No benefit is attached to this account',
        'Withdrawal can be done thorough cash, account to account transfer and mobile banking',
        'Limitless deposit and withdrawal',
        'Operated by passbook',
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
