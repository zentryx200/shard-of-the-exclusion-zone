import React, { useState, useRef, useEffect } from "react";
import Slideshow from "./Slideshow";
import Pagination from "./Pagination";
import Controls from "./Controls";
import AudioPlayer from "./AudioPlayer";
import Header from "../Header/Header";
import styles from "./Hero.module.scss";

const Hero = () => {
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

  return (
    <div className={styles.Hero}>
      <Header />
      <Slideshow images={images} current={current} />
      <AudioPlayer audioRef={audioRef} paused={paused} />
      <div className={styles.controlsWrapper}>
        <Pagination images={images} current={current} setCurrent={setCurrent} />
        <Controls paused={paused} setPaused={setPaused} />
      </div>
    </div>
  );
};

export default Hero;
