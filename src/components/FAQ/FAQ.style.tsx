import { createUseStyles } from "react-jss";
import DEFAULT_THEME from "../../themes/theme";

export const useStyles = createUseStyles({
  root: {
    width: "100%",
    height: "auto",
  },
  faq: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    width: "100%",
    marginTop: 16,
  },
  faqHeader: {
    fontWeight: "700",
    fontSize: 18,
    lineHeight: "24px",
    textAlign: "center",
    color: DEFAULT_THEME.theme.palette.text.titleText,
    width: "100%",
  },
  faqBack: {
    fontSize: 16,
    "&>img": {
      width: 24,
      height: 24,
    },
  },
  faqContent: {
    "& p": {
      fontSize: 14,
      lineHeight: "24px",
    },
    "& p:first-child": {
      fontWeight: 400,
      marginBottom: 8,
      marginTop: 32,
    },
    "& p:nth-child(2)": {
      fontWeight: 600,
      marginBottom: 8,
    },
    "& p:nth-child(3)": {
      fontWeight: 400,
      marginBottom: 24,
    },
    "& p:nth-child(4)": {
      fontWeight: 400,
      marginBottom: 24,
    },
    "& p:nth-child(5)": {
      fontWeight: 400,
      marginBottom: 7,
    },
  },
  line: {
    marginTop: "16px",
    height: 8,
    width: "100%",
    backgroundColor: DEFAULT_THEME.theme.palette.background.review,
  },
  questionHeader: {
    fontWeight: "600",
    fontSize: 16,
    lineHeight: "24px",
    color: DEFAULT_THEME.theme.palette.text.titleText,
    marginTop: 16,
  },
  questionTitle: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 21,
    "& p": {
      fontWeight: "600",
      fontSize: 14,
      lineHeight: "24px",
      color: DEFAULT_THEME.theme.palette.text.titleText,
    },
  },
  questionLine: {
    width: "100%",
    borderBottom: "1px solid #e5e7eb",
    marginTop: 12,
  },
  questionDetail: {
    fontWeight: "400",
    fontSize: 14,
    lineHeight: "24px",
    color: DEFAULT_THEME.theme.palette.text.titleText,
    marginTop: 16,
  },
  question: {
    marginBottom: 30,
  },
});
