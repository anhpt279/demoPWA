import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles(() => ({
  root: {
    backgroundColor: "#00AC77",
    width: "100vw",
    height: "100vh",
  },
  content: {
    height: "80%",
    backgroundColor: "#FFFFFF",
    padding: "0px 24px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    "& img": {
      display: "block",
      margin: "0 auto",
    },
  },

  bodyContent: {
    "&>h3": {
      width: "inherit",
      fontSize: "32px",
      lineHeight: "40px",
      letterSpacing: "0.25%",
      fontWeight: "650",
      color: "#111827",
    },
    "&>p": {
      width: "inherit",
      margin: "8px 0px 0px 0px",
      wordBreak: "break-word",
      fontSize: "16px",
      lineHeight: "24px",
      fontWeight: "400",
      color: "#6B7280",
    },
  },
  borderRadiusLeft: {
    borderRadius: "0px 0px 0px 88px",
  },
  borderRadiusRight: {
    borderRadius: "0px 0px 88px 0px",
  },
  footer: {
    height: "20%",
    padding: "0px 24px",
    color: "#FFFFFF",
    justifyContent: "space-between",
    alignItems: "center",
    display: "flex",
    "&>ul": { display: "flex", justifyContent: "space-between" },
    "&>img": {},
    " & > ul": {
      marginLeft: "-8px",
    },
    "& ul li": {
      margin: "0px 8px",
    },
  },
  btnSkip: {
    display: "flex",
    color: "#FFFFFF",
    textTransform: "uppercase",
    alignItems: "center",
    justifyContent: "center",
    "&>p": {
      fontSize: "14px",
      lineHeight: "24px",
      fontWeight: "700",
    },
  },
  image: {
    width: "100%",
    objectFit: "contain",
    height: "224px",
  },
}));
