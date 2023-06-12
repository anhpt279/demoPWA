import { createUseStyles } from "react-jss";
export {};
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
    gap: "80px",
    "& img": {
      width: "100%",
      height: "214px",
      objectFit: "contain",
      margin: "0 auto",
    },
  },
  btn: {},
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
