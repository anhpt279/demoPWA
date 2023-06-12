import { FC, HtmlHTMLAttributes, useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PageLayout from "../../components/PageLayout/PageLayout";
import { useStyles } from "./CheckoutConfirm.style";
import clsx from "clsx";
import { OrderReview } from "../../components/OrderReview";
import { Button } from "src/components/Buttons";
import { PaymentOption } from "../../components/PaymentOption/PaymentOption";
import { ReactComponent as ArrowDownSVG } from "../../assets/icons/arrowDown.svg";
import { ReactComponent as ArrowUpSVG } from "../../assets/icons/arrow-up.svg";
import { ReactComponent as PhoneSVG } from "../../assets/icons/phone.svg";
import { ReactComponent as LocationSVG } from "../../assets/icons/location-white.svg";
import { PermissionContext } from "../../contexts/location/permissionCtx";
import { BuyingStatusCtx } from "../../contexts/buyingStatus/buyingStatusCtx";
import { UserCtx } from "../../contexts/users/UserCtx";
import IconLeftBlack from "../../assets/icons/arrow-left.png";
import Shop from "src/assets/images/home/Rectangle_6019_3.png";
import { getNumberWithCommas } from "../../utils/numberWithCommas";
import { formatDate, formatPhone } from "../../utils/formatPhone";
import { randomId, rdNumber } from "../../utils/randomNumber";

export const CheckoutConfirm: FC<HtmlHTMLAttributes<HTMLDivElement>> = (
  props
) => {
  const classes = useStyles();
  const navigate = useNavigate();
  const [checkOrder, setCheckOrder] = useState<boolean>(false);
  const [typeInput, setTypeInput] = useState<string>("instant");

  const total: any = localStorage.getItem("totalMoney");
  const { totalItem } = useContext(BuyingStatusCtx);
  const { addressFromLS } = useContext(PermissionContext);
  const { updateCurrentUser, userSpecificData } = useContext(UserCtx);

  const name = userSpecificData.name || "Your name";
  const deliveryType = userSpecificData.deliveryType || "";
  const username: any = userSpecificData.username;

  const phone = formatPhone(username);
  const date = formatDate();
  const id = randomId();
  const randomNumber = rdNumber();

  useEffect(() => {
    setTypeInput(deliveryType || "instant");
  }, []);

  const onSubmitOrder = () => {
    navigate("/your/order");
    updateCurrentUser({
      deliveryType: typeInput,
      activity: [
        ...(userSpecificData.activity || []),
        {
          date,
          product: {
            id,
            image: Shop,
            title: "Lotte Mart - Lieu Giai",
            code: `#LTM0${randomNumber}`,
            address:
              addressFromLS || "No 6, 34 Van Bao, Lieu Giai, Ba Dinh, Ha Noi",
            price: `${getNumberWithCommas(JSON.parse(total))}d`,
            status: "Arrived",
          },
        },
      ],
    });
  };

  return (
    <div className={clsx(props.className, classes.root)}>
      <PageLayout>
        <div className={classes.checkout}>
          <div className={classes.checkoutBack} onClick={() => navigate(-1)}>
            <img
              src={IconLeftBlack}
              srcSet={`${IconLeftBlack} 2x`}
              style={{ width: 24, height: 24, objectFit: "contain" }}
            />
          </div>
          <h1 className={classes.checkoutHeader}>Checkout</h1>
        </div>
        <div className={classes.shippingAddress}>
          <div className={classes.header}>
            <p>Shipping Address</p>
          </div>
          <div className={classes.surContent}>
            <div className={classes.content}>
              <p>{name}</p>
              <div className={classes.phone}>
                <PhoneSVG /> <div>+84 {phone}</div>
              </div>
              <div className={classes.address}>
                <LocationSVG />
                <div>
                  {addressFromLS ||
                    "No 6, 34 Van Bao, Lieu Giai, Ba Dinh, Ha Noi"}
                </div>
              </div>
            </div>
          </div>
        </div>
      </PageLayout>
      <hr className={classes.line} />
      <PageLayout>
        <div className={classes.deliveryOption}>
          <div className={classes.deliveryHeader}>
            <p className={classes.deliveryTitle}>Delivery Options</p>
            <p className={classes.required}>Required</p>
          </div>
          <label htmlFor="instant">
            <div
              className={clsx(
                classes.instant,
                typeInput === "instant" && classes.selectBackground
              )}
            >
              <div className={classes.instantInput}>
                <input
                  type="radio"
                  id="instant"
                  name="delivery"
                  onChange={() => setTypeInput("instant")}
                  checked={typeInput === "instant"}
                />
              </div>
              <div className={classes.instantContent}>
                <p className={classes.instantTitle}>Instant</p>
                <p className={classes.instantDesc}>(Delivery in 30 minutes)</p>
              </div>
              <div className={classes.instantPrice}>50,000d</div>
            </div>
          </label>
          <label htmlFor="slow">
            <div
              className={clsx(
                classes.slow,
                typeInput === "slow" && classes.selectBackground
              )}
            >
              <div className={classes.slowInput}>
                <input
                  type="radio"
                  id="slow"
                  name="delivery"
                  onChange={() => setTypeInput("slow")}
                  checked={typeInput === "slow"}
                />
              </div>
              <div className={classes.slowContent}>
                <p className={classes.slowTitle}>Slow</p>
                <p className={classes.slowDesc}>(Delivery in 1-2 hours max)</p>
              </div>
              <div className={classes.slowPrice}>25,000d</div>
            </div>
          </label>
        </div>
      </PageLayout>
      <hr className={classes.line} />
      <PageLayout>
        <PaymentOption />
      </PageLayout>
      <hr className={classes.line} />
      <PageLayout>
        <div
          className={classes.orderReview}
          onClick={() => setCheckOrder(!checkOrder)}
        >
          <div className={classes.orderHeader}>
            <p className={classes.orderTitle}>Order Review</p>
            <div>{checkOrder ? <ArrowUpSVG /> : <ArrowDownSVG />}</div>
          </div>
          <div className={classes.orderContent}>
            <p>
              {totalItem} {totalItem > 1 ? "items" : "item"} in cart
            </p>
          </div>
        </div>
      </PageLayout>
      <OrderReview checkOrder={checkOrder} deliveryType={typeInput} />
      <PageLayout>
        <div className={classes.checkoutButton}>
          <Button variant="contained" onClick={onSubmitOrder}>
            submit order
          </Button>
        </div>
      </PageLayout>
    </div>
  );
};
export default CheckoutConfirm;
