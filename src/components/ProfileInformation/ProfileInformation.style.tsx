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
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: "80vh",
  },
  cardInformation: {
    fontSize: 12,
    fontWeight: 400,
    lineHeight: "16px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    color: DEFAULT_THEME.theme.palette.text.titleText,
  },
  input: {
    width: "100%",
    borderBottom: `1px solid ${DEFAULT_THEME.theme.palette.secondary.light}`,
    padding: "8px 0",
    fontSize: 14,
    fontWeight: 400,
    lineHeight: "24px",
    color: DEFAULT_THEME.theme.palette.text.titleText,
    marginBottom: 16,
    outline: "none",
  },
  discard: {
    color: DEFAULT_THEME.theme.palette.text.secondary,
    userSelect: "none",
    "&::placeholder": {
      color: DEFAULT_THEME.theme.palette.text.secondary,
    },
  },
  passwordChange: {
    position: "relative",
    "&>p": {
      position: "absolute",
      top: "35%",
      right: "24px",
      fontSize: 12,
      fontWeight: 400,
      color: DEFAULT_THEME.theme.palette.text.link,
    },
  },
  btnProfileInfo: {
    display: "flex",
    "&>div": {
      width: "50%",
    },
  },
  isActive: {
    borderBottom: `1px solid ${DEFAULT_THEME.theme.palette.text.primary} !important`,
  },
  titleInforCanEdit: {
    fontSize: 12,
    fontWeight: 500,
    lineHeight: "16px",
    marginTop: 16,
    marginBottom: 24,
    color: DEFAULT_THEME.theme.palette.text.titleText,
  },
});
