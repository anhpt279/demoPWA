import { createUseStyles } from "react-jss";
import DEFAULT_THEME from "../../themes/theme";

export const useStyles = createUseStyles({
  rootOrder: {
    backgroundColor: DEFAULT_THEME.theme.palette.common.white,
    width: "100%",
    overflow: "auto",
    height: "auto",
  },
  head: {
    height: "153px",
    width: "100%",
    display: "flex",
    flexDirection: "column",
  },
  orderDetails: {
    display: "flex",
    fontSize: "18px",
    lineHeight: "24px",
    fontWeight: "700",
    margin: "18px auto",
  },
  deliveryStatus: {
    marginTop: "72px",
    margin: "0 auto",
  },
  iconback: {
    position: "absolute",
    top: "16px",
  },
  hrYourOrder: {
    width: "100%",
    height: "8px",
    backgroundColor: "#E5E7EB",
    marginTop: "16px",
  },

  rbtfooter: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "16px",
    marginBottom: "40px",
    "& > button:first-child": {
      fontWeight: "700",
      fontSize: "14px",
      lineHeight: "24px",
      width: "45%",
      height: "44px",
      backgroundColor: "white",
      border: "1px solid black",
      borderRadius: "8px",
    },

    "& button:nth-child(2)": {
      fontWeight: 400,
      fontSize: "16px",
      lineHeight: "18px",
      width: "45%",
      height: "44px",
      borderRadius: "8px",
      backgroundColor: "#00AC77",
      color: "white",
      padding: "1px",
    },
  },

  DeliveryTime: {
    "& > p:first-child": {
      fontSize: "18px",
      lineHeight: "24px",
      fontWeight: "700",
      color: "#212121",
      marginTop: "18px",
    },
    "& p:nth-child(2)": {
      fontSize: "12px",
      lineHeight: "16px",
      fontWeight: "400",
      color: "#00AC77",
      margin: "16px 0",
    },
  },

  location: {
    "& img": {
      width: "2.5rem",
      height: "3rem",
      objectFit: "contain",
      transform: "translate(-50%,-50%)",
    },
  },
  locationDriver: {
    "& img": {
      transform: "translate(-50%,-50%)",
    },
  },
  orderPage: {
    "& p:nth-child(1)": {
      fontSize: "12px",
      lineHeight: "16px",
      fontWeight: "400",
      color: DEFAULT_THEME.theme.palette.text.cardText,
      marginTop: "16px",
    },
    "& p:nth-child(2)": {
      fontSize: "18px",
      lineHeight: "24px",
      fontWeight: "700",
      color: DEFAULT_THEME.theme.palette.text.title,
      marginTop: "16px",
    },
    "& hr": {
      width: "4px",
      height: "4px",
      borderRadius: "50%",
      backgroundColor: "#9CA3AF",
    },
  },
  finding: {
    display: "flex",
    alignItems: "center",
    width: "75%",
    justifyContent: "space-between",
    marginTop: "16px",
    "& p:nth-child(1)": {
      fontSize: "14px",
      lineHeight: "24px",
      fontWeight: "400",
      color: "#EF4444",
      height: "100%",
      margin: "auto 0",
    },
    "& span": {
      fontSize: "14px",
      lineHeight: "24px",
      fontWeight: "400",
      color: DEFAULT_THEME.theme.palette.text.cardText,
    },
  },
  loadingShip: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    "& h5": {
      fontSize: "14px",
      lineHeight: "24px",
      fontWeight: "400",
      color: DEFAULT_THEME.theme.palette.text.secondary,
      paddingLeft: "8px",
    },
  },
  infoTrack: {
    "& p:nth-child(1)": {
      fontSize: "12px",
      lineHeight: "16px",
      fontWeight: "400",
      color: DEFAULT_THEME.theme.palette.text.cardText,
      marginTop: "16px",
    },
  },
  contentInfo: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: "16px",
    "& div": {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      "& p:nth-child(1)": {
        fontSize: "14px",
        lineHeight: "24px",
        fontWeight: "600",
        color: "#374151",
      },
      "& p:nth-child(2)": {
        fontSize: "12px",
        lineHeight: "16px",
        fontWeight: "400",
        color: DEFAULT_THEME.theme.palette.text.cardText,
      },
    },
  },
  addShipping: {
    display: "flex",
    flexDirection: "row",
    columnGap: "8px",
    marginTop: "16px",
  },
  fromTo: {
    display: "flex",
    flexDirection: "column",
    rowGap: "10px",
    "& h5": {
      fontSize: "14px",
      lineHeight: "24px",
      fontWeight: "600",
      color: "#374151",
    },
    "& p": {
      fontSize: "14px",
      lineHeight: "24px",
      fontWeight: "400",
      color: DEFAULT_THEME.theme.palette.text.cardText,
    },
  },
  headerNeo: {
    display: "flex",
    flexDirection: "column",
    rowGap: "8px",
    "& div": {
      display: "flex",
      flexDirection: "column",
      "& p:nth-child(1)": {
        fontSize: "14px",
        lineHeight: "24px",
        fontWeight: "600",
        color: "#6B7280",
      },
      "& p:nth-child(2)": {
        fontSize: "14px",
        lineHeight: "24px",
        fontWeight: "400",
        color: "#6B7280",
      },
    },
  },
  clickable: {
    display: "flex",
    flexDirection: "column",
    marginTop: "16px",
    marginBottom: "40px",
    "& p:nth-child(1)": {
      fontSize: 12,
      lineHeight: "24px",
      fontWeight: "400",
      color: "#00AC77",
      textDecoration: "underline",
      width: "100%",
      textAlign: "center",
    },
    "& button": {
      width: "100%",
      height: "44px",
      borderRadius: "8px",
      marginTop: "16px",
      display: "flex",
      backgroundColor: "#00AC77",
      justifyContent: "center",
      alignItems: "center",
    },
    "& p:nth-child(3)": {
      fontSize: "14px",
      lineHeight: "24px",
      fontWeight: "400",
      color: "#00AC77",
      width: "100%",
      textAlign: "center",
      marginTop: "16px",
    },
  },
  hrmall: {
    width: "100%",
    height: "1px",
    backgroundColor: "#E5E7EB",
    marginTop: "16px",
  },
  ShipperInformation: {
    "& p:nth-child(1)": {
      fontSize: "12px",
      fontWeight: "400",
      lineHeight: "16px",
      color: DEFAULT_THEME.theme.palette.text.cardText,
      marginTop: "16px",
    },
  },
  contentInfoShip: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "16px",
    "& div:nth-child(1)": {
      display: "flex",
      flexDirection: "row",
      columnGap: "8px",
      "& p:nth-child(1)": {
        fontSize: "14px",
        fontWeight: "600",
        lineHeight: "24px",
        color: "#374151",
      },
      "& p:nth-child(2)": {
        fontSize: "14px",
        fontWeight: "400",
        lineHeight: "24px",
        color: "#374151",
      },
    },
  },
  contentRating: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
    color: DEFAULT_THEME.theme.palette.text.cardText,
    lineHeight: "24px",
    fontSize: "14px",
    "& div": {
      display: "flex",
      alignItems: "center",
    },
    location: {
      "& img": {
        width: "2.5rem",
        height: "3rem",
        objectFit: "contain",
        transform: "translate(-50%,-100%)",
      },
      "& span": {
        fontWeight: "400",
      },
      "& p": {
        fontWeight: "400",
      },
    },
  },
  NameDriver: {
    display: "flex",
    marginTop: "-16px",
    flexDirection: "column",
    color: DEFAULT_THEME.theme.palette.text.title,
    "& p:nth-child(2)": {
      color: DEFAULT_THEME.theme.palette.text.cardText,
    },
  },
  checkoutorder: {
    position: "absolute",
    top: "0",
    left: "0",
    right: "0",
    backgroundColor: "white",
    minHeight: "100vh",
    zIndex: "102",
  },
  orderProgressWrapper: {
    position: "relative",
    height: "100%",
  },
  orderProgress: {
    position: "absolute",
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
    zIndex: 10,
    "& > div:first-child": {
      alignItems: "flex-start",
    },
    "& > div:last-child": {
      alignItems: "flex-end",
    },
  },
  progressItem: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    "& p": {
      fontWeight: 400,
      fontSize: 12,
      lineHeight: "16px",
      marginTop: 16,
    },
    "& img": {
      width: 32,
      height: 32,
    },
  },
  progressLineWrapper: {
    height: 2,
    backgroundColor: DEFAULT_THEME.theme.dotSlide.backgroundColor,
    width: "100%",
    position: "absolute",
    zIndex: 1,
    top: "15%",
  },
  progressLine: {
    height: 2,
    backgroundColor: DEFAULT_THEME.theme.palette.background.onBoarding,
    fontWeight: "bold",
    WebkitTransition: "width 0.3s ease",
    transition: "width 0.3s ease",
  },
  listTransitionEnter: {
    // ...startTransitionStyles,
  },
  listTransitionEnterActive: {
    // ...finishTransitionStyles,
    // transition: "all 400ms",
  },
  listTransitionExit: {
    // ...finishTransitionStyles,
  },
  listTransitionExitActive: {
    // ...startTransitionStyles,
    // transition: "all 400ms",
  },
});
