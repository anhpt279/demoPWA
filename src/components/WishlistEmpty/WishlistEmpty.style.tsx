import { createUseStyles } from "react-jss";
import DEFAULT_THEME from "../../themes/theme";

export const useStyles = createUseStyles({
  empty: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    width: "100%",
    marginTop: 16,
    position: "relative",
  },
  emptyHeader: {
    fontWeight: "700",
    fontSize: 18,
    lineHeight: "24px",
    textAlign: "center",
    color: DEFAULT_THEME.theme.palette.text.titleText,
    width: "100%",
  },
  emptyBack: {
    fontSize: 16,
    position: "absolute",
  },
  emptyContent: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50,
  },
  emptyImg: {
    width: 325,
    height: 220,
    marginTop: 80,
    "& img": {
      width: "100%",
      height: "100%",
    },
  },
  emptyTitle: {
    marginTop: 28,
    fontWeight: 700,
    fontSize: "32px",
    lineHeight: "40px",
    textAlign: "center",
  },
  emptyDesc: {
    marginTop: 8,
    fontWeight: 400,
    fontSize: 16,
    textAlign: "center",
    lineHeight: "24px",
    color: DEFAULT_THEME.theme.palette.text.cardText,
  },
  emptyButton: {
    marginTop: 212,
    width: "100%",
    backgroundColor: DEFAULT_THEME.theme.palette.background.input,
    borderRadius: "6px",
    height: "44px",
  },
});
