import React, { FC, HTMLAttributes } from "react";
import { useStyles } from "./AddCard.style";
import blockImg from "../../assets/images/payment/lock-circle.svg";
import PageLayout from "../PageLayout/PageLayout";
import { Button } from "../Buttons";
import { useNavigate } from "react-router-dom";
import clsx from "clsx";

export const AddCard: FC<HTMLAttributes<HTMLDivElement>> = (props) => {
  const classes = useStyles();
  const navigate = useNavigate();

  return (
    <PageLayout {...props} className={clsx(props.className, classes.root)}>
      <div className="">
        <div className={classes.addCard}>
          <div className={classes.addCardBack} onClick={() => navigate(-1)}>
            <i className="fa-solid fa-chevron-left"></i>
          </div>
          <h1 className={classes.addCardHeader}>Payment Management</h1>
        </div>
        <div className={classes.contentAdd}>
          <div className={classes.inputCredit}>
            <div className={classes.cardName}>
              <label htmlFor="card-name">Card Number</label>
              <input
                type="text"
                id="card-name"
                placeholder="Type number on card here"
                autoComplete="off"
              />
            </div>
            <div className={classes.accountNumber}>
              <label htmlFor="account-number">Name on Card</label>
              <input
                type="text"
                id="account-number"
                placeholder="Type your name on card here"
                autoComplete="off"
              />
            </div>
            <div className={classes.exp}>
              <label htmlFor="exp">Expiry date</label>
              <input
                type="text"
                id="exp"
                placeholder="mm/yy"
                autoComplete="off"
              />
            </div>
            <div className={classes.exp}>
              <label htmlFor="exp">Security code (CVV)</label>
              <input
                type="text"
                id="exp"
                placeholder="Type here"
                autoComplete="off"
              />
            </div>
          </div>
          <div className={classes.textEnd}>
            <img src={blockImg} alt="" />
            <p>
              We protect your payment information using encryption to provide
              bank-level security.
            </p>
          </div>
        </div>
      </div>
      <div className={classes.addCardBtn}>
        <Button
          variant="contained"
          onClick={() => {
            navigate("/payment-management");
          }}
        >
          confirm
        </Button>
      </div>
    </PageLayout>
  );
};

export default AddCard;
