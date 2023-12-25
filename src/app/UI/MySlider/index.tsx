"use client"
import React, { useState, useEffect, useRef } from "react";
import classes from "./MySlider.module.scss";
import Draggable from "react-draggable";

type MySliderProps = {
  children: React.ReactNode;
};

const MySlider: React.FC<MySliderProps> = ({ children }) => {
  const [offset, setOffset] = useState<number>(0);
  const [slideWidth, setSlideWidth] = useState<number>(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const totalSlides: number = React.Children.count(children);
  let sliderpagination: number[] = [];
  for (let i = 0; i < totalSlides; i++) sliderpagination.push(i);
  const LastSlide: number = -slideWidth * (totalSlides - 1);

  //Currect offset with width change
  useEffect(() => {
    const updateSlideWidth = () => {
      if (containerRef.current) setSlideWidth(containerRef.current.offsetWidth);
    };
    updateSlideWidth();

    window.addEventListener("resize", updateSlideWidth);

    return () => {
      window.removeEventListener("resize", updateSlideWidth);
    };
  }, []);

  //Fix bug with width change and incurrect offset
  useEffect(() => {
    setOffset(0);
  }, [slideWidth]);

  function handlePagination(index: number) {
    setOffset(-index * slideWidth);
  }
  //Fix react console error
  const nodeRef = React.useRef(null);

  //Button Prev
  function handleLeftArrowClick() {
    setOffset((currOffset) =>
      currOffset >= 0 ? LastSlide : currOffset + slideWidth,
    );
  }
  //Button Next
  function handleRightArrowClick() {
    setOffset((currOffset) =>
      currOffset <= LastSlide ? 0 : currOffset - slideWidth,
    );
  }
  //Snap-to-slide
  function handleDragStop() {
    const closestSlideIndex = Math.round(-offset / slideWidth);
    const newOffset = -closestSlideIndex * slideWidth;
    setOffset(newOffset);
  }
  //Drag handler
  function handleDrag(e: any, { deltaX }: { deltaX: number }) {
    e.preventDefault();
    const newOffset = offset + deltaX;
    if (newOffset > 0) setOffset(0);
    else if (newOffset < LastSlide) setOffset(LastSlide);
    else setOffset(newOffset);
  }
  return (
    <section className={classes.main_slider}>
      <div className={classes.main_slider_box}>
        <a
          href="#!"
          onClick={handleLeftArrowClick}
          className={classes.main_slider_left_arrow}
        >
          <img src="/imgs/UI/arr_r.svg" alt="arr_r" />
        </a>
        <div className={classes.main_slider_view_box} ref={containerRef}>
          <Draggable
            axis="x"
            bounds={{ left: LastSlide, right: 0 }}
            onDrag={handleDrag}
            onStop={handleDragStop}
            position={{ x: offset, y: 0 }}
            nodeRef={nodeRef}
          >
            <div ref={nodeRef} className={classes.main_slider_content}>
              {children}
            </div>
          </Draggable>
        </div>
        <a
          href="#!"
          onClick={handleRightArrowClick}
          className={classes.main_slider_right_arrow}
        >
          <img src="/imgs/UI/arr_r.svg" alt="arr_r" />
        </a>
      </div>
      <div className={classes.main_slider_pagination}>
        {sliderpagination.map((item) => (
          <button
            key={item}
            onClick={() => handlePagination(item)}
            className={`${classes.main_slider_pagination_button} ${
              item === -offset / slideWidth ? classes.active : ""
            }`}
          ></button>
        ))}
      </div>
    </section>
  );
};
export default MySlider;
