import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import EmblaDots from "./EmblaDots";
import { fetchSlides } from "../hooks/fetchStrapi";
// import  from "embla-carousel-autoplay/components/Options";

const strapiUrl = process.env.REACT_APP_STRAPI_URL;

const HeroSlides = ({ slides }) => {
  // Use the useInView hook to detect when the "offers" section is in view
  const navigate = useNavigate();

  const nums = [2, 1];
  const autoplayOptions = {
    delay: 8000,
    // stopOnMouseEnter: true,
    rootNode: (emblaRoot) => emblaRoot.parentElement,
  };
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);

  // function resetTimeout() {
  //   if (timeoutRef.current) {
  //     clearTimeout(timeoutRef.current);
  //   }
  // }
  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(handleNext, 8000);
    }
  }

  const [emblaRef, embla] = useEmblaCarousel({
    loop: true,
    speed: 100,
    animationOptions: {
      duration: 1600,
      easing: "ease-in",
    },
    watchDrag: false,
  });

  const handleVisibilityChange = () => {
    // console.log("changing");
    if (document.hidden) {
      // Tab is hidden, pause autoplay
      resetTimeout();
    } else {
      // Tab is visible, resume autoplay
      timeoutRef.current = setTimeout(handleNext, 8000);
    }
  };

  useEffect(() => {
    resetTimeout();
    // timeoutRef.current = setTimeout(() => handleNext(), duration[index]);
    timeoutRef.current = setTimeout(() => handleNext(), 8000);
    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      resetTimeout();
    };
  }, [index]);

  useEffect(() => {
    if (embla) {
      timeoutRef.current = setTimeout(handleNext, 8000);
    }

    return () => {
      resetTimeout();
    };
  }, [embla]);

  const handleNext = () => {
    // console.log("index:", index);
    // if (embla) {
    //   embla.scrollNext();
    //   if (index + 1 === data.length) {
    //     // If the current slide is the last slide
    //     setIndex(0); // Transition to the first slide
    //   } else {
    //     setIndex(index + 1); // Transition to the next slide
    //   }
    // }
    if (embla && embla.canScrollNext()) {
      const currentIndex = embla.selectedScrollSnap();
      const slideElements = Array.from(embla.slideNodes());

      const nextIndex = slideElements.findIndex(
        (slide) => slide === currentIndex
      );

      embla.scrollNext();

      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      timeoutRef.current = setTimeout(handleNext, 8000);

      const newIndex =
        nextIndex === -1 ? (index + 1) % slides.length : nextIndex;

      setIndex(newIndex);
    }
  };

  const handlePrevious = () => {
    if (embla) {
      // embla.scrollPrev();

      const currentIndex = embla.selectedScrollSnap();
      const slideElements = Array.from(embla.slideNodes());

      const previousIndex = slideElements.findIndex(
        (slide) => slide === currentIndex
      );
      const lastIndex = slideElements.length - 1;
      embla.scrollPrev();

      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      timeoutRef.current = setTimeout(handleNext, 8000);
      setIndex(previousIndex < 0 ? lastIndex : previousIndex);
    }
  };

  const updateAutoplayTiming = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(handleNext, 8000);
    }
  };

  return (
    // <div className="">
    <div className="embla heroSlideComp" id="home">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides &&
            slides.map((slide, index) => {
              // console.log(slide);
              return (
                <div className="container embla__slide" key={index}>
                  <div className="content">
                    <div className="top">
                      <h3>{slide.topTitle}</h3>
                      <h2>{slide.bottomTitle}</h2>
                    </div>
                    <p className="discription">{slide.description}</p>
                    <div className="hero_button_joins">
                      <button
                        className={`open_account ${
                          !slide?.buttons?.data?.some(
                            (button) => button.id === 2
                          ) && "hide"
                        }`}
                        onClick={() => navigate("/open-account")}
                      >
                        <i
                          aria-hidden="true"
                          className="far fa-address-card"
                        ></i>{" "}
                        <span>Open An Account</span>
                      </button>
                      <div
                        className={`or-container ${
                          !(
                            slide?.buttons?.data?.some(
                              (button) => button.id == 1
                            ) &&
                            slide?.buttons?.data?.some(
                              (button) => button.id == 2
                            )
                          ) && `hide`
                        }`}
                      >
                        <span className="or-sign">or</span>
                      </div>
                      <button
                        className={` ${
                          !slide?.buttons?.data?.some(
                            (button) => button.id == 1
                          ) && "hide"
                        }`}
                        onClick={() => navigate("/get-a-loan")}
                      >
                        <i
                          aria-hidden="true"
                          className="far fa-share-square"
                        ></i>
                        <span>Request A Loan</span>
                      </button>
                    </div>
                  </div>
                  <div className="image">
                    <img
                      // src={`${strapiUrl.slice(0, -1)}${slide.url}`}
                      src={
                        !slide?.url?.data.attributes.url.includes("178.35")
                          ? slide.url.data.attributes.url
                          : `${strapiUrl?.slice(0, -1)}${
                              slide.url.data.attributes.url
                            }`
                      }
                      // src={slide.url}
                      // src="https://diaspora.coopbankoromia.com.et/wp-content/uploads/2022/09/Model-0001.png"
                      alt="Coop bank"
                    />
                  </div>
                </div>
              );
            })}
        </div>
      </div>

      <div
        style={{ position: "absolute", left: 0, right: 0, marginTop: "-15px" }}
      >
        <EmblaDots
          embla={embla}
          slides={slides}
          updateAutoplayTiming={updateAutoplayTiming}
        />
      </div>
    </div>
    // </div>
  );
};

export default HeroSlides;
