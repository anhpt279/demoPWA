import { createUseStyles } from "react-jss";
import DEFAULT_THEME from "../../themes/theme";

export const useStyles = createUseStyles({
  root: {
    width: "800px",
    maxWidth: "100%",
    padding: "20px 15px",
    margin: "0 auto",
  },
  swiperContainer: {
    width: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    touchAction: "pan-y",
  },
  swiperList: {
    display: "flex",
    minWidth: "100%",
    listStyle: "none",
    padding: 0,
    margin: 0,
    transition: "transform 0.3s ease-out",
  },
  swiperListIsSwiping: {
    display: "flex",
    minWidth: "100%",
    listStyle: "none",
    padding: 0,
    margin: 0,
    transition: "none",
  },
  instruction: {
    marginTop: 21,
    textAlign: "center",
    weight: 400,
    fontSize: 12,
    color: DEFAULT_THEME.theme.palette.text.secondary,
  },
  swiperIndicator: {
    display: "flex",
    justifyContent: "center",
    listStyle: "none",
    margin: "8px 0 0 0",
    padding: 0,
  },
  swiperIndicatorItem: {
    width: 8,
    height: 8,
    margin: "0 4px",
    borderRadius: "50%",
    backgroundColor: DEFAULT_THEME.theme.dotSlide.backgroundColor,
    cursor: "pointer",
  },
  active: {
    backgroundColor: DEFAULT_THEME.theme.palette.text.title,
  },
});
