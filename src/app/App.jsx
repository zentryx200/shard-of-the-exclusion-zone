import React, { useState, useEffect } from "react";
import BackgroundImagesContext from "../context/BackgroundImagesContext";
import backgroundImages from "../shared/data/background";
import Slideshow from "../shared/components/Slideshow/Slideshow";
import Header from "../widgets/Header/Header";
import Footer from "../widgets/Footer/Footer";

function App() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    let timer;

    if (!paused) {
      timer = setTimeout(() => {
        setCurrent((prev) => (prev + 1) % backgroundImages.length);
      }, 5000);
    }

    return () => clearTimeout(timer);
  }, [current, paused]);

  useEffect(() => {
    const handleVisibility = () => {
      if (document.hidden || !document.hasFocus()) {
        setPaused(true);
      } else {
        setPaused(false);
      }
    };

    window.addEventListener("visibilitychange", handleVisibility);
    window.addEventListener("blur", handleVisibility);
    window.addEventListener("focus", handleVisibility);

    return () => {
      window.removeEventListener("visibilitychange", handleVisibility);
      window.removeEventListener("blur", handleVisibility);
      window.removeEventListener("focus", handleVisibility);
    };
  }, []);

  return (
    <BackgroundImagesContext.Provider value={backgroundImages}>
      <Slideshow images={backgroundImages} current={current}>
        <Header />
        <Footer />
      </Slideshow>
    </BackgroundImagesContext.Provider>
  );
}

export default App;
