import React, { useRef, useState, useEffect, FC, HTMLAttributes } from "react";
import { useStyles } from "./Swiper.style";
import { ISwiperItem } from "./types";
import SwiperItem from "./SwiperItem/SwiperItem";
import { getTouchEventData } from "../../utils/dom";
import { useStateRef, getRefValue } from "../../hooks/useStateRef";
import clsx from "clsx";
import { ZoomPhoto } from "../ZoomPhoto/ZoomPhoto";
import { useParams } from "react-router-dom";
import { mathCeil, mathFloor, mathRound } from "../../utils/swiper";

interface ISwiper {
  items: Array<ISwiperItem>;
}
const MIN_SWIPE_REQUIRED = 40;

const Swiper: FC<ISwiper & HTMLAttributes<HTMLDivElement>> = (props) => {
  const { items, ...otherProps } = props;

  const classes = useStyles();
  const containerRef = useRef<HTMLUListElement>(null);
  const containerWidthRef = useRef(0);
  const minOffsetXRef = useRef(0);
  const currentOffsetXRef = useRef(0);
  const startXRef = useRef(0);
  const [offsetX, setOffsetX, offsetXRef] = useStateRef(0);
  const [isSwiping, setIsSwiping] = useState(false);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [isToggle, setIsToggle] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setCurrentIdx(0);
    setOffsetX(0);
  }, [id]);

  const onTouchMove = (e: TouchEvent | MouseEvent) => {
    const currentX = getTouchEventData(e).clientX;
    const diff = getRefValue(startXRef) - currentX;
    const newOffsetX = getRefValue(currentOffsetXRef) - diff;
    setOffsetX(newOffsetX);
  };

  const onTouchEnd = () => {
    const currentOffsetX = getRefValue(currentOffsetXRef);
    const containerWidth = getRefValue(containerWidthRef);
    let newOffsetX = getRefValue(offsetXRef);
    const maxOffsetX = 0;
    const minOffsetX = getRefValue(minOffsetXRef);
    const diff = currentOffsetX - newOffsetX;
    if (Math.abs(diff) > MIN_SWIPE_REQUIRED) {
      if (diff > 0 && newOffsetX < minOffsetX) {
        newOffsetX = maxOffsetX;

        newOffsetX = mathFloor(newOffsetX, newOffsetX);
      } else if (diff > 0 && newOffsetX > minOffsetX) {
        newOffsetX = mathFloor(newOffsetX, newOffsetX);
      } else if (diff < 0 && newOffsetX > maxOffsetX) {
        newOffsetX = minOffsetX;
      } else if (diff < 0 && newOffsetX < maxOffsetX) {
        newOffsetX = mathCeil(newOffsetX, newOffsetX);
      }
    } else {
      newOffsetX = mathRound(newOffsetX, newOffsetX);
    }

    setIsSwiping(false);
    setOffsetX(newOffsetX);
    setCurrentIdx(Math.round(Math.abs(newOffsetX / containerWidth)));

    window.removeEventListener("touchend", onTouchEnd);
    window.removeEventListener("touchmove", onTouchMove);
    window.removeEventListener("mouseup", onTouchEnd);
    window.removeEventListener("mousemove", onTouchMove);
  };
  const onTouchStart = (
    e: React.TouchEvent<HTMLDivElement> | React.MouseEvent<HTMLDivElement>
  ) => {
    setIsSwiping(true);

    currentOffsetXRef.current = getRefValue(offsetXRef);
    startXRef.current = getTouchEventData(e).clientX;

    const containerEl = getRefValue(containerRef);
    const containerWidth = containerEl.offsetWidth;

    containerWidthRef.current = containerWidth;
    minOffsetXRef.current = containerWidth - containerEl.scrollWidth;

    window.addEventListener("touchmove", onTouchMove);
    window.addEventListener("touchend", onTouchEnd);
    window.addEventListener("mousemove", onTouchMove);
    window.addEventListener("mouseup", onTouchEnd);
  };
  const indicatorOnClick = (idx: number) => {
    const containerEl = getRefValue(containerRef);
    const containerWidth = containerEl.offsetWidth;

    setCurrentIdx(idx);
    setOffsetX(-(containerWidth * idx));
  };

  return (
    <>
      {isToggle && (
        <ZoomPhoto
          toggleZoom={setIsToggle}
          data={items}
          slideIndex={currentIdx}
        />
      )}
      <div {...otherProps} className={clsx(classes.root, otherProps.className)}>
        <div
          className={classes.swiperContainer}
          onTouchStart={onTouchStart}
          onMouseDown={onTouchStart}
        >
          <ul
            onClick={() => setIsToggle(true)}
            ref={containerRef}
            className={
              !isSwiping ? classes.swiperList : classes.swiperListIsSwiping
            }
            style={{ transform: `translate3d(${offsetX}px, 0, 0)` }}
          >
            {items &&
              items.map((item, idx) => <SwiperItem key={idx} {...item} />)}
          </ul>
          <div className={classes.instruction}>(Click image to zoom in)</div>

          <ul className={classes.swiperIndicator}>
            {items &&
              items.map((_item, idx) => (
                <li
                  key={idx}
                  className={clsx(
                    classes.swiperIndicatorItem,
                    currentIdx === idx && classes.active
                  )}
                  onClick={() => indicatorOnClick(idx)}
                />
              ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Swiper;
