import React, { useEffect, useRef, useState } from "react";
import styles from "../Styles/CoachesPage.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";
import CoachesPageSection from "../Components/CoachesPageSection";
import Template_Video from "../assets/Template_Video.mp4";
import GarretPhoto from "../assets/Prime_Media/Garrett.png?url";
import MitchellPhoto from "../assets/Prime_Media/Mitchell.png?url";
import NickPhoto from "../assets/Prime_Media/Nick.png?url";
import BobbyPhoto from "../assets/Prime_Media/Bobby.png?url";
import Template_Photo from "../assets/Template Image.png?url"; // Placeholder image
import NickVideo from "../assets/Nick Intro Prime.mp4";
import BobbyVideo from "../assets/Prime Bobby Intro.mp4";

function CoachesPage() {
  let coach1Ref = useRef(null);
  let coach2Ref = useRef(null);
  let coach3Ref = useRef(null);
  let coach4Ref = useRef(null);
  let coach5Ref = useRef(null);
  let coach6Ref = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Prime Performance | Coaches";
    AOS.init({ duration: 1000 });
  }, []);

  let [coachesList, setCoachesList] = useState([
    {
      id: 1,
      ref: coach1Ref,
      name: "Garret Cumbie",
      photo: GarretPhoto,
      video: Template_Photo,
      description:
        "Coach Garrett is a Co-Founder of Prime Performance. He grew up in Wildwood, Florida and attended Wildwood High School. Coach Garrett has a passion for helping others and helped start Prime Performance to bring a unique, private training facility to the area and train people from all across the world. He specializes in Sports Performance, Functional Training, Weight Loss, and Recovery!",
      color: "rgb(51, 51, 51)",
      side: "left",
      fade: "fade-down-right",
    },
    {
      id: 2,
      ref: coach2Ref,
      name: "Mitchell Jules",
      photo: MitchellPhoto,
      video: Template_Photo,
      description: " Description Coming Soon ",
      color: "rgb(27, 27, 27)",
      side: "right",
      fade: "fade-down-right",
    },
    /*
    {
      id: 3,
      ref: coach3Ref,
      name: "Nick La Pierre",
      photo: NickPhoto,
      video: NickVideo,
      description: " Description Coming Soon ",
      color: "rgb(51, 51, 51)",
      side: "left",
      fade: "fade-down-left",
    },
    {
      id: 4,
      ref: coach4Ref,
      name: "Joey Foucha",
      photo: Template_Photo, // Placeholder image
      video: Template_Photo,
      description: " Description Coming Soon ",
      color: "rgb(27, 27, 27)",
      side: "right",
      fade: "fade-down-left",
    },
    {
      id: 5,
      ref: coach5Ref,
      name: "Bobby Harris",
      photo: BobbyPhoto,
      video: BobbyVideo,
      description:
        " Bobby Harris is a Villager living in Spanisih Springs and a coach of The Villages Charter High School Boys Tennis Team. He is also a Blackheart Dragon Boat team member and a 2011 Boston Marathon finisher. Bobby is NASM certified and is also an ISSA health coach, nutritionist, and senior fitness specialist. He specializes in functional movement, sports training, prehab and rehab for joint surgery, and training with clients with Parkinson's and stroke recovery, and is available for at home or on the court training!",
      color: "rgb(51, 51, 51)",
      side: "left",
      fade: "fade-up-right",
    },
    {
      id: 6,
      ref: coach6Ref,
      name: "Melissa Hersh",
      photo: Template_Photo, // Placeholder image
      video: Template_Photo,
      description: " Description Coming Soon ",
      color: "rgb(27, 27, 27)",
      side: "right",
      fade: "fade-up-left",
    },
    */
  ]);

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
      <header>
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
          {coachesList.map((coach, index) => (
            <div
              className={styles.coach_nav}
              key={coach.id}
              style={{ backgroundImage: `url(${coach.photo})` }}
              data-aos={coach.fade}
              data-aos-delay={750 + index * 100}
              onClick={() => {
                coach.ref.current.scrollIntoView({ behavior: "smooth" });
              }}
              role="img"
              aria-label={`Image of ${coach.name}`}
            >
              <h1>{coach.name}</h1>
            </div>
          ))}
        </div>
      </header>
      <main>
        {coachesList.map((coach, index) => (
          <div
            className={styles.CoachesPageSection_wrap}
            ref={coach.ref}
            key={coach.id}
          >
            <CoachesPageSection
              video={coach.video}
              name={coach.name}
              description={coach.description}
              color={coach.color}
              side={coach.side}
            />
          </div>
        ))}
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default CoachesPage;
