import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
  root: {
    width: "100%",
    height: "100vh",
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  logo: {
    paddingTop: 40,
  },
  content: {
    color: "#00AC77",
    "& > h3": {
      fontSize: "32px",
      lineHeight: "40px",
      letterSpacing: "0.25%",
      fontWeight: "650",
      marginBottom: "8px",
    },
    "& > p": {
      fontSize: "16px",
      lineHeight: "24px",
      letterSpacing: "0.5%",
      fontWeight: "400",
    },
  },
  flexContent: { height: 200, flexGrow: 1 },
  btnAction: {
    marginTop: "-8px",
    paddingBottom: "35%",
    "& > button": {
      margin: "8px 0px",
    },
  },
});
