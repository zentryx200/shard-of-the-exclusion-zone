import React from "react";
import Logo from "./Logo/Logo";
import BurgerMenu from "./BurgerMenu/Burger";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <header className={styles.Header}>
      <div className={styles.Header__Container}>
        <Logo />
        <BurgerMenu />
      </div>
    </header>
  );
};

export default Header;
