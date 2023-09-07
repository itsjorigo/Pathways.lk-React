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
import s from "./Biology.module.css";

const Biology = () => {
  return (
    <div>
      <Navbar />

      <div className={s.path_grid}>
        <p>Biotechnology</p>
        <div className={s.grid_container}>
          <div className={s.grid_item}>
            <div className={s.inner_grid}>
              <div className={s.pic}>
                <img src={SLIIT} alt="" />
              </div>
              <div className={s.title}>
                <a
                  href="https://www.sliit.lk/humanities-sciences/programmes/undergraduate-degree-programs/bachelor-of-science-hons-in-biotechnology-degree/" target="_blank">
                  BSc (Hons) in Biotechnology
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={s.path_grid}>
        <p>Nursing</p>
        <div className={s.grid_container}>
          <div className={s.grid_item}>
            <div className={s.inner_grid}>
              <div className={s.pic}>
                <img src={SLIIT} alt="" />
              </div>
              <div className={s.title}>
                <a
                  href="https://www.sliit.lk/international/international-programs-unit/programmes/uk-degree-programs/bsc-hons-nursing/" target="_blank">
                  BSc (Honours) in Nursing
                </a>
              </div>
            </div>
            <div className={s.inner_grid}>
              <div className={s.pic}>
                <img src={NSBM} alt="" />
              </div>
              <div className={s.title}>
                <a href="https://www.nsbm.ac.lk/course/bsc-honours-nursing/" target="_blank">
                B.Sc. (Honours) in Nursing
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={s.path_grid}>
        <p>Biomedical Science</p>
        <div className={s.grid_container}>
          <div className={s.grid_item}>
            <div className={s.inner_grid}>
              <div className={s.pic}>
                <img src={SLIIT} alt="" />
              </div>
              <div className={s.title}>
                <a
                  href="https://www.sliit.lk/humanities-sciences/programmes/undergraduate-degree-programs/b-ed-hons-in-biological-sciences-degree/" target="_blank">
                  B.Ed (Hons) in Biological Sciences
                </a>
              </div>
            </div>
            <div className={s.inner_grid}>
              <div className={s.pic}>
                <img src={NSBM} alt="" />
              </div>
              <div className={s.title}>
                <a href="https://sltc.ac.lk/courses/bachelor-of-civil-engineering-hons-deakin-australia/" target="_blank">
                BSc (HONS) in Biomedical Science - UGC Approved - Offered by NSBM
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
                <a href="https://www.cinec.edu/courses/bsc-in-biomedical-sciences.html" target="_blank">
                BSc (HONS) in Biomedical Science
                </a>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Biology;
