import { createUseStyles } from "react-jss";
import DEFAULT_THEME from "src/themes/theme";

export const useStyles = createUseStyles({
  root: {
    lineHeight: "24px",
    paddingBottom: 16,
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
    fontWeight: 700,
    color: DEFAULT_THEME.theme.palette.text.dark,
  },
  nbOfCart: {
    fontSize: 12,
    fontWeight: 400,
    color: DEFAULT_THEME.theme.palette.text.dark,
    lineHeight: "16px",
    marginTop: 16,
  },

  orderReviewItem: {
    marginTop: 16,
    marginBottom: 40,
  },
  orderReviewTitle: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  itemCart: {
    "&>div:last-child": {
      borderBottom: "none",
      marginBottom: 8,
      paddingBottom: 0,
    },
  },
  itemMyCart: {
    display: "flex",
    marginTop: 16,
    paddingBottom: "8px",
  },
  itemMyCartImage: {
    marginRight: 8,
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
    "&>p:nth-child(1)": {
      fontSize: 16,
      fontWeight: 600,
      color: DEFAULT_THEME.theme.palette.text.helpText,
      paddingRight: 8,
    },
    "&>p:nth-child(2)": {
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
    "&>p": {
      padding: "0 8px",
      width: "100%",
      fontSize: 14,
      lineHeight: "24px",
      fontWeight: 400,
      color: DEFAULT_THEME.theme.palette.text.cardText,
    },
  },
});
