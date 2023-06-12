import { createUseStyles } from "react-jss";
import DEFAULT_THEME from "src/themes/theme";

export const useStyles = createUseStyles({
  root: {
    width: "100%",
    height: 8,
    backgroundColor: DEFAULT_THEME.theme.palette.secondary.light,
    opacity: 0.2,
  },
});
