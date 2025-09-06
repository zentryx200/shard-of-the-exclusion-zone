import React from "react";
import { Link } from "react-router-dom";
import { navLinks } from "./NavLinks";
import styles from "./Nav.module.scss";

const Nav = () => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.menu}>
        {navLinks.map((item, i) => (
          <li key={i} className={styles.navItem}>
            {item.title}
            <ul className={styles.subMenu}>
              {item.links.map((link, j) => (
                <Link to={link.path}>{link.name}</Link>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
