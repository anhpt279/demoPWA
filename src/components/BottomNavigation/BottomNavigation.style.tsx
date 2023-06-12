import { createUseStyles } from "react-jss";
import DEFAULT_THEME from "../../themes/theme";

export const useStyles = createUseStyles({
  root: {
    width: "101vw",
    height: "64px",
    background: DEFAULT_THEME.theme.palette.common.white,
    boxShadow: "0px -4px 14px -3px rgba(16, 24, 40, 0.06)",
    position: "fixed",
    bottom: -1,
    left: 0,
    zIndex: 200,
    display: "grid",
    alignContent: "center",
    transition: ".4s",
    padding: "0 56px",
  },
  navList: {
    width: "100%",
    height: "100%",
    justifyContent: "space-around",
    alignItems: "center",
    display: "flex",
  },
  navItem: {
    width: "100%",
    height: "inherit",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  navButton: {
    display: "flex",
    flexDirection: "column",
    background: "transparent",
    "&>p": {
      fontSize: "12px",
      color: DEFAULT_THEME.theme.palette.text.secondary,
      marginTop: 4,
    },
    "&>img": {
      width: "24px",
      margin: "0px auto",
    },
  },
  active: {
    color: `${DEFAULT_THEME.theme.palette.background.onBoarding} !important`,
  },
});
