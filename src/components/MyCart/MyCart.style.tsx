import { createUseStyles } from "react-jss";
import DEFAULT_THEME from "src/themes/theme";

export const useStyles = createUseStyles({
  root: {
    lineHeight: "24px",
  },
  orderReview: {
    marginTop: 16,
  },
  orderReviewHeader: {
    margin: "18px 24px 0 24px",
    display: "flex",
    alignItems: "center",
    position: "relative",
    "&>h6": {
      position: "absolute",
      left: "50%",
      transform: "translate(-50%)",
      fontSize: 18,
      fontWeight: 600,
      color: DEFAULT_THEME.theme.palette.text.title,
    },
  },

  divider: {
    width: "100%",
    height: 8,
    backgroundColor: DEFAULT_THEME.theme.palette.secondary.light,
    opacity: 0.2,
  },
  btnArrowLeft: {
    display: "flex",
    width: 24,
    height: 24,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 18,
    fontWeight: 600,
    color: DEFAULT_THEME.theme.palette.text.dark,
  },
  nbOfCart: {
    fontSize: 12,
    fontWeight: 400,
    color: DEFAULT_THEME.theme.palette.text.dark,
    lineHeight: "16px",
  },

  orderReviewItem: {
    marginTop: 16,
  },
  orderReviewTitle: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  itemCart: {
    "&>div:last-child": {
      borderBottom: "none",
      marginBottom: 16,
      paddingBottom: 0,
    },
  },
  itemMyCart: {
    display: "flex",
    borderBottom: "1px solid #e6e6e6",
    marginTop: 16,
    paddingBottom: "16px",
  },
  itemMyCartImage: {
    display: "flex",
    marginRight: 10,
    justifyContent: "center",
    alignItems: "center",
    "&>img": {
      width: 64,
      height: "auto",
      objectFit: "contain",
    },
  },
  itemMyCartContent: {
    width: "100%",
    height: "auto",
  },
  titleItem: {
    fontSize: 14,
    fontWeight: 600,
    color: DEFAULT_THEME.theme.palette.text.title,
  },
  contentItem: {
    marginTop: 6,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-end",
    height: 32,
  },
  orderReviewItemTitle: {
    fontSize: 16,
    fontWeight: 500,
    color: DEFAULT_THEME.theme.palette.text.secondary,
  },
  contentItemPrice: {
    display: "flex",
    width: "50%",
    alignItems: "center",
    "&>p:first-child": {
      fontSize: 16,
      fontWeight: 600,
      color: DEFAULT_THEME.theme.palette.text.helpText,
      paddingRight: 8,
    },
    "&>p:last-child": {
      fontSize: 12,
      fontWeight: 400,
      color: DEFAULT_THEME.theme.palette.text.title,
      textDecoration: "line-through",
    },
  },
  btnQuantity: {
    display: "flex",
    alignItems: "center",
    height: 32,
    justifyContent: "center",
    "&>div": {
      height: "100%",
    },
    "&>p": {
      padding: "0 8px",
      minWidth: 40,
      display: "flex",
      justifyContent: "center",
    },
  },
  promoCode: {
    margin: "16px 0",
  },
  promoCodeInput: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    color: DEFAULT_THEME.theme.palette.text.secondary,
    "&>img": {},
    "&>p": {
      color: DEFAULT_THEME.theme.palette.text.titleText,
      marginLeft: 8,
    },
  },
  billSummary: {
    color: DEFAULT_THEME.theme.palette.text.title,
    fontSize: 14,
    fontWeight: 400,
  },
  discount: {
    color: "#F59E0B",
  },
  promoCodeTitle: {
    display: "flex",
    width: "100%",
    color: DEFAULT_THEME.theme.palette.text.titleText,
    "&>p": {
      color: DEFAULT_THEME.theme.palette.text.titleText,
      marginLeft: 8,
    },
    "& > img": {
      width: 24,
      height: 24,
    },
  },
  emptyCard: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: "75vh",
    marginTop: "20%",
    "&>img": {
      padding: 48,
    },
    "&>div": {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      "&>h3": {
        fontSize: 32,
        fontWeight: 700,
        lineHeight: "40px",
        color: DEFAULT_THEME.theme.palette.text.titleText,
        marginBottom: 8,
      },
      "&>span": {
        fontSize: 16,
        fontWeight: 400,
        lineHeight: "24px",
        color: DEFAULT_THEME.theme.palette.text.cardText,
      },
    },
  },
  promoCodeDiscount: {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    fontSize: 12,
    fontWeight: 400,
    "&>span:first-child": {
      backgroundColor: DEFAULT_THEME.theme.palette.background.onBoarding,
      color: DEFAULT_THEME.theme.palette.text.default,
      borderRadius: 4,
      marginLeft: 8,
      padding: "0 4px",
    },
  },
});
