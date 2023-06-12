import { createUseStyles } from "react-jss";
import DEFAULT_THEME from "src/themes/theme";

export const useStyles = createUseStyles({
  root: {},
  divider: {
    width: "100%",
    height: 8,
    backgroundColor: DEFAULT_THEME.theme.palette.secondary.light,
    opacity: 0.2,
  },
  title: {
    fontSize: 18,
    fontWeight: 700,
    color: DEFAULT_THEME.theme.palette.text.dark,
  },

  titleItem: {
    fontSize: 14,
    fontWeight: 600,
    color: DEFAULT_THEME.theme.palette.text.title,
  },
  btnQuantity: {
    display: "flex",
    alignItems: "center",
    height: 32,
    "&>p": {
      padding: "0 8px",
      width: "100%",
      fontSize: 14,
      lineHeight: "24px",
      fontWeight: 400,
      color: DEFAULT_THEME.theme.palette.text.cardText,
    },
  },
  billSummary: {
    color: DEFAULT_THEME.theme.palette.text.title,
  },
  billSummaryContent: {
    borderBottom: "1px solid #e6e6e6",
  },
  billSummaryContextYellow: {
    "& p:nth-child(1)": {
      fontSize: 14,
    },
    "& p:nth-child(2)": {
      fontSize: 16,
      fontWeight: 600,
    },
    display: "flex",
    justifyContent: "space-between",
    color: DEFAULT_THEME.theme.palette.text.title,
  },
  billSummaryContext: {
    "& p:nth-child(1)": {
      fontSize: 14,
    },
    "& p:nth-child(2)": {
      fontSize: 16,
      fontWeight: 600,
    },
    display: "flex",
    justifyContent: "space-between",
  },

  billSummaryTitle: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 16,
  },
  promoCodeTitle: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
