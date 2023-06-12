import { createUseStyles } from "react-jss";
import DEFAULT_THEME from "src/themes/theme";

export const useStyles = createUseStyles({
  root: {
    lineHeight: "24px",
    color: DEFAULT_THEME.theme.palette.text.title,
    height: "75vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    margin: "35% 0 20% 0",
  },

  content: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    "&>h3": {
      fontSize: 32,
      fontWeight: 600,
      lineHeight: "40px",
      color: DEFAULT_THEME.theme.palette.text.dark,
    },
    "&>p": {
      fontSize: 16,
      fontWeight: 400,
      color: DEFAULT_THEME.theme.palette.text.cardText,
    },
  },

  image: {
    objectFit: "contain",
    maxWidth: "100%",
    height: "200px",
  },
});
