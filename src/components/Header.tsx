import * as React from "react";
import cooplogo from "../assets/img/cooplogo.png";
import "../styles/headers.scss";
import MainButton from "./Buttons/mainButton";
import { useState } from "react";
import {
  Facebook,
  Instagram,
  Twitter,
  LinkedIn,
  Telegram,
  Badge,
  Paid,
  RequestQuote,
  QueryBuilder,
  Person,
  PriceChange,
  Mosque,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
export interface IHeaderProps {}

const myNumber: number | null = null;

export function Header(props: IHeaderProps) {
  const [openSubMenu, setOpenSubMenu] = useState<number | null>(null);
  const navigate = useNavigate();
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
      route: "/",
    },
    {
      label: "About",
    },
    {
      label: "Open Account",
      subMenu: [
        {
          name: "Current Account",
          icon: <Paid className="muicon" />,
        },
        {
          name: "Fixed-Time Deposit",
          icon: <QueryBuilder className="muicon" />,
        },
        {
          name: "Non-Repatriable Account",
          icon: <RequestQuote className="muicon" />,
        },
        {
          name: "ECOLFL Savings Account",
          icon: <Badge className="muicon" />,
        },
      ],
    },
    {
      label: "Get A Loan",
      route: "get-a-loan",
    },
    {
      label: "Money Transfer",
      route: "money-transfer-service",
    },
    {
      label: "Coopbank Alhuda Diaspora",
      subMenu: [
        {
          name: "About CoopBank Alhuda",
          icon: <Mosque className="muicon" />,
        },
        {
          name: "Diaspora Wadia Saving Account",
          icon: <Badge className="muicon" />,
        },
        {
          name: "Diaspora Mudarabah Savings Account",
          icon: <PriceChange className="muicon" />,
        },
        {
          name: "Diaspora Mudarabah Fixed Term Deposit",
          icon: <Person className="muicon" />,
        },
      ],
    },
  ];

  const socials = [
    {
      icon: <Facebook />,
      link: "www.facebook.com",
    },
    {
      icon: <Instagram />,
      link: "www.instagram.com",
    },
    {
      icon: <Twitter />,
      link: "www.twitter.com",
    },
    {
      icon: <LinkedIn />,
      link: "www.linkedin.com",
    },
    {
      icon: <Telegram />,
      link: "www.telegram.com",
    },
  ];

  return (
    <div className="headerComp">
      <div className="tophead">
        <div className="socials">
          {socials.map((social, index) => (
            <div
              onClick={() => window.open(`${social.link}`, "_blank")}
              className="socail"
            >
              {social.icon}
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
                              <div className="icon">{subItem.icon}</div>
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
