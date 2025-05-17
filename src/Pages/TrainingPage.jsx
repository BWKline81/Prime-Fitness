import React, { useEffect, useRef } from "react";
import styles from "../Styles/TrainingPage.module.css";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import TrainingPageSection from "../Components/TrainingPageSection";
import AOS from "aos";
import "aos/dist/aos.css";

function TrainingPage() {
  let personalTrainingRef = useRef(null);
  let classesRef = useRef(null);
  let facilityRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.header_wrapper}>
        <Header />
      </div>

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
              backgroundImage:
                'url("https://i0.wp.com/port2flavors.com/wp-content/uploads/2022/07/placeholder-614.png?fit=1200%2C800&ssl=1")',
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
            <h2 className={styles.intro_section_nav_text}>Personal Training</h2>
          </div>

          <div
            className={styles.intro_section_nav}
            style={{
              backgroundImage:
                'url("https://i0.wp.com/port2flavors.com/wp-content/uploads/2022/07/placeholder-614.png?fit=1200%2C800&ssl=1")',
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
              backgroundImage:
                'url("https://i0.wp.com/port2flavors.com/wp-content/uploads/2022/07/placeholder-614.png?fit=1200%2C800&ssl=1")',
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

      <div
        className={styles.TrainingPageSection_wrap}
        ref={personalTrainingRef}
      >
        <TrainingPageSection
          title="Personal Training"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque non nisl ut felis rhoncus molestie. Nunc ut sagittis purus, a tincidunt metus. Cras consequat turpis in sagittis viverra. Nullam diam risus, dapibus et facilisis scelerisque, sodales nec justo. Cras in justo sapien. Cras id consectetur lacus. Vestibulum aliquet neque et tincidunt imperdiet. Sed posuere, urna ut facilisis finibus, lacus lectus ornare metus, semper tempus eros erat sed massa. Praesent eget ex vitae sem tincidunt placerat."
          color="rgb(54, 54, 54)"
          side="right"
          image="https://i0.wp.com/port2flavors.com/wp-content/uploads/2022/07/placeholder-614.png?fit=1200%2C800&ssl=1"
          button_desc="Schedule a Personal Training Session!"
          button_link="https://www.mindbodyonline.com/explore/locations/prime-performance-training"
        />
      </div>

      <div className={styles.TrainingPageSection_wrap} ref={classesRef}>
        <TrainingPageSection
          title="Classes"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque non nisl ut felis rhoncus molestie. Nunc ut sagittis purus, a tincidunt metus. Cras consequat turpis in sagittis viverra. Nullam diam risus, dapibus et facilisis scelerisque, sodales nec justo. Cras in justo sapien. Cras id consectetur lacus. Vestibulum aliquet neque et tincidunt imperdiet. Sed posuere, urna ut facilisis finibus, lacus lectus ornare metus, semper tempus eros erat sed massa. Praesent eget ex vitae sem tincidunt placerat."
          color="rgb(27, 27, 27)"
          side="left"
          image="https://i0.wp.com/port2flavors.com/wp-content/uploads/2022/07/placeholder-614.png?fit=1200%2C800&ssl=1"
          button_desc="Join a Class!"
          button_link="https://www.mindbodyonline.com/explore/locations/prime-performance-training"
        />
      </div>

      <div className={styles.TrainingPageSection_wrap} ref={facilityRef}>
        <TrainingPageSection
          title="Facility"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque non nisl ut felis rhoncus molestie. Nunc ut sagittis purus, a tincidunt metus. Cras consequat turpis in sagittis viverra. Nullam diam risus, dapibus et facilisis scelerisque, sodales nec justo. Cras in justo sapien. Cras id consectetur lacus. Vestibulum aliquet neque et tincidunt imperdiet. Sed posuere, urna ut facilisis finibus, lacus lectus ornare metus, semper tempus eros erat sed massa. Praesent eget ex vitae sem tincidunt placerat."
          color="rgb(54, 54, 54)"
          side="right"
          image="https://i0.wp.com/port2flavors.com/wp-content/uploads/2022/07/placeholder-614.png?fit=1200%2C800&ssl=1"
          button_desc="Learn more about our facility!"
          button_link="https://www.instagram.com/primeperformanceclub/reel/C5HHccDurA_/"
        />
      </div>
      <Footer />
    </div>
  );
}

export default TrainingPage;
