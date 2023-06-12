import { createUseStyles } from "react-jss";
import DEFAULT_THEME from "src/themes/theme";

export const useStyles = createUseStyles({
  root: {
    marginTop: 24,
    marginBottom: 32,
  },
  recommendFoodWrapper: {
    // zIndex: 10,
  },
  recommendFoods: {
    marginTop: 40,
  },

  recommendFood: {
    marginTop: 16,
    display: "flex",
    overflowX: "scroll",
    zIndex: 10,
    width: "100%",
    height: "100%",
    padding: "0 !important",
    "&::-webkit-scrollbar": {
      display: "none",
    },
    "&>div:first-child": {
      marginLeft: -8,
    },
    "&>div": {
      "& > div": {
        margin: "0 8px",
      },
    },
  },
  cardText: {
    color: DEFAULT_THEME.theme.palette.text.cardText,
    fontSize: 14,
    alignItems: "flex-start",
    display: "flex",
    flexDirection: "column",
    flex: 1,
    justifyContent: "space-between",
    "&>p": {
      display: "-webkit-box",
      "-webkit-line-clamp": 2,
      "-webkit-box-orient": "vertical",
      overflow: "hidden",
      height: "48px",
      marginTop: 8,
      fontWeight: 600,
      color: DEFAULT_THEME.theme.palette.text.titleText,
      lineHeight: "24px",
    },
    "& div": {
      flexShrink: 0,
      marginTop: "auto",
      "&>div": {
        display: "flex",
        lineHeight: "24px",
        alignItems: "center",
      },
      "&>div>img": {
        padding: "4px 4px 4px 0",
      },
    },
  },
  cardHeader: {
    color: DEFAULT_THEME.theme.palette.text.primary,
    fontSize: 16,
    lineHeight: "24px",
    alignItems: "center",
    fontWeight: 550,
    "&>div": {
      display: "flex",
      lineHeight: "24px",
      alignItems: "center",
    },
  },
  cardImage: {
    borderRadius: 8,
    boxShadow: "0px 4px 14px -3px rgba(16, 24, 40, 0.06)",
    "&>img": {
      width: "140px",
      height: "140px",
    },
    "&>div": {
      alignItems: "center",
      backgroundColor: DEFAULT_THEME.theme.palette.background.onBoarding,
      borderRadius: " 0 0 8px 8px",
      marginTop: -2,
      "&>img": {
        display: "flex",
        margin: "0 auto",
      },
    },
  },
  viewMore: {
    width: 70,
    color: DEFAULT_THEME.theme.palette.text.cardText,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    position: "relative",
    margin: "0px 10px",
  },
  img: {
    height: "169px",
    width: "140px",
    borderRadius: "15px",
  },
  title: {
    width: "100%",
    height: "40px",
    borderRadius: "15px",
  },
  time: {
    width: "100%",
    height: "27px",
    margin: "3px 0 3px 0",
    borderRadius: "15px",
  },
  star: {
    width: "100%",
    height: "20px",
    borderRadius: "15px",
  },
  imgStar: {
    marginLeft: 4,
  },
});
