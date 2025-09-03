import React from "react";
import styles from "./Hero.module.scss";

const Slideshow = ({ images, current }) => {
  return (
    <>
      {images.map((src, i) => (
        <img
          key={i}
          src={src}
          alt={`slide-${i}`}
          className={`${styles.slide} ${i === current ? styles.active : ""}`}
        />
      ))}
    </>
  );
};

export default Slideshow;
