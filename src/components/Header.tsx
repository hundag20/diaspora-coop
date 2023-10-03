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
          icon: "elementskit-funfact-icon fas fa-globe-americas",
        },
        {
          name: "Fixed-Time Deposit",
          icon: "elementskit-funfact-icon fas fa-globe-americas",
        },
        {
          name: "Non-Repatriable Account",
          icon: "elementskit-funfact-icon fas fa-globe-americas",
        },
        {
          name: "ECOLFL Savings Account",
          icon: "elementskit-funfact-icon fas fa-globe-americas",
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
          icon: "elementskit-funfact-icon fas fa-globe-americas",
        },
        {
          name: "Diaspora Wadia Saving Account",
          icon: "elementskit-funfact-icon fas fa-globe-americas",
        },
        {
          name: "Diaspora Mudarabah Savings Account",
          icon: "elementskit-funfact-icon fas fa-globe-americas",
        },
        {
          name: "Diaspora Mudarabah Fixed Term Deposit",
          icon: "elementskit-funfact-icon fas fa-globe-americas",
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
                    <span className="main">
                      {menuItem.label}
                      {menuItem.subMenu && (
                        <i className="fas fa-solid fa-angle-down"></i>
                      )}
                    </span>
                    {menuItem.subMenu && openSubMenu === index && (
                      <div className="submenu">
                        <div className="sub_container">
                          {menuItem.subMenu.map((subItem, subIndex) => (
                            <div key={subIndex} className="submenu-item">
                              <div className="icon">
                                <i
                                  aria-hidden="true"
                                  className={subItem.icon}
                                ></i>
                              </div>
                              <span className="submenu-label">
                                {/* label */}
                                {subItem.name}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </>
                ) : (
                  <span className="main">{menuItem.label}</span>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
