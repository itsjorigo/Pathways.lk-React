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
                    href="https://sliitacademy.lk/academic-programs/foundation-certificate-in-information-technology/"
                    target="_blank"
                  >
                  Curtin university - SLIIT Academy Foundation Certificate in Information Technology</a>
                </div>
              </div>
              <div className={s.inner_grid}>
                <div className={s.pic}>
                  <img src={SLTC} alt="" />
                </div>
                <div className={s.title}>
                  <a href="https://sltc.ac.lk/courses/bsc-hons-in-software-engineering/" target="_blank">
                    Bachelor of Software Engineering (Deakin University,
                    Australia)
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
                  <a href="https://www.nsbm.ac.lk/course/bsc-hons-software-engineering/" target="_blank">
                  BSc (Hons) IN Software Engineering
                  Plymouth University – United Kingdom
                  </a>
                </div>
              </div>
              <div className={s.inner_grid}><div className={s.pic}>
                <img src={IIT} alt="" />
                </div>
                <div className={s.title}>
                  <a href="https://www.iit.ac.lk/course/beng-software-engineering/" target="_blank">
                  BEng (Hons) Software Engineering - UGC Recognized
                  </a>
                </div>
              </div>
            </div>
            <div className={s.grid_item}>
              <div className={s.inner_grid}><div className={s.pic}>
                  <img src={CINEC} alt="" />
                </div>
                <div className={s.title}>
                  <a href="https://www.cinec.edu/courses/bsc-hons-in-software-engineering.html" target="_blank">
                  BSc (Hons) in Software Engineering - Ministry of Education/ UGC Approved
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
  

  