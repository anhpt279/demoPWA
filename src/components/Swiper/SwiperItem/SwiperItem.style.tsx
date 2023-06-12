import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
  swiperItem: {
    width: "100%",
    height: "274px",
    userSelect: "none",
    flexShrink: 0,
  },
  swiperImage: {
    objectFit: "contain",
    width: "100%",
    maxWidth: "100%",
    maxHeight: "100%",
  },
});
