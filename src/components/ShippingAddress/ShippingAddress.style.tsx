import { createUseStyles } from "react-jss";
import DEFAULT_THEME from "../../themes/theme";

export const useStyles = createUseStyles({
  shippingAddressBill: {
    "& > p": {
      color: DEFAULT_THEME.theme.palette.text.titleText,
      fontWeight: "700",
      fontSize: 18,
      lineHeight: "24px",
      padding: "10px 0",
    },
  },
  shippingInput: {
    display: "flex",
    flexDirection: "column",
    marginTop: 16,
  },
  nameInput: {
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "9px",
    flex: 1,
  },
  firstName: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    margin: "auto",
    "& > input": {
      borderBottom: `1px solid ${DEFAULT_THEME.theme.palette.text.secondary} `,
      width: "100%",
      outline: "none",
      padding: "10px 0",
      "&::placeholder": {
        fontWeight: 400,
        fontSize: 14,
        lineHeight: "24px",
        color: DEFAULT_THEME.theme.palette.text.secondary,
        padding: "10px 0",
      },
    },
  },
  lastName: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    margin: "auto",
    "& > input": {
      borderBottom: `1px solid ${DEFAULT_THEME.theme.palette.text.secondary} `,
      outline: "none",
      width: "100%",
      padding: "10px 0",
      "&::placeholder": {
        fontWeight: 400,
        fontSize: 14,
        color: DEFAULT_THEME.theme.palette.text.secondary,
        lineHeight: "24px",
        padding: "10px 0",
      },
    },
  },
  emailInput: {
    width: "100%",
    marginTop: 16,
    display: "flex",
    flexDirection: "column",
    "& > input": {
      borderBottom: `1px solid ${DEFAULT_THEME.theme.palette.text.secondary} `,
      width: "100%",
      outline: "none",
      padding: "10px 0",
      "&::placeholder": {
        fontWeight: 400,
        fontSize: 14,
        color: DEFAULT_THEME.theme.palette.text.secondary,
        lineHeight: "24px",
        padding: "10px 0",
      },
    },
  },
  addressInput: {
    width: "100%",
    marginTop: 16,
    display: "flex",
    flexDirection: "column",
    "& > input": {
      borderBottom: `1px solid ${DEFAULT_THEME.theme.palette.text.secondary} `,
      width: "100%",
      padding: "10px 0",
      outline: "none",
      "&::placeholder": {
        fontWeight: 400,
        fontSize: 14,
        color: DEFAULT_THEME.theme.palette.text.secondary,
        lineHeight: "24px",
        padding: "10px 0",
      },
    },
  },
  selectInput: {
    width: "100%",
    marginTop: 16,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "9px",
  },
  district: {
    width: "100%",
  },
  subDistrict: {
    width: "100%",
  },
  zipPhone: {
    display: "flex",
    gap: "9px",
    marginTop: 16,
    width: "100%",
  },
  zipInput: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    "& > input": {
      borderBottom: `1px solid ${DEFAULT_THEME.theme.palette.text.secondary} `,
      width: "100%",
      padding: "10px 0",
      outline: "none",
      "&::placeholder": {
        fontWeight: 400,
        fontSize: 14,
        color: DEFAULT_THEME.theme.palette.text.secondary,
        lineHeight: "24px",
        padding: "10px 0",
      },
    },
  },
  phoneInput: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    "& > input": {
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
  line: {
    marginTop: "16px",
    height: 8,
    width: "100%",
    backgroundColor: DEFAULT_THEME.theme.palette.background.review,
  },
  checkBill: {
    display: "flex",
    marginTop: 16,
    justifyContent: "start",
    alignItems: "center",

    "& > label": {
      marginLeft: "8px",
      fontWeight: 400,
      fontSize: "14px",
      lineHeight: "24px",
      color: DEFAULT_THEME.theme.palette.text.titleText,
    },

    "& > input": {
      width: "24px",
      height: "24px",
      accentColor: "#179770",
      cursor: "pointer",
    },
  },
});
