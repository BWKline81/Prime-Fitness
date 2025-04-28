import React, { useEffect } from "react";
import styles from "../Styles/Coach.module.css";
import AOS from "aos";
import "aos/dist/aos.css";

function Coach(props) {
  return (
    <div className={styles.container}>
      <div
        className={styles.image}
        style={{ backgroundImage: `url(${props.image})` }}
      ></div>
      <div className={styles.name}>
        <h1>{props.name}</h1>
      </div>
      <div className={styles.description}>
        <h3>{props.description}</h3>
      </div>
    </div>
  );
}

export default Coach;
