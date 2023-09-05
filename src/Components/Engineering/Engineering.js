import React from "react";
import Navbar from "../Navbar/Navbar";
import s from "./Engineering.module.css";

const Engineering = () => {
  return (
    <div>
      <Navbar />
      <div className={s.grid_container}>
        {/* 16 grid items */}
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
        <div className={s.grid_item}>
          <div className={s.inner_grid}></div>
          <div className={s.inner_grid}></div>
        </div>
      </div>
    </div>
  );
};

export default Engineering;
