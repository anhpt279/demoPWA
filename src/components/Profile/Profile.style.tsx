import { createUseStyles } from "react-jss";
import DEFAULT_THEME from "src/themes/theme";

export const useStyles = createUseStyles({
  root: {
    lineHeight: "24px",
    color: DEFAULT_THEME.theme.palette.text.title,
  },
  header: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 16,
    paddingBottom: 16,
    "&>h6": {
      marginBottom: 32,
      fontSize: 18,
      fontWeight: 600,
      padding: "0 auto",
    },
  },
  headerContent: { display: "flex" },
  avatar: {
    paddingRight: 16,
    position: "relative",
    "&>img:nth-child(1)": {
      width: 96,
      height: 96,
      borderRadius: "50%",
    },
    "&>label": {
      position: "absolute",
      bottom: 10,
      right: 10,
    },
  },
  bio: {
    fontSize: 12,
    fontWeight: 400,
    "&>p:first-child": {
      fontSize: 16,
      fontWeight: 500,
    },
  },
  cardProfile: {
    margin: "16px 0",
    "&>div:last-child": {
      borderBottom: "none",
    },
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 600,
  },
  contextContent: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  cardContent: {
    display: "flex",
    alignItems: "center",
    padding: "8px 0",
    borderBottom: `1px solid ${DEFAULT_THEME.theme.palette.secondary.light}`,
    "&>div:first-child": {
      width: "10%",
      paddingRight: 8,
    },
  },
  cardContext: {
    fontSize: 14,
    "&>p:first-child": {
      fontWeight: 600,
    },
    "&>p:nth-child(2)": {
      color: DEFAULT_THEME.theme.palette.text.cardText,
      fontWeight: 400,
    },
  },
  btnLogout: {
    margin: "16px 0 16px 0",
  },
  btnDelete: {
    margin: "16px 0 40px 0",
  },
  textDelete: {
    color: DEFAULT_THEME.theme.palette.text.disabled,
  },
  bottom: {
    marginBottom: 64,
    height: "32px !important",
  },
  version: {
    fontSize: 14,
    fontWeight: 600,
    lineHeight: "24px",
    color: "#6B7280",
  },
  titleDisable: {
    color: `${DEFAULT_THEME.theme.palette.text.secondary} !important`,
  },
  disable: { opacity: 0.6 },
  imgData: {
    height: "97px",
    minWidth: "97px",
    borderRadius: "50%",
    marginRight: "16px",
  },
  nameData: {
    height: "14px",
    width: "174px",
    borderRadius: "5px",
  },
  phoneData: {
    height: "14px",
    width: "100px",
    borderRadius: "5px",
    margin: "8px 0",
  },
  addressData: {
    height: "24px",
    width: "100%",
    borderRadius: "5px",
  },
});
