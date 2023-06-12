import { createUseStyles } from "react-jss";
import DEFAULT_THEME from "src/themes/theme";

export const useStyles = createUseStyles(() => ({
  root: {
    padding: "0 20px",
  },
  error: {
    padding: "140px 0 0 0",
    display: "flex",
    height: "100vh",
    justifyContent: "space-between",
    flexDirection: "column",
  },

  btn: {
    paddingBottom: "64px",
  },
  content: {
    "& img": {
      width: "100%",
      overflow: "hidden",
      fontWeight: 900,
      objectFit: "contain",
    },
    "& h2": {
      fontWeight: 700,
      fontSize: "30px",
      lineHeight: "40px",
      textAlign: "center",
      color: "#111827",
      marginTop: "18px",
    },
    "& p": {
      fontWeight: 700,
      fontSize: "30px",
      lineHeight: "40px",
      textAlign: "center",
      color: "#111827",
      // marginTop: "18px",
    },
  },
}));
