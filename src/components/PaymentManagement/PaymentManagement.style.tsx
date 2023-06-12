import { createUseStyles } from "react-jss";
import DEFAULT_THEME from "../../themes/theme";

export const useStyles = createUseStyles({
  root: {
    width: "100%",
    height: "auto",
  },
  payment: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    width: "100%",
    marginTop: 16,
  },
  paymentHeader: {
    fontWeight: "700",
    fontSize: 18,
    lineHeight: "24px",
    textAlign: "center",
    color: DEFAULT_THEME.theme.palette.text.titleText,
    width: "100%",
  },
  paymentBack: {
    fontSize: 16,
  },
  paymentContent: {
    marginTop: 32,
  },
  paymentTitle: {
    color: DEFAULT_THEME.theme.palette.text.titleText,
    fontWeight: "600",
    fontSize: 14,
    lineHeight: "24px",
    padding: "18px 0",
  },
  paymentButton: {
    marginTop: "40px",
  },
  paymentOption: {
    display: "grid",
    alignItems: "center",
    gridTemplateColumns: "1fr 6fr 1fr",
    border: `1px solid ${DEFAULT_THEME.theme.palette.background.bar}`,
    width: "100%",
    padding: "7px 16px",
    marginTop: "16px",
    borderRadius: "4px",
    backgroundColor: DEFAULT_THEME.theme.palette.background.default,
  },
  content: {
    display: "flex",
    flexDirection: "column",
    gap: "4px",
    marginLeft: "16px",
  },
  title: {
    fontWeight: 600,
    fontSize: 14,
    width: "100%",
    lineHeight: "24px",
  },
  desc: {
    color: DEFAULT_THEME.theme.palette.text.titleText,
    fontWeight: 400,
    fontSize: 12,
    width: "100%",
    lineHeight: "16px",
  },
  input: {
    "& input": {
      width: "24px",
      accentColor: "#179770",
      height: "24px",
    },
  },
  selectBackground: {
    border: "1px solid #D1D5DB ",

    "& input": {
      backgroundColor: "#E5F5EE",
    },
  },
  icon: {},
  containerInput: {
    position: "relative",
    zIndex: 2,
  },
  overlay: {
    backgroundColor: "#E5E7EB",
    width: "100%",
    padding: "18px 16px",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    borderRadius: "4px",
    position: "absolute",
    top: 0,
    left: 0,
    opacity: 0,
    zIndex: -1,
  },
  appearBin: {
    opacity: 1,
  },
  turnLeft: {
    transform: "translateX(-60px)",
    transition: "transform 0.5s ease-out",
  },
  overlayPopup: {
    position: "fixed",
    top: "0px",
    left: "0px",
    right: " 0px",
    bottom: "0px",
    backgroundColor: "black",
    opacity: 0.8,
    zIndex: 100,
  },
  popup: {
    position: "fixed",
    zIndex: 200,
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
    textAlign: "center",
    "& p:nth-child(1)": {
      fontSize: "18px",
      lineHeight: "24px",
      fontWeight: "600",
      color: "#374151",
    },
    "& p:nth-child(2)": {
      fontSize: "14px",
      lineHeight: "16px",
      fontWeight: "400",
      color: "#374151",
      marginTop: "8px",
    },
  },
  containedbtn: {
    marginTop: "32px",
    display: "flex",
    gap: "9px",
  },
  img: {
    height: "24px",
    width: "24px",
    objectFit: "contain",
  },
});
