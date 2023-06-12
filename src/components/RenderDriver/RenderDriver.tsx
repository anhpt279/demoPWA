import { FC, HTMLAttributes, useState } from "react";
import clsx from "clsx";
import Images from "src/assets/images";
import { useStyles } from "./RenderDriver.style";

import { ReactComponent as ShippingSVG } from "../../assets/images/YourOrder/drivering.svg";
import { ReactComponent as Timer } from "../../assets/images/YourOrder/timer.svg";
import { ReactComponent as ImgBtn } from "..//../assets/images/YourOrder/imgBtn.svg";
import { ReactComponent as ImgDriverSVG } from "..//../assets/images/YourOrder/ImgDriver.svg";
import { ReactComponent as RatingSVG } from "..//../assets/images/YourOrder/RatingStar.svg";

import IconArrowDownGrey from "../../assets/icons/rectangle_6071.png";

import PageLayout from "../PageLayout/PageLayout";
import { useNavigate } from "react-router-dom";
interface IRenderDriver {
  setCheckCart: (state: boolean) => void;
}
export const RenderDriver: FC<
  IRenderDriver & HTMLAttributes<HTMLDivElement>
> = (props) => {
  const { setCheckCart, ...otherProps } = props;

  const classes = useStyles();
  const [renderDriver, setRenderDriver] = useState(0);
  const handleOnClickgray = () => {
    if (renderDriver === 0) {
      setRenderDriver(1);
    } else if (renderDriver === 1) {
      setRenderDriver(2);
    } else if (renderDriver === 2) {
      setRenderDriver(1);
    } else {
      setRenderDriver(0);
    }
  };
  const navigate = useNavigate();

  return (
    <div
      {...otherProps}
      className={clsx(
        classes.RenderDriver,
        renderDriver === 1 ? classes.down : "",
        renderDriver === 2 ? classes.up : "",
        otherProps.className
      )}
      style={{
        position:
          renderDriver === 2 || renderDriver === 0 ? "absolute" : "fixed",
      }}
    >
      <PageLayout>
        <div className={classes.img}>
          <img src={IconArrowDownGrey} alt="" onClick={handleOnClickgray} />
        </div>
        <div className={classes.orderPage}>
          <p>Order Status</p>
          <p>Your order is on its way...</p>

          <div className={classes.loadingShip}>
            <Timer />
            <h5>Delivering</h5>
          </div>
        </div>
      </PageLayout>
      <hr className={classes.hr} />
      <PageLayout>
        <div className={classes.contentDriver}>
          <div>
            <ImgDriverSVG />
            <div className={classes.NameDriver}>
              <p>Van Son Tran</p>
              <p>Wave RSX</p>
            </div>
          </div>
          <div className={classes.contentRating}>
            <div>
              <RatingSVG />
              <span>4.5</span>
            </div>
            <p>29.H1 - 435 97</p>
          </div>
        </div>
        <div className={classes.line}></div>
        <div className={classes.driverinfo}>
          <div className={classes.content}>
            <img
              src={Images.codeorder}
              srcSet={`${Images.codeorder} 2x`}
              alt=""
            />
            <span>#LTM12863</span>
            <p>Track ID</p>
          </div>
          <div className={classes.content}>
            <img
              src={Images.timeorder}
              srcSet={`${Images.timeorder} 2x`}
              alt=""
            />
            <span>1-2 hours max</span>
            <p>Estimate Time</p>
          </div>
          <div className={classes.content}>
            <img src={Images.kgorder} srcSet={`${Images.kgorder} 2x`} alt="" />
            <span>1.5 kg</span>
            <p>Packge Weight</p>
          </div>
        </div>
        <div className={classes.line}></div>
        <div className={classes.bot}>
          <ShippingSVG />
          <div className={classes.bottravel}>
            <div className={classes.contentInfoShip}>
              <span>From:</span>
              <p>Lotte Mart - Lieu Giai</p>
            </div>
            <div className={classes.contentInfoShip}>
              <span>To:</span>
              <p>No 6, 34 Van Bao, Lieu Giai, Ba Dinh, Ha Noi</p>
            </div>
          </div>
        </div>
      </PageLayout>
      <PageLayout className={classes.clickable}>
        <p onClick={() => setCheckCart(true)}>
          Click here to see the Order’s Detail
        </p>
        <button>
          <ImgBtn />
        </button>
        <p onClick={() => navigate("/")}>Back to Home</p>
      </PageLayout>
    </div>
  );
};

export default RenderDriver;
