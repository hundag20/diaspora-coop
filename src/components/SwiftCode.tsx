import '../styles/swiftCode.scss';
import { TProductType } from './AccountOpening';

export interface IMoneyTransferProps {
  productType: TProductType;
}

export const SwiftCode = (props: IMoneyTransferProps) => (
  <div className={`swift-code ${props.productType}`}>
    <h2>
      Swift code <span>CBORETAA</span>
    </h2>
  </div>
);
