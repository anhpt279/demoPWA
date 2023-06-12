import { useStyles } from "./EmptyCard.style";
import PageLayout from "../PageLayout/PageLayout";
import { FC, HTMLAttributes, useState } from "react";
import { Button } from "../Buttons";
import clsx from "clsx";
import { useNavigate } from "react-router-dom";
import moneySend from "../../assets/images/payment/money-send.png";

export const EmptyCard: FC<HTMLAttributes<HTMLDivElement>> = (props) => {
  const classes = useStyles();
  const navigate = useNavigate();
  const [typePay, setTypePay] = useState<string>("card");

  return (
    <PageLayout {...props} className={clsx(props.className, classes.root)}>
      <div className={classes.payment}>
        <div
          onClick={() => navigate("/profile")}
          className={classes.paymentBack}
        >
          <i className="fa-solid fa-chevron-left"></i>
        </div>
        <h1 className={classes.paymentHeader}>Payment Management</h1>
      </div>
      <div className={classes.paymentContent}>
        <div
          className={clsx(
            classes.paymentOption,
            typePay === "card" && classes.selectBackground
          )}
        >
          <div className={classes.input}>
            <label htmlFor="card"></label>
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
      </div>
      <div className={classes.paymentButton}>
        <Button
          variant="contained"
          onClick={() => navigate("/payment-management/addcard")}
        >
          + add payment
        </Button>
      </div>
    </PageLayout>
  );
};

export default EmptyCard;
