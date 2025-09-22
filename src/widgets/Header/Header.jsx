import React, { useState } from "react";
import logo from "../../assets/logo/SZELogo.svg";
import BurgerMenu from "./ui/BurgerMenu/BurgerMenu";
import styles from "./Header.module.css";

const Header = () => {
  const [active, setActive] = useState("home");

  return (
    <header className={styles.header}>
      <div className={styles.header__container}>
        <a href="/" className={styles.header__logo}>
          <img src={logo} alt="Logo" />
        </a>

        <div className={styles.header__nav}>
          <nav className={styles.nav}>
            <ul className={styles.nav__List}>
              <li
                className={`${styles.nav__Item} ${
                  active === "home" ? styles.navItemActive : ""
                }`}
                onClick={() => setActive("home")}
              >
                <a href="#" className={styles.nav__Link}>
                  HOME
                </a>
              </li>
              <li
                className={`${styles.nav__Item} ${
                  active === "project" ? styles.navItemActive : ""
                }`}
                onClick={() => setActive("project")}
              >
                <a href="#" className={styles.nav__Link}>
                  PROJECT
                </a>
              </li>
              <li
                className={`${styles.nav__Item} ${
                  active === "contact" ? styles.navItemActive : ""
                }`}
                onClick={() => setActive("contact")}
              >
                <a href="#" className={styles.nav__Link}>
                  CONTACT
                </a>
              </li>
            </ul>
          </nav>
          <BurgerMenu />
        </div>
      </div>
    </header>
  );
};

export default Header;
