import { createUseStyles } from "react-jss";
// import DEFAULT_THEME from "src/themes/theme";

export const useStyles = createUseStyles({
  "@keyframes loading": {
    from: {
      backgroundPosition: "100% 0%",
    },
    to: {
      backgroundPosition: "-100% 0%",
    },
  },
  root: {
    backgroundSize: "200% 100%",
    background: `linear-gradient(90deg, #ededed, #ffffff, #ededed)`,
    animationDirection: "forwards",
    animation: "$loading 1.5s linear infinite",
  },
});
