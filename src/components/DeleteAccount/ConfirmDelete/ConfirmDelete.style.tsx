import { createUseStyles } from "react-jss";
import DEFAULT_THEME from "src/themes/theme";

export const useStyles = createUseStyles({
  warningText: {
    lineHeight: "24px",
    fontWeight: 600,
    fontSize: 16,
    color: DEFAULT_THEME.theme.palette.error.main,
  },
  verifyText: {
    marginTop: 32,
    lineHeight: "16px",
    fontSize: 12,
    color: DEFAULT_THEME.theme.palette.text.title,
  },
  customInput: {
    borderBottom: `1px solid ${DEFAULT_THEME.theme.palette.text.secondary}`,
    width: "100%",
    outline: "none",
    fontSize: 14,
    fontWeight: 400,
    lineHeight: "24px",
    padding: "9px 0",
    "&::placeholder": {
      color: DEFAULT_THEME.theme.palette.text.secondary,
    },
    "&::-webkit-outer-spin-button, &::-webkit-inner-spin-button": {
      "-webkit-appearance": "none",
      margin: 0,
    },
  },
});
