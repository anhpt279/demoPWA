import { createUseStyles } from "react-jss";
import DEFAULT_THEME from "src/themes/theme";

export const useStyles = createUseStyles({
  root: {
    width: "100vw",
    // height: "auto",
    zIndex: 100,
    position: "fixed",
    left: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    // overflow: "scroll",
  },
  btnArrowDown: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 16,
    "&:hover": {
      opacity: 0.5,
    },
  },
  content: {
    position: "absolute",
    width: "100vw",
    height: "auto",
    backgroundColor: DEFAULT_THEME.theme.palette.background.default,
    borderRadius: "16px 16px 0 0",
  },
  slideUp: {
    animation: `$slideUp .7s both`,
  },
  slideDown: {
    animation: `$slideDown .7s both`,
    marginTop: "100%",
  },
  "@keyframes slideUp": {
    from: {
      opacity: 0,
      marginTop: "100%",
    },
    to: {
      opacity: 1,
      marginTop: 0,
    },
  },
  "@keyframes slideDown": {
    from: {
      opacity: 1,
      marginTop: 0,
    },
    to: {
      opacity: 0,
      marginTop: "100%",
    },
  },

  headerContent: {
    display: "flex",
    justifyContent: "space-between",
    lineHeight: "24px",
    color: DEFAULT_THEME.theme.palette.text.dark,
    marginTop: 32,
    "&>p:first-child": {
      fontSize: 16,
      fontWeight: 400,
    },
    "&>p:nth-child(2)": {
      fontSize: 18,
      fontWeight: 800,
    },
    "&>p:nth-child(3)": {
      fontSize: 16,
      fontWeight: 600,
      color: DEFAULT_THEME.theme.palette.text.primary,
    },
  },
  sortOfFilter: {
    marginTop: 24,
  },
  sortOfFilterHeader: {
    display: "flex",
    marginBottom: 24,
    justifyContent: "space-between",
    "&>p": {
      lineHeight: "24px",
      fontSize: 16,
      fontWeight: 550,
      color: DEFAULT_THEME.theme.palette.text.dark,
    },
    "&>div": {
      backgroundColor: DEFAULT_THEME.theme.palette.background.onBoarding,
      opacity: 0.5,
      alignItems: "center",
      display: "flex",
      justifyContent: "center",
      padding: "4px 8px",
      borderRadius: "8px",
      fontSize: 12,
      lineHeight: "16px",
    },
  },
  listInput: {
    "&>label": {
      width: "100%",
      height: 44,
      display: "flex",
      lineHeight: "24px",
      alignItems: "center",
      borderBottom: `0.7px solid rgba(0, 0, 0, 0.1)`,
      fontSize: 14,
      color: DEFAULT_THEME.theme.palette.text.dark,
      position: "relative",
      "&>input": {
        position: "absolute",
        width: 24,
        height: 24,
        marginRight: 16,
        accentColor: "#179770",
        opacity: 0.7,
      },
      "&>span": {
        position: "absolute",
        left: 44,
      },
    },
  },
  btnSave: {
    margin: "32px 0 40px 0",
  },
});
