import React, { useEffect, useRef } from "react";
import styles from "../Styles/CoachesPage.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";
import CoachesPageSection from "../Components/CoachesPageSection";
import Template_Video from "../assets/Template_Video.mp4";

function CoachesPage() {
  let coach1Ref = useRef(null);
  let coach2Ref = useRef(null);
  let coach3Ref = useRef(null);
  let coach4Ref = useRef(null);
  let coach5Ref = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className={styles.container}>
      <div
        className={styles.header_wrapper}
        data-aos="fade-down"
        data-aos-delay="500"
      >
        <Header />
      </div>
      <div className={styles.heading_wrap}>
        <div
          className={styles.h1_wrap}
          data-aos="fade-down"
          data-aos-delay="500"
        >
          <h1>Meet Our Coaches!</h1>
        </div>
        <div
          className={styles.line}
          data-aos="fade-up"
          data-aos-delay="1000"
        ></div>
      </div>
      <div className={styles.nav_section_container}>
        <div
          className={styles.coach_nav}
          style={{
            backgroundImage: `url("https://i0.wp.com/port2flavors.com/wp-content/uploads/2022/07/placeholder-614.png?fit=1200%2C800&ssl=1")`,
          }}
          data-aos="fade-down-right"
          data-aos-delay="1000"
          onClick={() => {
            console.log("clicked");
            coach1Ref.current.scrollIntoView({ behavior: "smooth" });
          }}
        >
          <h1>Coach</h1>
        </div>
        <div
          className={styles.coach_nav}
          style={{
            backgroundImage: `url("https://i0.wp.com/port2flavors.com/wp-content/uploads/2022/07/placeholder-614.png?fit=1200%2C800&ssl=1")`,
          }}
          data-aos="fade-down-right"
          data-aos-delay="500"
          onClick={() => {
            console.log("clicked");
            coach2Ref.current.scrollIntoView({ behavior: "smooth" });
          }}
        >
          <h1>Coach</h1>
        </div>
        <div
          className={styles.coach_nav}
          style={{
            backgroundImage: `url("https://i0.wp.com/port2flavors.com/wp-content/uploads/2022/07/placeholder-614.png?fit=1200%2C800&ssl=1")`,
          }}
          data-aos="fade-down-left"
          data-aos-delay="500"
          onClick={() => {
            console.log("clicked");
            coach3Ref.current.scrollIntoView({ behavior: "smooth" });
          }}
        >
          <h1>Coach</h1>
        </div>
        <div
          className={styles.coach_nav}
          style={{
            backgroundImage: `url("https://i0.wp.com/port2flavors.com/wp-content/uploads/2022/07/placeholder-614.png?fit=1200%2C800&ssl=1")`,
          }}
          data-aos="fade-down-left"
          data-aos-delay="1000"
          onClick={() => {
            console.log("clicked");
            coach4Ref.current.scrollIntoView({ behavior: "smooth" });
          }}
        >
          <h1>Coach</h1>
        </div>
        <div
          className={styles.coach_nav}
          style={{
            backgroundImage: `url("https://i0.wp.com/port2flavors.com/wp-content/uploads/2022/07/placeholder-614.png?fit=1200%2C800&ssl=1")`,
          }}
          data-aos="fade-up"
          data-aos-delay="1000"
          onClick={() => {
            console.log("clicked");
            coach5Ref.current.scrollIntoView({ behavior: "smooth" });
          }}
        >
          <h1>Coach</h1>
        </div>
      </div>
      <div className={styles.CoachesPageSection_wrap} ref={coach1Ref}>
        <CoachesPageSection
          video={Template_Video}
          title="Coach"
          description=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque non nisl ut felis rhoncus molestie. Nunc ut sagittis purus, a tincidunt metus. Cras consequat turpis in sagittis viverra. Nullam diam risus, dapibus et facilisis scelerisque, sodales nec justo. Cras in justo sapien. Cras id consectetur lacus. Vestibulum aliquet neque et tincidunt imperdiet. Sed posuere, urna ut facilisis finibus, lacus lectus ornare metus, semper tempus eros erat sed massa. Praesent eget ex vitae sem tincidunt placerat. "
          color="rgb(51, 51, 51)"
          side="left"
        />
      </div>
      <div className={styles.CoachesPageSection_wrap} ref={coach2Ref}>
        <CoachesPageSection
          video={Template_Video}
          title="Coach"
          description=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque non nisl ut felis rhoncus molestie. Nunc ut sagittis purus, a tincidunt metus. Cras consequat turpis in sagittis viverra. Nullam diam risus, dapibus et facilisis scelerisque, sodales nec justo. Cras in justo sapien. Cras id consectetur lacus. Vestibulum aliquet neque et tincidunt imperdiet. Sed posuere, urna ut facilisis finibus, lacus lectus ornare metus, semper tempus eros erat sed massa. Praesent eget ex vitae sem tincidunt placerat. "
          color="rgb(27, 27, 27)"
          side="right"
        />
      </div>
      <div className={styles.CoachesPageSection_wrap} ref={coach3Ref}>
        <CoachesPageSection
          video={Template_Video}
          title="Coach"
          description=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque non nisl ut felis rhoncus molestie. Nunc ut sagittis purus, a tincidunt metus. Cras consequat turpis in sagittis viverra. Nullam diam risus, dapibus et facilisis scelerisque, sodales nec justo. Cras in justo sapien. Cras id consectetur lacus. Vestibulum aliquet neque et tincidunt imperdiet. Sed posuere, urna ut facilisis finibus, lacus lectus ornare metus, semper tempus eros erat sed massa. Praesent eget ex vitae sem tincidunt placerat. "
          color="rgb(51, 51, 51)"
          side="left"
        />
      </div>
      <div className={styles.CoachesPageSection_wrap} ref={coach4Ref}>
        <CoachesPageSection
          video={Template_Video}
          title="Coach"
          description=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque non nisl ut felis rhoncus molestie. Nunc ut sagittis purus, a tincidunt metus. Cras consequat turpis in sagittis viverra. Nullam diam risus, dapibus et facilisis scelerisque, sodales nec justo. Cras in justo sapien. Cras id consectetur lacus. Vestibulum aliquet neque et tincidunt imperdiet. Sed posuere, urna ut facilisis finibus, lacus lectus ornare metus, semper tempus eros erat sed massa. Praesent eget ex vitae sem tincidunt placerat. "
          color="rgb(27, 27, 27)"
          side="right"
        />
      </div>
      <div className={styles.CoachesPageSection_wrap} ref={coach5Ref}>
        <CoachesPageSection
          video={Template_Video}
          title="Coach"
          description=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque non nisl ut felis rhoncus molestie. Nunc ut sagittis purus, a tincidunt metus. Cras consequat turpis in sagittis viverra. Nullam diam risus, dapibus et facilisis scelerisque, sodales nec justo. Cras in justo sapien. Cras id consectetur lacus. Vestibulum aliquet neque et tincidunt imperdiet. Sed posuere, urna ut facilisis finibus, lacus lectus ornare metus, semper tempus eros erat sed massa. Praesent eget ex vitae sem tincidunt placerat. "
          color="rgb(51, 51, 51)"
          side="left"
        />
      </div>
      <Footer />
    </div>
  );
}

export default CoachesPage;
