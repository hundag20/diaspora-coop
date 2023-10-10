import { AccountOpening } from '../components/AccountOpening';

export interface IEcolfSavingAccountProps {}

export function EcolfSavingAccount(props: IEcolfSavingAccountProps) {
  return (
    <AccountOpening
      productType='conventional'
      accountType='ECOLFL Savings Account'
      headerSubTitle='Always there for your diaspora banking needs!'
      DescTitle='Ethiopian Citizen or Origin Living in Foreign Land (ECOLFL) Savings Account'
      DescText='Ethiopian Citizen or Origin Living in Foreign Land (ECOLFL) Savings Account
      Is a Local Currency savings account opened by non-resident Ethiopians or non-resident foreign nationals of Ethiopian origin for the purpose of personal emergency expenses, purchase or construction of residential/commercial houses, for business and investment in Ethiopia, or purchase of car in which all deposits are made in foreign currency.
      
      It is possible to open ECOLFL savings Account by the applicant(s) in person or through her/his/their agent or through the Ethiopian Embassies if she/he/they fulfill the following requirements'
      features={[
        'Age of the applicant(s) should be 18 years and above.',
        'Submission of the following documents before account opening:',
        [
          'Renewed passport for non-resident Ethiopians or renewed passport and yellow card for foreigners of Ethiopian Origin',
          'Residence and/or work permit',
          'One latest passport size photograph',
          'Power of attorney, copy of lD and one passport size photograph of the agent (if any)',
          'Bank Account statement from foreign sources (optional)',
          'For businesses, authenticated certificate of ownership entitlement of the business and/or article and memorandum of association.',
        ],
        'All deposits to the account shall be made in foreign currency (Dollar, Euro or Pound Sterling). The applicant can credit the account without limitation in accordance with the following:',
        [
          'Foreign currency cash (evidenced by customs declaration for amounts equivalent to or greater than USD 3,000 and/or per NBE Directive No. FxD/55/2018, but this figure may change based on amendments to the Directive)',
          'Direct credit to the account using SWIFT code of the Bank (CBORETAA) or via money transfer agents:',
          '  Transfer from Diaspora Fixed Time Deposit and/or Diaspora Current Account but not from Non-Repatriable Accounts.',
          'Deposit of cheques originated by foreign',
        ],
        'ECOLFL Savings Account can be opened in all branches of the bank.',
        'Couples can open Joint ECOLFL Savings Account.',
        'Full or partial withdrawals from ECOLFL Savings Account shall be allowed only in local currency at any point in time.',
        'ECOLFL Savings Account shall be closed when the applicant requests so before application for However, this does not restrict the applicant from opening another ECOLFL Savings Account.',
        'ECOLFL Savings Account shall bear the prevailing annual saving interest rate set by',
        'Foreign currency credits to ECOLFL Savings shall be converted to Local currency using the Bank’s particular currency buying rate on the date of transaction.',
        'If the account owner dies and the legal heir of the ECOLFL savings account requests to be eligible for Diaspora Mortgage Loan or Diaspora Car Loan or Personal Loan or Diaspora investment loan and/or Diaspora Working capital loan, the bank will assess the request as per its internal procedure.',
        'An applicant working for an international organization whose salary is in FCY can open ECOLFL Savings Account without documentary requirements of resident and/or work permit. However, the applicant should submit employment contract and Ethiopian passport.',
      ]}
      benefits={[
        'Enables an applicant(s) to open in person or through his/her/their agent at a nearby branch of Cooperative Bank of Oromia.',
        'This account will bear annual interest equivalent to the prevailing NBE set savings interest rate.',
        'It enables couples to open Joint ECOLFL Savings Account.',
      ]}
    />
  );
}
