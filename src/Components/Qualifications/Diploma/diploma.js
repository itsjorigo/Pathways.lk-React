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
import s from "./diploma.module.css";

const Diploma = () => {
    return (
      <div>
        <Navbar />
        <div className={s.path_grid}>
          <p>Diploma Pathways</p>
          <div className={s.grid_container}>
            <div className={s.grid_item}>
              <div className={s.inner_grid}>
                <div className={s.pic}>
                  <img src={SLIIT} alt="" />
                </div>
                <div className={s.title}>
                  <a
                    href="https://www.sliit.lk/humanities-sciences/programmes/diploma-courses/"
                    target="_blank"
                  >
                  Diploma Courses</a>
                </div>
              </div>
              <div className={s.inner_grid}>
                <div className={s.pic}>
                  <img src={CINEC} alt="" />
                </div>
                <div className={s.title}>
                  <a href="https://www.cinec.edu/course-list/diploma.html" target="_blank">
                  Diploma Courses
                  </a>
                </div>
              </div>
            </div>
            <div className={s.grid_item}>
              <div className={s.inner_grid}>
              <div className={s.pic}>
                  <img src={NIBM} alt="" />
                </div>
                <div className={s.title}>
                  <a href="https://www.nibm.lk/courses/diploma-programmes/" target="_blank">
                  Diploma Programmes
                  </a>
                </div>
              </div>
              <div className={s.inner_grid}><div className={s.pic}>
                <img src={ESOFT} alt="" />
                </div>
                <div className={s.title}>
                  <a href="https://esoft.lk/?s=diploma" target="_blank">
                  Diploma Programmes
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Diploma;
  

  