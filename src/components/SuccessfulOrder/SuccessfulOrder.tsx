import { useStyles } from "./SuccessfulOrder.style";
import successImg from "../../assets/images/YourOrder/order-success.png";
import { Button } from "../../components/Buttons";
import { FC, HtmlHTMLAttributes } from "react";
import { useNavigate } from "react-router-dom";
import clsx from "clsx";

export const SuccessfulOrder: FC<HtmlHTMLAttributes<HTMLDivElement>> = (
  props
) => {
  const classes = useStyles();
  const navigate = useNavigate();
  const handleOnclickContinue = () => {
    navigate("/ratings");
    localStorage.removeItem("listProductSelected");
    localStorage.removeItem("promo");
  };

  return (
    <div {...props} className={clsx(classes.root, props.className)}>
      <div className={classes.successContent}>
        <p className={classes.successTitle}>Successful!</p>
        <p className={classes.successDesc}>
          Your order has been successfully placed
        </p>
        <div className={classes.successImg}>
          <img src={successImg} alt="" />
        </div>
      </div>
      <div className={classes.successBtn}>
        <Button variant="contained" onClick={handleOnclickContinue}>
          Continue
        </Button>
      </div>
    </div>
  );
};

export default SuccessfulOrder;
