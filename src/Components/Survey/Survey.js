import React from "react";
import SurveyImg from "../../Assets/survey png.png";
import SurveyBackgroundImage1 from "../../Assets/Rectangle 26.png";
import SurveyBackgroundImage2 from "../../Assets/Vector.png";
import { BsFillPlayCircleFill } from "react-icons/bs";
import s from "./Survey.css";

const Survey = () => {
  return (
    <div className="survey-section-container">
      <div className="survey-background-image-container-2">
        <img src={SurveyBackgroundImage2} alt="" />
      </div>
      <div className="survey-background-image-container-1">
        <img src={SurveyBackgroundImage1} alt="" />
      </div>
      <div className="survey-section-image-container">
        <img src={SurveyImg} alt="" />
      </div>
      <div className="survey-section-text-container">
        <p className="primary-subheading">Survey</p>
        <h1 className="Secondary-heading">
        Free Guidance to achieve your goals
        </h1>
        <p className="primary-text-1">
        Ready to discover your career pathways? Longing to pursue a hobby professionally?
         At Pathways.lk, we guide students and professionals to unlock their passions through a trailored guidance.
          Ready to embark on a fulfilling journey?
        </p>
        <div className="survey-buttons-container">
          <button className="secondary-button">Take Our Survey</button>
          <button className="watch-video-button">
            <BsFillPlayCircleFill /> Watch Video
          </button>
        </div>
      </div>
    </div>
  );
};

export default Survey;
