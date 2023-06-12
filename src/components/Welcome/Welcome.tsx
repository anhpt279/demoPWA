import React, { FC, HTMLAttributes } from "react";
import { useStyles } from "./Welcome.style";
import Logo from "src/assets/images/auth/Logo.png";
import PageLayout from "../PageLayout/PageLayout";
import { Button } from "../Buttons";
import { useNavigate } from "react-router-dom";
import clsx from "clsx";

export const Welcome: FC<HTMLAttributes<HTMLDivElement>> = (props: any) => {
  const classes = useStyles();
  const navigate = useNavigate();

  return (
    <PageLayout>
      <div {...props} className={clsx(classes.root, props.className)}>
        <div className={classes.logo}>
          <img src={Logo} srcSet={`${Logo} 2x`} alt="logo" />
        </div>
        <div className={classes.content}>
          <h3>Enjoy your shopping time</h3>
          <p>Ready to buy?</p>
        </div>
        <div className={classes.btnAction}>
          <Button variant="contained" onClick={() => navigate("/signin")}>
            Sign In
          </Button>
          <Button variant="outlined" onClick={() => navigate("/signup")}>
            Sign Up
          </Button>
        </div>
      </div>
    </PageLayout>
  );
};
export default Welcome;
