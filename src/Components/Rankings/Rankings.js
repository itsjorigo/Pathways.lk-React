import React from "react";
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
    },
    {
      image: SLTC,
    },
    {
      image: NSBM,
    },
    {
      image: IIT,
    },
    {
      image: CINEC,
    },
    {
      image: NIBM,
    },
    {
      image: ESOFT,
    },
    {
      image: APIIT,
    },
  ];
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
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            {/* <h2>{data.title}</h2>
            <p>{data.text}</p> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Rankings;
