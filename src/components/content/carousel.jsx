import React, { useRef, useEffect, useState, Children, cloneElement, Fragment } from "react";
import * as El from "../layout/el";
import styles from "./styles/slideshow.module.css";

const Carousel = ({ delay = 3000, isAutoPlay = false, isArrowEnabled = false, isDotEnabled = false, children }) => {
  const trackRef = useRef();
  const touchStartX = useRef(null);

  const [index, setIndex] = useState(1);
  const [transition, setTransition] = useState(true);
  const [isPaused, setIsPaused] = useState(false);

  const childArray = Children.toArray(children);
  const total = childArray.length;
  const extendedChildren = [cloneElement(childArray[total - 1], { key: "clone-last" }), ...childArray, cloneElement(childArray[0], { key: "clone-first" })];
  const currentDot = index === 0 ? total - 1 : index === total + 1 ? 0 : index - 1;

  const goToIndex = (i) => setIndex(i + 1);
  const prevSlide = () => setIndex((prev) => prev - 1);
  const nextSlide = () => setIndex((prev) => prev + 1);

  const handleTouchStart = (e) => (touchStartX.current = e.touches[0].clientX);
  const handleTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const deltaX = e.changedTouches[0].clientX - touchStartX.current;
    if (deltaX > 50) prevSlide();
    if (deltaX < -50) nextSlide();
    touchStartX.current = null;
  };

  const handleTransitionEnd = () => {
    if (index === 0) {
      setTransition(false);
      setIndex(total);
    } else if (index === total + 1) {
      setTransition(false);
      setIndex(1);
    } else setTransition(true);
  };

  useEffect(() => {
    const track = trackRef.current;
    track.style.transition = transition ? "transform 1s ease" : "none";
    track.style.transform = `translateX(-${index * 100}%)`;
  }, [index, transition]);

  useEffect(() => {
    if (!isAutoPlay || isPaused) return;
    const interval = setInterval(() => {
      setIndex((prev) => prev + 1);
    }, delay);
    return () => clearInterval(interval);
  }, [isAutoPlay, isPaused, delay]);

  useEffect(() => {
    if (!transition) {
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setTransition(true);
        });
      });
    }
  }, [transition]);

  return (
    <El.Section sWidth="100%" sHeight="100%" overflow="visible">
      <div className={styles.container} onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
        <div ref={trackRef} className={styles.track} onTransitionEnd={handleTransitionEnd}>
          {extendedChildren.map((child, i) => (
            <div className={styles.slide} key={i}>
              {child}
            </div>
          ))}
        </div>
        {isDotEnabled && (
          <div className={styles.dots}>
            {childArray.map((_, i) => (
              <div key={i} className={`${styles.dot} ${currentDot === i ? styles.active : ""}`} onClick={() => goToIndex(i)} onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)} />
            ))}
          </div>
        )}
      </div>
      {isArrowEnabled && (
        <Fragment>
          <button className={styles.arrow + " " + styles.left} onClick={prevSlide}>
            ‹
          </button>
          <button className={styles.arrow + " " + styles.right} onClick={nextSlide}>
            ›
          </button>
        </Fragment>
      )}
    </El.Section>
  );
};

export default Carousel;
