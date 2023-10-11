import * as React from "react";
import cooplogo from "../assets/img/cooplogo.png";
import "../styles/headers.scss";
import MainButton from "./Buttons/mainButton";
import { useEffect, useState } from "react";
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
  Close,
} from "@mui/icons-material";
import MenuIcon from "@mui/icons-material/Menu";
import { useLocation, useNavigate, useNavigation } from "react-router-dom";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
export interface IHeaderProps {}

const myNumber: number | null = null;

export function Header(props: IHeaderProps) {
  const [openSubMenu, setOpenSubMenu] = useState<number | null>(null);
  const [showMobileMenu, setShowMobileMenu] = useState<boolean>(false);
  // const navigate = useNavigation();
  const [openSubmenus, setOpenSubmenus] = useState<{ [key: number]: boolean }>(
    {}
  );

  const location = useLocation();
  const currentRoute = location.pathname;

  // Function to toggle the submenu for a specific menu item index
  const toggleSubmenu = (index: number) => {
    setOpenSubmenus((prevOpenSubmenus) => ({
      ...prevOpenSubmenus,
      [index]: !prevOpenSubmenus[index],
    }));
  };

  const handleCloseMobileMenu = () => {
    // setTimeout(() => {
    setShowMobileMenu(false);
    // }, 800);
  };

  const handleOpenMobileMenu = () => {
    setShowMobileMenu(true);
  };

  const navigate = useNavigate();
  interface MyHandleFunctionState {
    count: number;
    message: string;
  }
  const handleSubMenuToggle = (index: number | null) => {
    setOpenSubMenu(openSubMenu === index ? null : index);
  };

  const [ref, inView] = useInView({
    triggerOnce: true, // Only trigger the animation once
    threshold: 0,
  });

  const openingOverlayAnimationVariants = {
    hidden: {
      x: "-100%",
      opacity: 1,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
    exit: {
      x: "-100%",
      opacity: 0,
    },
  };
  const openingAnimationVariants = {
    hidden: {
      x: "-100%",
      opacity: 1,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.9,
        ease: "easeInOut",
      },
    },
    exit: {
      x: "-100%",
      opacity: 0,
    },
  };

  const closingAnimationVariants = {
    hidden: {
      x: 0,
      opacity: 1,
    },
    visible: {
      x: "-100%",
      opacity: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const menuItems = [
    {
      label: "Home",
      route: "/",
    },
    {
      label: "About",
      route: "/",
    },
    {
      label: "Open Account",
      subMenu: [
        {
          name: "Current Account",
          icon: <Paid className="muicon" />,
          route: "/diaspora-current-account",
        },
        {
          name: "Fixed-Time Deposit",
          icon: <QueryBuilder className="muicon" />,
          route: "/",
        },
        {
          name: "Non-Repatriable Account",
          icon: <RequestQuote className="muicon" />,
          route: "/",
        },
        {
          name: "ECOLFL Savings Account",
          icon: <Badge className="muicon" />,
          route: "/",
        },
      ],
    },
    {
      label: "Get A Loan",
      route: "/get-a-loan",
    },
    {
      label: "Money Transfer",
      route: "/money-transfer-service",
    },
    {
      label: "Coopbank Alhuda Diaspora",
      subMenu: [
        {
          name: "About CoopBank Alhuda",
          icon: <Mosque className="muicon" />,
          route: "/about-coopbank-alhuda",
        },
        {
          name: "Diaspora Wadia Saving Account",
          icon: <Badge className="muicon" />,
          route: "/",
        },
        {
          name: "Diaspora Mudarabah Savings Account",
          icon: <PriceChange className="muicon" />,
          route: "/",
        },
        {
          name: "Diaspora Mudarabah Fixed Term Deposit",
          icon: <Person className="muicon" />,
          route: "/",
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
    <motion.div className="headerComp" animate="visible">
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
        <div className="left" onClick={() => navigate("/")}>
          <img src={cooplogo} alt="" />
        </div>
        <div className="right">
          <ul>
            {menuItems.map((menuItem, index) => (
              <li
                key={index}
                className={`menu-item ${
                  menuItem.subMenu ? "has-submenu" : ""
                } ${menuItem.route === currentRoute ? "active" : ""}`}
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
                            <div
                              key={subIndex}
                              className="submenu-item"
                              {...(subItem.route && {
                                onClick: () => navigate(subItem.route),
                              })}
                            >
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
                  <span
                    className="main"
                    {...(menuItem.route && {
                      onClick: () => navigate(menuItem.route),
                    })}
                  >
                    {menuItem.label}
                  </span>
                )}
              </li>
            ))}
          </ul>
        </div>
        <div className="mobileMenu" onClick={handleOpenMobileMenu}>
          <MenuIcon className="hamburger" />
        </div>
      </div>
      {showMobileMenu && (
        <motion.div
          className="mobileMenuMenus"
          key={showMobileMenu ? "open" : "close"} // Add a key to force re-render
          variants={
            showMobileMenu
              ? openingOverlayAnimationVariants
              : closingAnimationVariants
          }
          initial="hidden"
          animate="visible"
          exit="hidden"
          ref={ref}
        >
          <motion.div
            className="contain"
            key={showMobileMenu ? "open" : "close"} // Add a key to force re-render
            variants={
              showMobileMenu
                ? openingAnimationVariants
                : closingAnimationVariants
            }
            initial="hidden"
            animate="visible"
            exit="hidden"
            ref={ref}
          >
            <div className="header">
              <div className="mobilelogo">
                <img src={cooplogo} alt="" />
              </div>
              <div className="closeMenu" onClick={handleCloseMobileMenu}>
                <Close className="closeIcon" />
              </div>
            </div>
            <div className="mob_menus">
              <ul>
                {menuItems.map((menuItem, index) => (
                  <li
                    key={index}
                    className={`menu-item ${
                      menuItem.subMenu ? "has-submenu" : ""
                    }`}
                    onMouseEnter={() => handleSubMenuToggle(index)}
                    onMouseLeave={() => handleSubMenuToggle(null)}
                    {...(menuItem.route && {
                      onClick: () => navigate(menuItem.route),
                    })}
                  >
                    {menuItem.subMenu ? (
                      <>
                        <span
                          className="main"
                          onClick={() => toggleSubmenu(index)}
                        >
                          {menuItem.label}
                          {menuItem.subMenu && (
                            <div className="downMenu">
                              <i className="fas fa-solid fa-angle-down"></i>
                            </div>
                          )}
                        </span>
                        {menuItem.subMenu && openSubmenus[index] && (
                          <div className="mobileSubmenu">
                            <div className="mobileSub_container">
                              {menuItem.subMenu.map((subItem, subIndex) => (
                                <div
                                  key={subIndex}
                                  className="submenu-item"
                                  {...(subItem.route && {
                                    onClick: () => navigate(subItem.route),
                                  })}
                                >
                                  <span className="submenu-label">
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
          </motion.div>
        </motion.div>
      )}
    </motion.div>
  );
}
