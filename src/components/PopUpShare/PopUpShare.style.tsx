import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles(() => ({
  root: { width: "100%", height: "auto" },
  overlay: {
    position: "fixed",
    top: "0px",
    left: "0px",
    right: " 0px",
    bottom: "0px",
    backgroundColor: "black",
    opacity: 0.8,
    zIndex: 10,
  },
  exit: {
    position: "absolute",
    top: "18px",
    right: "18px",
  },
  popup: {
    position: "fixed",
    zIndex: 20,
    left: "50%",
    top: "50%",
    width: "calc(100% - 48px)",
    height: "fit-content",
    transform: "translate(-50% , -50%)",
    padding: "13px 24px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    backgroundColor: "white",
    borderRadius: "8px",
    "& p:nth-child(2)": {
      fontSize: "16px",
      lineHeight: "24px",
      fontWeight: "600",
      color: "#374151",
    },
    "& p:nth-child(3)": {
      fontSize: "12px",
      lineHeight: "16px",
      fontWeight: "400",
      color: "#374151",
      marginTop: "8px",
    },
  },
  referLink: {},
}));
