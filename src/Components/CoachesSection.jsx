import React, { useEffect } from "react";
import styles from "../Styles/Coaches.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Coach from "./Coach";
import { Link } from "react-router-dom";

function CoachesSection() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.heading_wrap} data-aos="zoom-in">
        <Link to="/Prime-Fitness/coaches" className={styles.heading_link}>
          <h1 className={styles.heading}>Meet Our Coaches →</h1>
        </Link>
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
            image="https://i0.wp.com/port2flavors.com/wp-content/uploads/2022/07/placeholder-614.png?fit=1200%2C800&ssl=1"
            name="Coach"
            description="Description"
          />
        </div>

        <div
          className={styles.Coach_wrap}
          data-aos="flip-left"
          data-aos-delay="500"
        >
          <Coach
            image="https://i0.wp.com/port2flavors.com/wp-content/uploads/2022/07/placeholder-614.png?fit=1200%2C800&ssl=1"
            name="Coach"
            description="Description"
          />
        </div>

        <div
          className={styles.Coach_wrap}
          data-aos="flip-right"
          data-aos-delay="500"
        >
          <Coach
            image="https://i0.wp.com/port2flavors.com/wp-content/uploads/2022/07/placeholder-614.png?fit=1200%2C800&ssl=1"
            name="Coach"
            description="Description"
          />
        </div>

        <div
          className={styles.Coach_wrap}
          data-aos="flip-right"
          data-aos-delay="1000"
        >
          <Coach
            image="https://i0.wp.com/port2flavors.com/wp-content/uploads/2022/07/placeholder-614.png?fit=1200%2C800&ssl=1"
            name="Coach"
            description="Description"
          />
        </div>
      </div>
    </div>
  );
}

export default CoachesSection;
