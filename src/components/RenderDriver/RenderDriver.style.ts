import { createUseStyles } from "react-jss";
import DEFAULT_THEME from "../../themes/theme";

export const useStyles = createUseStyles(() => ({
  RenderDriver: {
    backgroundColor: "#FFFFFF",
    position: "absolute",
    width: "100vw",
    borderRadius: "16px",
    top: "333px",
    overflowY: "auto",
  },
  driver: {
    display: "flex",
    flexDirection: "column",
  },
  infoDriver: {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    alignItems: "center",
    gap: 8,
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
    flexDirection: "column",
    color: DEFAULT_THEME.theme.palette.text.title,
    "& p:nth-child(2)": {
      color: DEFAULT_THEME.theme.palette.text.cardText,
    },
  },
  contentInfoDriver: {
    display: "flex",
    height: "44px",
    flexDirection: "column",
    justifyContent: "space-between",
    transform: "translateX(-82px)",
    "& > p:first-child": {
      fontSize: "14px",
      lineHeight: "24px",
      fontWeight: "600",
      color: "#374151",
    },
    "& p:nth-child(2)": {
      fontSize: "12px",
      lineHeight: "16px",
      fontWeight: "400",
      color: "#374151",
    },
  },
  containedNeo: {
    display: "flex",
  },
  img: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 21,
    marginBottom: 15,
    "&:hover": {
      opacity: 0.5,
    },
  },
  title: {
    "& p:nth-child(1)": {
      fontWeight: 700,
      fontSize: "18px",
      lineHeight: "24px",
      textAlign: "center",
      color: "#374151",
    },
    "& p:nth-child(2)": {
      fontWeight: 400,
      fontSize: "12px",
      lineHeight: "16px",
      textAlign: "center",
      color: "#6B7280",
    },
  },
  line: {
    height: 1,
    width: "100%",
    backgroundColor: "#E5E7EB",
    marginTop: 16,
    marginBottom: 16,
  },
  driverinfo: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  contentDriver: {
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
  content: {
    display: "flex",
    flexDirection: "column",
    "& img": {
      height: "56px",
      width: "56px",
      objectFit: "cover",
      margin: "0 auto",
      marginBottom: "8px",
    },
    "& span": {
      fontWeight: 600,
      fontSize: "14px",
      lineHeight: "24px",
      textAlign: "center",
      color: "#374151",
    },
    "& p": {
      fontWeight: 400,
      fontSize: "12px",
      lineHeight: "16px",
      textAlign: "center",
      color: "#6B7280",
    },
  },
  bot: {
    display: "flex",
  },
  bottravel: {
    display: "flex",
    flexDirection: "column",
    rowGap: "25px",
    marginLeft: "8px",
    paddingBottom: "16px",
  },
  up: {
    transform: "translateY(47%)",
    animation: "$Up 1s ease forwards ",
  },
  "@keyframes Up": {
    to: { transform: "translateY(0%)" },
  },

  down: {
    animation: "$Down 1s ease forwards ",
  },
  "@keyframes Down": {
    to: { transform: "translateY(47%)" },
  },
  clickable: {
    display: "flex",
    flexDirection: "column",
    marginTop: "16px",
    marginBottom: "40px",
    "& p:nth-child(1)": {
      fontSize: "14px",
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
  orderPage: {
    "& p:nth-child(1)": {
      fontSize: "12px",
      lineHeight: "16px",
      fontWeight: "400",
      color: "#374151",
      marginTop: "16px",
    },
    "& p:nth-child(2)": {
      fontSize: "18px",
      lineHeight: "24px",
      fontWeight: "700",
      color: "#374151",
      marginTop: "16px",
    },
    "& hr": {
      width: "4px",
      height: "4px",
      borderRadius: "50%",
      backgroundColor: "#9CA3AF",
    },
  },
  loadingShip: {
    display: "flex",
    flexDirection: "row",
    marginTop: "16px",
    alignItems: "center",
    "& h5": {
      fontSize: "14px",
      lineHeight: "24px",
      fontWeight: "400",
      color: DEFAULT_THEME.theme.palette.text.cardText,
      paddingLeft: "8px",
    },
  },
  hr: {
    width: "100%",
    height: "8px",
    backgroundColor: "#F3F4F6",
    marginTop: "16px",
    marginBottom: "16px",
  },
  contentInfoShip: {
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
      color: "#6B7280",
    },
  },
}));
