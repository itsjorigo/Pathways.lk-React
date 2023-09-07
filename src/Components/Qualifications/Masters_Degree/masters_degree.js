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
import s from "./masters_degree.module.css";

const Master_Degree = () => {
    return (
      <div>
        <Navbar />
        <div className={s.path_grid}>
          <p>Masters Degree Pathways</p>
          <div className={s.grid_container}>
            <div className={s.grid_item}>
              <div className={s.inner_grid}>
                <div className={s.pic}>
                  <img src={SLIIT} alt="" />
                </div>
                <div className={s.title}>
                  <a
                    href="https://www.sliit.lk/graduate-studies-research/programms/mba-programmes/master-of-business-administration/"
                    target="_blank"
                  >
                  Masters Degree Programmes</a>
                </div>
              </div>
              <div className={s.inner_grid}>
                <div className={s.pic}>
                  <img src={NSBM} alt="" />
                </div>
                <div className={s.title}>
                  <a href="https://www.nsbm.ac.lk/faculty-of-postgraduate-professional-advancement/" target="_blank">
                  Masters Degree Programmes
                  </a>
                </div>
              </div>
            </div>
            <div className={s.grid_item}>
            <div className={s.inner_grid}><div className={s.pic}>
                <img src={IIT} alt="" />
                </div>
                <div className={s.title}>
                  <a href="https://www.iit.ac.lk/business/" target="_blank">
                  Postgraduate Degree Programmes - Business School
                  </a>
                </div>
              </div>
              <div className={s.inner_grid}><div className={s.pic}>
                  <img src={IIT} alt="" />
                </div>
                <div className={s.title}>
                  <a href="https://www.iit.ac.lk/computing/" target="_blank">
                  Postgraduate Degree Programmes - School of Computing
                  </a>
                </div>
              </div>
            </div>
            <div className={s.grid_item}>
              <div className={s.inner_grid}><div className={s.pic}>
                  <img src={CINEC} alt="" />
                </div>
                <div className={s.title}>
                  <a href="https://www.cinec.edu/course-list/postgraduate.html" target="_blank">
                  Postgraduate Degree Programmes
                  </a>
                </div>
              </div>
              <div className={s.inner_grid}><div className={s.pic}>
                  <img src={NIBM} alt="" />
                </div>
                <div className={s.title}>
                  <a href="https://www.nibm.lk/courses/mba/" target="_blank">
                  Postgraduate Degree Programmes
                  </a>
                </div>
              </div>
            </div>
            <div className={s.grid_item}>
              <div className={s.inner_grid}><div className={s.pic}>
                  <img src={ESOFT} alt="" />
                </div>
                <div className={s.title}>
                  <a href="https://esoft.lk/" target="_blank">
                  Postgraduate Degree Programmes
                  </a>
                </div>
              </div>
              <div className={s.inner_grid}><div className={s.pic}>
                  <img src={APIIT} alt="" />
                </div>
                <div className={s.title}>
                  <a href="https://apiit.lk/postgraduate/" target="_blank">
                  Postgraduate Degree Programmes
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Master_Degree;
  

  