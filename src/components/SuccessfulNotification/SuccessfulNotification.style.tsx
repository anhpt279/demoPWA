import { createUseStyles } from "react-jss";
import DEFAULT_THEME from "../../themes/theme";

export const useStyles = createUseStyles({
  root: {
    padding: "18px 24px 16px",
    backgroundColor: DEFAULT_THEME.theme.palette.background.default,
  },
  successContent: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    flexDirection: "column",
    marginTop: "148px",
  },
  successTitle: {
    fontWeight: "700",
    fontSize: 32,
    lineHeight: "40px",
    color: DEFAULT_THEME.theme.palette.text.dark,
  },
  successDesc: {
    marginTop: "8px",
    color: DEFAULT_THEME.theme.palette.text.cardText,
    fontSize: "16px",
    lineHeight: "24px",
  },
  successImg: {
    marginTop: "87px",
  },
  successBtn: {
    marginTop: "153px",
    textTransform: "uppercase",
  },
});
