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
import s from "./InformationTechnology.module.css";

const InformationTechnology = () => {
  return (
    <div>
      <Navbar />

      <div className={s.path_grid}>
        <p>Computer Science Pathways</p>
        <div className={s.grid_container}>
          <div className={s.grid_item}>
            <div className={s.inner_grid}>
              <div className={s.pic}>
                <img src={SLIIT} alt="" />
              </div>
              <div className={s.title}>
                <a
                  href="https://www.sliit.lk/computing/programmes/computer-science-degree/" target="_blank">
                  BSc (Hons) in Computer Science
                </a>
              </div>
            </div>
            <div className={s.inner_grid}>
              <div className={s.pic}>
                <img src={SLTC} alt="" />
              </div>
              <div className={s.title}>
                <a href="https://sltc.ac.lk/" target="_blank">
                Bachelor of Computer Science (Deakin University, Australia)
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
                <a href="https://www.nsbm.ac.lk/course/bsc-hons-computer-science/" target="_blank">
                BSc (Hons) Computer Science - Plymouth University – United Kingdom
                </a>
              </div>
            </div>
            <div className={s.inner_grid}><div className={s.pic}>
              <img src={IIT} alt="" />
              </div>
              <div className={s.title}>
                <a href="https://www.iit.ac.lk/course/bsc-computer-science/" target="_blank">
                BSc (Hons) Computer Science - University of Westminster
                </a>
              </div>
            </div>
          </div>
          <div className={s.grid_item}>
            <div className={s.inner_grid}><div className={s.pic}>
                <img src={CINEC} alt="" />
              </div>
              <div className={s.title}>
                <a href="https://www.cinec.edu/courses/bschons-computer-science-software-engineering.html" target="_blank">
                BSc (Hons) Computer Science (Software Engineering)
                </a>
              </div>
            </div>
            
            <div className={s.inner_grid}><div className={s.pic}>
                <img src={NIBM} alt="" />
              </div>
              <div className={s.title}>
                <a href="https://apiit.lk/courses/bsc-hons-computer-science/" target="_blank">
                BSc (Hons) Computer Science - Staffordshire University
                </a>
              </div>
          </div>
          </div>
        </div>
      </div>

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
                  href="https://www.sliit.lk/computing/programmes/software-engineering-degree/" target="_blank">
                  BSc (Hons) in Information Technology Specialising in Software Engineering
                </a>
              </div>
            </div>
            <div className={s.inner_grid}>
              <div className={s.pic}>
                <img src={SLTC} alt="" />
              </div>
              <div className={s.title}>
                <a href="https://sltc.ac.lk/courses/bsc-hons-in-software-engineering/" target="_blank">
                Bachelor of Software Engineering (Deakin University, Australia)
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
                BSc (Hons) in Software Engineering
                Plymouth University – United Kingdom
                </a>
              </div>
            </div>
            <div className={s.inner_grid}><div className={s.pic}>
              <img src={IIT} alt="" />
              </div>
              <div className={s.title}>
                <a href="https://www.iit.ac.lk/course/beng-software-engineering/" target="_blank">
                BEng (Hons) Software Engineering
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
          <div className={s.grid_item}>
            <div className={s.inner_grid}>
            <div className={s.pic}>
                <img src={APIIT} alt="" />
              </div>
              <div className={s.title}>
                <a href="https://apiit.lk/courses/beng-hons-software-engineering/" target="_blank">
                BSc (Hons) IN Software Engineering
                Staffordshire University
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={s.path_grid}>
        <p>Information Technology Pathways</p>
        <div className={s.grid_container}>
          <div className={s.grid_item}>
            <div className={s.inner_grid}>
              <div className={s.pic}>
                <img src={SLIIT} alt="" />
              </div>
              <div className={s.title}>
                <a
                  href="https://www.sliit.lk/computing/programmes/information-technology-degree/" target="_blank">
                  BSc (Hons) in Information Technology Specialising in Information Technology
                </a>
              </div>
            </div>
            <div className={s.inner_grid}>
              <div className={s.pic}>
                <img src={SLTC} alt="" />
              </div>
              <div className={s.title}>
                <a href="https://sltc.ac.lk/" target="_blank">
                Bachelor of Information Technology (Deakin University, Australia)
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
                <a href="https://www.nsbm.ac.lk/course/bachelor-of-information-technology-nbit-major-in-web-and-mobile-application-development-vu/" target="_blank">
                Bachelor of Information Technology (Major in Cyber Security) - Victoria University, Australia
                </a>
              </div>
            </div>
            <div className={s.inner_grid}><div className={s.pic}>
              <img src={CINEC} alt="" />
              </div>
              <div className={s.title}>
                <a href="https://www.cinec.edu/courses/bsc-hons-computer-networks-top-up.html/" target="_blank">
                BSc (Hons) Computer Networks – Top Up
                </a>
              </div>
            </div>
          </div>
          <div className={s.grid_item}>
            <div className={s.inner_grid}><div className={s.pic}>
                <img src={ESOFT} alt="" />
              </div>
              <div className={s.title}>
                <a href="https://esoft.lk/courses/bachelor-of-information-technology-bit-hons-degree-esoft-metro-campus/" target="_blank">
                Bachelor of Information Technology (Honours)
                </a>
              </div>
            </div>
          </div>
          </div>
      </div>
    </div>
  );
};

export default InformationTechnology;
