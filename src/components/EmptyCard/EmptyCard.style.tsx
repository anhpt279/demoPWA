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
  paymentHead: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  paymentTitle: {
    color: DEFAULT_THEME.theme.palette.text.titleText,
    fontWeight: "600",
    fontSize: 14,
    lineHeight: "24px",
    padding: "18px 0",
  },
  paymentButton: {
    position: "relative",
    top: "40px",
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
    backgroundColor: "#E5F5EE",
    border: "1px solid #179770 ",

    "& input": {
      backgroundColor: "#E5F5EE",
    },
  },
  icon: {},
});
