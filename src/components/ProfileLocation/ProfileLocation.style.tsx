import { createUseStyles } from "react-jss";
import DEFAULT_THEME from "src/themes/theme";

export const useStyles = createUseStyles({
  root: {
    marginTop: 16,
    color: DEFAULT_THEME.theme.palette.text.dark,
    lineHeight: "24px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: "calc(100vh - 16px)",
  },
  headerContent: { marginBottom: 32 },
  header: {
    display: "flex",
    alignItems: "center",
    position: "relative",
    marginBottom: "32px",
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
  titleSearch: {
    fontSize: 14,
    fontWeight: 500,
    color: DEFAULT_THEME.theme.palette.text.title,
  },
  itemSearch: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    marginTop: 16,
    whiteSpace: "nowrap",
    overflow: "hidden",
    "&>img": {
      marginRight: 16,
    },
  },
  title: {
    fontSize: 14,
    fontWeight: 500,
    color: DEFAULT_THEME.theme.palette.text.dark,
  },
  search: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    position: "relative",
    borderBottom: `1px solid ${DEFAULT_THEME.theme.palette.text.secondary}`,

    "&>input": {
      width: "100%",
      padding: "8px 0 8px 30px",
      outline: "none",
      caretColor: DEFAULT_THEME.theme.palette.text.primary,
    },
    "&>img": {
      position: "absolute",
      left: 0,
      top: "50%",
      transform: "translateY(-50%)",
      padding: 4,
      boxSizing: "border-box",
    },
  },
  item: {
    marginTop: 32,
  },
  headerItem: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  clearAll: {
    color: DEFAULT_THEME.theme.palette.text.primary,
    fontSize: 12,
    lineHeight: "16px",
  },
  itemSearchContent: {
    color: DEFAULT_THEME.theme.palette.text.dark,
    fontSize: 14,
    fontWeight: 400,
    "&>p:last-child": {
      fontSize: 12,
      color: DEFAULT_THEME.theme.palette.text.cardText,
      fontWeight: 500,
      whiteSpace: "nowrap",
    },
  },
  active: {
    borderBottom: `1px solid ${DEFAULT_THEME.theme.button.contained.background}`,
    color: DEFAULT_THEME.theme.button.contained.background,
  },
  btn: {
    marginBottom: "64px",
  },
});
