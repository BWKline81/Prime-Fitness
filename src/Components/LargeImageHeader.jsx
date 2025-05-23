import React, { useEffect } from "react";
import styles from "../Styles/LargeImageHeader.module.css";
import TemplateVideo from "../assets/Template_Video.mp4";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

function LargeImageHeader() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  useEffect(() => {
    const image = document.querySelector(".large_image_container");
    image.addEventListener("mousemove", handleOnMouseMove, false);
    image.addEventListener("mouseleave", handleOnMouseMove);

    return () => {
      image.removeEventListener("mousemove", handleOnMouseMove, false);
      image.removeEventListener("mouseleave", handleOnMouseMove);
    };
  }, []);

  const handleOnMouseMove = (e) => {
    const { currentTarget: target } = e;

    const rect = target.getBoundingClientRect(),
      x = e.clientX - rect.left,
      y = e.clientY - rect.top;

    target.style.setProperty("--mouse-x", `${x}px`);
    target.style.setProperty("--mouse-y", `${y}px`);
  };

  return (
    <div className="large_image_container" id="large_image_container">
      <video
        src={TemplateVideo}
        autoPlay={true}
        muted={true}
        loop={true}
        style={{ pointerEvent: "none" }}
        playsInline={true}
        webkit-playsinline={true}
      ></video>
      <div className={styles.overlay}>
        <div className={styles.heading_container}>
          <h2>Join Us Today!</h2>
        </div>
        <div className={styles.button_container}>
          <Link
            to="https://www.mindbodyonline.com/explore/locations/prime-performance-training"
            target="_blank"
            className={styles.button_container_link}
          >
            <button className={styles.btn}>Book Now</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LargeImageHeader;
