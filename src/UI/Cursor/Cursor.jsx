import React, { useEffect, useState } from "react";
import styles from "./Cursor.module.scss";

const Cursor = () => {
  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  const [type, setType] = useState("default");

  useEffect(() => {
    //Отслеживание движения мыши
    const handleMouseMove = (e) => {
      const xPercent = (e.clientX / window.innerWidth) * 100;
      const yPercent = (e.clientY / window.innerHeight) * 100;
      setCursor({ x: xPercent, y: yPercent });
    };

    //Состояние курсора при наведение
    const handleMouseOver = (e) => {
      if (e.target.tagName === "INPUT") setType("text");
      else if (e.target.tagName === "BUTTON") setType("button");
      else setType("default");
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  return (
    <div
      className={`${styles.stalkerCursor} ${styles[type]}`}
      style={{
        left: `${cursor.x}%`,
        top: `${cursor.y}%`,
        transform: "translate(-50%, -50%)",
      }}
    ></div>
  );
};

export default Cursor;
