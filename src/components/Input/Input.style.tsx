import { createUseStyles } from "react-jss";
import DEFAULT_THEME from "src/themes/theme";

export const useStyles = createUseStyles(() => ({
  root: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    "& div": {
      width: "100%",
      position: "relative",
      "& img": {
        position: "absolute",
        right: "0",
        opacity: "0.7",
        height: "20px",
        width: "20px",
        objectFit: "cover",
        top: "50%",
        transform: "translateY(-50%)",
      },
    },
  },
  lable: {
    fontSize: "12px",
    lineHeight: "16px",
    fontWeight: "500",
    color: DEFAULT_THEME.theme.palette.text.titleText,
  },
  input: {
    width: "100%",
    height: "42px",
    borderBottom: `1px solid ${DEFAULT_THEME.theme.palette.text.secondary}`,
    outline: "none",
    caretColor: DEFAULT_THEME.theme.button.contained.background,
    paddingRight: "20px",
    "&::placeholder": {
      fontSize: "14px",
      fontWeight: "400",
    },
  },
  error: {
    borderBottom: `1px solid ${DEFAULT_THEME.theme.palette.error.main} !important`,
  },
  inputActive: {
    borderBottom: `1px solid ${DEFAULT_THEME.theme.button.contained.background}`,
  },
}));
