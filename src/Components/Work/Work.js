import React from "react";
import Engineering from "../../Assets/Eng_img.jpg";
import Business_Studies from "../../Assets/BS_img.jpg";
import Medicine from "../../Assets/Medicine.png";
import Languages from "../../Assets/Lang_img.png";
import Art from "../../Assets/Art_img.jpg";
import Architecture from "../../Assets/Architecture.png";
import Law from "../../Assets/Law_img.jpg";
import Information_Technology from "../../Assets/IT_img.jpg";

const Work = () => {
  const workInfoData = [
    {
      image: Engineering,
      title: "Engineering",
      // text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et sagittis duis elementum interdum facilisi bibendum.",
    },
    {
      image: Business_Studies,
      title: "Business Studies",
      // text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et ",
    },
    {
      image: Medicine,
      title: "Medicine",
      // text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et lorem ipsum",
    },
    {
      image: Languages,
      title: "Languages",
      // text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et lorem ipsum",
    },
    {
      image: Art,
      title: "Art",
      // text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et lorem ipsum",
    },
    {
      image: Architecture,
      title: "Architecture",
      // text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et lorem ipsum",
    },
    {
      image: Law,
      title: "Law",
      // text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et lorem ipsum",
    },
    {
      image: Information_Technology,
      title: "Information Technology",
      // text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et lorem ipsum",
    },
  ];
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Roadmaps</p>
        <h1 className="work-heading">"Empower Your Journey: Choose the Perfect Pathway for Your Dreams"</h1>
        {/* <p className="primary-text">
          Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et
          elit. Dolor turpis molestie dui magnis facilisis at fringilla quam.
        </p> */}
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
