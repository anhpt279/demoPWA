import React, { useState, useEffect, FC, HTMLAttributes } from "react";
import App from "src/App";
import { useStyles } from "./SplashScreen.style";
import LogoGo from "../../assets/icons/LogoGo.png";
import { ReactComponent as Market } from "../../assets/icons/market.svg";
import clsx from "clsx";

export const SplashScreen: FC<HTMLAttributes<HTMLDivElement>> = (props) => {
  const classes = useStyles();
  const [checkIntroOpened, setCheckIntroOpened] = useState("");

  useEffect(() => {
    setTimeout(() => {
      localStorage.setItem("intro-opened", "opened");
      const checklocal = localStorage.getItem("intro-opened");
      setCheckIntroOpened(checklocal as string);
    }, 5000);
  }, []);

  if (checkIntroOpened === "opened") {
    return <App />;
  } else {
    return (
      <div {...props} className={clsx(props.className, classes.root)}>
        <img src={LogoGo} className={classes.imgGo} />
        <div className={classes.toongleMaeket}>
          <Market className={classes.imgMarket} />
        </div>
      </div>
    );
  }
};

export default SplashScreen;
