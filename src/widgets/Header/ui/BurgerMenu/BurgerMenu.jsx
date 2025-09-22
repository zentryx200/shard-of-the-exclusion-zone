import React, { useState } from "react";
import styles from "./ui/BurgerMenu.module.css";
import { Links } from "react-router-dom";

const BurgerMenu = () => {
  const [open, setOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const toggleMenu = () => {
    setIsActive(!isActive);
    if (isAnimating) return;
    setIsAnimating(true);
    setIsActive(!isActive);

    setTimeout(() => {
      setIsAnimating(false);
    }, 600);
  };

  return (
    <>
      <button
        className={`${styles.burger__Menu} ${isActive ? styles.active : ""}`}
        onClick={toggleMenu}
        aria-label="Toggle Menu"
      >
        {!isActive ? (
          <div className={styles.burger__MenuDots}>
            <svg
              width="20"
              height="8"
              viewBox="0 0 20 8"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx={3} cy={4} r={3} fill="var(--secondary-color)" />
              <circle cx={17} cy={4} r={3} fill="var(--secondary-color)" />
            </svg>
          </div>
        ) : (
          <svg
            width="10"
            height="10"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line
              x1="0"
              y1="0"
              x2="20"
              y2="20"
              stroke="var(--primary-color)"
              strokeWidth="2"
            />
            <line
              x1="20"
              y1="0"
              x2="0"
              y2="20"
              stroke="var(--primary-color)"
              strokeWidth="2"
            />
          </svg>
        )}
      </button>
      <div
        className={`${styles.burgerContent} ${isActive ? styles.active : ""}`}
      >
        <div className={styles.ContentContainer}>
          <div className={styles.ContentZone}>
            <ul className={styles.BurgerNumber}>
              <li>
                <a href="#!" className={styles.BurgerItem}>
                  <span className={styles.label}>ZONE</span>
                </a>
              </li>
              <li>
                <a href="#!" className={styles.BurgerItem}>
                  <span className={styles.label}>HISTORY</span>
                </a>
              </li>
              <li>
                <a href="#!" className={styles.BurgerItem}>
                  <span className={styles.label}>ARCHIVE</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default BurgerMenu;
