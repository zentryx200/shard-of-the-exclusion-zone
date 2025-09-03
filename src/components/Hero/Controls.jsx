import React from "react";
import styles from "./Hero.module.scss";

const Controls = ({ paused, setPaused }) => {
  return (
    <div className={styles.controls}>
      <button
        onClick={() => setPaused(!paused)}
        className={styles.ButtonSlideShow}
      >
        {paused ? (
          <i className="bx bx-play" style={{ color: "#fff", fontSize: "32px" }}></i>
        ) : (
          <i className="bx bx-pause" style={{ color: "#fff", fontSize: "32px" }}></i>
        )}
      </button>
    </div>
  );
};

export default Controls;
