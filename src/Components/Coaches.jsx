import React, { useEffect } from "react";
import styles from "../Styles/Coaches.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Coach from "../Components/Coach";
import GarretImage from "../assets/Garret.png";
import MitchellImage from "../assets/Mitchell.png";
import NickImage from "../assets/Nick.png";
import KayleighImage from "../assets/Kayleigh.png";

function Coaches() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.heading_wrap} data-aos="zoom-in">
        <h1 className={styles.heading}>Meet Our Coaches</h1>
        <div
          className={styles.line}
          data-aos="zoom-out"
          data-aos-delay="500"
        ></div>
      </div>
      <div className={styles.main_section_wrap}>
        <div
          className={styles.Coach_wrap}
          data-aos="flip-left"
          data-aos-delay="1000"
        >
          <Coach
            image={GarretImage}
            name="Garret Cumbie"
            description="Co-Owner"
          />
        </div>

        <div
          className={styles.Coach_wrap}
          data-aos="flip-left"
          data-aos-delay="500"
        >
          <Coach
            image={MitchellImage}
            name="Mitchell Jules"
            description="Co-Owner"
          />
        </div>

        <div
          className={styles.Coach_wrap}
          data-aos="flip-right"
          data-aos-delay="500"
        >
          <Coach
            image={NickImage}
            name="Nick La Pierre"
            description="NASM-CPT"
          />
        </div>

        <div
          className={styles.Coach_wrap}
          data-aos="flip-right"
          data-aos-delay="1000"
        >
          <Coach
            image={KayleighImage}
            name="Kayleigh Ducharme"
            description="NASM-CPT"
          />
        </div>
      </div>
    </div>
  );
}

export default Coaches;
