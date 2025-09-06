import React from "react";
import Logo from "./Logo/Logo";
import Nav from "./Nav/Nav";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <header className={styles.Header}>
      <div className={styles.Header__Container}>
        <Logo /> {/* ← логотип слева */}
        <Nav />
      </div>
    </header>
  );
};

export default Header;
