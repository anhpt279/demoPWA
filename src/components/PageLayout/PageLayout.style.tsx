import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles(() => ({
  root: {
    "@media (max-width: 600px)": {
      padding: "0px 24px",
    },
    "@media (min-width: 601px)": {
      padding: "0px 70px",
    },
  },
}));
