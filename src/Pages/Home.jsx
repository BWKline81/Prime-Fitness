import React, { useEffect, useState, useRef, createContext } from "react";
import styles from "../Styles/Home.module.css";
import Header from "../Components/Header";
import LargeImageHeader from "../Components/LargeImageHeader";
import AboutUsSection from "../Components/AboutUsSection";
import CoachesSection from "../Components/CoachesSection";
import ContactSection from "../Components/ContactSection";
import Footer from "../Components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";

export let HomeContext = createContext();
export let AboutContext = createContext();
export let CoachesContext = createContext();
export let ContactContext = createContext();

function Home() {
  const [loaded, setLoaded] = useState(false);

  let homeRef = useRef(null);
  let aboutRef = useRef(null);
  let coachesRef = useRef(null);
  let contactRef = useRef(null);

  const homeRefContext = { homeRef };
  const aboutRefContext = { aboutRef };
  const coachesRefContext = { coachesRef };
  const contactRefContext = { contactRef };

  useEffect(() => {
    document.title = "Prime Performance | Home";
    setLoaded(true);
    AOS.init({ duration: 1000 });

    return () => {
      setLoaded(false);
    };
  }, []);

  if (!loaded) {
    return (
      <div className="loader-container">
        <div className="loader"></div>
      </div>
    );
  }

  return (
    <ContactContext.Provider value={contactRefContext}>
      <CoachesContext.Provider value={coachesRefContext}>
        <AboutContext.Provider value={aboutRefContext}>
          <HomeContext.Provider value={homeRefContext}>
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
              <header>
                <div
                  className={styles.large_image_wrapper}
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  ref={homeRef}
                >
                  <LargeImageHeader />
                </div>
              </header>
              <main>
                <div className={styles.about_wrapper} ref={aboutRef}>
                  <AboutUsSection />
                </div>
                <div className={styles.coaches_wraper} ref={coachesRef}>
                  <CoachesSection />
                </div>
                <div className={styles.contact_wrapper} ref={contactRef}>
                  <ContactSection />
                </div>
              </main>
              <div className={styles.buffer}></div>
              <footer>
                <Footer />
              </footer>
            </div>
          </HomeContext.Provider>
        </AboutContext.Provider>
      </CoachesContext.Provider>
    </ContactContext.Provider>
  );
}

export default Home;
