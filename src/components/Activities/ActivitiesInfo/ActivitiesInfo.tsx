import React, { FC, HTMLAttributes, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useStyles } from "./ActivitiesInfo.style";
import { ReactComponent as Driver } from "../../../assets/images/YourOrder/ImgDriver.svg";
import { ReactComponent as FromTo } from "../../../assets/images/YourOrder/drivering.svg";
import { Button } from "../../Buttons";
import clsx from "clsx";
import { DriverFactory } from "../../../models/DriverFactory";
import { IDriver } from "../../../models/Driver";
import { InfoOrderFactory } from "src/models/infoOrderFactory";
import { IInfoOrder } from "../../../models/InfoOrder";

interface IActivitiesInfo {
  productList: any;
}

export const ActivitiesInfo: FC<
  IActivitiesInfo & HTMLAttributes<HTMLDivElement>
> = React.memo((props) => {
  const { productList } = props;
  const classes = useStyles();
  const navigate = useNavigate();
  const [listDataDriver, setListDataDriver] = useState<Array<any>>([]);
  const [listInfoOrder, setListInfoOrder] = useState<Array<any>>([]);
  const [togglePopup, setTogglePopup] = useState(false);

  const onTrackShip = () => {
    if (productList[0].product.status === "Arrived") {
      setTogglePopup(true);
      document.body.style.overflow = "hidden";
    } else {
      navigate("/your/order");
    }
  };

  const onOkClick = () => {
    setTogglePopup(false);
    document.body.style.overflow = "auto";
  };

  useEffect(() => {
    const dataDriver = async () => {
      const data = await DriverFactory.getDriver();
      setListDataDriver(data);
    };
    const dataInfoOrder = async () => {
      const data = await InfoOrderFactory.getInfoOrder();
      setListInfoOrder(data);
    };
    dataDriver();
    dataInfoOrder();
  }, []);

  return (
    <div {...props} className={clsx(classes.root, props.className)}>
      <div className={classes.driver}>
        <h6 className={classes.titleHead}>Shipper Information</h6>

        {listDataDriver.map((dt: IDriver) => (
          <div className={classes.infoDriver} key={dt.id}>
            <Driver />
            <div className={classes.contentDriver}>
              <div className={classes.contentName}>
                <p>{dt.name}</p>
                <p>{dt.carMaker}</p>
              </div>
              <div>
                <div className={classes.imgstar}>
                  <img src={dt.star} srcSet={`${dt.star} 2x`} alt="" />
                  <span>{dt.starNumber}</span>
                </div>
                <div className={classes.infoBot}>{dt.code}</div>
              </div>
            </div>
          </div>
        ))}

        <div className={classes.line}></div>
      </div>
      <p className={classes.titleHead}>Order Information</p>
      <div className={classes.driverinfo}>
        {listInfoOrder.map((dt: IInfoOrder) => (
          <div className={classes.content} key={dt.id}>
            <img src={dt.image} srcSet={`${dt.image} 2x`} alt="" />
            <span>{dt.code}</span>
            <p>{dt.title}</p>
          </div>
        ))}
      </div>
      <div className={classes.line}></div>
      <div className={classes.bot}>
        <FromTo />
        <div className={classes.bottravel}>
          <div className={classes.from}>
            <span>From:</span>
            <p>Lotte Mart - Lieu Giai</p>
          </div>
          <div className={classes.to}>
            <span>To:</span>
            <p className={classes.address}>{productList[0].product?.address}</p>
          </div>
        </div>
      </div>
      <Button variant="contained" onClick={onTrackShip}>
        Track Shipping
      </Button>
      {togglePopup && (
        <div>
          <div className={classes.overlay} onClick={onOkClick}></div>
          <div className={classes.popup}>
            <p>This transaction is done!</p>
            <p onClick={onOkClick}>OK</p>
          </div>
        </div>
      )}
    </div>
  );
});

export default ActivitiesInfo;
