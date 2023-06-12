import React, { FC, HTMLAttributes, useState } from "react";
import { useStyles } from "./ZoomPhoto.style";
import { ReactComponent as Next } from "../../assets/images/YourOrder/ButtonsNext.svg";
import { ReactComponent as Prev } from "../../assets/images/YourOrder/ButtonsPrev.svg";
import { ReactComponent as Exit } from "../../assets/images/YourOrder/ExitWhite.svg";
import clsx from "clsx";
import { ISwiperItem } from "../Swiper/types";

interface IZoomPhotoProps {
  toggleZoom: (state: boolean) => void;
  data?: any;
  slideIndex: number;
}

export const ZoomPhoto: FC<IZoomPhotoProps & HTMLAttributes<HTMLDivElement>> =
  React.memo((props) => {
    const { toggleZoom, data, slideIndex, ...otherProps } = props;
    const classes = useStyles();
    const [indexSlider, setIndexSlider] = useState<number>(slideIndex);
    const handleClickOverlay = () => {
      toggleZoom(false);
    };
    const slideStyle: React.CSSProperties = {
      transform: `translateX(-${100 * indexSlider}%)`,
    };

    return (
      <div {...otherProps} className={clsx(classes.root, otherProps.className)}>
        <div className={classes.overlay} onClick={handleClickOverlay}></div>
        <div className={classes.zoomSlide}>
          <div className={classes.zoomSlideWarper}>
            <div className={classes.zommSlideImage} style={slideStyle}>
              {data?.map((item: ISwiperItem, index: number) => (
                <img
                  key={index}
                  src={item.image}
                  alt={item.id}
                  className={classes.sliderImage}
                />
              ))}
            </div>
          </div>
        </div>
        <div className={classes.rbtZoom}>
          {indexSlider !== data.length - 1 && (
            <Next
              onClick={() => setIndexSlider(indexSlider + 1)}
              className={classes.next}
            />
          )}
          {indexSlider !== 0 && (
            <Prev
              onClick={() => setIndexSlider(indexSlider - 1)}
              className={classes.prev}
            />
          )}
        </div>
        <Exit
          onClick={() => toggleZoom(false)}
          className={classes.closeButton}
        />
      </div>
    );
  });

export default ZoomPhoto;
