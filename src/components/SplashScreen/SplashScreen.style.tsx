import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles(() => ({
  root: {
    backgroundColor: "#FFFFFF",
    width: "100vw",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    opacity: "1",
    animation: "$whiteScreen 1s ease forwards 4s",
  },

  imgGo: {
    position: "fixed",
    top: "50%",
    left: "calc(50% - 15px)",
    height: "150%",
    zIndex: "10",
    transform: "translate(-50%,-50%)",
    backgroundColor: "white",
    paddingLeft: "30px",
    animation:
      "$GoZoom 2s ease forwards , $GoMove 1s ease forwards 2s , $backgroundColor 1s ease forwards 3.3s ",
  },
  "@keyframes GoZoom": {
    to: { height: "40px" },
  },
  "@keyframes backgroundColor": {
    to: {
      backgroundColor: "unset",
    },
  },
  "@keyframes GoMove": {
    "100%": { transform: "translate(-120%,-50%)" },
  },
  toongleMaeket: {
    width: "190px",
    overflow: "hidden",
  },
  imgMarket: {
    zIndex: "1",
    transform: "translate(-200% , -1px)",
    animation: "$MarketMove 0.5s ease forwards 3s",
  },
  "@keyframes MarketMove": {
    "100%": { transform: "translate(60% , -1px)" },
  },
  "@keyframes whiteScreen": {
    to: { opacity: 0 },
  },
}));
