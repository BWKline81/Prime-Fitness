import React, { useEffect } from "react";
import styles from "../Styles/TrainingPageSection.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useNavigate } from "react-router-dom";

function TrainingPageSection(props) {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  if (props.side === "left") {
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
            <button
              className={styles.nav_button}
              onClick={() => navigate(props.link)}
            >
              {props.button_desc}
            </button>
          </div>
        </div>
      </div>
    );
  } else if (props.side === "right") {
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
            <button
              className={styles.nav_button}
              onClick={() => navigate(props.link)}
            >
              {props.button_desc}
            </button>
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
