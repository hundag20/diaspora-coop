import { AccountOpening } from '../../components/AccountOpening';

export interface INonDepreciableAccountProps {}

export function NonDepreciableAccount(props: INonDepreciableAccountProps) {
  return (
    <AccountOpening
      productType='conventional'
      accountType='Disapora Non-Repatriable Account'
      headerSubTitle='We Partner With Over 13 World Best Money Transfer Agents'
      DescTitle='Diaspora Non-repatriable Account'
      DescText='Diaspora Non-repatriable Account is an account that may take the form of saving deposit that can be used only for local payments. The transferred balance will be exchanged to local currency and deposited to the account.'
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
