import React from "react";
import Joseph from "../../Assets/Joseph.png";
import Nishadi from "../../Assets/Nishadi.png";
import facebook from "../../Assets/facebook.png";
import instagram from "../../Assets/instagram.png";
import linkedin from "../../Assets/linkedin.png";
import github from "../../Assets/github.png";
import s from "./about.module.css";

const AboutUs = () => {
  return (
    <div id="about_us_section" className={s.Team_message_section}>
      <div className={s.Team_primary_subheading}>
        <p>About Us</p>
      </div>
      <div className={s.Team_section_bottom}>
        <div className={s.Team_message}>
          <h1 className="primary-heading">
            A Message from Our Team at Pathways.lk
          </h1>
          <p className="primary-text">
            Embark on an enlightening academic journey with our innovative
            website. As developers, we're thrilled to guide you through
            undergrad to postgrad explorations. Seamlessly navigate diverse
            pathways, gaining insights into courses, industries, and careers.
            Our user-friendly platform empowers confident, informed decisions,
            shaping your unique educational roadmap. Let's sculpt your destiny
            together – embrace boundless potential and step into a brighter
            future.
          </p>
        </div>
        <div className={s.Team_person_card_container}>
          <div className={s.person}>
            <h2>Joseph Rodrigo</h2>
            {/* <div className={s.person_1_img}>
              <img src={Joseph} alt="" />
            </div> */}
            <div className={s.socialmedia_person_1}>
            <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className={s.facebook}>
                  <img src={facebook} alt="" />
                </button>
              </a>

              <a
                href="https://github.com/itsjorigo"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className={s.github}>
                  <img src={github} alt="" />
                </button>
              </a>

              <a
                href="https://www.linkedin.com/in/joseph-rodrigo-381864214/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className={s.linkedin}>
                  <img src={linkedin} alt="" />
                </button>
              </a>

              <a
                href="https://www.instagram.com/itsjorigo/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className={s.instagram}>
                  <img src={instagram} alt="" />
                </button>
              </a>
            </div>
          </div>
          <div className={s.person}>
            <h2>Nishadi Perera</h2>
            {/* <div className={s.person_2_img}>
              <img src={Nishadi} alt="" />
            </div> */}
            <div className={s.socialmedia_person_2}>
              {/* <button className={s.facebook}><img src={facebook} alt=""/></button> */}
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className={s.facebook}>
                  <img src={facebook} alt="" />
                </button>
              </a>

              <a
                href="https://github.com/nishadi220"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className={s.github}>
                  <img src={github} alt="" />
                </button>
              </a>

              <a
                href="https://www.linkedin.com/in/nishadi-perera-b3b732252/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className={s.linkedin}>
                  <img src={linkedin} alt="" />
                </button>
              </a>

              <a
                href="https://www.instagram.com/_nishadii._/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className={s.instagram}>
                  <img src={instagram} alt="" />
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
