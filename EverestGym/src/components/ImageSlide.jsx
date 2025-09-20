import React, { useState, useEffect } from "react";
import styles from "./css/ImageSlide.module.css";

import gym1 from "../img/gym1.png";
import gym2 from "../img/gym2.png";
import gym3 from "../img/gym3.png";

const images = [gym1, gym2, gym3];

export default function HeroCarousel({ autoSlide = true, interval = 3000 }) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!autoSlide) return;
    const slide = setInterval(() => {
      setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, interval);

    return () => clearInterval(slide);
  }, [autoSlide, interval]);

  const prevSlide = () => {
    setCurrent(current === 0 ? images.length - 1 : current - 1);
  };

  const nextSlide = () => {
    setCurrent(current === images.length - 1 ? 0 : current + 1);
  };

  return (
    <div className={styles.imageContainer}>
      <img
        src={images[current]}
        alt={`Gym slide ${current + 1}`}
        className={styles.image}
        loading="lazy"
      />

      <button onClick={prevSlide} className={`${styles.navBtn} ${styles.left}`}>
        &lt;
      </button>
      <button
        onClick={nextSlide}
        className={`${styles.navBtn} ${styles.right}`}
      >
        &gt;
      </button>

      {/* Dots navigation */}
      <div className={styles.dots}>
        {images.map((_, idx) => (
          <span
            key={idx}
            className={`${styles.dot} ${current === idx ? styles.active : ""}`}
            onClick={() => setCurrent(idx)}
          ></span>
        ))}
      </div>
    </div>
  );
}
