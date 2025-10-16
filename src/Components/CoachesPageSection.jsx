import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import styles from "../Styles/CoachesPageSection.module.css";

function CoachesPageSection(props) {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  let [ismute, setIsMute] = useState(true);

  if (props.side === "left" && window.innerWidth > 1000) {
    return (
      <div
        className={styles.container}
        style={{ backgroundColor: props.color }}
      >
        <div
          className={styles.video_wrap}
          data-aos="fade-right"
          data-aos-delay="300"
        >
          <div className={styles.video}>
            <video
              src={props.video}
              autoPlay={true}
              loop={true}
              muted={ismute}
              style={{ pointerEvents: "none" }}
              playsInline={true}
              webkit-playsinline={true}
              alt="Video Coming Soon"
            ></video>
            <button
              className={styles.mute_btn}
              onClick={() => setIsMute(!ismute)}
            >
              <i
                className={
                  ismute
                    ? "fa-solid fa-volume-xmark"
                    : "fa-solid fa-volume-high"
                }
                style={{ color: ismute ? "red" : "green" }}
              ></i>
            </button>
          </div>
        </div>
        <div className={styles.content}>
          <div
            className={styles.title_wrap}
            data-aos="fade-down"
            data-aos-delay="500"
          >
            <h1>{props.name}</h1>
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
            <h1>{props.name}</h1>
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
          </div>
        </div>
        <div
          className={styles.video_wrap}
          data-aos="fade-left"
          data-aos-delay="300"
        >
          <div className={styles.video}>
            <video
              src={props.video}
              autoPlay={true}
              loop={true}
              muted={true}
              style={{ pointerEvents: "none" }}
              playsInline={true}
              webkit-playsinline={true}
            ></video>
            <button
              className={styles.mute_btn}
              onClick={() => setIsMute(!ismute)}
            >
              <i
                className={
                  ismute
                    ? "fa-solid fa-volume-xmark"
                    : "fa-solid fa-volume-high"
                }
                style={{ color: ismute ? "#FC6565" : "#82FF75" }}
              ></i>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default CoachesPageSection;
