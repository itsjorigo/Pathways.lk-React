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
import s from "./higher_diploma.module.css";

const Higher_Diploma = () => {
    return (
      <div>
        <Navbar />
        <div className={s.path_grid}>
          <p>Higher Diploma Pathways</p>
          <div className={s.grid_container}>
            <div className={s.grid_item}>
              <div className={s.inner_grid}>
                <div className={s.pic}>
                  <img src={SLIIT} alt="" />
                </div>
                <div className={s.title}>
                  <a
                    href="https://www.sliit.lk/?s=HIGHER+DIPLOMA"
                    target="_blank"
                  >
                  Higher Diploma Programmes</a>
                </div>
              </div>
              <div className={s.inner_grid}>
                <div className={s.pic}>
                  <img src={CINEC} alt="" />
                </div>
                <div className={s.title}>
                  <a href="https://www.cinec.edu/course-list/diploma.html" target="_blank">
                  Higher Diploma Programmes
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
                  <a href="https://www.nibm.lk/courses/higher-national-diploma/" target="_blank">
                  Higher National Diploma Programmes
                  </a>
                </div>
              </div>
              <div className={s.inner_grid}><div className={s.pic}>
                <img src={ESOFT} alt="" />
                </div>
                <div className={s.title}>
                  <a href="https://esoft.lk/?s=HIGHER+diploma" target="_blank">
                  Higher National Diploma Programmes
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Higher_Diploma;
  

  