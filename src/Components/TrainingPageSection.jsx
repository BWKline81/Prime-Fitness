import React, { useEffect } from "react";
import styles from "../Styles/TrainingPageSection.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

function TrainingPageSection(props) {
  useEffect(() => {
    AOS.init({ duration: 1000 });
    console.log(window.innerWidth);
  }, []);

  if (props.side === "left" && window.innerWidth > 1000) {
    return (
      <div
        className={styles.container}
        style={{ backgroundColor: props.color }}
      >
        <div
          className={styles.image_wrap}
          data-aos="fade-right"
          data-aos-delay="300"
        >
          <div
            className={styles.image}
            style={{ backgroundImage: `url(${props.image})` }}
          ></div>
        </div>
        <div className={styles.content}>
          <div
            className={styles.title_wrap}
            data-aos="fade-down"
            data-aos-delay="500"
          >
            <h1>{props.title}</h1>
            <div
              className={styles.line}
              data-aos="fade-up"
              data-aos-delay="700"
            ></div>
          </div>
          <div
            className={styles.description_wrap}
            data-aos="fade-up"
            data-aos-delay="900"
          >
            <p>{props.description}</p>
            <Link to={props.button_link} className={styles.link}>
              <button className={styles.nav_button}>{props.button_desc}</button>
            </Link>
          </div>
        </div>
      </div>
    );
  } else if (props.side === "right" || window.innerWidth <= 1000) {
    return (
      <div
        className={styles.container}
        style={{ backgroundColor: props.color }}
      >
        <div className={styles.content}>
          <div
            className={styles.title_wrap}
            data-aos="fade-down"
            data-aos-delay="500"
          >
            <h1>{props.title}</h1>
            <div
              className={styles.line}
              data-aos="fade-up"
              data-aos-delay="700"
            ></div>
          </div>
          <div
            className={styles.description_wrap}
            data-aos="fade-up"
            data-aos-delay="900"
          >
            <p>{props.description}</p>
            <Link to={props.button_link} className={styles.link}>
              <button className={styles.nav_button}>{props.button_desc}</button>
            </Link>
          </div>
        </div>
        <div
          className={styles.image_wrap}
          data-aos="fade-right"
          data-aos-delay="300"
        >
          <div
            className={styles.image}
            style={{ backgroundImage: `url(${props.image})` }}
          ></div>
        </div>
      </div>
    );
  }
}

export default TrainingPageSection;
