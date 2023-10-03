import * as React from "react";
import cooplogo from "../assets/img/cooplogo.png";
import "../styles/headers.scss";
import MainButton from "./Buttons/mainButton";
import { useState } from "react";
export interface IHeaderProps {}

const myNumber: number | null = null;

export function Header(props: IHeaderProps) {
  const [openSubMenu, setOpenSubMenu] = useState<number | null>(null);

  interface MyHandleFunctionState {
    count: number;
    message: string;
  }
  const handleSubMenuToggle = (index: number | null) => {
    setOpenSubMenu(openSubMenu === index ? null : index);
  };

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
              <li
                key={index}
                className={`menu-item ${menuItem.subMenu ? "has-submenu" : ""}`}
                onMouseEnter={() => handleSubMenuToggle(index)}
                onMouseLeave={() => handleSubMenuToggle(null)}
              >
                {menuItem.subMenu ? (
                  <>
                    {menuItem.label}
                    {menuItem.subMenu && (
                      <i aria-hidden="true" className="far fa-address-card"></i>
                    )}
                    {menuItem.subMenu && openSubMenu === index && (
                      <div className="submenu">
                        {menuItem.subMenu.map((subItem, subIndex) => (
                          <div key={subIndex} className="submenu-item">
                            <i
                              aria-hidden="true"
                              className="icon icon-save-money"
                            ></i>
                            <span className="submenu-label">
                              label
                              {/* {subItem.label} */}
                            </span>
                          </div>
                        ))}
                      </div>
                    )}
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
