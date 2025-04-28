import React, { useEffect } from "react";
import styles from "../Styles/Contact.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

function Contact() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.heading_wrap} data-aos="fade-down">
        <h1 className={styles.heading}>Contact Us!</h1>
        <div
          className={styles.line}
          data-aos="fade-up"
          data-aos-delay="500"
        ></div>
      </div>
      <div className={styles.content_wrap}>
        <ul className={styles.content_list}>
          <li
            className={styles.content_list_item}
            data-aos="fade-right"
            data-aos-delay="100"
          >
            <i class="fa-solid fa-envelope"></i>
            <p>primeperformanceclub@outlook.com</p>
          </li>
          <li
            className={styles.content_list_item}
            data-aos="fade-right"
            data-aos-delay="400"
          >
            <i class="fa-solid fa-phone"></i>
            <p>352-303-8984</p>
          </li>
          <li
            className={styles.content_list_item}
            data-aos="fade-right"
            data-aos-delay="700"
          >
            <Link
              to="https://www.instagram.com/primeperformanceclub/reel/C5HHccDurA_/"
              target="_blank"
              className={styles.button_container_link}
            >
              <i class="fa-brands fa-instagram" id="instagram_link"></i>
            </Link>

            <p>@primeperformanceclub</p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Contact;
