import { createUseStyles } from "react-jss";
import DEFAULT_THEME from "src/themes/theme";

export const useStyles = createUseStyles({
  root: {},
  searchItem: {
    alignItems: "center",
    padding: "10px 6.8px",
    width: "100%",
    display: "flex",
    gap: 10.8,
    background: DEFAULT_THEME.theme.palette.background.default,
    "&:hover": {
      background: DEFAULT_THEME.theme.palette.background.hover,
    },
    "&:active": {
      background: DEFAULT_THEME.theme.palette.background.hover,
    },
  },
  searchItemContent: {
    display: "flex",
    flexDirection: "column",
    gap: 2,
    width: "90%",
    "& svg": {
      width: "10px",
      height: "10px",
    },
    "& div:nth-child(1)": {
      overflow: "hidden",
      direction: "ltr",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap",
      fontSize: 14,
      fontWeight: 400,
      color: DEFAULT_THEME.theme.palette.text.title,
      lineHeight: "24px",
    },
    "& div:nth-child(2)": {
      overflow: "hidden",
      direction: "ltr",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap",
      fontSize: 12,
      fontWeight: 500,
      lineHeight: "16px",
      color: DEFAULT_THEME.theme.palette.text.secondary,
    },
  },
});
