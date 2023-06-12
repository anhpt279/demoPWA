import React, { FC, HTMLAttributes, useEffect, useState } from "react";
import { useStyles } from "./Permission.style";
import { Button } from "../Buttons";
import Images from "src/assets/images";
import { useNavigate } from "react-router-dom";
import { PermissionContext } from "../../contexts/location/permissionCtx";

export const PermissionLocation: FC<HTMLAttributes<HTMLDivElement>> = () => {
  const [variant, setVariant] = useState<
    "outlined" | "text" | "contained" | undefined
  >("outlined");

  const classes = useStyles();
  const navigate = useNavigate();

  const gps: Array<number> = [21.0342994, 105.8172407];

  const { setIsPermit, setRenderAddress, setGps } =
    React.useContext(PermissionContext);
  const handleHover = () => {
    setVariant("contained");
  };

  const handleOut = () => {
    setVariant("outlined");
  };

  const waitingPermissions = async () => {
    const result = await navigator.permissions.query({ name: "geolocation" });
    if (result.state === "granted") {
      setIsPermit(true);
      navigate("/permission/maplocation");
    } else if (result.state === "denied") {
      setIsPermit(false);
      setGps(gps);
      setRenderAddress("No 1, 34 Van Bao, Lieu Giai, Ba Dinh, Hanoi");
      navigate("/permission/location");
    }
  };

  useEffect(() => {
    waitingPermissions();
  }, []);

  const allowHandle = async () => {
    navigator.geolocation.getCurrentPosition(() => {});
    const result = await navigator.permissions.query({ name: "geolocation" });
    result.onchange = () => {
      if (result.state === "granted") {
        setIsPermit(true);
        navigate("/permission/maplocation");
      } else if (result.state === "denied") {
        setIsPermit(false);
        setGps(gps);
        setRenderAddress("No 1, 34 Van Bao, Lieu Giai, Ba Dinh, Hanoi");
        setTimeout(() => {
          navigate("/permission/location");
        }, 1000);
      }
    };
  };

  return (
    <>
      <div className={classes.root}>
        <div className={classes.content}>
          <img src={Images.iconLocation} alt="icon-locaiton" />
          <p>Enable precise location</p>
          <p>Your location will be used to show supermarket near you.</p>
          <Button
            variant={variant}
            onMouseOver={handleHover}
            onMouseOut={handleOut}
            onClick={allowHandle}
          >
            allow access
          </Button>
        </div>
      </div>
    </>
  );
};
export default PermissionLocation;
