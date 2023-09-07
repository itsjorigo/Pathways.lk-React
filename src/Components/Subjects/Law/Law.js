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
import s from "./Law.module.css";

const Law = () => {
  return (
    <div>
      <Navbar />

      <div className={s.path_grid}>
        <p>Law</p>
        <div className={s.grid_container}>
          <div className={s.grid_item}>
            <div className={s.inner_grid}>
              <div className={s.pic}>
                <img src={SLIIT} alt="" />
              </div>
              <div className={s.title}>
                <a
                  href="https://www.sliit.lk/uk-degree-programs/law-degree-program/llb-hons-law/" target="_blank">
                  LLB (Hons) Law by Liverpool John Moores University
                </a>
              </div>
            </div>
            <div className={s.inner_grid}>
              <div className={s.pic}>
                <img src={NSBM} alt="" />
              </div>
              <div className={s.title}>
                <a href="https://www.nsbm.ac.lk/course/bachelor-of-laws-honours/" target="_blank">
                Bachelor of Laws (Honours) - UGC Approved - Offered by NSBM
                </a>
              </div>
            </div>
            <div className={s.inner_grid}>
              <div className={s.pic}>
                <img src={ESOFT} alt="" />
              </div>
              <div className={s.title}>
                <a href="https://esoft.lk/courses/llb-hons-law-london-metropolitan-university-uk/" target="_blank">
                LLB (HONS) Law - London Metropolitan University UK
                </a>
              </div>
            </div>
            <div className={s.inner_grid}>
              <div className={s.pic}>
                <img src={APIIT} alt="" />
              </div>
              <div className={s.title}>
                <a href="https://apiit.lk/courses/llb-hons-law/" target="_blank">
                LLB (Hons) Law - Staffordshire University
                </a>
              </div>
            </div>
            <div className={s.inner_grid}>
              <div className={s.pic}>
                <img src={APIIT} alt="" />
              </div>
              <div className={s.title}>
                <a href="https://apiit.lk/courses/llb-hons-law-digital/" target="_blank">
                LLB (Hons) Law - Digital - Staffordshire University
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Law;
