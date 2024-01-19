import "../styles/footer.scss";
export interface IFooterProps {}

interface Link {
  text: string;
  url: string;
}

interface SocialLink {
  icon: string;
  url: string;
  social: string;
}

interface ContactInfo {
  icon: string;
  text: string;
}

interface SpecialCol {}

interface ColumnData {
  title?: string;
  content?: string;
  links?: Link[];
  socialLinks?: SocialLink[];
  top?: {
    title: string;
    links: Link[];
  };
  bottom?: {
    title: string;
    socialLinks: SocialLink[];
  };
  contactInfo?: ContactInfo[];
}

const columnsData: ColumnData[] = [
  {
    title: "About Diaspora",
    content:
      "CoopBank of Oromia is one of the leading private banks in Ethiopia with a very distinctive banking history. Diaspora Banking is one of the banking segments of CoopBank which has been given due emphasis. CoopBank Diaspora Account has been operational since August 2012.",
  },
  {
    title: "Important Links",
    links: [
      {
        text: "Conventional Account",
        url: "/diaspora-current-account",
      },
      {
        text: "Coopbank Alhuda",
        url: "/diaspora-current-account",
        // url: "/diaspora-wadia-savings-account",
      },
      {
        text: "Get A Loan",
        url: "/get-a-loan",
      },
      // {
      //   text: "Download Form",
      //   url: "/downloads/2022/09/Diaspora-Account-Opening-Form-FINFINE-1.pdf",
      // },
      {
        text: "Money Transfer",
        url: "/#money-transfer",
      },
      {
        text: "Loan Calculator",
        url: "/loan-calculator",
      },
    ],
  },
  {
    top: {
      title: "Quick Links",
      links: [
        {
          text: "Internet Banking",
          url: "https://myaccount.ebirr.com/#/login",
        },
        // {
        //   text: "Money Transfer Agents",
        //   url: "/money-transfer-service",
        // },
        {
          text: "Daily Foreign Exchange Rate",
          url: "https://coopbankoromia.com.et/daily-exchange-rates",
        },
        {
          text: "National Bank Directives",
          url: "https://nbe.gov.et/directives",
        },
        {
          text: "Trade Registration And Licensing",
          url: "https://etrade.gov.et",
        },
        {
          text: "Partner Real Estates",
          url: "https://www.brightontradingltd.com/residential-ventures",
        },
      ],
    },
    bottom: {
      title: "Follow us",
      socialLinks: [
        {
          icon: "fab fa-whatsapp whatsapp",
          url: "https://chat.whatsapp.com/DuBdpxjvcTPGaghdu48oRy",
          social: "whatsapp",
        },
        {
          icon: "fab fa-telegram",
          url: "https://t.me/coopbankoromia",
          social: "telegram",
        },
        {
          icon: "fas fa-envelope",
          url: "mailto:coopdiaspora@coopbankoromia.com.et",
          social: "email",
        },
      ],
    },
  },
  // {
  // },
  {
    title: "Contact Info",
    contactInfo: [
      {
        icon: "fas fa-map-marker-alt",
        text: "Addis Ababa, Bole Sub-city, Woreda 02, House No New",
      },
      {
        icon: "fas fa-phone",
        text: "+251 90 404 9949",
      },
      {
        icon: "fas fa-phone",
        text: "+251 118-220-360",
      },
      {
        icon: "fas fa-mobile",
        text: "+251 90 404 9948",
      },
      {
        icon: "fas fa-mobile",
        text: "+251 90 083 5068",
      },
      {
        icon: "fas fa-mobile",
        text: "+251 92 134 2641",
      },
      {
        icon: "fas fa-mobile",
        text: "+251 97 455 5505",
      },
      {
        icon: "fas fa-mobile",
        text: "+251 904 149 571",
      },
      {
        icon: "fas fa-envelope",
        text: "coopdiaspora@coopbankoromia.com.et",
      },
    ],
  },
];

export function Footer(props: IFooterProps) {
  return (
    <div className="footer">
      <section className="footer-top">
        <div className="columns-container">
          {columnsData.map((column, index) => (
            <div key={index} className={`column col${index + 1}`}>
              {column.title && <h4 className="title">{column.title}</h4>}
              {column.content && <p>{column.content}</p>}
              {column.links && (
                <ul className="elementor-icon-list-items">
                  {column.links.map((link, linkIndex) => (
                    <li key={linkIndex} className="elementor-icon-list-item">
                      <a href={link.url}>
                        <span className="elementor-icon-list-icon">
                          <i
                            aria-hidden="true"
                            className="fas fa-caret-right"
                          ></i>
                        </span>
                        <span className="elementor-icon-list-text">
                          {link.text}
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              )}
              {column.top && (
                <>
                  <h4 className="title">{column.top.title}</h4>
                  <ul className="elementor-icon-list-items">
                    {column.top.links.map((link, linkIndex) => (
                      <li key={linkIndex} className="elementor-icon-list-item">
                        <a href={link.url} target="_blank">
                          <span className="elementor-icon-list-icon">
                            <i
                              aria-hidden="true"
                              className="fas fa-caret-right"
                            ></i>
                          </span>
                          <span className="elementor-icon-list-text">
                            {link.text}
                          </span>
                        </a>
                      </li>
                    ))}
                  </ul>
                  {column.bottom && (
                    <>
                      <h4 className="title">{column.bottom.title}</h4>
                      {column.bottom.socialLinks && (
                        <div className="elementor-element elementor-element-1a5debc elementor-shape-circle e-grid-align-left elementor-grid-0 elementor-widget elementor-widget-social-icons">
                          <div className="elementor-widget-container">
                            <div className="elementor-social-icons-wrapper elementor-grid">
                              {column.bottom.socialLinks.map(
                                (socialLink, socialIndex) => (
                                  <span
                                    key={socialIndex}
                                    className="elementor-grid-item"
                                  >
                                    <a
                                      className={socialLink.icon}
                                      href={socialLink.url}
                                    >
                                      <i className={socialLink.icon}></i>
                                    </a>
                                  </span>
                                )
                              )}
                            </div>
                          </div>
                        </div>
                      )}
                    </>
                  )}
                </>
              )}
              {column.contactInfo && (
                <div className="elementor-element elementor-element-04bfb77 elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list">
                  <div className="elementor-widget-container">
                    <ul className="elementor-icon-list-items">
                      {column.contactInfo.map((info, infoIndex) => (
                        <li
                          key={infoIndex}
                          className="elementor-icon-list-item"
                        >
                          <span className="elementor-icon-list-icon">
                            <i aria-hidden="true" className={info.icon}></i>
                          </span>
                          <span className="elementor-icon-list-text">
                            {info.text}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
      <section className="footer-bottom">
        <p>
          Copyright © {new Date().getFullYear()} Cooperative Bank of Oromia. All
          Rights Reserved
        </p>
        <p>
          Designed by{" "}
          <a href="https://coopbankoromia.com.et/" target="_blank">
            COOP DxValley
          </a>
        </p>
      </section>
    </div>
  );
}
