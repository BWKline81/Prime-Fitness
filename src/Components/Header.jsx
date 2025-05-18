import React, { useState, useEffect, useContext, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import styles from "../Styles/Header.module.css";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className={styles.container}>
      {/* Navbar will be styled to where there is two halves 
                with the logo placed in the middle.*/}

      <div className={styles.navbar}>
        <nav>
          <ul>
            <li
              data-aos="fade-down-right"
              data-aos-duration="2000"
              data-aos-delay="1000"
            >
              <button
                className={styles.navbar_link}
                onClick={() => {
                  navigate("/Prime-Fitness/");
                }}
              >
                <i className="fa-solid fa-house"></i>
                Home
              </button>
            </li>
            <li
              data-aos="fade-down-right"
              data-aos-duration="2000"
              data-aos-delay="500"
            >
              <button
                className={styles.navbar_link}
                onClick={() => {
                  navigate("/Prime-Fitness/training");
                }}
              >
                <i className="fa-solid fa-dumbbell"></i>
                Training
              </button>
            </li>
          </ul>
        </nav>
      </div>
      <div
        className={styles.heading}
        data-aos="fade-down"
        data-aos-duration="2000"
      ></div>
      <div className={styles.navbar}>
        <nav>
          <ul>
            <li
              data-aos="fade-down-left"
              data-aos-duration="2000"
              data-aos-delay="500"
            >
              <button
                className={styles.navbar_link}
                onClick={() => {
                  navigate("/Prime-Fitness/coaches");
                }}
              >
                <i class="fa-solid fa-user"></i>
                Coaches
              </button>
            </li>
            <li
              data-aos="fade-down-left"
              data-aos-duration="2000"
              data-aos-delay="1000"
            >
              <button
                className={styles.navbar_link}
                onClick={() => {
                  navigate("/Prime-Fitness/contact");
                }}
              >
                <i className="fa-solid fa-phone"></i>
                Contact
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Header;
