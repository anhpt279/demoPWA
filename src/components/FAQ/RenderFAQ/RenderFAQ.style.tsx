import { createUseStyles } from "react-jss";
import DEFAULT_THEME from "../../../themes/theme";

export const useStyles = createUseStyles({
  root: {},
  questionTitle: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 21,
    width: "100%",
    height: "100%",
    "& p": {
      fontWeight: "600",
      fontSize: 14,
      lineHeight: "24px",
      color: DEFAULT_THEME.theme.palette.text.titleText,
    },
  },
  iconUpDown: {
    width: 24,
    height: 24,
  },
  questionLine: {
    width: "100%",
    borderBottom: "1px solid #e5e7eb",
    marginTop: 12,
  },
  questionDetail: {
    overflow: "hidden",
    fontWeight: "40 0",
    fontSize: 14,
    lineHeight: "24px",
    color: DEFAULT_THEME.theme.palette.text.titleText,
    marginTop: 16,
    transition: "max-height 0.3s ease",
  },
  question: {
    marginBottom: 30,
  },
});
