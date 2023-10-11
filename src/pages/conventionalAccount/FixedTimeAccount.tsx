import { AccountOpening } from '../../components/AccountOpening';

export interface IFixedTimeAccountProps {}

export function FixedTimeAccount(props: IFixedTimeAccountProps) {
  return (
    <AccountOpening
      productType='conventional'
      accountType='Disapora Fixed-Time Deposit'
      headerSubTitle='Always there for your diaspora banking needs!'
      DescTitle='Diaspora Fixed Time Account'
      DescText='Diaspora Fixed Time Account It is an account which takes the form of a deposit certificate, issued in the name of the depositor. The maturity period may vary based on the agreement made between the depositor and the bank. The bank and the depositor will also reach an agreement on the rate of interest on this account. Interest income on non-resident foreign currency fixed deposit account shall be free from income tax.'
      features={[
        'It is an interest-bearing account with an agreed maturity date',
        'The amount needed to open the account shall at least be USD 100 or its equivalent of the eligible currency',
        'The minimum maturity period is three months that could be opened with an initial deposit of USD 5,000',
        'Interest on such accounts shall be payable only if they are maintained at least for the minimum period.',
      ]}
      benefits={['Interest income on such accounts is tax-free.']}
    />
  );
}
