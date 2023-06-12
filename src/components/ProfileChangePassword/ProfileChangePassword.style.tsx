import { createUseStyles } from "react-jss";
import DEFAULT_THEME from "src/themes/theme";

export const useStyles = createUseStyles({
  root: {
    lineHeight: "24px",
    color: DEFAULT_THEME.theme.palette.text.title,
    margin: "18px 0 64px 0",
  },
  headerContent: { marginBottom: 32 },
  header: {
    display: "flex",
    alignItems: "center",
    position: "relative",
    "&>h6": {
      position: "absolute",
      width: "max-content",
      left: "50%",
      transform: "translate(-50%)",
      fontSize: 18,
      fontWeight: 600,
      color: DEFAULT_THEME.theme.palette.text.title,
    },
  },
  btnArrowLeft: {
    display: "flex",
    width: 24,
    height: 24,
    alignItems: "center",
    justifyContent: "center",
  },
  content: {
    height: "85vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  titleChangePassword: {
    margin: "40px 0",
  },
  btnContent: {
    margin: "40px 0",
  },
  confirmPassword: {
    marginTop: 16,
  },
  cardInput: {
    color: DEFAULT_THEME.theme.palette.text.dark,
    "&>p": {
      fontSize: 12,
      fontWeight: 500,
      color: "#374151",
    },
  },
  validationText: {
    fontSize: 10,
    position: "absolute",
    color: DEFAULT_THEME.theme.palette.error.main,
  },
  inputPassword: {
    fontSize: 14,
    borderBottom: `1px solid ${DEFAULT_THEME.theme.palette.text.secondary}`,
    caretColor: DEFAULT_THEME.theme.palette.text.primary,
    width: "100%",
    outline: "none",
    padding: "8px 0",
    position: "relative",
    "&::placeholder ": {
      color: "#9CA3AF",
      fontSize: 14,
      lineHeight: 24,
      fontWeight: 400,
    },
  },
  iconEye: {
    position: "absolute",
    right: "24px",
  },
  active: {
    borderBottom: `1px solid ${DEFAULT_THEME.theme.palette.text.primary} !important`,
  },
  newPassword: {
    "&>div:nth-child(2)": { marginTop: 16 },
    "&>div:last-child": { marginTop: 16 },
  },
});
