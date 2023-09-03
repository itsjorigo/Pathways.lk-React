import React from "react";
import BannerBackground from "../Assets/home-banner-background.png";
import BannerImage from "../Assets/growth 2.png";
import Navbar from "./Navbar";
import { FiArrowRight } from "react-icons/fi";

const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          {/* <img src={BannerBackground} alt="" /> */}
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading-1">
            Discover Your Way: Pathways to Your Dream Career
          </h1>
          <p className="primary-text-1">Your Highest Education Qualification</p>
          <div className="home-buttons">
            <button className="secondary-button">Foundation </button>
            <button className="secondary-button">Ordinary Level </button>
            <button className="secondary-button">Advanced Level </button>
          </div>
          <div className="home-buttons">
            <button className="secondary-button">Diploma </button>
            <button className="secondary-button">Higher Diploma </button>
            <button className="secondary-button">Bachelors Degree </button>
          </div>
          <div className="home-buttons">
            <button className="secondary-button">Masters Degree </button>
            <button className="secondary-button">Doctoral Degree </button>
          </div>
        </div>
        <div className="home-image-section">
          <img src={BannerImage} alt="" />
        </div>
      </div>
      {/* <div className="survey-section-container">
        <div className="survey-section-image-container">
        </div>
        <div className="survey-section-text-container">
          <div className="survey-heading">
            <h2>Free Guidance to achieve your goals</h2>
          </div>
          <div className="survey-text">
            <p>
              Ready to discover your career pathways? Longing to pursue a hobby
              professionally? At Pathways.lk, we guide students and professionals
              to unlock their passions through a trailored guidance. Ready to
              embark on a fulfilling journey?
            </p>
          </div>
          <div className="survey-buttons-container">
            <button className="survey-button">Take Our Survey</button>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Home;
