import { createUseStyles } from "react-jss";
import DEFAULT_THEME from "../../themes/theme";

export const useStyles = createUseStyles({
  wishlist: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    width: "100%",
    marginTop: 16,
  },
  wishlistHeader: {
    fontWeight: "700",
    fontSize: 18,
    lineHeight: "24px",
    textAlign: "center",
    color: DEFAULT_THEME.theme.palette.text.titleText,
    width: "100%",
  },
  wishlistBack: {
    fontSize: 16,
    color: DEFAULT_THEME.theme.palette.text.titleText,
  },
  wishlistContent: {},
  wishlistItem: {
    marginTop: 32,
    marginBottom: 16,
    fontWeight: 400,
    fontSize: 12,
    lineHeight: "16px",
    color: DEFAULT_THEME.theme.palette.text.title,
  },
  root: {
    width: "100%",
    height: "100%",
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    justifyContent: "center",
    alignItems: "center",
    rowGap: "16px",
    columnGap: "9px",
  },
  nearContentContext: {
    width: "100%",
  },
  cardText: {
    color: DEFAULT_THEME.theme.palette.text.cardText,
    fontSize: 14,
    lineHeight: "24px",
    "&>p": {
      marginTop: 8,
      fontWeight: 600,
      color: DEFAULT_THEME.theme.palette.text.dark,
      fontSize: 16,
      lineHeight: "24px",
    },
    "& button": {
      marginTop: 16,
    },
  },
  itemImg: {
    width: "100%",
    height: "100%",
    "& img": {
      width: "100%",
      height: "100%",
      objectFit: "cover",
    },
  },
  itemTime: {
    display: "flex",
    gap: "4px",
  },
  itemEnd: {
    display: "flex",
    alignItems: "center",
    "& span:first-child": {
      marginRight: 4,
    },
    "& img": {
      marginRight: 4,
    },
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
  btnDelete: {
    "&:hover": {
      backgroundColor: DEFAULT_THEME.theme.palette.background.onBoarding,
      color: DEFAULT_THEME.theme.palette.text.default,
      outline: "none",
    },
  },
  loadTitle: {
    margin: "32px 0 16px 0",
    width: "calc(100% - 55%)",
    height: "16px",
    borderRadius: "10px",
  },
  loadImg: {
    marginBottom: "7px",
    height: "159px",
    width: "159px",
    borderRadius: "10px",
  },
  loadName: {
    marginTop: "8px",
    width: "calc(100% - 50%)",
    height: "22px",
    borderRadius: "10px",
  },
  loadTime: {
    marginTop: "2px",
    width: "calc(100% - 50%)",
    height: "22px",
    borderRadius: "10px",
  },
  loadStar: {
    marginTop: "2px",
    width: "calc(100% - 45%)",
    height: "22px",
    borderRadius: "10px",
  },
  loadButton: {
    marginTop: "16px",
    width: "100%",
    height: "40px",
    borderRadius: "10px",
  },
});
