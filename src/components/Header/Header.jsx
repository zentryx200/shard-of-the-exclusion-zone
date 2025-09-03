import React from "react";
import Logo from "./Logo/Logo";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <header className={styles.Header}>
      <div className={styles.Header__Container}>
        <Logo /> {/* ← логотип слева */}
        <nav>{/* навигация будет справа */}</nav>
      </div>
    </header>
  );
};

export default Header;
