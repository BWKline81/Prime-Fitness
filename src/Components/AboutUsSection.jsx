import React, { useEffect } from "react";
import styles from "../Styles/AboutUs.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
import AboutPart from "./AboutPart";
import { Link } from "react-router-dom";

function AboutUsSection() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div className={styles.container}>
      <div className={styles.heading_wrap} data-aos="fade-down">
        <Link to="/Prime-Fitness/training" className={styles.heading_link}>
          <h1 className={styles.heading}>Training →</h1>
        </Link>
        <div
          className={styles.line}
          data-aos="fade-up"
          data-aos-delay="500"
        ></div>
      </div>
      <div className={styles.main_section_wrap}>
        <div
          className={styles.AboutPart_wrap}
          data-aos="fade-right"
          data-aos-delay="300"
        >
          <AboutPart
            image={
              "https://i0.wp.com/port2flavors.com/wp-content/uploads/2022/07/placeholder-614.png?fit=1200%2C800&ssl=1"
            }
            heading="Sports Performance"
            text="We have a passion and
                specialization in sports
                performance all the way
                from youth athletes to
                professional."
          />
        </div>
        <div
          className={styles.AboutPart_wrap}
          data-aos="fade-right"
          data-aos-delay="800"
        >
          <AboutPart
            image={
              "https://i0.wp.com/port2flavors.com/wp-content/uploads/2022/07/placeholder-614.png?fit=1200%2C800&ssl=1"
            }
            heading="Personal Training"
            text="We offer personal
                training for everyone.
                Whether your goal is getting
                stronger, losing weight, or
                just moving better."
          />
        </div>
        <div
          className={styles.AboutPart_wrap}
          data-aos="fade-right"
          data-aos-delay="1300"
        >
          <AboutPart
            image={
              "https://i0.wp.com/port2flavors.com/wp-content/uploads/2022/07/placeholder-614.png?fit=1200%2C800&ssl=1"
            }
            heading="Facility"
            text="Our facility is state of the
                art and private so you
                have everything you
                could need and can beat
                the crowds."
          />
        </div>
      </div>
    </div>
  );
}

export default AboutUsSection;
