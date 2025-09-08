import React, { useRef } from "react";
import styles from "./Burger.module.scss";

const BurgerMenu = () => {
  const audioRef = useRef(null);

  const playSound = () => {
    const audio = audioRef.current;
    if (audio) {
      audio.volume = 0.2;
      audio.currentTime = 0;
      const playPromise = audio.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {});
      }
    }
  };

  return (
    <>
      <button className={styles.BurgerMenu} onMouseEnter={playSound}>
        <div className={styles.BurgerMenu__dots}>
          <span className={styles.BurgerMenu__dot}></span>
          <span className={styles.BurgerMenu__dot}></span>
        </div>
      </button>

      <audio ref={audioRef} src="/audio/audioButton.mp3" preload="auto" />
    </>
  );
};

export default BurgerMenu;
