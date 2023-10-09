import { AccountOpening } from '../components/AccountOpening';

export interface ICurrentAccountProps {}

export function CurrentAccount(props: ICurrentAccountProps) {
  return (
    <AccountOpening
      productType='conventional'
      accountType='Current Account'
      headerSubTitle='Always there for your diaspora banking needs!'
      DescTitle='Diaspora Current Account'
      DescText='Diaspora Banking Account allows Diaspora who resides and works outside the country to maintain and perform domestic and international transfers through their Coopbank accounts.'
      requirements={[]}
      features={[
        'It’s available in local and foreign currency (GBP, USD, and EURO)',
        'This account has a personalized Cheque Books',
        'Debit Card can also be issued on request',
        'You will be provided with E-mail alerts and statements',
        'There is an option of Joint Signatory (e.g. with spouse, sibling or parent in Ethiopia)',
        'Coopbank also provides some sort of financial advisory services',
        'Facilitation of third-party payments',
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
