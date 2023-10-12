import { react, useState, useEffect } from "react";
import "../styles/About.scss";

import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

import AboutStatCounter from "../components/AboutStatCounter";

const About = () => {


  const offersAnimationVariants = {
    hidden: {
      opacity: 0,
      y: 100,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
      },
    },
  };

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.05,
  });

  const [refImg, inViewImg] = useInView({
    triggerOnce: true,
    threshold: 0.05,
  });

  const contentAnimationVariantsImg = {
    hidden: {
      opacity: 0,
    },
    visible: {
      x: [0, -10 - 12 - 2 - 2, 0],
      opacity: 1,
      transition: {
        duration: 0.3,

        ease: "linear",
      },
    },
  };

  const [refRight, inViewRight] = useInView({
    triggerOnce: true,
    threshold: 0.05,
  });

  const [refLeft, inViewLeft] = useInView({
    triggerOnce: true,
    threshold: 0.05,
  });
  const contentAnimationVariantsLeft = {
    hidden: {
      x: "10%",
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const contentAnimationVariantsRight = {
    hidden: {
      x: "-10%",
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };


const about_header =  {
headertop: "CoopBank Diaspora",
headerTitle:' Diaspora Banking',
headerSubTitile:" We provide you with a distinctive array of products and services tailored to your banking needs both at home and abroad!",
headerDiscription1:"  CoopBank of Oromia is one of the leading private banks in Ethiopia with very distinctive banking history. Diaspora Banking is one of the banking segments of CoopBank which has been given due emphasis. CoopBank Diaspora Account has been operational since August 2012.",
headerDiscription2:"  CoopBank Diaspora Banking is a platform designed for Ethiopians who do not reside in the country to have a safe, easy and convenient access to a wide range of products and services carefully curated to simplify cross-border banking.",
}

const about_headerImg =  {

 imgUrl:'https://diaspora.coopbankoromia.com.et/wp-content/uploads/2022/08/pngwing.com-54.png'
  }

const about_section = [
{  titile: ' ',
desc:'The Coopbank is now one of the most profitable banks in Ethiopia having a total asset value of more than ETB 121 billion. The bank has 630+ branch networks, 10 million account holders, and more than 11,500 employees.'
},
{
  visionTitle: " Vision",
  visionDesc: ""
},
{
  missionTitle: 'Mission',
  missionDesc: ' ',

},
{
  core_valuesTitle:'Core Values',
  core_valuesDesc:' ',
  core_valuesList:[""," "," "]
}

]
const about_diaspra_account_loan =[
  {
    diasporAccTitle:'',
    diasporAccDesc:'',
  },
  {
    diaspraLoanTitle:'',
    diaspraLoanDesc:''
  }
]

  const statsInfo = [
    {
      icon: "elementskit-funfact-icon fas fa-users",
      count: 5000,
      desc: "Total Membership",
    },
    {
      icon: "elementskit-funfact-icon fas fa-money-bill-alt",
      count: 10000000,
      desc: "Deposit Amount",
    },
    {
      icon: "elementskit-funfact-icon fas fa-globe-americas",
      count: 120,
      desc: "Countries",
    },
    {
      icon: "elementskit-funfact-icon fas fa-share-square",
      count: 13,
      desc: "Remmitance Agency",
    },
  ];

  return (
    <div className="aboutpage">
      <div className="container">
        {" "}
        <section
          className="elementor-section elementor-top-section elementor-element elementor-element-273f3e10 elementor-section-boxed elementor-section-height-default elementor-section-height-default wpr-particle-no wpr-jarallax-no wpr-parallax-no wpr-sticky-section-no"
          data-id="273f3e10"
          data-element_type="section"
        >
          <div className="elementor-container elementor-column-gap-default">
            <div
              className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-4c577536"
              data-id="4c577536"
              data-element_type="column"
            >
              <div className="elementor-widget-wrap elementor-element-populated">
                <div
                  className="elementor-element elementor-element-5aeb5fcd elementor-widget elementor-widget-text-editor"
                  data-id="5aeb5fcd"
                  data-element_type="widget"
                  data-widget_type="text-editor.default"
                >
                  <div className="elementor-widget-container">
                    <div
                      id="wp-block-themeisle-blocks-advanced-columns-f6c33b22"
                      className="wp-block-themeisle-blocks-advanced-columns has-0-columns has-desktop-undefined-layout has-tablet-equal-layout has-mobile-equal-layout has-vertical-unset"
                    >
                      <div className="wp-block-themeisle-blocks-advanced-columns-overlay"></div>
                      <div className="innerblocks-wrap"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="heroComp">
          {" "}
          <div className="about-container">
            {" "}
            <div className="about-content">
              <div className="about-headings">
                <div className="heading-title">
                  <h6> CoopBank Diaspora </h6>
                </div>
                <div className="heading-sub">
                  <h3> Diaspora Banking</h3>
                </div>
                <div
                  className="diaspora-banking-top--element-3 elementor-element-a727a1b elementor-widget elementor-widget-heading"
                  data-id="a727a1b"
                  data-element_type="widget"
                  data-widget_type="heading.default"
                >
                  <div className="diaspora-banking-top--widget-container-3">
                    <p className="heading-title-3 elementor-size-default">
                      We provide you with a distinctive array of products and
                      services tailored to your banking needs both at home and
                      abroad!
                    </p>{" "}
                  </div>
                </div>
                <div className="heading-desc">
                  {" "}
                  <p>
                    {" "}
                    CoopBank of Oromia is one of the leading private banks in
                    Ethiopia with very distinctive banking history. Diaspora
                    Banking is one of the banking segments of CoopBank which has
                    been given due emphasis. CoopBank Diaspora Account has been
                    operational since August 2012. <br />
                    CoopBank Diaspora Banking is a platform designed for
                    Ethiopians who do not reside in the country to have a safe,
                    easy and convenient access to a wide range of products and
                    services carefully curated to simplify cross-border banking.
                  </p>
                </div>
              </div>
            </div>
            <motion.div
              className="about-globe-container"
              ref={refImg}
              initial="hidden"
              animate={inViewImg ? "visible" : "hidden"}
              variants={contentAnimationVariantsImg}
            >
              <div className="about-globe-animated ">
                <div className="about-background-overlay"></div>

                <div className="about-globe-image-outer-container">
                  <div className="about-globe-image-container">
                    <img
                      src="https://diaspora.coopbankoromia.com.et/wp-content/uploads/2022/08/pngwing.com-54.png"
                      className="attachment-full size-full wp-image-2257"
                      alt=""
                      srcSet="https://diaspora.coopbankoromia.com.et/wp-content/uploads/2022/08/pngwing.com-54.png 850w, https://diaspora.coopbankoromia.com.et/wp-content/uploads/2022/08/pngwing.com-54-300x194.png 300w, https://diaspora.coopbankoromia.com.et/wp-content/uploads/2022/08/pngwing.com-54-768x497.png 768w"
                    />
                  </div>
                </div>
              </div>
            </motion.div>{" "}
          </div>
        </div>
        <motion.div
          className="stat-of-diaspora-banking-section-elementor-section elementor-top-section elementor-element elementor-element-b328901 elementor-section-boxed elementor-section-height-default elementor-section-height-default wpr-particle-no wpr-jarallax-no wpr-parallax-no wpr-sticky-section-no animated fadeInUp"
          initial="hidden"
          ref={ref}
          animate={inView ? "visible" : "hidden"}
          variants={offersAnimationVariants}
        >
          <div className="stat-of-diaspora-banking-section-elementor-section--background-overlay"></div>
          <div className="stat-of-diaspora-banking-section-elementor-section--container elementor-column-gap-default">
            {statsInfo.map((stats) => (
              <div
                className="stat-of-diaspora-banking-section-elementor-section--column elementor-col-25 elementor-top-column elementor-element elementor-element-7172e0c"
                data-id="7172e0c"
                data-element_type="column"
              >
                <div className="stat-of-diaspora-banking-section-elementor-section--widget-wrap elementor-element-populated">
                  <div
                    className="stat-of-diaspora-banking-section-elementor-section--element elementor-element-2d7203d elementor-widget elementor-widget-elementskit-funfact"
                    data-id="2d7203d"
                    data-element_type="widget"
                    data-widget_type="elementskit-funfact.default"
                  >
                    <div className="stat-of-diaspora-banking-section-elementor-section--widget-container">
                      <div className="ekit-wid-con">
                        <div className="elementskit-funfact text-center     ">
                          <div className="elementskit-funfact-inner position_top">
                            <div className="funfact-icon">
                              {" "}
                              <i></i>
                              <i aria-hidden="true" className={stats.icon}></i>
                            </div>

                            <div className="funfact-content">
                              <div className="number-percentage-wraper">
                                <div className="number-percentage">
                                  <AboutStatCounter
                                    value={stats.count}
                                    to={
                                      stats.count >= 1000000
                                        ? Math.round(stats.count / 1000000)
                                        : stats.count
                                    }
                                  />
                                </div>
                              </div>
                              <h3 className="funfact-title">{stats.desc}</h3>{" "}
                            </div>
                          </div>
                        </div>
                      </div>{" "}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
        <section className="state-separator-section-element">
          <div className="state-separator-section-element-container">
            <div className="state-separator-section-element-column ">
              <div className="state-separator-section-element-widget-wrap">
                <div className="state-separator-section-element-element ">
                  <div className="state-separator-section-element-widget-container">
                    <div className="state-separator-section-element-spacer">
                      <div className="state-separator-section-element-spacer-inner"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="about-coopbank " id="slider-component">
          <div className="about-coopbank-outer-grid">
            <div className="about-coopbank-inner-grid">
              <div className="about-coopbank-inner-inner-grid">
                <div className="about-coopbank-widget">
                  <div className="about-coopbank-widget-container">
                    <div className="about-coopbank-widget-ekit-wid-con">
                      <div className="about-coopbank-widget-section-title-wraper ">
                        <h2 className="about-coopbank-widget-section-title ">
                          About <span>Coopbank</span>
                        </h2>
                      </div>
                    </div>{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section className="about-coop-desc">
          <div className="about-coop-desc-container elementor-column-gap-default">
            <div
              className="about-coop-desc-column elementor-col-100 elementor-top-column elementor-element elementor-element-5529bfe"
              data-id="5529bfe"
              data-element_type="column"
            >
              <div className="about-coop-desc-widget-wrap elementor-element-populated">
                <div className="about-coop-desc-element elementor-element-01d7595 elementor-widget elementor-widget-text-editor">
                  <div className="about-coop-desc-widget-container">
                    <div className="about-coop-desc-row-container onepage-section">
                      <div
                        className="about-coop-desc-limit-width row-parent"
                        data-imgready="true"
                      >
                        <div className="about-coop-desc-about-row-inner">
                          <div className="about-coop-desc-about-column pos-top pos-center align_left column_parent col-lg-12 single-internal-gutter">
                            <div className="about-coop-desc-about-style-light">
                              <div className="about-coop-desc-about-uncoltable">
                                <div className="about-coop-desc-about-uncell no-block-padding">
                                  <div className="about-coop-desc-about-uncont">
                                    <div className="about-coop-desc-about-uncode_text_column">
                                      <p>
                                        The Coopbank is now one of the most
                                        profitable banks in Ethiopia having a
                                        total asset value of more than ETB 121
                                        billion. The bank has 630+ branch
                                        networks, 10 million account holders,
                                        and more than 11,500 employees.
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      id="row-unique-3"
                      className="about-coop-desc-vision-row-container onepage-section"
                      data-parent="true"
                      data-label="Vision"
                      data-name="vision"
                      data-section="3"
                    >
                      <div
                        className="about-coop-desc-vision-row one-top-padding one-bottom-padding single-h-padding limit-width row-parent"
                        data-imgready="true"
                      >
                        <div className="about-coop-desc-vision-row-inner">
                          <div className="about-coop-desc-vision-column pos-top pos-center align_left column_parent col-lg-12 single-internal-gutter">
                            <div className="about-coop-desc-vision-uncol style-light">
                              <div className="about-coop-desc-vision-uncoltable">
                                <div className="uncell no-block-padding">
                                  <div className="about-coop-desc-vision-uncont">
                                    <div className="about-coop-desc-vision-uncode_text_column">
                                      <div className="about-coop-desc-vision-uncode_text_column Vision">
                                        <h4 id="Vision">Vision</h4>
                                        <p>
                                          To be the leading private bank in
                                          Ethiopia by 2025.
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      id="row-unique-4"
                      className="about-coop-desc-mission-row-container onepage-section"
                      data-parent="true"
                      data-label="Mission"
                      data-name="mission"
                      data-section="4"
                    >
                      <div
                        className="about-coop-desc-mission-row single-top-padding one-bottom-padding single-h-padding limit-width row-parent"
                        data-imgready="true"
                      >
                        <div className="about-coop-desc-mission-row-inner">
                          <div className="about-coop-desc-mission-wpb_column pos-top pos-center align_left column_parent col-lg-12 single-internal-gutter">
                            <div className="about-coop-desc-mission-uncol style-light">
                              <div className="about-coop-desc-mission-uncoltable">
                                <div className="about-coop-desc-mission-uncell no-block-padding">
                                  <div className="about-coop-desc-mission-uncont">
                                    <div className="about-coop-desc-mission-uncode_text_column">
                                      <div className="uncode_text_column Vision">
                                        <h4 id="Mission">Mission</h4>
                                        <p>
                                          We root our foundation in communities
                                          to provide banking solutions that
                                          create greater customer experience
                                          with emphasis to cooperatives and
                                          agro-based businesses through proper
                                          use of human resource and up-to-date
                                          technologies to maximize stakeholders’
                                          value.
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      id="row-unique-5"
                      className="about-coop-desc-row-container onepage-section"
                      data-parent="true"
                      data-label="Core Values"
                      data-name="core-values"
                      data-section="5"
                    >
                      <div
                        className="row single-top-padding one-bottom-padding single-h-padding limit-width row-parent"
                        data-imgready="true"
                      >
                        <div className="about-coop-desc-row-inner">
                          <div className="about-coop-desc-pos-top pos-center align_left column_parent col-lg-12 single-internal-gutter">
                            <div className="about-coop-desc-uncol style-light">
                              <div className="about-coop-desc-uncoltable">
                                <div className="uncell no-block-padding">
                                  <div className="about-coop-desc-uncont">
                                    <div className="about-coop-desc-uncode_text_column">
                                      <div className="about-coop-desc-uncode_text_column Vision">
                                        <h4 id="CoreValues">Core Values</h4>
                                        <p>
                                          The following set of values will serve
                                          to guide the words and actions of all
                                          our employees;
                                        </p>
                                        <ul>
                                          <li>Integrity</li>
                                          <li>Customer Satisfaction</li>
                                          <li>Learning Organization</li>
                                          <li>Teamwork</li>
                                          <li>Cost Consciousness</li>
                                          <li>Concern for Community</li>
                                          <br />
                                        </ul>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="diasopra-bottom-elementor-section-top-section">
          <div className="diasopra-bottom-elementor-section-top-1">
            <div className="diasopra-bottom-elementor-section-top-2">
              <div className="diasopra-bottom-elementor-section-top-3">
                <section className="diasopra-bottom-elementor-section ">
                  <div className="diaspra-bottom-elementor-section-container elementor-column-gap-default">
                    <motion.div
                      className="diaspra-bottom-elementor-section-column "
                      ref={refRight}
                      initial="hidden"
                      animate={inViewRight ? "visible" : "hidden"}
                      variants={contentAnimationVariantsRight}
                    >
                      <div className="diaspra-bottom-elementor-section-widget-wrap elementor-element-populated">
                        <div
                          className="diaspra-bottom-elementor-sectionelementor-element elementor-element-09affb3 elementor-widget elementor-widget-elementskit-heading"
                          data-id="09affb3"
                          data-element_type="widget"
                          data-widget_type="elementskit-heading.default"
                        >
                          <div className="diaspra-bottom-elementor-section-widget-container">
                            <div className="ekit-wid-con">
                              <div className="ekit-heading-elementskit-section-title-wraper center   ekit_heading_tablet-   ekit_heading_mobile-">
                                <h2 className="ekit-heading--title elementskit-section-title ">
                                  Diaspora{" "}
                                  <span className="accounts-sub-heading">
                                    Accounts
                                  </span>
                                </h2>
                              </div>
                            </div>{" "}
                          </div>
                        </div>
                        <div
                          className="diaspra-bottom--element elementor-element-267b612 elementor-widget elementor-widget-text-editor"
                          data-id="267b612"
                          data-element_type="widget"
                          data-widget_type="text-editor.default"
                        >
                          <div className="diaspra-bottom--widget-container">
                            <p>
                              Diaspora Banking Account allows Diaspora who
                              resides and works outside the country to maintain
                              and perform domestic and international transfers
                              through their Coopbank accounts.
                            </p>
                            <p>
                              » Diaspora Current Account
                              <br />» Diaspora Fixed-Time Deposit Account
                              <br />» Diaspora Non-Repatriable Account
                              <br />» Ethiopian Citizen Or Origin Living In
                              Foreign Land (ECOLFL) Savings Account
                              <br />
                            </p>{" "}
                          </div>
                        </div>
                      </div>
                    </motion.div>

                    <motion.div
                      // className="diaspra-bottom-elementor-section-column "
                      variants={contentAnimationVariantsLeft}
                      ref={refLeft}
                      initial="hidden"
                      animate={inViewLeft ? "visible" : "hidden"}
                      className="diaspra-bottom--column "
                      data-id="cf6cde5"
                      data-element_type="column"
                      data-settings='{"animation":"slideInRight"}'
                    >
                      <div className="diaspra-bottom--widget-wrap elementor-element-populated">
                        <div
                          className="diaspra-bottom--element elementor-element-410ccbc elementor-widget elementor-widget-elementskit-heading"
                          data-id="410ccbc"
                          data-element_type="widget"
                          data-widget_type="elementskit-heading.default"
                        >
                          <div className="diaspra-bottom--widget-container">
                            <div className="ekit-wid-con">
                              <div className="ekit-heading-elementskit-section-title-wraper ">
                                <h2 className="ekit-heading--title elementskit-section-title ">
                                  Diaspora{" "}
                                  <span className="accounts-sub-heading-loan">
                                    Loan
                                  </span>
                                </h2>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div
                          className="diaspra-bottom--element elementor-element-ae1ac64 elementor-widget elementor-widget-text-editor"
                          data-id="ae1ac64"
                          data-element_type="widget"
                          data-widget_type="text-editor.default"
                        >
                          <div className="diaspra-bottom--widget-container">
                            <p>
                              The bank provides business and investment loan
                              along with expertise free consultancy services on
                              different opportunities.
                              <br />» Diaspora consumer loans
                              <br />» Mortgage loan
                              <br />» Car/Vehicle loan
                              <br />» Personal loan
                              <br />» Diaspora Business loans
                              <br />» Investment financing
                              <br />» Working capital loans
                            </p>{" "}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
