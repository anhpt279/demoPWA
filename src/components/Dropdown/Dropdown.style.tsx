import { createUseStyles } from "react-jss";
import DEFAULT_THEME from "../../themes/theme";

export const useStyles = createUseStyles({
  root: {
    width: "100%",
    position: "relative",
    userSelect: "none",
  },
  dropdownBtn: {
    padding: "10px 0",
    borderBottom: `1px solid ${DEFAULT_THEME.theme.palette.text.secondary} `,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    cursor: "pointer",
    "& > p": {
      fontWeight: 400,
      fontSize: 14,
      lineHeight: "24px",
      color: DEFAULT_THEME.theme.palette.text.secondary,
    },
  },
  dropdownContent: {
    position: "absolute",
    width: "100%",
    backgroundColor: DEFAULT_THEME.theme.palette.background.default,
    boxShadow:
      "0px 10px 15px -3px rgba(16, 24, 40, 0.1), 0px 4px 6px -4px rgba(16, 24, 40, 0.1)",
    borderBottomRightRadius: "8px",
    borderBottomLeftRadius: "8px",
    overflow: "scroll",
  },
  dropdownItem: {
    padding: 10,
    cursor: "pointer",
    transition: "all 0.2s",
    borderBottom: `1px solid ${DEFAULT_THEME.theme.palette.text.secondary} `,
    fontWeight: 500,
    fontSize: "14px",
    lineHeight: "24px",
    "&:hover": {
      backgroundColor: DEFAULT_THEME.theme.palette.background.onBoarding,
    },
    "&:last-child": {
      borderBottom: "none",
    },
  },
});
