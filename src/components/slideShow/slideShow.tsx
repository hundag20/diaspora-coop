import React from "react";
import classes from "../../styles/infinitScroll.module.scss";

const photos = [
  {
    src: "https://diaspora.coopbankoromia.com.et/wp-content/uploads/2022/06/amal.jpg",
    alt: "",
  },
  {
    src: "https://diaspora.coopbankoromia.com.et/wp-content/uploads/2022/06/bakaal.jpg",
    alt: "",
  },
  {
    src: "https://diaspora.coopbankoromia.com.et/wp-content/uploads/2022/09/unnamed-e1662769303214.png",
    alt: "",
  },
  {
    src: "https://diaspora.coopbankoromia.com.et/wp-content/uploads/2022/09/thunes-logo-1-e1662769344227.jpg",
    alt: "",
  },
  {
    src: "https://diaspora.coopbankoromia.com.et/wp-content/uploads/2022/06/wcemt.jpg",
    alt: "",
  },
  {
    src: "https://diaspora.coopbankoromia.com.et/wp-content/uploads/2022/06/westernunion.jpg",
    alt: "",
  },
  {
    src: "https://diaspora.coopbankoromia.com.et/wp-content/uploads/2022/06/worldremit.jpg",
    alt: "",
  },
  {
    src: "https://diaspora.coopbankoromia.com.et/wp-content/uploads/2022/06/swift.jpg",
    alt: "",
  },
  {
    src: "https://diaspora.coopbankoromia.com.et/wp-content/uploads/2022/06/transfast.jpg",
    alt: "",
  },
  {
    src: "https://diaspora.coopbankoromia.com.et/wp-content/uploads/2022/06/ria.jpg",
    alt: "",
  },
  {
    src: "https://diaspora.coopbankoromia.com.et/wp-content/uploads/2022/06/smallworld.jpg",
    alt: "",
  },
  {
    src: "https://diaspora.coopbankoromia.com.et/wp-content/uploads/2022/06/E-remit.jpg",
    alt: "",
  },
  {
    src: "https://diaspora.coopbankoromia.com.et/wp-content/uploads/2022/06/kaah.jpg",
    alt: "",
  },
  {
    src: "https://diaspora.coopbankoromia.com.et/wp-content/uploads/2022/06/moneygram.jpg",
    alt: "",
  },
  {
    src: "https://diaspora.coopbankoromia.com.et/wp-content/uploads/2022/06/Banana-Pay.jpg",
    alt: "",
  },
  {
    src: "https://diaspora.coopbankoromia.com.et/wp-content/uploads/2022/06/dahabashiil.jpg",
    alt: "",
  },
  {
    src: "https://diaspora.coopbankoromia.com.et/wp-content/uploads/2022/06/xpress-money.jpg",
    alt: "",
  },
];

export default function Slideshow() {
  return (
    <div className={classes.scroller}>
      <div className={classes.scroller__content}>
        <div className={classes.scroller__content__item1}>
          {photos.map((photo, index) => (
            <div key={index}>
              <img src={photo.src} height="100%" width="100%" alt={photo.alt} />
            </div>
          ))}
        </div>
        <div className={classes.scroller__content__item2}>
          {photos.map((photo, index) => (
            <div key={index}>
              <img src={photo.src} height="100%" width="100%" alt={photo.alt} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
