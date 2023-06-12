import { createUseStyles } from "react-jss";
import DEFAULT_THEME from "../../themes/theme";

export const useStyles = createUseStyles({
  root: { width: "100%", height: "auto" },
  refer: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    width: "100%",
    marginTop: 16,
  },
  referHeader: {
    fontWeight: "700",
    fontSize: 18,
    lineHeight: "24px",
    textAlign: "center",
    color: DEFAULT_THEME.theme.palette.text.titleText,
    width: "100%",
  },
  referBack: {
    fontSize: 16,
  },
  referContent: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  referImg: {
    marginTop: 128,
  },
  referTitle: {
    marginTop: 28,
    fontWeight: 700,
    fontSize: "32px",
    lineHeight: "40px",
    textAlign: "center",
  },
  referDesc: {
    marginTop: 8,
    fontWeight: 400,
    fontSize: 16,
    textAlign: "center",
    lineHeight: "24px",
    color: DEFAULT_THEME.theme.palette.text.cardText,
  },
  referLink: {
    marginTop: 82,
    width: "100%",
    backgroundColor: DEFAULT_THEME.theme.palette.background.input,
    borderRadius: "6px",
    height: "44px",
    "&:focus": {
      backgroundColor: "none",
    },
  },
});
