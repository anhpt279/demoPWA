import { createUseStyles } from "react-jss";
import DEFAULT_THEME from "src/themes/theme";

export const useStyles = createUseStyles({
  root: { padding: "0 24px" },
  content: {
    padding: "201px 0 238px",
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
    flexDirection: "column",
    "& img": {
      width: "103px",
      height: "103px",
      objectFit: "cover",
      margin: "0 auto",
    },
    "& p:nth-child(2)": {
      color: DEFAULT_THEME.theme.palette.text.dark,
      fontWeight: "700",
      fontSize: "32px",
      lineHeight: "40px",
      textAlign: "center",
      margin: "42px 0 8px",
    },
    "& p:nth-child(3)": {
      fontWeight: "400",
      fontSize: "16px",
      lineHeight: "24px",
      textAlign: "center",
      color: DEFAULT_THEME.theme.palette.text.cardText,
      marginBottom: "48px",
    },
    "& p:nth-child(5)": {
      marginTop: "16px",
      fontWeight: "400",
      fontSize: "14px",
      lineHeight: "24px",
      textAlign: "center",
      color: DEFAULT_THEME.theme.palette.text.primary,
    },
  },
  rootPopUp: {
    margin: 0,
    padding: 0,
    position: "fixed",
    width: "100%",
    minHeight: "100vh",
    background: "rgba(0, 0, 0, 0.6)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  location: {
    fontSize: "25px",
    color: "red",
  },
  dot: {
    width: "16px",
    height: "16px",
    borderRadius: "50%",
    border: "3px solid white",
    backgroundColor: "#007AFF",
  },
  bigDot: {
    width: "92px",
    height: "92px",
    borderRadius: "50%",
    border: "3px solid white",
    backgroundColor: "#007AFF",
    opacity: "50%",
    transform: "translate(-40%, -40%)",
  },
});
