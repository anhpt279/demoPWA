import { createUseStyles } from "react-jss";
import DEFAULT_THEME from "src/themes/theme";

export const useStyles = createUseStyles({
  root: {
    width: "100%",
    height: "auto",
  },
  wrapperHeader: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "auto",
  },
  header: {
    display: "flex",
    flexDirection: "column",
    height: "auto",
    borderRadius: "16px 16px 0 0",
    marginTop: -24,
    width: "100%",
    backgroundColor: DEFAULT_THEME.theme.palette.background.default,
  },

  preHeader: {
    width: "100%",
    height: "auto",

    "&>img": {
      width: "100%",
      height: "165px",
      imageRendering: "pixelated",
    },
  },

  martHeader: {
    color: DEFAULT_THEME.theme.palette.text.default,
    "& img": {
      maxWidth: "100%",
      height: "20px",
      imageRendering: "auto",
    },
    "&>div": {
      "&>button": {
        width: 44,
        height: 44,
        borderRadius: "50%",
        backgroundColor: "transparent",
      },
    },
  },
  btnHeader: {
    padding: "0px 24px",
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    position: "absolute",
    top: 24,
    opacity: 0.8,
    alignItems: "center",

    "&>button": {
      backgroundColor: DEFAULT_THEME.theme.palette.text.title,
      borderRadius: "50%",
      padding: "4px 4px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      "&>img": {
        opacity: "1 !important",
      },
    },
  },

  rateMart: {
    display: "flex",
    color: DEFAULT_THEME.theme.palette.text.dark,
    borderBottom: `1px solid ${DEFAULT_THEME.theme.palette.text.disabled}`,
    fontSize: 14,
    fontWeight: 600,
    lineHeight: "24px",
    padding: "16px 0 8px 0",
    "&>img": {
      padding: "0 8px",
    },
  },

  martName: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottom: `1px solid ${DEFAULT_THEME.theme.palette.text.disabled}`,
    paddingBottom: 8,
    "&>p": {
      fontSize: 24,
      lineHeight: "32px",
      fontWeight: 650,
      color: DEFAULT_THEME.theme.palette.text.dark,
    },
  },

  hide: {
    display: "none",
  },
  body: {},
  contentWrapper: {
    marginTop: 24,
    marginBottom: 36,
    height: "fit-content",
  },
  category: {
    display: "flex",
    alignItems: "center",
    lineHeight: "24px",
    marginTop: 32,
    "&>h6": {
      fontSize: 18,
      fontWeight: 700,
      color: DEFAULT_THEME.theme.palette.text.title,
    },
    "&>p": {
      fontSize: 16,
      fontWeight: 600,
      color: DEFAULT_THEME.theme.palette.text.helpText,
    },
  },
  btnCheckout: {
    height: "auto",
    display: "flex",
    justifyContent: "space-between",
    padding: "0 14px",
    alignItems: "center",
    "&>span:first-child": {
      fontSize: 14,
      fontWeight: 400,
      textTransform: "lowercase",
    },
    "&>span:last-child": {
      fontSize: 14,
      fontWeight: 400,
      textTransform: "lowercase",
    },
  },
  button: {
    width: "100%",
    marginBottom: 16,
  },
  filter: {
    display: "flex",
    alignItems: "center",
    marginLeft: 24,
    position: "sticky",
    alignSelf: "flex-start",
    top: 0,
    overflowY: "auto",
    zIndex: 10,
    padding: "12px 0",
    backgroundColor: DEFAULT_THEME.theme.palette.background.default,
  },
  filterList: {
    width: "100%",
    height: "40px",
    overflowY: "scroll",
    display: "flex",
    alignItems: "center",
    color: DEFAULT_THEME.theme.palette.text.titleText,
    "&::-webkit-scrollbar": {
      display: "none",
    },
    "&>div": {
      "&>p": {
        fontSize: 14,
        fontWeight: 400,
        lineHeight: "16px",
        whiteSpace: "nowrap",
      },
    },
  },
  filterItem: {
    width: "max-content",
    display: "block",
    padding: "2px 8px",
    border: `2px solid ${DEFAULT_THEME.theme.palette.background.bar}`,
    marginRight: 8,
    borderRadius: 4,
  },
  iconFIlter: {
    marginRight: 16,
  },
  active: {
    backgroundColor: DEFAULT_THEME.theme.palette.background.onBoarding,
    color: DEFAULT_THEME.theme.palette.text.default,
    border: "none",
  },
  containedBtnUp: {
    display: "flex",
    justifyContent: "flex-end",
  },
  btnUp: {
    width: 40,
    height: 40,
    borderRadius: "50%",
    backgroundColor: DEFAULT_THEME.theme.palette.background.onBoarding,
    justifyContent: "center",
    alignItems: "center",
    position: "fixed",
    bottom: 150,
    display: "flex",
    "& img": {
      height: 10,
    },
  },
  featureMartItem: {
    display: "flex",
    justifyContent: "space-between",
    borderBottom: `1px solid ${DEFAULT_THEME.theme.palette.text.disabled}`,
    color: DEFAULT_THEME.theme.palette.text.cardText,
  },

  featureMartDetail: {
    display: "flex",
    color: DEFAULT_THEME.theme.palette.text.cardText,
    padding: "16px 0",
    "&>img": {
      marginRight: 16,
    },
    "&>div": {
      "&>p:first-child": {
        fontSize: 14,
        lineHeight: "24px",
        fontWeight: 550,
        color: DEFAULT_THEME.theme.palette.text.titleText,
      },
      "&>p:last-child": {
        color: DEFAULT_THEME.theme.palette.text.cardText,
        fontSize: 14,
        lineHeight: "24px",
        fontWeight: 400,
      },
    },
  },
  searchCategory: {
    display: "flex",
    flexDirection: "column",
    lineHeight: "24px",
    marginTop: 32,
    "&>h6": {
      fontSize: 18,
      fontWeight: 700,
      color: DEFAULT_THEME.theme.palette.text.title,
    },
    "&>p": {
      fontSize: 12,
      fontWeight: 600,
      color: DEFAULT_THEME.theme.palette.text.secondary,
    },
  },
  hidden: {
    overflow: "hidden",
  },
  negativeMargin12: { marginBottom: -12 },
  sticky: {
    position: "fixed !important",
    bottom: 0,
    left: 0,
    width: "100% !important",
    zIndex: 101,
    padding: "16px 24px",
  },
  checkout: {
    position: "absolute",
    top: 26,
    transform: "translate(-50%)",
  },
  footer: {
    height: "92px !important",
    backgroundColor: `${DEFAULT_THEME.theme.palette.background.default} !important`,
  },
  isActive: {
    fill: "#00AC77",
  },
  information: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "16px 0",
    gap: "4px",
    "& p": {
      fontWeight: "400",
      fontSize: "12px",
      lineHeight: "16px",
      textAlign: "center",
      color: DEFAULT_THEME.theme.palette.text.titleText,
    },
    "& img": {
      width: "16px",
      height: "16px",
      objectFit: "contain",
    },
  },
  descreptionShop: {
    overflow: "hidden",
    transition: "max-height .7s ease",
  },
  notShow: {
    maxHeight: 0,
  },
  show: {
    maxHeight: 190,
  },
  checkoutAvailable: {
    opacity: 1,
  },
  checkoutNotAvailable: {
    opacity: 0.6,
  },
});
