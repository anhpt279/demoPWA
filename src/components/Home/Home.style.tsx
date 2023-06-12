import { createUseStyles } from "react-jss";
import DEFAULT_THEME from "../../themes/theme";

export const useStyles = createUseStyles({
  root: {
    width: "100vw",
    height: "100vh",
  },
  wrapperHome: {
    color: DEFAULT_THEME.theme.palette.text.default,
    marginBottom: 64,
    position: "relative",
  },

  divider: {
    width: "100%",
    height: 8,
    backgroundColor: DEFAULT_THEME.theme.palette.secondary.light,
    opacity: 0.2,
  },
  header: {
    "@media (max-width: 600px)": {
      width: "100%",
      height: 216,
      backgroundColor: DEFAULT_THEME.theme.palette.background.onBoarding,
    },
    "@media (min-width: 601px)": {
      backgroundColor: DEFAULT_THEME.theme.palette.background.default,
    },
  },
  slideWrapper: {
    marginTop: 24,
    display: "flex",
    width: "100%",
    height: "151px",
    "&>img": {
      width: "100%",
      height: "auto",
      objectFit: "cover",
    },
  },
  slide: {
    width: "100%",
    height: "auto",
    borderRadius: "8px",
    WebkitAnimation: "fadeIn 3s",
    animationDuration: "3s",
    boxShadow: "1px 1px 10px rgba(224,224,224,0.8)",
    "&>img": {
      width: "100%",
      height: "100%",
      objectFit: "reveres",
    },
  },
  hide: {
    display: "none",
  },

  body: {
    width: "100%",
    height: "auto",
    paddingBottom: 96,
    paddingTop: 88,
  },
  rootRecommendFood: {
    marginTop: 16,
    paddingLeft: 24,
  },
  wrapperHeader: {
    width: "100%",
  },
  wrapperMobile: {
    "@media (min-width: 600px)": { display: "none" },
  },
  wrapperContent: {
    display: "flex",
    alignItems: "center",
    paddingTop: 16,
    height: "auto",
    width: "100%",
    marginBottom: 16,
    justifyContent: "space-between",
  },
  content: {
    lineHeight: "20px",
    maxWidth: "60%",
  },
  contentTitle: {
    fontSize: "14px",
    fontWeight: "600",
  },
  contentContext: {
    marginTop: 2,
    width: "200px",
    display: "flex",
    alignItems: "center",
    whiteSpace: "nowrap",
    "&>img": {
      width: "24px",
      height: "24px",
    },
    "&>p": {
      overflow: "hidden",
      maxWidth: "100%",
      direction: "ltr",
      textOverflow: "ellipsis",
      fontSize: "12px",
      fontWeight: "400",
      whiteSpace: "nowrap",
    },
  },
  headerIcon: {
    width: "40%",
    height: "100%",
    display: "flex",
    justifyContent: "flex-end",
    "&>button": {
      width: 44,
      height: 44,
      borderRadius: "50%",
      backgroundColor: "transparent",
    },
  },
  search: {
    width: "100%",
    height: "40px",
    backgroundColor: DEFAULT_THEME.theme.palette.background.default,
    alignItems: "center",
    borderRadius: "6px",
    color: DEFAULT_THEME.theme.palette.text.secondary,
    display: "flex",
    "&>div": {
      height: "100%",
      width: 40,
      position: "relative",
      "&>img": {
        margin: "0 auto",
        position: "absolute",
        top: 10,
        left: 10,
      },
    },
    "&>input": {
      outline: "none",
      width: "calc(100% - 50px)",
      height: "100%",
      fontSize: "14px",
      fontWeight: "400",
      lineHeight: "24px",
    },
  },
  wrapperContentDesktop: {
    "@media (max-width: 600px)": { display: "none" },
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    height: 80,
    backgroundColor: DEFAULT_THEME.theme.palette.background.default,
    padding: "20px 0",
  },
  logoDesktop: {
    "&>img": {
      height: "100%",
    },
  },
  buttonDesktop: {
    textTransform: "uppercase",
    display: "flex",
    alignItems: "center",

    "&>div:first-child": {
      color: DEFAULT_THEME.theme.palette.text.primary,
    },
    "&>div:last-child": {
      backgroundColor: DEFAULT_THEME.theme.palette.background.onBoarding,
      color: DEFAULT_THEME.theme.palette.text.default,
      borderRadius: 8,
      padding: "10px 16px",
    },
  },
});
