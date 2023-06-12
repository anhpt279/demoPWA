import { createUseStyles } from "react-jss";
import DEFAULT_THEME from "../../../themes/theme";

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
    "& span": {
      paddingRight: "4px",
    },
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
  popup: {
    position: "fixed",
    zIndex: 200,
    left: "50%",
    top: "50%",
    width: "calc(100% - 48px)",
    height: "fit-content",
    transform: "translate(-50% , -50%)",
    padding: "13px 24px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    backgroundColor: "white",
    borderRadius: "8px",
    textAlign: "center",
    "& p:nth-child(1)": {
      fontSize: "18px",
      lineHeight: "24px",
      fontWeight: "600",
      color: "#374151",
    },
    "& p:nth-child(2)": {
      fontSize: "14px",
      lineHeight: "16px",
      fontWeight: "400",
      color: "#374151",
      marginTop: "8px",
    },
  },
  containedbtn: {
    marginTop: "32px",
    display: "flex",
    gap: "9px",
  },
});
