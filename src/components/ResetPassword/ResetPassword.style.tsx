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
    alignItems: "center",
    "& img": {
      width: "7.1px",
      height: "15.84px",
      color: DEFAULT_THEME.theme.palette.common.black,
      objectFit: "contain",
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
    fontWeight: "500",
    fontSize: "12px",
    lineHeight: "16px",
    marginBottom: "30px",
    color: DEFAULT_THEME.theme.palette.text.titleText,
  },
  form: {
    height: "calc(100vh - 77px)",
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "column",
    "& div": {
      display: "flex",
      flexDirection: "column",
      gap: "10px",
      "& div": {
        "& label": {
          fontWeight: "500",
          fontSize: "12px",
          lineHeight: "16px",
          color: DEFAULT_THEME.theme.palette.text.titleText,
        },
        "& div": {
          position: "relative",
          "& input": {
            height: "43px",
            width: "100%",
            outline: "none",
            borderBottom: `1px solid ${DEFAULT_THEME.theme.palette.text.secondary}`,
            caretColor: "#00AC77",
            paddingRight: "20px",
            "&::placeholder": {
              fontSize: "14px",
              fontWeight: "400",
            },
          },
          "& img": {
            position: "absolute",
            right: "0",
            opacity: "0.7",
            height: "20px",
            width: "20px",
            objectFit: "contain",
            top: "50%",
            transform: "translateY(-50%)",
          },
        },
      },
    },
  },
  btn1: {
    marginBottom: "37px",
    marginTop: "20%",
    height: "44px",
  },
  validate: {
    color: "#EF4444",
    fontSize: "12px",
    fontWeight: "400",
  },
  input: {
    borderBottom: `1px solid ${DEFAULT_THEME.theme.palette.background.onBoarding} !important`,
  },
  error: {
    borderBottom: `1px solid ${DEFAULT_THEME.theme.palette.text.helpText} !important`,
  },
}));
