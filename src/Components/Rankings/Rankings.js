import React from "react";
import { useNavigate } from "react-router-dom";
import SLIIT from "../../Assets/SLIIT.png";
import SLTC from "../../Assets/SLTC.png";
import NSBM from "../../Assets/NSBM.png";
import IIT from "../../Assets/IIT.png";
import CINEC from "../../Assets/CINEC.png";
import NIBM from "../../Assets/NIBM.png";
import ESOFT from "../../Assets/ESOFT.png";
import APIIT from "../../Assets/APIIT.png";

const Rankings = () => {
  const RankingsData = [
    {
      image: SLIIT,
      link: "https://www.sliit.lk/"
    },
    {
      image: SLTC,
      link: "https://sltc.ac.lk/"
    },
    {
      image: NSBM,
      link: "https://www.nsbm.ac.lk/"
    },
    {
      image: IIT,
      link: "https://www.iit.ac.lk/"
    },
    {
      image: CINEC,
      link: "https://www.cinec.edu/"
    },
    {
      image: NIBM,
      link: "https://www.nibm.lk/"
    },
    {
      image: ESOFT,
      link: "https://esoft.lk/"
    },
    {
      image: APIIT,
      link: "https://apiit.lk/"
    },
  ];

  const navigate = useNavigate();

  return (
    <div id="rankings_section" className="Roadmaps-section-wrapper">
      <div className="Roadmaps-section-top">
        <p className="primary-subheading">Rankings</p>
        <h1 className="Secondary-heading">"Discover the Top-Tiered Universities of Sri Lanka's Ranking System"</h1>
        {/* <p className="primary-text">
          Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et
          elit. Dolor turpis molestie dui magnis facilisis at fringilla quam.
        </p> */}
      </div>
      <div className="Roadmaps-section-bottom">
        {RankingsData.map((data) => (
          <div className="Roadmaps-section-info" key={data.title}>
            <a href={data.link} target="_blank">
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            </a>
            {/* <h2>{data.title}</h2>
            <p>{data.text}</p> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Rankings;
