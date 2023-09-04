import React from "react";
import Joseph from "../../Assets/Joseph.png";
import Nishadi from "../../Assets/Nishadi.png"
import s from "./AboutUs.css";

const AboutUs = () => {
  return (
    <div className="Roadmaps-section-wrapper">
      <p className="primary-subheading">About Us</p>
      <div className="Roadmaps-section-bottom">
        <div className="Team-message-section">
          <div className="Team-message">
            <h1 className="primary-heading">A Message from Our Team at Pathways.lk</h1>
            <p className="primary-text">
            Embark on an enlightening academic journey with our
            innovative website. As developers, we're thrilled to guide
              you through undergrad to postgrad explorations.
              Seamlessly navigate diverse pathways, gaining insights
                into courses, industries, and careers. Our user-friendly
                platform empowers confident, informed decisions,
                  shaping your unique educational roadmap. Let's sculpt
                  your destiny together – embrace boundless potential and
                    step into a brighter future.
            </p>
            </div>
        
      
      <div className="person-1">
        <h2>Joseph Rodrigo</h2>
          <div className="person-1-img"><img src={Joseph} alt="" /></div>
          <div className="socialmedia-person-1"></div>
          </div>
      <div className="person-2">
        <h2>Nishadi Perera</h2>
        <div className="person-2-img"><img src={Nishadi} alt="" /></div>
        <div className="socialmedia-person-2"></div>
        </div>
      </div>
      <p>About Pathways.lk</p>
    </div>
    </div>
  );
};

export default AboutUs;
