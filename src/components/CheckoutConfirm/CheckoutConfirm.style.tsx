import { createUseStyles } from "react-jss";
import DEFAULT_THEME from "../../themes/theme";

export const useStyles = createUseStyles({
  root: {
    padding: "0px 0px 0px",
    backgroundColor: DEFAULT_THEME.theme.palette.background.default,
  },
  checkout: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingTop: 18,
    width: "100%",
  },
  checkoutHeader: {
    fontWeight: "700",
    fontSize: 18,
    lineHeight: "24px",
    textAlign: "center",
    color: DEFAULT_THEME.theme.palette.text.titleText,
    width: "100%",
  },
  checkoutBack: {
    fontSize: 16,
  },
  shippingAddress: {
    marginTop: 32,
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: 16,
    "& > p:first-child": {
      color: DEFAULT_THEME.theme.palette.text.titleText,
      fontWeight: "700",
      fontSize: 18,
      lineHeight: "24px",
    },

    "& p:nth-child(2)": {
      color: DEFAULT_THEME.theme.palette.text.link,
      fontWeight: 400,
      fontSize: 12,
      lineHeight: "18px",
      marginTop: 3,
    },
  },
  surContent: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  content: {
    marginTop: 16,
    "& p": {
      color: DEFAULT_THEME.theme.palette.text.title,
      fontWeight: 600,
      fontSize: 14,
      lineHeight: "24px",
    },
  },
  phone: {
    "& svg": {
      marginTop: 3,
    },
    display: "flex",
    alignItems: "start",
    gap: 10,
    marginTop: 8,
    color: DEFAULT_THEME.theme.palette.text.title,
    fontWeight: 400,
    fontSize: 14,
    lineHeight: "24px",
    "& i": {
      marginRight: 8,
      fontSize: 14,
    },
  },
  address: {
    "& svg": {
      marginTop: 3,
    },
    "& div": {
      width: "60%",
    },
    display: "flex",
    alignItems: "start",
    gap: 10,
    marginTop: 8,
    color: DEFAULT_THEME.theme.palette.text.title,
    fontWeight: 400,
    fontSize: 14,
    lineHeight: "24px",
    "& i": {
      fontSize: 14,
      marginRight: 8,
    },
  },
  shippingAddressBill: {},
  add: {
    color: DEFAULT_THEME.theme.palette.text.title,
    fontWeight: 400,
    fontSize: 14,
    lineHeight: "24px",
    marginTop: 16,
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
  deliveryOption: {},
  deliveryHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  deliveryTitle: {
    color: DEFAULT_THEME.theme.palette.text.titleText,
    fontWeight: "700",
    fontSize: 18,
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
  instant: {
    display: "grid",
    gridTemplateColumns: "1fr 3fr 1fr",
    alignItems: "center",
    border: `1px solid ${DEFAULT_THEME.theme.palette.background.bar}`,
    width: "100%",
    borderRadius: "4px",
    padding: "7px 16px",
  },
  instantContent: {
    display: "flex",
    flexDirection: "column",
    gap: "4px",
  },
  instantTitle: {
    fontWeight: 600,
    fontSize: 14,
    lineHeight: "24px",
    width: "100%",
  },
  instantDesc: {
    fontWeight: 400,
    fontSize: 12,
    lineHeight: "16px",
    width: "100%",
    color: DEFAULT_THEME.theme.palette.text.titleText,
  },
  instantInput: {
    "& input": {
      width: "24px",
      accentColor: "#179770",
      height: "24px",
    },
  },
  slow: {
    display: "grid",
    gridTemplateColumns: "1fr 3fr 1fr",
    alignItems: "center",
    border: `1px solid ${DEFAULT_THEME.theme.palette.background.bar}`,
    width: "100%",
    padding: "7px 16px",
    marginTop: "16px",
    borderRadius: "4px",
  },
  slowContent: {
    display: "flex",
    flexDirection: "column",
    gap: "4px",
  },
  slowTitle: {
    fontWeight: 600,
    fontSize: 14,
    width: "100%",
    lineHeight: "24px",
  },
  slowDesc: {
    color: DEFAULT_THEME.theme.palette.text.titleText,
    fontWeight: 400,
    fontSize: 12,
    width: "100%",
    lineHeight: "16px",
  },
  slowInput: {
    "& input": {
      width: "24px",
      accentColor: "#179770",
      height: "24px",
    },
  },
  instantPrice: {
    fontWeight: 600,
    fontSize: 14,
    lineHeight: "24px",
  },
  slowPrice: {
    fontWeight: 600,
    fontSize: 14,
    lineHeight: "24px",
  },
  paymentOption: {},
  paymentHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  paymentTitle: {
    color: DEFAULT_THEME.theme.palette.text.titleText,
    fontWeight: "700",
    fontSize: 18,
    lineHeight: "24px",
    padding: "18px 0",
  },
  payment: {
    display: "grid",
    alignItems: "center",
    gridTemplateColumns: "1fr 6fr",
    border: `1px solid ${DEFAULT_THEME.theme.palette.background.bar}`,
    width: "100%",
    padding: "7px 16px",
    marginTop: "16px",
    borderRadius: "4px",
  },
  Content: {
    display: "flex",
    flexDirection: "column",
    gap: "4px",
    marginLeft: "16px",
  },
  Title: {
    fontWeight: 600,
    fontSize: 14,
    width: "100%",
    lineHeight: "24px",
  },
  Desc: {
    color: DEFAULT_THEME.theme.palette.text.titleText,
    fontWeight: 400,
    fontSize: 12,
    width: "100%",
    lineHeight: "16px",
  },
  Input: {
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

  orderReview: {
    "& i": {
      fontSize: 16,
    },
  },
  orderHeader: {
    marginTop: 16,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  orderTitle: {
    fontWeight: 700,
    fontSize: 18,
    lineHeight: "24px",
    color: DEFAULT_THEME.theme.palette.text.titleText,
    width: "100%",
  },
  orderContent: {
    marginTop: 16,

    "& p": {
      marginBottom: 16,
      fontSize: 12,
      color: DEFAULT_THEME.theme.palette.text.cardText,
    },
  },

  policyCheck: {
    marginBottom: 32,
    position: "relative",
  },
  policyHr: {
    width: "100%",
    borderBottom: "1px solid #e6e6e6",
    marginTop: 16,
  },
  policy: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    marginTop: 16,
    "& input": {
      width: "24px",
      accentColor: "#179770",
      height: "24px",
    },
    "& p": {
      width: "100%",
      color: DEFAULT_THEME.theme.palette.text.titleText,
      fontSize: 14,
      lineHeight: "24px",
      fontWeight: 400,
      marginLeft: 8,
    },
    "& a": {
      textDecoration: "none",
      color: DEFAULT_THEME.theme.palette.text.titleText,
      fontSize: 14,
      lineHeight: "24px",
      fontWeight: 600,
    },
  },
  backTop: {
    backgroundColor: DEFAULT_THEME.theme.palette.background.onBoarding,
    width: 40,
    height: 40,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 25,
    position: "absolute",
    right: "0",
    bottom: "-16px",
    "& > i": {
      color: DEFAULT_THEME.theme.palette.common.white,
    },
  },
  checkoutButton: {
    marginBottom: 40,
  },
});
