import { useStyles } from "./PaymentManagement.style";
import PageLayout from "../PageLayout/PageLayout";
import React, { useState, useContext, FC, HTMLAttributes } from "react";
import { Button } from "../Buttons";
import clsx from "clsx";
import { useNavigate } from "react-router-dom";
import moneySend from "../../assets/images/payment/money-send.png";
import Images from "../../assets/images";
import editImg from "../../assets/images/payment/edit.png";
import tickCircle from "src/assets/icons/tick-circle.png";
import Trash from "../../assets/images/payment/trash.svg";
import { DialogContext } from "../../contexts/dialog/DialogCtx";
import { IDialogCtx } from "../../contexts/dialog/types";
import IconLeftBlack from "../../assets/icons/arrow-left.png";

export const PaymentManagement: FC<HTMLAttributes<HTMLDivElement>> = (
  props
) => {
  const classes = useStyles();
  const navigate = useNavigate();
  const [remove, setRemove] = useState<boolean>(true);
  const [typePay, setTypePay] = useState<string>("card");
  const [edit, setEdit] = useState<boolean>(false);
  const { openAlterButtonDialogAction } = useContext<IDialogCtx>(DialogContext);

  const removePaymentHandle = () => {
    openAlterButtonDialogAction({
      title: "Confirm",
      content: "Do you want to remove this payment method from GoMart?",
      buttonText: "confirm",
      onClick: () => setRemove(!remove),
    });
  };

  return (
    <PageLayout {...props} className={clsx(props.className, classes.root)}>
      <div className={classes.payment}>
        <div onClick={() => navigate(-1)} className={classes.paymentBack}>
          <img
            src={IconLeftBlack}
            srcSet={`${IconLeftBlack} 2x`}
            style={{ width: 24, height: 24, objectFit: "contain" }}
          />
        </div>
        <h1 className={classes.paymentHeader}>Payment Management</h1>
        <img
          src={!edit ? editImg : tickCircle}
          alt="edit-card"
          className={classes.img}
          onClick={() => setEdit(!edit)}
        />
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
        {remove && (
          <>
            <div className={classes.containerInput}>
              <div
                className={clsx(
                  classes.paymentOption,
                  typePay === "visa" && classes.selectBackground,
                  edit && classes.turnLeft
                )}
              >
                <div className={classes.input}>
                  <label htmlFor="card"></label>
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
              <div
                className={clsx(classes.overlay, edit && classes.appearBin)}
                onClick={removePaymentHandle}
              >
                <img src={Trash} alt="" />
              </div>
            </div>
          </>
        )}
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

export default PaymentManagement;
