import { createUseStyles } from "react-jss";
import DEFAULT_THEME from "src/themes/theme";
export const useStyles = createUseStyles(() => ({
  input: {
    width: "73px",
    height: "60px",
    outline: "none",
    caretColor: DEFAULT_THEME.theme.button.contained.background,
    textAlign: "center",
    borderBottom: `1px solid ${DEFAULT_THEME.theme.palette.text.secondary}`,
  },
}));
