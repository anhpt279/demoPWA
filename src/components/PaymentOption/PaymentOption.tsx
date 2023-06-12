import { useStyles } from "./PaymentOption.style";
import { FC, HTMLAttributes, useState } from "react";
import Images from "../../assets/images";
import clsx from "clsx";
import moneySend from "../../assets/images/payment/money-send.png";
import { useNavigate } from "react-router-dom";

export const PaymentOption: FC<HTMLAttributes<HTMLDivElement>> = (props) => {
  const classes = useStyles();
  const [typePay, setTypePay] = useState<string>("card");
  const navigate = useNavigate();

  return (
    <div {...props} className={clsx(classes.root, props.className)}>
      <div className={classes.paymentHeader}>
        <p className={classes.paymentTitle}>Payment Options</p>
        <p
          className={classes.required}
          onClick={() => navigate("/payment-management/addcard")}
        >
          Add/Edit
        </p>
      </div>
      <label htmlFor="card">
        <div
          className={clsx(
            classes.payment,
            typePay === "card" && classes.selectBackground
          )}
        >
          <div className={classes.input}>
            <input
              type="radio"
              id="card"
              name="payment"
              onChange={() => {
                setTypePay("card");
              }}
              checked={typePay === "card"}
            />
          </div>
          <div className={classes.content}>
            <p className={classes.title}>Cash On Delivery</p>
            <p className={classes.desc}>Default payment</p>
          </div>
          <div className={classes.icon}>
            <img src={moneySend} alt="money-icon" />
          </div>
        </div>
      </label>
      <label htmlFor="visa">
        <div
          className={clsx(
            classes.payment,
            typePay === "visa" && classes.selectBackground
          )}
        >
          <div className={classes.input}>
            <input
              type="radio"
              id="visa"
              name="payment"
              onChange={() => {
                setTypePay("visa");
              }}
              checked={typePay === "visa"}
            />
          </div>
          <div className={classes.content}>
            <p className={classes.title}>Pay with Credit Card</p>
            <p className={classes.desc}>Not Default</p>
          </div>
          <div className={classes.icon}>
            <img src={Images.Visa} alt="money-icon" />
          </div>
        </div>
      </label>
    </div>
  );
};
