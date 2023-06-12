import { createUseStyles } from "react-jss";
import DEFAULT_THEME from "../../themes/theme";

export const useStyles = createUseStyles({
  root: {
    width: "100%",
    height: "auto",
  },
  empty: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  emptyContent: {
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "80px",
  },
  emptyTitle: {
    color: DEFAULT_THEME.theme.palette.text.dark,
    fontWeight: 700,
    fontSize: 32,
    lineHeight: "40px",
  },
  emptyDesc: {
    marginTop: 8,
    color: DEFAULT_THEME.theme.palette.text.cardText,
    fontWeight: 400,
    fonstSize: 16,
    lineHeight: "24px",
  },
  emptyImg: {
    maxWidth: 233,
    maxHeight: 169,
    marginTop: 85,
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    position: "relative",
    "&>img": {
      width: "100%",
      height: "auto",
    },
    "& img:first-child": {
      position: "relative",
      zIndex: 5,
    },
    "& img:nth-child(2)": {
      position: "absolute",
      zIndex: 6,
      left: 0,
      top: "-7%",
    },
  },
  emptyButton: {
    marginTop: 155,
    "& button:active": {
      backgroundColor: DEFAULT_THEME.theme.palette.background.onBoarding,
      color: DEFAULT_THEME.theme.palette.text.default,
    },
  },
});
