import React from "react";
import { useNavigate } from "react-router-dom";
import imageSus from "src/assets/images/auth/sussceSI.png";
import { Button } from "../../Buttons";
import { useStyles } from "./Successfully.style";

export const Successfully = () => {
  const navigate = useNavigate();
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.content}>
        <div className={classes.title}>
          <h1>Successful!</h1>
          <p>Your new password has been sett</p>
        </div>
        <img src={imageSus} srcSet={`${imageSus} 2x`} alt="" />
        <div className={classes.btn}>
          <Button variant="contained" onClick={() => navigate("/signin")}>
            Back to Sign-in
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Successfully;
