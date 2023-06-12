import { createUseStyles } from "react-jss";
import DEFAULT_THEME from "src/themes/theme";

export const useStyles = createUseStyles({
  root: {
    margin: "18px 24px",
  },
  btnArrowLeft: {
    position: "absolute",
  },
  deleteAccountHeader: {
    fontWeight: 700,
    fontSize: 18,
    textAlign: "center",
    marginBottom: 32,
    color: DEFAULT_THEME.theme.palette.text.title,
  },
  deleteQuestion: {
    lineHeight: "24px",
    fontWeight: 600,
    fontSize: 16,
    color: DEFAULT_THEME.theme.palette.text.title,
  },
  deleteQuestionDetail: {
    lineHeight: "16px",
    fontSize: 12,
    color: DEFAULT_THEME.theme.palette.text.cardText,
  },
  listInput: {
    marginTop: 16,
    "&>label": {
      width: "100%",
      height: 44,
      display: "flex",
      lineHeight: "24px",
      alignItems: "center",
      borderBottom: `0.7px solid rgba(0, 0, 0, 0.1)`,
      fontSize: 14,
      color: DEFAULT_THEME.theme.palette.text.dark,
      position: "relative",
      "&>input": {
        position: "absolute",
        width: 24,
        height: 24,
        marginRight: 16,
        accentColor: "#179770",
        opacity: 0.7,
      },
      "&>span": {
        marginRight: "-10px",
        position: "absolute",
        left: 44,
        color: DEFAULT_THEME.theme.palette.text.radioText,
      },
    },
  },
  textAreaContainer: {
    marginTop: 16,
  },
  customTextArea: {
    width: "100%",
    height: 128,
    color: DEFAULT_THEME.theme.palette.text.secondary,
    padding: "20px 24px",
    border: `1px solid ${DEFAULT_THEME.theme.palette.text.secondary}`,
    borderRadius: 8,
    outline: "none",
    "&::placeholder": {
      color: DEFAULT_THEME.theme.palette.text.secondary,
    },
  },
  buttonTextColor: {
    marginTop: 32,
    color: DEFAULT_THEME.theme.palette.text.title,
  },
});
