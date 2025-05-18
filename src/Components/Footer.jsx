import React, { useEffect } from "react";
import styles from "../Styles/Footer.module.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.social_wrap}>
        <Link
          to="https://www.instagram.com/primeperformanceclub/reel/C5HHccDurA_/"
          target="_blank"
          className={styles.button_container_link}
        >
          <i class="fa-brands fa-instagram" id="instagram_link"></i>
        </Link>
      </div>
      <div className={styles.nav_wrap}>
        <Link to="/Prime-Fitness/" className={styles.nav_link}>
          Home
        </Link>
        <Link to="/Prime-Fitness/training" className={styles.nav_link}>
          Training
        </Link>
        <Link to="/Prime-Fitness/coaches" className={styles.nav_link}>
          Coaches
        </Link>
        <Link to="/Prime-Fitness/contact" className={styles.nav_link}>
          Contact
        </Link>
      </div>
      <div className={styles.copyright_wrap}>
        <p className={styles.copyright}>© Prime Performance Training 2025</p>
      </div>
    </div>
  );
}

export default Footer;
