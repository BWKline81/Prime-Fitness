import React, { useEffect } from "react";
import styles from "../Styles/ContactPage.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";

function ContactPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Prime Performance | Contact Us";
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className={styles.container}>
      <nav>
        <div
          className={styles.header_wrapper}
          data-aos="fade-down"
          data-aos-delay="500"
        >
          <Header />
        </div>
      </nav>
      <main>
        <div className={styles.contact_section} data-aos="fade-up">
          <div
            className={styles.contact_section_heading_wrap}
            data-aos="fade-down"
            data-aos-delay="500"
          >
            <h1 className={styles.contact_section_heading}>Contact Us!</h1>
          </div>
          <div
            className={styles.line}
            data-aos="fade-up"
            data-aos-delay="1000"
          ></div>
          <div className={styles.contact_information}>
            <ul className={styles.contact_information_list}>
              <li
                className={styles.contact_information_list_item}
                data-aos="fade-right"
                data-aos-delay="1500"
              >
                <Link
                  to="mailto:primeperformanceclub@outlook.com"
                  target="_blank"
                  className={styles.button_container_link}
                >
                  <i class="fa-solid fa-envelope" id="instagram_link"></i>
                </Link>

                <p>@primeperformanceclub</p>
              </li>
              <li
                className={styles.contact_information_list_item}
                data-aos="fade-right"
                data-aos-delay="2000"
              >
                <i class="fa-solid fa-phone"></i>

                <p>352-303-8984</p>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.location_section} data-aos="fade-right">
          <div
            className={styles.location_section_heading_wrap}
            data-aos="fade-down"
            data-aos-delay="500"
          >
            <h1 className={styles.location_section_heading}>Location:</h1>
          </div>

          <div
            className={styles.location_map}
            data-aos="flip-up"
            data-aos-delay="1000"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3494.9787494471634!2d-82.02835052418156!3d28.8394926755525!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e7c34f6322175d%3A0xac016ec48a32b5e9!2sPrime%20Performance%20Club!5e0!3m2!1sen!2sus!4v1746149616568!5m2!1sen!2sus"
              style={{
                width: "100%",
                height: "100%",
                border: "0",
                margin: "0",
                padding: "0",
              }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              darkmode="true"
            ></iframe>
          </div>
        </div>
        <div className={styles.socials_container} data-aos="fade-left">
          <div
            className={styles.socials_heading_wrap}
            data-aos="fade-down"
            data-aos-delay="500"
          >
            <h1 className={styles.socials_heading}>Check Out Our Socials! </h1>
          </div>
          <div
            className={styles.line}
            data-aos="fade-up"
            data-aos-delay="1000"
          ></div>
          <div className={styles.socials_wrap}>
            <ul className={styles.socials_list}>
              <li
                className={styles.socials_list_item}
                data-aos="zoom-in"
                data-aos-delay="1200"
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
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default ContactPage;
