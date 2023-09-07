import React from "react";
import SurveyImg from "../../Assets/survey png.png";
import SurveyBackgroundImage1 from "../../Assets/home_wave_vector.png";
import s from "../Survey/survey.module.css";

const Survey = () => {
  return (
    <div className={s.survey_section_container}>
      <div className={s.survey_background_image_container_1}>
        <img src={SurveyBackgroundImage1} alt="" />
      </div>
      <div className={s.survey_img_text_container}>
        <div className={s.survey_section_image_container}>
          <img src={SurveyImg} alt="" />
        </div>
        <div className={s.survey_section_text_container}>
          <p className={s.primary_subheading}>Survey</p>
          <h1 className={s.secondary_heading}>
          Free Guidance to achieve your goals
          </h1>
          <p className={s.primary_text_1}>
          Ready to discover your career pathways? Longing to pursue a hobby professionally?
           At Pathways.lk, we guide students and professionals to unlock their passions through a trailored guidance.
            Ready to embark on a fulfilling journey?
          </p>
          <div className={s.survey_buttons_container}>
            <button className={s.secondary_button}>
            <a href="https://forms.gle/bS9SiFkV1WZJmZYz6" target="_blank">Take Our Survey</a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Survey;
