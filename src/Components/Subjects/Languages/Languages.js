import React from "react";
import Navbar from "../../Navbar/Navbar";
import SLIIT from "../../../Assets/SLIIT.png";
import SLTC from "../../../Assets/SLTC.png";
import NSBM from "../../../Assets/NSBM.png";
import IIT from "../../../Assets/IIT.png";
import CINEC from "../../../Assets/CINEC.png";
import NIBM from "../../../Assets/NIBM.png";
import APIIT from "../../../Assets/APIIT.png";
import ESOFT from "../../../Assets/ESOFT.png";
import s from "./Languages.module.css";

const Languages = () => {
  return (
    <div>
      <Navbar />

      <div className={s.path_grid}>
        <p>Languages</p>
        <div className={s.grid_container}>
          <div className={s.grid_item}>
            <div className={s.inner_grid}>
              <div className={s.pic}>
                <img src={SLIIT} alt="" />
              </div>
              <div className={s.title}>
                <a
                  href="https://www.sliit.lk/humanities-sciences/programmes/undergraduate-degree-programs/b-ed-hons-in-english-degree/" target="_blank">
                  B.Ed (Hons) in English
                </a>
              </div>
            </div>
            <div className={s.inner_grid}>
              <div className={s.pic}>
                <img src={NSBM} alt="" />
              </div>
              <div className={s.title}>
                <a href="https://www.nsbm.ac.lk/course/ba-in-business-communication/" target="_blank">
                BA in Business Communication - UGC Approved - Offered by NSBM
                </a>
              </div>
            </div>
          </div>
          <div className={s.grid_item}>
            <div className={s.inner_grid}>
            <div className={s.pic}>
                <img src={CINEC} alt="" />
              </div>
              <div className={s.title}>
                <a href="https://www.cinec.edu/courses/bachelor-of-education-in-english-hons-2.html" target="_blank">
                B.Ed. in English (Hons)
                </a>
              </div>
            </div>
          </div>
          </div>
          </div>
          </div>
  );
};

export default Languages;
