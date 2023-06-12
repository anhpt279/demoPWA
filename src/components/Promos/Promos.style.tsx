import { createUseStyles } from "react-jss";
import DEFAULT_THEME from "src/themes/theme";
import FrameHotPromos from "../../assets/images/home/Promo-Frame.png";
export const useStyles = createUseStyles({
  root: {
    marginTop: 4,
    color: DEFAULT_THEME.theme.palette.text.titleText,
    minHeight: "80vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    overflow: "scroll",
  },
  promos: {
    margin: "12px 0",
    background: `url(${FrameHotPromos})`,
    backgroundSize: "cover",
    backgroundRepeat: "round",
  },
  topPromos: {
    display: "flex",
    justifyContent: "space-between",
    padding: 14,
    lineHeight: "24px",
    alignItems: "center",
    "&>img": {
      width: 64,
      height: 64,
      alignItems: "center",
    },
    "&>div": {
      minWidth: "40%",
      "&>p:first-child": {
        fontSize: 16,
        fontWeight: 600,
        color: DEFAULT_THEME.theme.palette.text.titleText,
      },
      "&>p:nth-child(2)": {
        fontSize: 12,
        fontWeight: 400,
        textDecoration: "underline",
        color: DEFAULT_THEME.theme.palette.text.cardText,
      },
      "&>p:nth-child(3)": {
        fontSize: 12,
        fontWeight: 400,
        lineHeight: "16px",
        color: DEFAULT_THEME.theme.palette.text.cardText,
      },
    },
    "&>p": {
      fontSize: 24,
      fontWeight: 700,
      lineHeight: "32px",
      alignItems: "center",
      display: "flex",
      width: "30%",
    },
  },
  bottomPromos: {
    display: "flex",
    justifyContent: "space-between",
    padding: 14,
    fontSize: 12,
    fontWeight: 400,
    lineHeight: "16px",
    color: DEFAULT_THEME.theme.palette.text.cardText,
    borderTop: `1px dashed ${DEFAULT_THEME.theme.palette.background.bar}`,
  },
  saved: {
    backgroundColor: `${DEFAULT_THEME.theme.palette.background.onBoarding}`,
    color: `${DEFAULT_THEME.theme.palette.text.default}`,
    fontSize: 12,
    fontWeight: 400,
    lineHeight: "16px",
    borderRadius: 6,
    padding: "2px 10px",
  },
  used: {
    backgroundColor: `${DEFAULT_THEME.theme.palette.background.default}  !important`,
    color: `${DEFAULT_THEME.theme.palette.text.titleText}  !important`,
    border: `1px solid ${DEFAULT_THEME.theme.button.disabled.color}`,
  },
  codeDiscount: {
    fontSize: 16,
    fontWeight: 600,
    lineHeight: "16px",
    color: DEFAULT_THEME.theme.palette.text.titleText,
  },
});
