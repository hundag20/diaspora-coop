import * as React from "react";
import cooplogo from "../assets/img/cooplogo.png";
import "../styles/headers.scss";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { icon } from "@fortawesome/fontawesome-svg-core/import.macro";
export interface IHeaderProps {}

export function Header(props: IHeaderProps) {
  const menuItems = [
    {
      label: "Home",
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

  const social = [
    {
      icon: { prefix: "fab", iconName: "facebook" },
      link: "www.facebook.com",
    },
    {
      icon: { prefix: "fab", iconName: "instagram" },
      link: "www.instagram.com",
    },
    {
      icon: { prefix: "fab", iconName: "twitter" },
      link: "www.twitter.com",
    },
    {
      icon: { prefix: "fab", iconName: "linkedin" },
      link: "www.linkedin.com",
    },
    {
      icon: { prefix: "fab", iconName: "telegram" },
      link: "www.telegram.com",
    },
  ];

  return (
    <div>
      <div className="tophead">
        <div className="socials">
          {/* {social.map((social, index) => (
            <div className="socail">
              <FontAwesomeIcon icon={social.icon} />
            </div>
          ))} */}
        </div>
        <button>Internet Banking</button>
      </div>
      <div className="container">
        <div className="left">
          <img src={cooplogo} alt="" />
        </div>
        <div className="right">
          <ul>
            {menuItems.map((menuItem, index) => (
              <li key={index}>
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
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
