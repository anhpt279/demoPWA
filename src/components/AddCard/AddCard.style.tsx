import { createUseStyles } from "react-jss";
import DEFAULT_THEME from "../../themes/theme";

export const useStyles = createUseStyles({
  root: {
    paddingTop: 18,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: "100vh",
  },
  addCard: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    width: "100%",
  },
  addCardHeader: {
    fontWeight: "700",
    fontSize: 18,
    lineHeight: "24px",
    textAlign: "center",
    color: DEFAULT_THEME.theme.palette.text.titleText,
    width: "100%",
  },
  addCardBack: {
    fontSize: 16,
  },
  contentAdd: {
    display: "flex",
    flexDirection: "column",
    gap: "22px",
  },
  titleAdd: {
    fontWeight: 600,
    fontSize: 14,
    width: "100%",
    lineHeight: "24px",
  },
  descAdd: {
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
  inputCredit: {
    margin: "16px 0 6px 0",
    "&  input": {
      borderBottom: `1px solid ${DEFAULT_THEME.theme.palette.text.secondary} `,
      width: "100%",
      padding: "10px 0",
      outline: "none",
      "&::placeholder": {
        fontWeight: 400,
        fontSize: 14,
        color: DEFAULT_THEME.theme.palette.text.secondary,
        lineHeight: "24px",
      },
    },
  },
  imgCredit: {
    display: "flex",
    gap: "8px",
  },
  cardName: {
    marginTop: "16px",
    "& label": {
      fontSize: "12px",
      lineHeight: "16px",
      fontWeight: 500,
      color: DEFAULT_THEME.theme.palette.text.titleText,
    },
  },
  accountNumber: {
    marginTop: "16px",
    "& label": {
      fontSize: "12px",
      lineHeight: "16px",
      fontWeight: 500,
      color: DEFAULT_THEME.theme.palette.text.titleText,
    },
  },
  exp: {
    marginTop: "16px",
    "& label": {
      fontSize: "12px",
      lineHeight: "16px",
      fontWeight: 500,
      color: DEFAULT_THEME.theme.palette.text.titleText,
    },
  },
  textEnd: {
    fontSize: "14px",
    lineHeight: "24px",
    fontWeight: 400,
    color: DEFAULT_THEME.theme.palette.text.titleText,
    display: "flex",
    alignItems: "flex-start",
    gap: "12px",
  },
  addCardBtn: {
    marginBottom: "64px",
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
    marginTop: 14,
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
  required: {
    backgroundColor: DEFAULT_THEME.theme.palette.background.onBoarding,
    opacity: 0.5,
    alignItems: "center",
    display: "flex",
    justifyContent: "center",
    padding: "4px 8px",
    borderRadius: "8px",
    fontSize: 12,
    lineHeight: "16px",
    color: DEFAULT_THEME.theme.palette.text.default,
  },
  paymentButton: {
    position: "relative",
    top: "404px",
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
  selectBackground: {
    backgroundColor: "#E5F5EE",
    border: "1px solid #179770 ",

    "& input": {
      backgroundColor: "#E5F5EE",
    },
  },
  icon: {},
  add: {
    backgroundColor: DEFAULT_THEME.theme.palette.background.onBoarding,
    width: 44,
    height: 44,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 25,
    fontSize: 24,
    color: DEFAULT_THEME.theme.palette.text.default,
    margin: "40px auto 0 auto",
  },
});
