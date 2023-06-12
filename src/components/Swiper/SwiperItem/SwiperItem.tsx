import { useStyles } from "./SwiperItem.style";
import { FC, HTMLAttributes } from "react";
import clsx from "clsx";

interface ISwiperItem {
  image: string;
  id: string;
}

const SwiperItem: FC<ISwiperItem & HTMLAttributes<HTMLDivElement>> = (
  props: any
) => {
  const { image, id, ...otherProps } = props;
  const classes = useStyles();
  return (
    <li
      {...otherProps}
      className={clsx(classes.swiperItem, otherProps.className)}
    >
      <img
        src={image}
        alt={id}
        className={classes.swiperImage}
        draggable={false}
      />
    </li>
  );
};

export default SwiperItem;
