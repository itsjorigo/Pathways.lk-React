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
import s from "./degree.module.css";

const Degree = () => {
    return (
      <div>
        <Navbar />
        <div className={s.path_grid}>
          <p>Degree Pathways</p>
          <div className={s.grid_container}>
            <div className={s.grid_item}>
              <div className={s.inner_grid}>
                <div className={s.pic}>
                  <img src={SLIIT} alt="" />
                </div>
                <div className={s.title}>
                  <a
                    href="https://www.sliit.lk/humanities-sciences/programmes/undergraduate-degree-programs/"
                    target="_blank"
                  >
                  Undergraduate Degree Programmes </a>
                </div>
              </div>
              <div className={s.inner_grid}>
                <div className={s.pic}>
                  <img src={SLTC} alt="" />
                </div>
                <div className={s.title}>
                  <a href="https://sltc.ac.lk/" target="_blank">
                  Undergraduate Degree Programmes
                  </a>
                </div>
              </div>
            </div>
            <div className={s.grid_item}>
              <div className={s.inner_grid}>
              <div className={s.pic}>
                  <img src={NSBM} alt="" />
                </div>
                <div className={s.title}>
                  <a href="https://www.nsbm.ac.lk/degree-programmes/" target="_blank">
                  Undergraduate Degree Programmes
                  </a>
                </div>
              </div>
              <div className={s.inner_grid}><div className={s.pic}>
                <img src={IIT} alt="" />
                </div>
                <div className={s.title}>
                  <a href="https://www.iit.ac.lk/business/" target="_blank">
                  Undergraduate Degree Programmes - Business School
                  </a>
                </div>
              </div>
            </div>
            <div className={s.grid_item}>
              <div className={s.inner_grid}><div className={s.pic}>
                  <img src={IIT} alt="" />
                </div>
                <div className={s.title}>
                  <a href="https://www.iit.ac.lk/computing/" target="_blank">
                  Undergraduate Degree Programmes - School of Computing
                  </a>
                </div>
              </div>
              <div className={s.inner_grid}><div className={s.pic}>
                  <img src={CINEC} alt="" />
                </div>
                <div className={s.title}>
                  <a href="https://www.cinec.edu/course-list/undergraduate.html" target="_blank">
                  Undergraduate Degree Courses
                  </a>
                </div>
              </div>
            </div>
            <div className={s.grid_item}>
            <div className={s.inner_grid}><div className={s.pic}>
                  <img src={NIBM} alt="" />
                </div>
                <div className={s.title}>
                  <a href="https://www.nibm.lk/courses/degree/" target="_blank">
                  Undergraduate Degree Courses
                  </a>
                </div>
              </div>
              <div className={s.inner_grid}><div className={s.pic}>
                  <img src={ESOFT} alt="" />
                </div>
                <div className={s.title}>
                  <a href="https://esoft.lk/" target="_blank">
                  Undergraduate Degree Programmes
                  </a>
                </div>
              </div>
            </div>
            <div className={s.grid_item}>
            <div className={s.inner_grid}><div className={s.pic}>
                  <img src={APIIT} alt="" />
                </div>
                <div className={s.title}>
                  <a href="https://apiit.lk/undergraduate/" target="_blank">
                  Undergraduate Degree Courses
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Degree;
  

  