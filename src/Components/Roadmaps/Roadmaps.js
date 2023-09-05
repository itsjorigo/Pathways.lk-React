import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Engineering from "../../Assets/Eng_img.jpg";
import Business_Studies from "../../Assets/BS_img.jpg";
import Medicine from "../../Assets/Medicine.png";
import Languages from "../../Assets/Lang_img.png";
import Art from "../../Assets/Art_img.jpg";
import Architecture from "../../Assets/Architecture.png";
import Law from "../../Assets/Law_img.jpg";
import Information_Technology from "../../Assets/IT_img.jpg";

const Roadmaps = () => {
  const RoadmapsData = [
    {
      image: Engineering,
      title: "Engineering",
      link: "/Engineering"
    },
    {
      image: Business_Studies,
      title: "Business Studies",
      link: "/BusinessStudies"
    },
    {
      image: Medicine,
      title: "Medicine",
      link: "/Medicine"
    },
    {
      image: Languages,
      title: "Languages",
      link: "/Languages"
    },
    {
      image: Art,
      title: "Art",
      link: "/Art"
    },
    {
      image: Architecture,
      title: "Architecture",
      link: "/Architecture"
    },
    {
      image: Law,
      title: "Law",
      link: "/Law"
    },
    {
      image: Information_Technology,
      title: "Information Technology",
      link: "/InformationTechnology"
    },
  ];

  const navigate = useNavigate();

  return (
    <div className="Roadmaps-section-wrapper">
      <div className="Roadmaps-section-top">
        <p className="primary-subheading">Roadmaps</p>
        <h1 className="Secondary-heading">"Empower Your Journey: Choose the Perfect Pathway for Your Dreams"</h1>
        {/* <p className="primary-text">
          Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et
          elit. Dolor turpis molestie dui magnis facilisis at fringilla quam.
        </p> */}
      </div>
      <div   className="Roadmaps-section-bottom">
        {RoadmapsData.map((data) => (
          <div className="Roadmaps-section-info" onClick={() =>navigate(data.link)}  key={data.title}>
            {/* <Link to={data.link}> */}
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            {/* </Link> */}
            <h2>{data.title}</h2>
            {/* <p>{data.text}</p> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Roadmaps;
