import { AccountOpening } from '../../components/AccountOpening';

export interface ICurrentAccountProps {}

export function CurrentAccount(props: ICurrentAccountProps) {
  return (
    <AccountOpening
      productType='conventional'
      accountType='Disapora Current Account'
      headerSubTitle='Always there for your diaspora banking needs!'
      DescTitle='Diaspora Current Account'
      DescText='This account takes the form of current deposits where withdrawals may be made at any time upon demand by writing a check and/or a prearranged procedure adopted by the bank. Interest shall not be paid to a non-resident foreign currency current account.'
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
        'Free transactions across all Coopbank branches',
        'Enables you to access all our E-channels',
        'You can get access to credit facilities',
        'There will be designated Personal Banker who support you in your banking with Coopbank.',
      ]}
    />
  );
}
