import React, { useRef, useState } from "react";
import styles from "./Footer.module.css";
import MusicControl from "../../features/MusicControl/MusicControl";

const Footer = () => {
  const audioRef = useRef(null);
  const [paused, setPaused] = useState(false);

  return (
    <footer className={styles.footer}>
      <div className={styles.footer__container}>
        <div className={styles.footer__left}>
          <MusicControl
            audioRef={audioRef}
            paused={paused}
            togglePlay={() => setPaused((prev) => !prev)}
          />
          <button className={styles.discord__link} type="button">
            DISCORD SERVER
          </button>
        </div>
        <div className={styles.footer__right}></div>
      </div>
    </footer>
  );
};

export default Footer;
