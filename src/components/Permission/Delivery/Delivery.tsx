import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Images from "../../../assets/images";
import { useStyles } from "./Delivery.style";
import { PermissionContext } from "../../../contexts/location/permissionCtx";
export const Delivery = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const { renderAddress } = useContext(PermissionContext);
  React.useEffect(() => {
    setTimeout(() => {
      navigate("/");
    }, 2000);
  }, []);
  const addressArray: Array<string> = renderAddress.split(",");
  const firstAddress: string = addressArray?.slice(0, 3)?.join(", ");
  const secondAddress: string =
    addressArray.length > 3 ? addressArray?.slice(3)?.join(", ") : "";
  return (
    <div className={classes.root}>
      <div className={classes.title}>
        <h3>Delivery to</h3>
        <p>{firstAddress}</p>
        <p>{secondAddress}</p>
      </div>
      <img src={Images.address} alt="" className={classes.img} />
    </div>
  );
};

export default Delivery;
