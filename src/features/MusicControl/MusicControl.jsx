import React, { useState, useEffect } from "react";
import styles from "./MusicControl.module.css";

const MusicControl = ({ audioRef, paused, togglePlay }) => {
  const [muted, setMuted] = useState(false);
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setMuted(!muted);
    togglePlay();
    setClicked(true);
  };

  useEffect(() => {
    let timer;
    if (clicked) {
      timer = setTimeout(() => setClicked(false), 200);
    }
    return () => clearTimeout(timer);
  }, [clicked]);

  useEffect(() => {
    if (!audioRef.current) return;
    if (paused) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(() => {});
    }
  }, [paused, audioRef]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.1;
    }
  }, [audioRef]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.muted = muted;
    }
  }, [muted, audioRef]);
  return (
    <>
      <button
        className={`${styles.mute__btn} ${muted ? styles.muted : ""} ${
          clicked ? styles.clicked : ""
        }`}
        onClick={handleClick}
      >
        <svg className={styles.mute__icon} viewBox="0 0 20 20">
          <rect x="2" y="0" width="1.5" height="20" rx="1" ry="1" />
          <rect x="6" y="0" width="1.5" height="18" rx="1" ry="1" />
          <rect x="10" y="0" width="1.5" height="16" rx="1" ry="1" />
          <rect x="14" y="0" width="1.5" height="12" rx="1" ry="1" />
          <rect x="18" y="0" width="1.5" height="14" rx="1" ry="1" />
        </svg>
      </button>

      <audio
        ref={audioRef}
        loop
        src="/music/Dead Air Soundtrack — Ambient 18 (www.lightaudio.ru).mp3"
      />
    </>
  );
};

export default MusicControl;
