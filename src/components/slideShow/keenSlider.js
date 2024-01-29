import React, { useEffect, useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import "../../styles/keen.css";

import amalLogo from '../../assets/img/remit/amal.jpg';
import bakaalLogo from '../../assets/img/remit/bakaal.jpg';
import paysiiLogo from '../../assets/img/remit/unnamed-e1662769303214.png';
import thunesLogo from '../../assets/img/remit/thunes-logo.jpg';
import cashexpressLogo from '../../assets/img/remit/cash-express-logo.jpg';
import westernunionLogo from '../../assets/img/remit/westernunion.jpg';
import worldremitLogo from '../../assets/img/remit/worldremit.jpg';
import swiftLogo from '../../assets/img/remit/swift.jpg';
import tran4Logo from '../../assets/img/remit/transfast.jpg';
import riaLogo from '../../assets/img/remit/ria.jpg';
import smallworldLogo from '../../assets/img/remit/smallworld.jpg';
import ethioremitLogo from '../../assets/img/remit/E-remit.jpg';
import kaahexpressLogo from '../../assets/img/remit/kaah.jpg';
import moneygramLogo from '../../assets/img/remit/moneygram.jpg';
import bananapaysLogo from '../../assets/img/remit/Banana-Pay.jpg';
import dahabashiilLogo from '../../assets/img/remit/dahabashiil.jpg';
import fastpayLogo from '../../assets/img/remit/fastPay.png';
import xpressLogo from '../../assets/img/remit/xpress-money.jpg';
import { Link } from "react-router-dom";

const photos = [
  {
    src: amalLogo,
    alt: "amal",
    link: "https://www.amalexpress.com/"
  },
  {
    src: bakaalLogo,
    alt: "bakaal",
    link: "https://www.bakaal.com/"
  },
  {
    src: fastpayLogo,
    alt: "fastpay",
    link: "https://qrco.de/FastPayEt/"
  },
  {
    src: paysiiLogo,
    alt: "paysii",
    link: "https://www.paysii.com/"
  },
  {
    src: thunesLogo,
    alt: "thunes",
    link: "https://www.thunes.com/"
  },
  {
    src: cashexpressLogo,
    alt: "cashexpress",
    link: "https://cashexpress.com/"
  },
  {
    src: westernunionLogo,
    alt: "westernunion",
    link: "https://www.westernunion.com/us/en/home.html"
  },
  {
    src: worldremitLogo,
    alt: "worldremit",
    link: "https://www.worldremit.com/en?irclickid=ySWVNv35SxyPRVKUCQUItSrfUkFX6HQr1RZQxg0&utm_medium=Affiliate&utm_source=Impact&utm_campaign=17563&utm_content=Online+Tracking+Link&utm_term=40052&irgwc=1&amountfrom=100.00&selectfrom=gb&currencyfrom=gbp&selectto=ph&currencyto=php&transfer=bnk"
  },
  {
    src: swiftLogo,
    alt: "swift",
    link: "https://www.swift.com/"
  },
  {
    src: tran4Logo,
    alt: "tran",
    link: "https://www.transfast.com/"
  },
  {
    src: riaLogo,
    alt: "ria",
    link: "https://www.riamoneytransfer.com/en-us/"
  },
  {
    src: smallworldLogo,
    alt: "smallworld",
    link: "https://www.smallworldfs.com/en"
  },
  {
    src: ethioremitLogo,
    alt: "ethioremit",
    link: "https://www.ethioremit.com/"
  },
  {
    src: kaahexpressLogo,
    alt: "kaahexpress",
    link: "https://www.kaahexpress.eu/"
  },
  {
    src: moneygramLogo,
    alt: "moneygram",
    link: "https://www.moneygram.com/mgo/us/en/"
  },
  {
    src: bananapaysLogo,
    alt: "bananapay",
    link: "https://www.bananapays.com/"
  },
  {
    src: dahabashiilLogo,
    alt: "dahabashii",
    link: "https://www.dahabshiil.com/"
  },
  {
    src: xpressLogo,
    alt: "xpress",
    link: "https://www.federalbank.co.in/xpress-money"
  },
];

export default () => {
  const [slidesToShow, setSlidesToShow] = useState(4); // Default value
  const [sliderRef] = useKeenSlider(
    {
      loop: true,
      rtl: true,
      slides: {
        perView: slidesToShow,
        spacing: 20,
      },
    },
    [
      (slider) => {
        let timeout;
        let mouseOver = false;
        function clearNextTimeout() {
          clearTimeout(timeout);
        }
        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => {
            slider.prev();
          }, 1200);
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true;
            clearNextTimeout();
          });
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        });
        slider.on("dragStarted", clearNextTimeout);
        slider.on("animationEnded", nextTimeout);
        slider.on("updated", nextTimeout);
      },
    ]
  );

  // Update the number of slides to show based on the window width
  useEffect(() => {
    const handleResize = () => {
      // Define your responsive breakpoints and corresponding perView values
      if (window.innerWidth >= 1200) {
        setSlidesToShow(4); // For larger screens
      } else if (window.innerWidth >= 768) {
        setSlidesToShow(2); // For medium-sized screens
      } else {
        setSlidesToShow(1); // For smaller screens (e.g., mobile)
      }
    };

    // Initial setup
    handleResize();

    // Event listener to update perView on window resize
    window.addEventListener("resize", handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div ref={sliderRef} className="keen-slider">
      {photos.map((item) => (
        <Link to={item.link} target="_blank">
          <div className="keen-slider__slide number-slide1">
            <img src={item.src} alt={item.alt} height={"100%"} />
          </div>
        </Link>
      ))}
      {/* <div className="keen-slider__slide number-slide2">2</div>
      <div className="keen-slider__slide number-slide3">3</div>
      <div className="keen-slider__slide number-slide4">4</div>
      <div className="keen-slider__slide number-slide5">5</div>
      <div className="keen-slider__slide number-slide6">6</div> */}
    </div>
  );
};
