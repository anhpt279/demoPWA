import { createUseStyles } from "react-jss";
import DEFAULT_THEME from "src/themes/theme";

export const useStyles = createUseStyles(() => ({
  root: {
    width: "100%",
    height: "44px",
    borderRadius: "8px",
    fontWeight: "600",
    fontSize: "14px",
    lineHeight: "24px",
    alignItems: "center",
    textTransform: "uppercase",
  },
  btnContainer: { backgroundColor: "#00AC77", color: "#FFFF" },
  btnOutlined: {
    backgroundColor: DEFAULT_THEME.theme.palette.background.default,
    border: "1px solid #D1D5DB",
    color: "#000000",
  },
}));
