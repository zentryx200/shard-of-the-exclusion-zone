import React from "react";
import styles from "./Burger.module.scss";

const BurgerMenu = () => {
  return (
    <button className={styles.BurgerMenu}>
      <div className={styles.BurgerMenu__dots}>
        <span className={styles.BurgerMenu__dot}></span>
        <span className={styles.BurgerMenu__dot}></span>
      </div>
    </button>
  );
};

export default BurgerMenu;
