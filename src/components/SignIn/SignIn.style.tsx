import { createUseStyles } from "react-jss";
import DEFAULT_THEME from "src/themes/theme";
export const useStyles = createUseStyles(() => ({
  root: {
    paddingRight: "24px",
    paddingLeft: "24px",
  },
  header: {
    paddingTop: "27px",
    height: 50,
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
        color: DEFAULT_THEME.theme.palette.text.link,
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
  inputs: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    gap: "24px",
  },
  input: {
    // paddingRight: "25px",
  },
  form: {
    height: "calc(100vh - 77px)",
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "column",
  },
  forgot: {
    marginTop: "16px",
    fontSize: "12px",
    color: DEFAULT_THEME.theme.palette.text.link,
  },
  btn: {
    height: "44px",
    paddingBottom: 81,
    marginTop: "30%",
  },
  validate: {
    color: DEFAULT_THEME.theme.palette.text.helpText,
    fontSize: "12px",
    fontWeight: "400",
    marginTop: "8px",
  },
  error: {
    borderBottom: `1px solid ${DEFAULT_THEME.theme.palette.text.helpText} !important`,
  },
  inputform: {
    "& input": {
      borderBottom: `1px solid ${DEFAULT_THEME.theme.palette.text.helpText} !important`,
    },
  },
}));
