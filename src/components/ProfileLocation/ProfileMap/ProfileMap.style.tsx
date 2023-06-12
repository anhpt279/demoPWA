import { createUseStyles } from "react-jss";
import DEFAULT_THEME from "src/themes/theme";

export const useStyles = createUseStyles({
  root: {
    padding: "0 20px",
  },
  searchInput: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    borderBottom: `1px solid ${DEFAULT_THEME.theme.palette.text.secondary}`,
    paddingTop: 20,
    marginBottom: "15px",
    height: "72px",
    position: "relative",
    "&>div": {
      position: "absolute",
      left: 0,
      top: "50%",
      marginRight: 8,
    },
    "&>input": {
      width: "100%",
      outline: "none",
      caretColor: DEFAULT_THEME.theme.palette.background.onBoarding,
      paddingLeft: "35px",
      display: "inline-block",
    },
  },
  active: {
    borderBottom: `1px solid ${DEFAULT_THEME.theme.palette.background.onBoarding} !important`,
  },
  bot: {
    margin: "33px 0 0 0",
    // height: "164px",
  },
  botgps: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    marginBottom: "15px",
    "& img": {
      width: "20px",
      height: "20px",
      objectFit: "cover",
    },
  },
  botaddress: {
    display: "flex",
    flexDirection: "column",
    "& p:nth-child(1)": {
      display: "-webkit-box",
      "-webkit-line-clamp": 1,
      "-webkit-box-orient": "vertical",
      overflow: "hidden",
      fontWeight: 400,
      fontSize: "14px",
      lineHeight: "24px",
      color: DEFAULT_THEME.theme.palette.text.title,
    },
    "& p:nth-child(2)": {
      display: "-webkit-box",
      "-webkit-line-clamp": 1,
      "-webkit-box-orient": "vertical",
      overflow: "hidden",
      fontWeight: 500,
      fontSize: "12px",
      lineHeight: "16px",
      color: DEFAULT_THEME.theme.palette.text.secondary,
    },
  },
  map: {
    height: "calc(100vh - 72px - 164px)",
    width: "100%",
    position: "relative",
  },
  btngps: {
    position: "absolute",
    bottom: "13px",
    right: "24px",
    "& img": {
      height: "44px",
      width: "44px",
      objectFit: "cover",
    },
  },
  location: {
    position: "absolute",
    left: 0,
    right: 0,
    width: "100%",
    top: "40%",
  },
  header: {
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "41px",
  },
  img: {
    objectFit: "contain",
    width: "8px !important",
    height: "16px  !important",
    marginLeft: "7px",
  },
  autoComplete: {
    display: "inline-block",
    width: "100%",
    zIndex: 1000,
    top: "80px !important",
    backgroundColor: "#fff",
  },
});
