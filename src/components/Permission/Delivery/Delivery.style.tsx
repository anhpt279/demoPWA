import { createUseStyles } from "react-jss";
import DEFAULT_THEME from "src/themes/theme";

export const useStyles = createUseStyles({
  root: {
    padding: "0 20px",
    height: "100vh",
  },
  title: {
    padding: "148px 0 96px 0",
    "& h3": {
      fontWeight: 700,
      fontSize: "32px",
      lineHeight: "40px",
      textAlign: "center",
      color: DEFAULT_THEME.theme.palette.text.title,
      marginBottom: "8px",
    },
    "& p": {
      fontWeight: 400,
      fontSize: "16px",
      lineHeight: "24px",
      textAlign: "center",
      color: DEFAULT_THEME.theme.palette.text.cardText,
    },
    "& img": {},
  },
  img: {
    position: "relative",
    left: "50%",
    transform: "translateX(-50%)",
    width: "215px",
    height: "190px",
    objectFit: "cover",
  },
});
