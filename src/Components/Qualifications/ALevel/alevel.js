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
import s from "./alevel.module.css";

const Alevel = () => {
    return (
      <div>
        <Navbar />
        <div className={s.path_grid}>
          <p>London Alevel Pathways</p>
          <div className={s.grid_container}>
            <div className={s.grid_item}>
              <div className={s.inner_grid}>
                <div className={s.pic}>
                  <img src={SLIIT} alt="" />
                </div>
                <div className={s.title}>
                  <a
                    href="https://www.britishcouncil.lk/exam/school-exams"target="_blank">
                  IGCSE, A-level</a>
                </div>
          </div>
        </div>
      </div>
      </div>
      </div>
    );
  };
  
  export default Alevel;
  

  