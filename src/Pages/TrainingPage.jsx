import React, { useEffect, useRef } from "react";
import styles from "../Styles/TrainingPage.module.css";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import TrainingPageSection from "../Components/TrainingPageSection";
import AOS from "aos";
import "aos/dist/aos.css";
import ClassImage1 from "../assets/PPT-Class1.jpg?url";
import ClassImage2 from "../assets/Prime_Media/SportsPhoto.jpeg?url";
import PersonalTrainingImage from "../assets/PPT-PT2.png?url";
import FacilityPhoto from "../assets/Base_Facility_Photo.PNG?url";

function TrainingPage() {
  let personalTrainingRef = useRef(null);
  let classesRef = useRef(null);
  let facilityRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Prime Performance | Training";
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className={styles.container}>
      <nav>
        <div className={styles.header_wrapper}>
          <Header />
        </div>
      </nav>

      <header>
        <div className={styles.intro_section_wrapper}>
          <div className={styles.intro_section_heading} data-aos="fade-down">
            <h1 className={styles.intro_section_heading_text}>Training</h1>
            <div
              className={styles.line}
              data-aos="fade-up"
              data-aos-delay="500"
            ></div>
          </div>

          <div className={styles.intro_section_content}>
            <div
              className={styles.intro_section_nav}
              style={{
                backgroundImage: `url(${PersonalTrainingImage})`,
              }}
              data-aos="fade-right"
              data-aos-delay="500"
              onClick={() => {
                console.log("clicked");
                personalTrainingRef.current.scrollIntoView({
                  behavior: "smooth",
                });
              }}
            >
              <h2 className={styles.intro_section_nav_text}>
                Personal Training
              </h2>
            </div>

            <div
              className={styles.intro_section_nav}
              style={{
                backgroundImage: `url(${ClassImage1})`,
              }}
              data-aos="zoom-in"
              data-aos-delay="1000"
              onClick={() => {
                console.log("clicked");
                classesRef.current.scrollIntoView({
                  behavior: "smooth",
                });
              }}
            >
              <h2 className={styles.intro_section_nav_text}>Classes</h2>
            </div>

            <div
              className={styles.intro_section_nav}
              style={{
                backgroundImage: `url(${FacilityPhoto})`,
              }}
              data-aos="fade-left"
              data-aos-delay="500"
              onClick={() => {
                console.log("clicked");
                facilityRef.current.scrollIntoView({
                  behavior: "smooth",
                });
              }}
            >
              <h2 className={styles.intro_section_nav_text}>Facility</h2>
            </div>
          </div>
        </div>
      </header>

      <main>
        <div
          className={styles.TrainingPageSection_wrap}
          ref={personalTrainingRef}
        >
          <TrainingPageSection
            title="Personal Training"
            description="At Prime Performance Training, private personal training is more than just a workout—it's a tailored experience designed to help you reach your goals with expert guidance and unwavering support. With a focus on personalized attention, every session is built around your needs, pushing you to perform at your best in a motivating and professional environment. Whether you're a beginner or an experienced athlete, our coaches have the expertise and dedication to help you achieve your goals!
"
            color="rgb(54, 54, 54)"
            side="right"
            image={PersonalTrainingImage}
            button_desc="Schedule a Personal Training Session!"
            button_link="https://www.mindbodyonline.com/explore/locations/prime-performance-training"
          />
        </div>

        <div className={styles.TrainingPageSection_wrap} ref={classesRef}>
          <TrainingPageSection
            title="Classes"
            description="The classes at Prime Performance Training offer an energetic, results-driven environment where community and challenge go hand in hand. Led by skilled coaches, each class is designed to maximize your performance, build strength, and improve overall fitness. Surrounded by a supportive group and expert guidance, you'll stay motivated, inspired, and consistently progressing toward your goals."
            color="rgb(27, 27, 27)"
            side="left"
            image={ClassImage2}
            button_desc="Join a Class!"
            button_link="https://www.mindbodyonline.com/explore/locations/prime-performance-training"
          />
        </div>

        <div className={styles.TrainingPageSection_wrap} ref={facilityRef}>
          <TrainingPageSection
            title="Facility"
            description="The private facility at Prime Performance Training is designed for focus, comfort, and high-level performance. Equipped with top-tier equipment, ranging from squat racks and free weights, to hurdles and an open turf area, it offers the ideal space to train without the distractions of a crowded gym. This exclusive environment allows you to fully concentrate on your goals with the support and privacy you need to succeed."
            color="rgb(54, 54, 54)"
            side="right"
            image={FacilityPhoto}
            button_desc="Learn more about our facility!"
            button_link="https://www.instagram.com/primeperformanceclub/reel/C5HHccDurA_/"
          />
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default TrainingPage;
