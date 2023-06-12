import { createUseStyles } from "react-jss";
import DEFAULT_THEME from "../../themes/theme";

export const useStyles = createUseStyles({
  root: {
    padding: "18px 24px 16px",
    backgroundColor: DEFAULT_THEME.theme.palette.background.default,
  },
  review: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    width: "100%",
  },
  reviewHeader: {
    fontWeight: "700",
    fontSize: 18,
    lineHeight: "24px",
    textAlign: "center",
    color: DEFAULT_THEME.theme.palette.text.titleText,
    width: "100%",
  },
  reviewBack: {
    fontSize: 16,
  },
  customerRateSection: {
    marginTop: 32,

    "& > p": {
      color: DEFAULT_THEME.theme.palette.text.titleText,
      fontWeight: "700",
      fontSize: 18,
      lineHeight: "24px",
      marginTop: "22px",
    },
  },
  customerRate: {
    display: "grid",
    gridTemplateColumns: "4fr 2fr",
    columnGap: "24px",
    marginTop: "22px",
  },
  rateReview: {
    display: "flex",
    width: "100%",
  },
  starRate: {
    "& > p": {
      marginTop: "2px",
    },
  },
  rateBar: {
    marginLeft: "13px",
    width: "100%",
  },
  rateContainer: {
    width: "100%",
    backgroundColor: DEFAULT_THEME.theme.palette.background.bar,
    borderRadius: "3px",
  },
  rate: {
    paddingTop: "3px",
    paddingBottom: "3px",
    marginTop: "11px",
    borderRadius: "3px",
    backgroundColor: DEFAULT_THEME.theme.palette.text.primary,
  },

  totalRate: {
    marginTop: "5px",
  },
  averageRate: {
    fontWeight: "700",
    fontSize: "48px",
    lineHeight: "56px",
  },
  sumRate: {
    fontWeight: "600",
    fontSize: "14px",
    lineHeight: "24px",
    marginLeft: "10px",
  },
  rateIcon: {
    margin: "auto",
    color: DEFAULT_THEME.theme.palette.iconStar.default,
    marginLeft: "27px",

    "& > i": {
      marginRight: "5px",
      fontSize: "16px",
    },
  },
  rateBottom: {
    display: "flex",
    justifyContent: "space-between",
    gap: "55px",

    "& > p": {
      fontWeight: "400",
      fontSize: "12px",
      lineHeight: "16px",
      marginTop: "6px",
    },
  },
  reviewBtn: {
    margin: "32px 0 16px 0",
  },

  reviewHr: {
    height: 8,
    width: "100%",
    backgroundColor: DEFAULT_THEME.theme.palette.background.review,
    position: "absolute",
    top: 323,
  },
  customerFeedback: {
    display: "flex",
    flexDirection: "column",
    position: "relative",
    "& > p": {
      color: DEFAULT_THEME.theme.palette.text.titleText,
      fontWeight: "700",
      fontSize: 18,
      lineHeight: "24px",
      paddingBottom: "16px",
    },
  },
  commentSection: {
    display: "flex",
    flexDirection: "column",
  },
  customerCommentTop: {
    display: "flex",
    width: "100%",
    marginTop: "24px",
  },
  customerComment: {
    display: "flex",
    width: "100%",
  },
  customerAvatar: {
    width: "40px",
    height: "40px",
    marginRight: "10px",
  },
  rateStar: {
    fontSize: "16px",
    color: DEFAULT_THEME.theme.palette.iconStar.default,
  },
  customerCommentTime: {
    "& > p": {
      fontWeight: "400",
      fontSize: "12px",
      lineHeight: "16px",
      letterSpacing: "0.25%",
      marginLeft: "54px",
    },
  },
  customerCommentBot: {
    display: "flex",
    flexDirection: "column",
    marginLeft: "50px",
    marginTop: "-15px",
  },
  customerName: {
    fontWeight: "600",
    fontSize: "14px",
    lineHeight: "24px",
    letterSpacing: "0.1%",
  },
  commentContent: {
    fontWeight: "400",
    fontSize: "14px",
    lineHeight: "24px",
    letterSpacing: "0.25%",
  },
  moreComment: {
    display: "flex",
    gap: 4,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 8,
    marginBottom: 35,

    "& > p": {
      fontWeight: "600",
      fontSize: "14px",
      lineHeight: "24px",
      letterSpacing: "0.1%",
    },

    "& > i": {
      fontSize: "13px",
    },
  },
  backTop: {
    backgroundColor: DEFAULT_THEME.theme.palette.background.onBoarding,
    width: 40,
    height: 40,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 25,
    position: "absolute",
    right: "0",
    bottom: "0",
    "& > a": {
      color: DEFAULT_THEME.theme.palette.common.white,
      textDecoration: "none",
    },
  },
});
