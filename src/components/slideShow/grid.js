import React from "react";
import Carousel from "react-grid-carousel";

const photos = [
  // {
  //   src: "https://diaspora.coopbankoromia.com.et/wp-content/uploads/2022/06/amal.jpg",
  //   alt: "",
  // },
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

const Gallery = () => {
  return (
    <Carousel cols={4} rows={1} gap={10} loop={true}>
      {photos.map((item, index) => (
        <Carousel.Item>
          <img
            width="100%"
            src={item.src}
            height={"140px"}
            autoplay={100}
            scrollSnap
          />
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default Gallery;
