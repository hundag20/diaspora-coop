import * as React from "react";
import cooplogo from "../assets/img/cooplogo.png";
import "../styles/headers.scss";
import MainButton from "./Buttons/mainButton";
export interface IHeaderProps { }

export function Header(props: IHeaderProps) {
  const menuItems = [
    {
      label: "Home",
      route: '/'
    },
    {
      label: "About",
    },
    {
      label: "Open Account",
      subMenu: [
        {
          name: "Current Account",
          icon: "",
        },
        {
          name: "Fixed-Time Deposit",
          icon: "",
        },
        {
          name: "Non-Repatriable Account",
          icon: "",
        },
        {
          name: "ECOLFL Savings Account",
          icon: "",
        },
      ],
    },
    {
      label: "Get A Loan",
    },
    {
      label: "Money Transfer",
      route: 'money-transfer-service'
    },
    {
      label: "Coopbank Alhuda Diaspora",
      subMenu: [
        {
          name: "About CoopBank Alhuda",
          icon: "",
        },
        {
          name: "Diaspora Wadia Saving Account",
          icon: "",
        },
        {
          name: "Diaspora Mudarabah Savings Account",
          icon: "",
        },
        {
          name: "Diaspora Mudarabah Fixed Term Deposit",
          icon: "",
        },
      ],
    },
  ];

  const socials = [
    {
      icon: "fas fa-facebook",
      link: "www.facebook.com",
    },
    {
      icon: "fas fa-instagram",
      link: "www.instagram.com",
    },
    {
      icon: "fas fa-twitter",
      link: "www.twitter.com",
    },
    {
      icon: "fas fa-linkedin",
      link: "www.linkedin.com",
    },
    {
      icon: "fas fa-telegram",
      link: "www.telegram.com",
    },
  ];

  return (
    <div className="headerComp">
      <div className="tophead">
        <div className="socials">
          {socials.map((social, index) => (
            <div className="socail">
              <i className={social.icon}></i>
            </div>
          ))}
        </div>
        {/* <button>Internet Banking</button> */}
        <MainButton text="Internet Banking" link="/" />
      </div>
      <div className="container">
        <div className="left">
          <img src={cooplogo} alt="" />
        </div>
        <div className="right">
          <ul>
            {menuItems.map((menuItem, index) => (
              <li key={index}>
                <a href={menuItem?.route}>
                  {menuItem.subMenu ? (
                    <>
                      {menuItem.label}
                      {/* <ul>
                      {menuItem.subMenu.map((subItems, subIndex) => (
                        <li key={subIndex}>{subItems}</li>
                      ))}
                    </ul> */}
                    </>
                  ) : (
                    menuItem.label
                  )}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
