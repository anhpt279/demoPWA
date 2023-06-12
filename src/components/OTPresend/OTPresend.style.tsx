import { createUseStyles } from "react-jss";
import DEFAULT_THEME from "../../themes/theme";

export const useStyles = createUseStyles(() => ({
  root: {
    // padding: "0px 24px",
  },
  time: {
    marginTop: "24px",
    fontWeight: "400",
    fontSize: "12px",
    lineHeight: "16px",
    color: "#374151",
    "& span": {
      color: "#111827",
      fontWeight: "700",
      marginLeft: "5px",
    },
  },
  check: {
    marginTop: "8px",
    fontWeight: "400",
    fontSize: "12px",
    lineHeight: "16px",
    color: "#9CA3AF",
    "& p": {
      "& span:nth-child(1)": {
        // paddingRight: "px",
      },
      "& span:nth-child(2)": {
        marginBottom: "3px",
        color: DEFAULT_THEME.theme.palette.text.primary,
        borderBottom: `1px solid ${DEFAULT_THEME.theme.palette.text.primary}`,
      },
    },
  },
}));
