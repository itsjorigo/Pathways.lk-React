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
import s from "./Architecture.module.css";

const Architecture = () => {
  return (
    <div>
      <Navbar />

      <div className={s.path_grid}>
        <p>Architecture</p>
        <div className={s.grid_container}>
          <div className={s.grid_item}>
            <div className={s.inner_grid}>
              <div className={s.pic}>
                <img src={SLIIT} alt="" />
              </div>
              <div className={s.title}>
                <a
                  href="https://www.sliit.lk/uk-degree-programs/architecture/bachelor-of-science-hons-architecture-degree/" target="_blank">
                  Bachelor of Science (Hons) Architecture
                </a>
              </div>
            </div>
            <div className={s.inner_grid}>
              <div className={s.pic}>
                <img src={NIBM} alt="" />
              </div>
              <div className={s.title}>
                <a href="https://www.nibm.lk/programmes/bachelor-of-arts-in-interior-architecture/" target="_blank">
                Bachelor of Arts in Interior Architecture
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Architecture;
