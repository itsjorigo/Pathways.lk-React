import React from "react";
import { useNavigate } from "react-router-dom";
import BannerBackground from "../../Assets/TopVector.png";
import BannerImage from "../../Assets/growth 2.png";
import Navbar from "../Navbar/Navbar";
import { FiArrowRight } from "react-icons/fi";

const Home = () => {
  const QualificationData = [
    { link: "/Foundation" },
    { link: "/Olevel" },
    { link: "/Alevel" },
    { link: "/Diploma" },
    { link: "/Higher_Diploma" },
    { link: "/Degree" },
    { link: "/Master_Degree" },
    { link: "/Doctral_Degree" },
  ];

  const navigate = useNavigate();

  return (
    <div id="home_section" className="home-container">
      {/* <Navbar /> */}
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading-1">
            Discover Your Way: Pathways to Your Dream Career
          </h1>
          <p className="primary-text-1">Your Highest Education Qualification</p>
          <div className="home-buttons">
            <button className="secondary-button" onClick={() =>navigate("/Foundation")}>Foundation</button>
            <button className="secondary-button" onClick={() =>navigate("/Olevel")}>Ordinary Level </button>
            <button className="secondary-button" onClick={() =>navigate("/Alevel")}>Advanced Level </button>
          </div>
          <div className="home-buttons">
            <button className="secondary-button" onClick={() =>navigate("/Diploma")}>Diploma </button>
            <button className="secondary-button" onClick={() =>navigate("/Higher_Diploma")}>Higher Diploma </button>
            <button className="secondary-button" onClick={() =>navigate("/Degree")}>Bachelors Degree </button>
          </div>
          <div className="home-buttons">
            <button className="secondary-button" onClick={() =>navigate("/master_degree")}>Masters Degree </button>
            <button className="secondary-button" onClick={() =>navigate("/doctral_degree")}>Doctoral Degree </button>
          </div>
        </div>
        <div className="home-image-section">
          <img src={BannerImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
