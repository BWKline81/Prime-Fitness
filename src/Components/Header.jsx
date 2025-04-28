import React, { useState, useEffect, useContext, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import styles from "../Styles/Header.module.css";
import {
  HomeContext,
  AboutContext,
  CoachesContext,
  ContactContext,
} from "../Pages/Home";

function Header() {
  const homeRef = useRef(useContext(HomeContext));
  const aboutRef = useRef(useContext(AboutContext));
  const coachesRef = useRef(useContext(CoachesContext));
  const contactRef = useRef(useContext(ContactContext));

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
                  console.log("Clicked");
                  homeRef.current.homeRef.current.scrollIntoView({
                    behavior: "smooth",
                  });
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
                  console.log("Clicked");
                  aboutRef.current.aboutRef.current.scrollIntoView({
                    behavior: "smooth",
                  });
                }}
              >
                <i className="fa-solid fa-address-card"></i>
                About Us
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
                  console.log("Clicked");
                  coachesRef.current.coachesRef.current.scrollIntoView({
                    behavior: "smooth",
                  });
                }}
              >
                <i class="fa-solid fa-dumbbell"></i>
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
                  console.log("Clicked");
                  contactRef.current.contactRef.current.scrollIntoView({
                    behavior: "smooth",
                  });
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
