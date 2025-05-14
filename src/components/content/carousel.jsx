import React, { useRef, useEffect, useState, Children, cloneElement, Fragment } from "react";
import * as El from "../layout/el";
import { pxToRem } from "../../libs/plugins/helpers";
import styles from "./styles/slideshow.module.css";

const Carousel = ({ gap = 0, delay = 3000, isAutoPlay = false, isArrowEnabled = false, isDotEnabled = false, children }) => {
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

  const arrowIcon = (direction) => {
    return (
      <div style={{ width: "0.625rem", height: "1rem", overflow: "hidden", flexShrink: "0", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", boxSizing: "border-box", color: "inherit" }}>
        {direction === "left" ? (
          <svg width="100%" height="100%" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M7.9804 15.4995C8.27787 15.5012 8.56912 15.4143 8.81701 15.2499C9.06491 15.0854 9.25821 14.8509 9.37228 14.5761C9.48636 14.3014 9.51603 13.9989 9.45751 13.7073C9.399 13.4156 9.25495 13.148 9.04374 12.9385L4.08646 8.01115L8.84904 3.05388C8.9877 2.91423 9.09749 2.74865 9.17216 2.56658C9.24682 2.38451 9.28489 2.18951 9.2842 1.99273C9.2835 1.79594 9.24406 1.60122 9.16811 1.41968C9.09216 1.23814 8.98119 1.07333 8.84155 0.934678C8.70191 0.796021 8.53633 0.686226 8.35426 0.611562C8.17219 0.536897 7.97719 0.498826 7.78041 0.499521C7.58362 0.500216 7.3889 0.539665 7.20736 0.615614C7.02582 0.691563 6.86101 0.802526 6.72236 0.942166L0.941363 6.93283C0.666951 7.21279 0.513245 7.58918 0.513245 7.9812C0.513245 8.37322 0.666951 8.74961 0.941363 9.02957L6.93203 15.0202C7.06646 15.1654 7.22832 15.2825 7.40826 15.3648C7.5882 15.447 7.78266 15.4928 7.9804 15.4995Z"
              fill="currentColor"
            />
          </svg>
        ) : (
          <svg width="100%" height="100%" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M2.01962 15.4995C1.72215 15.5012 1.4309 15.4143 1.18301 15.2499C0.935112 15.0854 0.741806 14.8509 0.627734 14.5761C0.513661 14.3014 0.48399 13.9989 0.542503 13.7073C0.601017 13.4156 0.745063 13.148 0.956278 12.9385L5.91356 8.01115L1.15097 3.05388C1.01232 2.91424 0.902524 2.74865 0.827859 2.56658C0.753195 2.38451 0.715124 2.18951 0.715819 1.99273C0.716514 1.79594 0.755962 1.60122 0.831911 1.41968C0.907861 1.23814 1.01882 1.07333 1.15846 0.934678C1.2981 0.796021 1.46369 0.686226 1.64576 0.611562C1.82783 0.536897 2.02283 0.498826 2.21961 0.499521C2.4164 0.500216 2.61112 0.539665 2.79266 0.615614C2.9742 0.691563 3.139 0.802526 3.27766 0.942166L9.05866 6.93283C9.33307 7.21279 9.48677 7.58918 9.48677 7.9812C9.48677 8.37322 9.33307 8.74961 9.05866 9.02957L3.06799 15.0202C2.93356 15.1654 2.7717 15.2825 2.59176 15.3648C2.41182 15.447 2.21736 15.4928 2.01962 15.4995Z"
              fill="currentColor"
            />
          </svg>
        )}
      </div>
    );
  };

  useEffect(() => {
    const track = trackRef.current;
    track.style.transition = transition ? "transform 1s ease" : "none";
    track.style.transform = `translateX(calc(-${index * 100}% - ${pxToRem(index * gap)}))`;
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
    <El.Section sWidth="100%" sHeight="100%" overflow="visible" backgroundColor="var(--color-background)">
      <div className={styles.container} onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
        <div ref={trackRef} className={styles.track} onTransitionEnd={handleTransitionEnd} style={{ gap: pxToRem(gap) }}>
          {extendedChildren.map((child, i) => (
            <div key={i} className={styles.slide}>
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
            {arrowIcon("left")}
          </button>
          <button className={styles.arrow + " " + styles.right} onClick={nextSlide}>
            {arrowIcon("right")}
          </button>
        </Fragment>
      )}
    </El.Section>
  );
};

export default Carousel;
