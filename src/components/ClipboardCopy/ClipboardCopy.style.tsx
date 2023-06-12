import { createUseStyles } from "react-jss";
import DEFAULT_THEME from "../../themes/theme";

export const useStyles = createUseStyles({
  root: {
    display: "flex",
    padding: "10px 24px",
    justifyContent: "space-between",
    alignItems: "center",
    cursor: "pointer",
    position: "relative",
    width: "100%",
    backgroundColor: DEFAULT_THEME.theme.palette.background.input,
    borderRadius: "6px",
    height: "44px",
    "&:focus": {
      backgroundColor: "transparent",
      color: "none",
      outline: "none",
    },
    "& input": {
      width: "100%",
      backgroundColor: "transparent",
      fontWeight: 400,
      fontSize: 14,
      lineHeight: "24px",
      color: DEFAULT_THEME.theme.palette.text.titleText,
      cursor: "pointer",
      outline: "none",
    },
  },
  copyButton: {
    cursor: "pointer",
    "& img": {
      width: "24px",
      height: "24px",
    },
  },
  copied: {
    position: "absolute",
    fontWeight: 400,
    fontSize: 14,
    lineHeight: "24px",
    color: DEFAULT_THEME.theme.palette.text.titleText,
    backgroundColor: DEFAULT_THEME.theme.palette.background.bar,
    padding: "5px 10px",
    borderRadius: "6px",
    top: "-39px",
    left: "50%",
  },
  arrowDown: {
    position: "absolute",
    top: "32px",
    width: "0",
    height: "0",
    borderLeft: "10px solid transparent",
    borderRight: "10px solid transparent",
    borderTop: `8px solid ${DEFAULT_THEME.theme.palette.background.bar}`,
  },
});
