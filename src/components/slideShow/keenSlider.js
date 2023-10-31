import React, { useEffect, useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import "../../styles/keen.css";

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

  // State to track the number of slides to show based on window width

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
        <div className="keen-slider__slide number-slide1">
          <img src={item.src} alt="" height={"100%"} />
        </div>
      ))}
      {/* <div className="keen-slider__slide number-slide2">2</div>
      <div className="keen-slider__slide number-slide3">3</div>
      <div className="keen-slider__slide number-slide4">4</div>
      <div className="keen-slider__slide number-slide5">5</div>
      <div className="keen-slider__slide number-slide6">6</div> */}
    </div>
  );
};
