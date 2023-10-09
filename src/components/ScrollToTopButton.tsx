import React, { useState, useEffect } from "react";
import "../styles/ScrollToTopButton.css";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

function ScrollToTopButton() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 800) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    // style={{
    //   position: "fixed",
    //   bottom: "10px",
    //   left: "10px",
    //   zIndex: "1000",
    // }}
    <div>
      <button
        className={`scroll-to-top-button ${showButton ? "show" : ""}`}
        onClick={scrollToTop}
      >
        <ArrowUpwardIcon fontSize="large" />
      </button>
    </div>
  );
}

export default ScrollToTopButton;
