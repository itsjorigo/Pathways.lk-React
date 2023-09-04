import React from "react";
import ProfilePic from "../../Assets/john-doe-image.png";
import { AiFillStar } from "react-icons/ai";
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
        
      
      <div className="testimonial-section-bottom">
      <h2>Joseph Rodrigo</h2>
        <img src={ProfilePic} alt="" />
        <div className="testimonials-stars-container">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>
        <h2>Nishadi Perera</h2>
        <img src={ProfilePic} alt="" />
        {/* <p>
          Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et
          elit. Dolor turpis molestie dui magnis facilisis at fringilla quam.
        </p> */}
        <div className="testimonials-stars-container">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>
        {/* <h2>John Doe</h2> */}
      </div>
      </div>
    </div>
    </div>
  );
};

export default AboutUs;
