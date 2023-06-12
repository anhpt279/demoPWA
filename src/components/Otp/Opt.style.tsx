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
    alignItems: "center",
    "& img": {
      width: "7.1px",
      height: "15.84px",
      color: DEFAULT_THEME.theme.palette.common.black,
      objectFit: "contain ",
    },
  },
  title: {
    marginTop: "55px",
    marginBottom: "54px",
    fontWeight: "700",
    fontSize: "32px",
    lineHeight: "40px",
    color: DEFAULT_THEME.theme.palette.text.titleText,
  },
  desc: {
    marginTop: "64px",
    fontWeight: "500",
    fontSize: "12px",
    lineHeight: "16px",
    color: DEFAULT_THEME.theme.palette.text.titleText,
  },
  form: {
    height: "calc(100vh - 77px)",
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "column",
  },
  inputs: {
    marginTop: "44px",
    width: "100%",
    height: "auto",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "11px",
    flexDirection: "row",
  },
  input: {
    width: "73px",
    height: "60px",
    borderBottom: `1px solid ${DEFAULT_THEME.theme.palette.text.secondary}`,
    outline: "none",
    caretColor: "#00AC77",
    textAlign: "center",
  },
  inputValidate: {
    borderBottom: `1px solid ${DEFAULT_THEME.theme.palette.text.secondary}  !important`,
    color: `${DEFAULT_THEME.theme.palette.text.secondary}  !important`,
  },
  active: {
    borderBottom: `1px solid ${DEFAULT_THEME.theme.button.contained.background}`,
    color: DEFAULT_THEME.theme.button.contained.background,
  },
  btn: {
    height: "44px",
    paddingBottom: 81,
    marginTop: "30%",
  },
  validate: {
    color: DEFAULT_THEME.theme.palette.error.main,
    fontSize: "12px",
    fontWeight: "400",
  },
}));
