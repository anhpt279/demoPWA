import { createUseStyles } from "react-jss";
import DEFAULT_THEME from "src/themes/theme";
export const useStyles = createUseStyles(() => ({
  root: {
    paddingRight: "24px",
    paddingLeft: "24px",
  },
  header: {
    height: 50,
    paddingTop: "27px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    "& img": {
      width: "7.1px",
      height: "15.84px",
      color: DEFAULT_THEME.theme.palette.text.dark,
      objectFit: "contain",
    },
    "& p": {
      fontWeight: "400",
      fontSize: "12px",
      lineHeight: "24px",
      color: DEFAULT_THEME.theme.palette.text.titleText,
      "& span": {
        paddingLeft: "5px",
        textDecoration: "underline",
        backgroundColor: "transparent",
        color: "#00B342",
        cursor: "pointer",
      },
    },
  },
  title: {
    marginTop: "55px",
    marginBottom: "64px",
    fontWeight: "700",
    fontSize: "32px",
    lineHeight: "40px",
    color: DEFAULT_THEME.theme.palette.text.titleText,
  },
  desc: {
    marginTop: "24px",
    fontWeight: "400",
    fontSize: "12px",
    lineHeight: "24px",
    color: DEFAULT_THEME.theme.palette.text.cardText,
    "& span": {
      borderBottom: `1px solid ${DEFAULT_THEME.theme.palette.text.cardText}`,
      color: DEFAULT_THEME.theme.palette.text.cardText,
    },
  },
  btn: {
    height: "44px",
    paddingBottom: 81,
    marginTop: "30%",
  },
  form: {
    height: "calc(100vh - 77px)",
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "column",
  },
  validate: {
    color: DEFAULT_THEME.theme.palette.error.main,
    fontSize: "12px",
    fontWeight: "400",
    marginTop: "8px",
  },
}));
