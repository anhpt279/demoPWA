import { createUseStyles } from "react-jss";
import DEFAULT_THEME from "../../themes/theme";

export const useStyles = createUseStyles({
  term: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    width: "100%",
    marginTop: 16,
  },
  termHeader: {
    fontWeight: "700",
    fontSize: 18,
    lineHeight: "24px",
    textAlign: "center",
    color: DEFAULT_THEME.theme.palette.text.titleText,
    width: "100%",
  },
  termBack: {
    fontSize: 16,
  },
  termContent: {},
  termUse: {
    "& p:nth-child(3)": {
      marginTop: 32,
    },
  },
  account: {},
  intellectual: {
    "& p:nth-child(3)": {
      marginTop: 32,
    },
  },
  miscellaneous: {
    "& p:nth-child(3)": {
      marginTop: 32,
    },
    "& p:nth-child(4)": {
      marginTop: 32,
    },
    "& p:nth-child(5)": {
      marginTop: 32,
    },
  },
  termTitle: {
    fontWeight: 600,
    fontSize: 16,
    lineHeight: "24px",
    color: DEFAULT_THEME.theme.palette.text.title,
    marginBottom: 8,
    marginTop: 32,
  },
  termDesc: {
    fontWeight: 400,
    fontSize: 16,
    lineHeight: "24px",
    color: DEFAULT_THEME.theme.palette.text.title,
  },
  termContact: {
    marginTop: 32,
    "& p:first-child": {
      fontWeight: 600,
      fontSize: 16,
      lineHeight: "24px",
      color: DEFAULT_THEME.theme.palette.text.title,
      marginBottom: 8,
    },
    "& p:nth-child(2)": {
      fontWeight: 400,
      fontSize: 16,
      lineHeight: "24px",
      color: DEFAULT_THEME.theme.palette.text.title,
      marginBottom: 40,
    },
    "& span": {
      textDecoration: "underline",
    },
  },
});
