import React, { FC, HTMLAttributes } from "react";
import { useNavigate } from "react-router-dom";
import Images from "../../assets/images";
import { Button } from "../Buttons";
import { useStyles } from "./Permission.style";

export const PermissionSetting: FC<HTMLAttributes<HTMLDivElement>> = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  return (
    <div className={classes.root}>
      <div className={classes.content}>
        <img src={Images.iconLocation} alt="icon-locaiton" />
        <p>Where are you?</p>
        <p>You’ll need to enable your location in order to use this app.</p>
        <Button
          variant="contained"
          onClick={() => navigate("/permission/maplocation")}
        >
          open my map
        </Button>
        <p onClick={() => navigate("/")}>Remind me later</p>
      </div>
    </div>
  );
};

export default PermissionSetting;
