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
import s from "./foundation.module.css";

const Foundation = () => {
    return (
      <div>
        <Navbar />
        <div className={s.path_grid}>
          <p>Foundation Pathways</p>
          <div className={s.grid_container}>
            <div className={s.grid_item}>
              <div className={s.inner_grid}>
                <div className={s.pic}>
                  <img src={SLIIT} alt="" />
                </div>
                <div className={s.title}>
                  <a
                    href="https://sliitacademy.lk/academic-programs/foundation-certificate-in-information-technology/"
                    target="_blank"
                  >
                  Curtin university - SLIIT Academy Foundation Certificate in Information Technology</a>
                </div>
              </div>
              <div className={s.inner_grid}>
                <div className={s.pic}>
                  <img src={NSBM} alt="" />
                </div>
                <div className={s.title}>
                  <a href="https://www.nsbm.ac.lk/course/foundation-programme-for-bachelors-degree/" target="_blank">
                  Foundation Programme for Bachelor’s Degree
                  </a>
                </div>
              </div>
            </div>
            <div className={s.grid_item}>
              <div className={s.inner_grid}>
              <div className={s.pic}>
                  <img src={IIT} alt="" />
                </div>
                <div className={s.title}>
                  <a href="https://www.iit.ac.lk/foundation/" target="_blank">
                  Foundation Certificate in Higher Education
                  </a>
                </div>
              </div>
              <div className={s.inner_grid}><div className={s.pic}>
                <img src={CINEC} alt="" />
                </div>
                <div className={s.title}>
                  <a href="https://www.cinec.edu/courses/foundation-course-navigation.html" target="_blank">
                  Foundation Course
                  </a>
                </div>
              </div>
            </div>
            <div className={s.grid_item}>
              <div className={s.inner_grid}><div className={s.pic}>
                  <img src={NIBM} alt="" />
                </div>
                <div className={s.title}>
                  <a href="https://www.nibm.lk/courses/foundation-programmes/" target="_blank">
                  Foundation Programme
                  </a>
                </div>
              </div>
              <div className={s.inner_grid}><div className={s.pic}>
                  <img src={ESOFT} alt="" />
                </div>
                <div className={s.title}>
                  <a href="https://esoft.lk/?s=FOUNDATION" target="_blank">
                  Foundation Programme
                  </a>
                </div>
              </div>
            </div>
            <div className={s.grid_item}>
              <div className={s.inner_grid}><div className={s.pic}>
                  <img src={APIIT} alt="" />
                </div>
                <div className={s.title}>
                  <a href="https://apiit.lk/foundation/" target="_blank">
                  Foundation Programmes
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Foundation;
  

  