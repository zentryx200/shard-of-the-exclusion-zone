import React, { useRef } from "react";
import styles from "./Hero.module.scss";

const Controls = ({ paused, setPaused }) => {
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
      <div className={styles.controls}>
        <button
          onClick={() => setPaused(!paused)}
          className={styles.ButtonSlideShow}
          onMouseEnter={playSound}
        >
          {paused ? (
            <i
              className="bx bx-play"
              style={{ color: "#fff", fontSize: "32px", pointerEvents: "none" }}
            ></i>
          ) : (
            <i
              className="bx bx-pause"
              style={{ color: "#fff", fontSize: "32px", pointerEvents: "none" }}
            ></i>
          )}
        </button>
      </div>

      <audio ref={audioRef} src="/audio/audioButton.mp3" preload="auto" />
    </>
  );
};

export default Controls;
