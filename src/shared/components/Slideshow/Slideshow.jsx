import React, { useState, useEffect } from "react";
import styles from "./Slideshow.module.css";

const Slideshow = ({ images, current, children }) => {
  return (
    <div
      className={styles.slideshowContainer}
      style={{
        margin: "0 auto",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
      }}
    >
      {images.map((src, i) => (
        <img
          key={i}
          src={src}
          alt={`slide-${i}`}
          className={`${styles.slide} ${i === current ? styles.active : ""}`}
        />
      ))}
      {children}
    </div>
  );
};

export default Slideshow;
