import "../styles/footer.scss";
export interface IFooterProps {}

export function Footer(props: IFooterProps) {
  return (
    <div className="footer">
      <section className="footer-top">
        <div className="columns-container">
          <div className="column col1">
            <h4 className="title">About Diaspora</h4>
            <p>
              CoopBank of Oromia is one of the leading private banks in Ethiopia
              with very distinctive banking history. Diaspora Banking is one of
              the banking segments of CoopBank which has been given due
              emphasis. CoopBank Diaspora Account has been operational since
              August 2012.
            </p>
          </div>
          <div className="column col2">
            <h4 className="title">Important Links</h4>
            <ul className="elementor-icon-list-items">
              <li className="elementor-icon-list-item">
                <a href="/diaspora-current-account">
                  <span className="elementor-icon-list-icon">
                    <i aria-hidden="true" className="fas fa-caret-right"></i>
                  </span>
                  <span className="elementor-icon-list-text">
                    Conventional Account
                  </span>
                </a>
              </li>
              <li className="elementor-icon-list-item">
                <a href="/diaspora-wadia-savings-account">
                  <span className="elementor-icon-list-icon">
                    <i aria-hidden="true" className="fas fa-caret-right"></i>
                  </span>
                  <span className="elementor-icon-list-text">
                    Coopbank Alhuda
                  </span>
                </a>
              </li>
              <li className="elementor-icon-list-item">
                <a href="/get-a-loan">
                  <span className="elementor-icon-list-icon">
                    <i aria-hidden="true" className="fas fa-caret-right"></i>
                  </span>
                  <span className="elementor-icon-list-text">Get A Loan</span>
                </a>
              </li>
              <li className="elementor-icon-list-item">
                <a href="/downloads/2022/09/Diaspora-Account-Opening-Form-FINFINE-1.pdf">
                  <span className="elementor-icon-list-icon">
                    <i aria-hidden="true" className="fas fa-caret-right"></i>
                  </span>
                  <span className="elementor-icon-list-text">
                    Download Form
                  </span>
                </a>
              </li>
              <li className="elementor-icon-list-item">
                <a href="/money-transfer-service">
                  <span className="elementor-icon-list-icon">
                    <i aria-hidden="true" className="fas fa-caret-right"></i>
                  </span>
                  <span className="elementor-icon-list-text">
                    Money Transfer
                  </span>
                </a>
              </li>
              <li className="elementor-icon-list-item">
                <a href="https://myaccount.ebirr.com/#/login">
                  <span className="elementor-icon-list-icon">
                    <i aria-hidden="true" className="fas fa-caret-right"></i>
                  </span>
                  <span className="elementor-icon-list-text">
                    Internet Banking
                  </span>
                </a>
              </li>
              <li className="elementor-icon-list-item">
                <a href="https://coopbankoromia.com.et/daily-exchange-rates/">
                  <span className="elementor-icon-list-icon">
                    <i aria-hidden="true" className="fas fa-caret-right"></i>
                  </span>
                  <span className="elementor-icon-list-text">
                  Foreign Exchange Rate
                  </span>
                </a>
              </li>
              <li className="elementor-icon-list-item">
                <a href="https://etrade.gov.et/">
                  <span className="elementor-icon-list-icon">
                    <i aria-hidden="true" className="fas fa-caret-right"></i>
                  </span>
                  <span className="elementor-icon-list-text">
                  Trade Registration and Licensing
                  </span>
                </a>
              </li>
              <li className="elementor-icon-list-item">
                <a href="https://nbe.gov.et/directives/">
                  <span className="elementor-icon-list-icon">
                    <i aria-hidden="true" className="fas fa-caret-right"></i>
                  </span>
                  <span className="elementor-icon-list-text">
                  National Bank Directives
                  </span>
                </a>
              </li>
            </ul>
          </div>
          <div className="column col3">
            <h4 className="title">Quick Links</h4>
            <ul className="elementor-icon-list-items">
              <li className="elementor-icon-list-item">
                <a href="/money-transfer-service">
                  <span className="elementor-icon-list-icon">
                    <i aria-hidden="true" className="fas fa-caret-right"></i>{" "}
                  </span>
                  <span className="elementor-icon-list-text">
                    Money Transfer Agents
                  </span>
                </a>
              </li>
              <li className="elementor-icon-list-item">
                <a href="https://coopbankoromia.com.et/daily-exchange-rates">
                  <span className="elementor-icon-list-icon">
                    <i aria-hidden="true" className="fas fa-caret-right"></i>{" "}
                  </span>
                  <span className="elementor-icon-list-text">
                    Daily Foreign Exchange Rate
                  </span>
                </a>
              </li>
              <li className="elementor-icon-list-item">
                <a href="https://nbe.gov.et/directives">
                  <span className="elementor-icon-list-icon">
                    <i aria-hidden="true" className="fas fa-caret-right"></i>{" "}
                  </span>
                  <span className="elementor-icon-list-text">
                    National Bank Directives
                  </span>
                </a>
              </li>
              <li className="elementor-icon-list-item">
                <a href="https://etrade.gov.et">
                  <span className="elementor-icon-list-icon">
                    <i aria-hidden="true" className="fas fa-caret-right"></i>{" "}
                  </span>
                  <span className="elementor-icon-list-text">
                    Trade Registration And Licensing
                  </span>
                </a>
              </li>
              <li className="elementor-icon-list-item">
                <a href="/loan-calculator">
                  <span className="elementor-icon-list-icon">
                    <i aria-hidden="true" className="fas fa-caret-right"></i>{" "}
                  </span>
                  <span className="elementor-icon-list-text">
                    Loan Calculator
                  </span>
                </a>
              </li>
            </ul>
            <div
              className="elementor-element elementor-element-a2058b1 elementor-widget elementor-widget-heading"
              data-id="a2058b1"
              data-element_type="widget"
              data-widget_type="heading.default"
            >
              <div className="elementor-widget-container">
                <h4 className="title">Follow us</h4>{" "}
              </div>
            </div>
            <div
              className="elementor-element elementor-element-1a5debc elementor-shape-circle e-grid-align-left elementor-grid-0 elementor-widget elementor-widget-social-icons"
              data-id="1a5debc"
              data-element_type="widget"
              data-widget_type="social-icons.default"
            >
              <div className="elementor-widget-container">
                <div className="elementor-social-icons-wrapper elementor-grid">
                  <span className="elementor-grid-item">
                    <a
                      className="whatsapp"
                      href="https://chat.whatsapp.com/DuBdpxjvcTPGaghdu48oRy"
                    >
                      <i className="fab fa-whatsapp"></i>
                    </a>
                  </span>
                  <span className="elementor-grid-item">
                    <a className="telegram" href="https://t.me/coopbankoromia">
                      <i className="fab fa-telegram"></i>
                    </a>
                  </span>
                  <span className="elementor-grid-item">
                    <a
                      className="email"
                      href="mailto:coopdiaspora@coopbankoromia.com.et"
                    >
                      <i className="fas fa-envelope"></i>
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="column col4">
            <h4 className="title">Contact Info</h4>
            <div
              className="elementor-element elementor-element-04bfb77 elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list"
              data-id="04bfb77"
              data-element_type="widget"
              data-widget_type="icon-list.default"
            >
              <div className="elementor-widget-container">
                <ul className="elementor-icon-list-items">
                  <li className="elementor-icon-list-item">
                    <span className="elementor-icon-list-icon">
                      <i
                        aria-hidden="true"
                        className="fas fa-map-marker-alt"
                      ></i>{" "}
                    </span>
                    <span className="elementor-icon-list-text">
                      Get House Building, Africa Ave, Addis Ababa
                    </span>
                  </li>
                  <li className="elementor-icon-list-item">
                    <span className="elementor-icon-list-icon">
                      <i aria-hidden="true" className="fas fa-phone"></i>{" "}
                    </span>
                    <span className="elementor-icon-list-text">
                      +251 118-220-360
                    </span>
                  </li>
                  <li className="elementor-icon-list-item">
                    <span className="elementor-icon-list-icon">
                      <i aria-hidden="true" className="fas fa-mobile"></i>{" "}
                    </span>
                    <span className="elementor-icon-list-text">
                      +251 90 404 9948
                    </span>
                  </li>
                  <li className="elementor-icon-list-item">
                    <span className="elementor-icon-list-icon">
                      <i aria-hidden="true" className="fas fa-mobile"></i>{" "}
                    </span>
                    <span className="elementor-icon-list-text">
                      +251 90 083 5068
                    </span>
                  </li>
                  <li className="elementor-icon-list-item">
                    <span className="elementor-icon-list-icon">
                      <i aria-hidden="true" className="fas fa-mobile"></i>{" "}
                    </span>
                    <span className="elementor-icon-list-text">
                      +251 92 134 2641
                    </span>
                  </li>
                  <li className="elementor-icon-list-item">
                    <span className="elementor-icon-list-icon">
                      <i aria-hidden="true" className="fas fa-mobile"></i>{" "}
                    </span>
                    <span className="elementor-icon-list-text">
                      +251 97 455 5505
                    </span>
                  </li>
                  <li className="elementor-icon-list-item">
                    <span className="elementor-icon-list-icon">
                      <i aria-hidden="true" className="fas fa-mobile"></i>{" "}
                    </span>
                    <span className="elementor-icon-list-text">
                      +251 904 149 571
                    </span>
                  </li>
                  <li className="elementor-icon-list-item">
                    <span className="elementor-icon-list-icon">
                      <i aria-hidden="true" className="fas fa-envelope"></i>{" "}
                    </span>
                    <span className="elementor-icon-list-text">
                      coopdiaspora@coopbankoromia.com.et
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="footer-bottom">
        <p>Copyright © 2023 Cooperative Bank of Oromia. All Rights Reserved</p>
        <p>
          Designed by{" "}
          <a href="https://www.linkedin.com/in/aboma-getachew-83b788158/">
            Web Admin
          </a>
        </p>
      </section>
    </div>
  );
}
