import { createUseStyles } from "react-jss";
import DEFAULT_THEME from "../../themes/theme";

export const useStyles = createUseStyles({
  root: {
    padding: "18px 24px 16px",
    backgroundColor: DEFAULT_THEME.theme.palette.background.default,
  },
  rating: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    width: "100%",
  },
  orderStatus: {
    gap: 16,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    fontWeight: "400",
    fontSize: 12,
    color: DEFAULT_THEME.theme.palette.text.titleText,
    width: "100%",
    "& div:first-child": {
      color: DEFAULT_THEME.theme.palette.text.cardText,
    },
  },
  orderStatusBold: {
    fontWeight: 700,
    fontSize: 18,
    color: DEFAULT_THEME.theme.palette.text.title,
  },
  orderCode: {
    fontWeight: 400,
    fontSize: 14,
    color: DEFAULT_THEME.theme.palette.text.cardText,
  },
  ratingBack: {
    fontSize: 16,
  },
  ratingContent: {
    "& div > textarea": {
      border: `1px solid ${DEFAULT_THEME.theme.palette.text.secondary}`,
      resize: "none",
      marginTop: 16,
      borderRadius: 8,
      paddingLeft: 24,
      paddingRight: 24,
      width: "100%",
      height: "128px",
      boxSizing: "border-box",
      outline: DEFAULT_THEME.theme.palette.text.dark,
      color: DEFAULT_THEME.theme.palette.text.cardText,
      "&::placeholder": {
        color: DEFAULT_THEME.theme.palette.text.secondary,
        fontSize: "14px",
        lineHeight: "24px",
        fontWeight: "400",
      },
    },
  },
  customHr: {
    margin: "16px 0",
    border: `1px solid ${DEFAULT_THEME.theme.hrLine.color}`,
  },
  ratingDesc: {
    fontWeight: 400,
    fontSize: 12,
    lineHeight: "24px",
    color: DEFAULT_THEME.theme.palette.text.cardText,
  },
  ratingTab: {
    fontWeight: 500,
    fontSize: 12,
    lineHeight: "16px",
    marginBottom: "16px",
    "& span": {
      color: "red",
    },
  },
  textFieldContainer: {
    position: "relative",
    width: "100%",
  },
  fixedTextInTextArea: {
    position: "absolute",
    top: 36,
    left: 24,
    fontWeight: 700,
    fontSize: 12,
    textTransform: "uppercase",
    color: DEFAULT_THEME.theme.palette.text.secondary,
    background: DEFAULT_THEME.theme.palette.common.white,
  },
  ratingBtn: {
    marginTop: "16px",
    marginBottom: "133px",
  },
  starRating: {
    "& > button": {
      backgroundColor: "transparent",
      border: "none",
      outline: "none",
      cursor: "pointer",
    },
  },
  on: {
    color: DEFAULT_THEME.theme.palette.iconStar.default,
  },
  off: {
    color: DEFAULT_THEME.theme.palette.iconStar.disabled,
  },
  star: {
    fontSize: "50px",
    "& i": {
      marginRight: 8,
    },
  },
});
