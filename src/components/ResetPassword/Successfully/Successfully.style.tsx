import { createUseStyles } from "react-jss";
// import DEFAULT_THEME from "src/themes/theme";
export const useStyles = createUseStyles(() => ({
  root: {
    paddingRight: "24px",
    paddingLeft: "24px",
    paddingTop: "148px",
  },
  content: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "column",
    height: "calc(100vh - 148px)",
    "& img": {
      width: "100%",
      height: "100%",
      objectFit: "contain",
      position: "relative",
      bottom: "52px",
    },
  },
  btn: {
    marginBottom: 64,
  },
  title: {
    display: "flex",
    flexDirection: "column",
    gap: "8px",
    "& h1": {
      fontSize: "32px",
      fontWeight: "700",
      textAlign: "center",
      lineHeight: "40px",
      color: "#374151",
    },
    "& p": {
      fontSize: "16px",
      fontWeight: "400",
      textAlign: "center",
      lineHeight: "24px",
      color: "#6B7280",
    },
  },
}));
