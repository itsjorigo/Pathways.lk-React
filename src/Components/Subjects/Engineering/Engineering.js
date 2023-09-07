import React from "react";
import Navbar from "../../Navbar/Navbar";
import SLIIT from "../../../Assets/SLIIT.png";
import SLTC from "../../../Assets/SLTC.png";
import NSBM from "../../../Assets/NSBM.png";
import IIT from "../../../Assets/IIT.png";
import CINEC from "../../../Assets/CINEC.png";
import NIBM from "../../../Assets/NIBM.png";
import s from "./Engineering.module.css";

const Engineering = () => {
  return (
    <div>
      <Navbar />

      <div className={s.path_grid}>
        <p>Software Engineering Pathways</p>
        <div className={s.grid_container}>
          <div className={s.grid_item}>
            <div className={s.inner_grid}>
              <div className={s.pic}>
                <img src={SLIIT} alt="" />
              </div>
              <div className={s.title}>
                <a
                  href="https://www.sliit.lk/computing/programmes/software-engineering-degree/"
                  target="_blank"
                >
                  BSc (Hons) in Information Technology Specialising in Software
                  Engineering
                </a>
              </div>
            </div>
            <div className={s.inner_grid}>
              <div className={s.pic}>
                <img src={SLTC} alt="" />
              </div>
              <div className={s.title}>
                <a href="https://sltc.ac.lk/" target="_blank">
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
            
            <div className={s.inner_grid}><div className={s.pic}>
                <img src={NIBM} alt="" />
              </div>
              <div className={s.title}>
                <a href="https://www.nibm.lk/programmes/bachelor-of-software-engineering-honours/" target="_blank">
                Bachelor of Software Engineering (Honours)
                </a>
              </div>
          </div>
          </div> 
        </div>
      </div>

      <div className={s.path_grid}>
        <p>Mechanical Engineering Pathways</p>
        <div className={s.grid_container}>
          <div className={s.grid_item}>
            <div className={s.inner_grid}></div>
            <div className={s.inner_grid}></div>
          </div>
          <div className={s.grid_item}>
            <div className={s.inner_grid}></div>
            <div className={s.inner_grid}></div>
          </div>
          <div className={s.grid_item}>
            <div className={s.inner_grid}></div>
            <div className={s.inner_grid}></div>
          </div>
        </div>
      </div>

      <div className={s.path_grid}>
        <p>Civil Engineering Pathways</p>
        <div className={s.grid_container}>
          <div className={s.grid_item}>
            <div className={s.inner_grid}></div>
            <div className={s.inner_grid}></div>
          </div>
          <div className={s.grid_item}>
            <div className={s.inner_grid}></div>
            <div className={s.inner_grid}></div>
          </div>
          <div className={s.grid_item}>
            <div className={s.inner_grid}></div>
            <div className={s.inner_grid}></div>
          </div>
        </div>
      </div>

      <div className={s.path_grid}>
        <p>Chemical Engineering Pathways</p>
        <div className={s.grid_container}>
          <div className={s.grid_item}>
            <div className={s.inner_grid}></div>
            <div className={s.inner_grid}></div>
          </div>
          <div className={s.grid_item}>
            <div className={s.inner_grid}></div>
            <div className={s.inner_grid}></div>
          </div>
          <div className={s.grid_item}>
            <div className={s.inner_grid}></div>
            <div className={s.inner_grid}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Engineering;

// import React from "react";
// import Navbar from "../Navbar/Navbar";
// import s from "./Engineering.module.css";

// const Engineering = () => {
//   // Create an array to represent the grid items
//   const gridItems = Array(16).fill(null);

//   return (
//     <div>
//       <Navbar />
//       <div className={s.grid_container}>
//         {gridItems.map((_, index) => (
//           <div key={index} className={s.grid_item}>
//             <div className={s.inner_grid}></div>
//             <div className={s.inner_grid}></div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Engineering;
