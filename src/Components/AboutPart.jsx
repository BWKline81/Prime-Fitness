import React, { useEffect } from "react";
import styles from "../Styles/AboutPart.module.css";
import AOS from "aos";
import "aos/dist/aos.css";

function AboutPart(props) {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div className={styles.container}>
      <div className={styles.heading}>
        <h1>{props.heading}</h1>
      </div>
      <div
        className={styles.image}
        style={{ backgroundImage: `url(${props.image})` }}
      ></div>
      <div className={styles.text}>
        <p>{props.text}</p>
      </div>
    </div>
  );
}

export default AboutPart;
