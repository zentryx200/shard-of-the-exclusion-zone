import React from "react";
import styles from "./Hero.module.scss";

const Pagination = ({ images, current, setCurrent }) => {
  return (
    <ul className={styles.pagination}>
      {images.map((_, i) => (
        <li key={i} className={styles.pagination__item}>
          <button
            className={`${styles.pagination__link} ${
              i === current ? styles.is_active : ""
            }`}
            onClick={() => setCurrent(i)}
          >
            Slide {i + 1}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default Pagination;
