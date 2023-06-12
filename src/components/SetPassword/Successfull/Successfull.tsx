import React from "react";
import { useNavigate } from "react-router-dom";
import successfull from "src/assets/images/auth/sussceSU.png";
import { Button } from "../../Buttons";
import { useStyles } from "./Successfull.style";

export const Successfull = () => {
  const navigate = useNavigate();
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.content}>
        <div className={classes.title}>
          <h1>You’re all set!!</h1>
          <p>You can start shopping now</p>
        </div>
        <img src={successfull} srcSet={`${successfull} 2x`} alt="" />
        <div className={classes.btn}>
          <Button variant="contained" onClick={() => navigate("/signin")}>
            Back to Login
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Successfull;
