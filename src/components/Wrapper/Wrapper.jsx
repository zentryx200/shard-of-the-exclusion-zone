import React, { useEffect, useRef, useState } from "react";
import styles from "./Wrapper.module.scss";

const Wrapper = () => {
  const images = [
    "/image/loaderImage/image1.jpg",
    "/image/loaderImage/image2.jpg",
    "/image/loaderImage/image3.jpg",
    "/image/loaderImage/image4.jpg",
    "/image/loaderImage/image5.jpg",
  ];

  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    if (paused) return;

    const timer = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearTimeout(timer);
  }, [paused, current, images.length]);

  useEffect(() => {
    if (!audioRef.current) return;

    if (paused) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(() => {});
    }
  }, [paused]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.3;
    }
  }, []);

  return (
    <div className={styles.Wrapper}>
      {images.map((src, i) => (
        <img
          key={i}
          src={src}
          alt={`slide-${i}`}
          className={`${styles.slide} ${i === current ? styles.active : ""}`}
        />
      ))}

      <audio ref={audioRef} loop src="/audio/MoozE - Stalker ambient.mp3" />

      <div className={styles.controlsWrapper}>
        <ul className={styles.pagination}>
          {images.map((_, i) => (
            <li key={i} className={styles.pagination__item}>
              <button
                className={`${styles.pagination__link} ${
                  i === current ? styles.is_active : ""
                }`}
                onClick={() => setCurrent(i)}
              >
                Slide {i + 1}
              </button>
            </li>
          ))}
        </ul>

        <div className={styles.controls}>
          <button
            onClick={() => setPaused(!paused)}
            className={styles.ButtonSlideShow}
          >
            {paused ? (
              <i
                className="bx bx-play"
                style={{
                  color: "#ffffff",
                  fontSize: "32px",
                  pointerEvents: "none",
                }}
              ></i>
            ) : (
              <i
                className="bx bx-pause"
                style={{
                  color: "#ffffff",
                  fontSize: "32px",
                  pointerEvents: "none",
                }}
              ></i>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Wrapper;
