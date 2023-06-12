import { createUseStyles } from "react-jss";
import DEFAULT_THEME from "../../themes/theme";

export const useStyles = createUseStyles({
  root: { width: "100%", height: "auto" },
  paymentHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "16px 0 0 0",
  },
  paymentTitle: {
    color: DEFAULT_THEME.theme.palette.text.titleText,
    fontWeight: "700",
    fontSize: 18,
  },
  payment: {
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

  inputBank: {
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
  bankName: {
    "& label": {
      fontSize: "12px",
      lineHeight: "16px",
      fontWeight: 500,
      color: DEFAULT_THEME.theme.palette.text.titleText,
    },
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
  required: {
    color: DEFAULT_THEME.theme.palette.text.link,
    fontWeight: 400,
    fontSize: 12,
    lineHeight: "18px",
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
    margin: "16px auto 0 auto",
  },
});
