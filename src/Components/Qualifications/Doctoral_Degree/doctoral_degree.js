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
import s from "./doctoral_degree.module.css";

const Doctral_Degree = () => {
    return (
      <div>
        <Navbar />
        <div className={s.path_grid}>
          <p>Doctoral Degree Pathways</p>
          <div className={s.grid_container}>
            <div className={s.grid_item}>
              <div className={s.inner_grid}>
                <div className={s.pic}>
                  <img src={SLIIT} alt="" />
                </div>
                <div className={s.title}>
                  <a
                    href="https://www.sliit.lk/graduate-studies-research/programms/phd-programmes/"
                    target="_blank"
                  >
                  PhD Programme</a>
                </div>
              </div>
              <div className={s.inner_grid}>
                <div className={s.pic}>
                  <img src={NSBM} alt="" />
                </div>
                <div className={s.title}>
                  <a href="https://www.nsbm.ac.lk/course/phd-in-management/" target="_blank">
                  Doctoral Programme
                  </a>
                </div>
              </div>
            </div>
            <div className={s.grid_item}>
              <div className={s.inner_grid}>
              <div className={s.pic}>
                  <img src={ESOFT} alt="" />
                </div>
                <div className={s.title}>
                  <a href="https://esoft.lk/" target="_blank">
                  Doctoral Programmes
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Doctral_Degree;
  

  