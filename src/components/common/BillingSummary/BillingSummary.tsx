import PageLayout from "../../PageLayout/PageLayout";
import clsx from "clsx";
import { useStyles } from "./BillingSummary.style";
import { getNumberWithCommas } from "../../../utils/numberWithCommas";
import React, {
  FC,
  HTMLAttributes,
  useContext,
  useEffect,
  useState,
} from "react";
import { MyCartFactory } from "../../../models/MyCartFactory";
import { useLocalStorage } from "src/hooks/useLocalStorage";
import { IAuthCtx } from "../../../contexts/users/types";
import { UserCtx } from "../../../contexts/users/UserCtx";
import { totalPrice } from "../../../utils/totalPrice";

interface IBillingSummary {
  listMyCart: any[];
  delivery: boolean;
  deliveryType: string;
}
const BillingSummary: FC<IBillingSummary & HTMLAttributes<HTMLDivElement>> =
  React.memo((props) => {
    const { listMyCart, delivery, deliveryType, ...otherProps } = props;
    const [subTotalPrice, setSubTotalPrice] = useState<number>(0);
    const [quantity, setQuantity] = useState<number>(0);
    const [discount, setDiscount] = useState<number>(0);
    const classes = useStyles();
    const [total, setTotal] = useLocalStorage("totalMoney", 0);
    const [deliveryFee, setDeliveryFee] = useState<number>(0);
    const { userSpecificData } = useContext<IAuthCtx>(UserCtx);
    const promo = userSpecificData.promo || {};

    const deliveryFeeConvert = (deliveryType: any) => {
      if (deliveryType == null) {
        setDeliveryFee(0);
        return;
      }
      if (deliveryType === "instant") {
        setDeliveryFee(50000);
        return;
      }
      if (deliveryType === "slow") {
        setDeliveryFee(25000);
      }
    };

    useEffect(() => {
      deliveryFeeConvert(deliveryType);
      let quantity = 0;
      quantity = MyCartFactory.getTotalItem(listMyCart);
      setQuantity(quantity);
      let total = 0;
      total = MyCartFactory.getSubTotalPrice(listMyCart);
      setSubTotalPrice(total);
      const totalDiscount = MyCartFactory.getTotalDiscount(listMyCart);
      setDiscount(totalDiscount);
      const totalPriceAll = totalPrice(
        total,
        promo.discount,
        deliveryFee,
        totalDiscount
      );

      setTotal(totalPriceAll);
    }, [listMyCart, deliveryType, deliveryFee]);

    return (
      <div {...otherProps} className={clsx(props.className, classes.root)}>
        <div className={classes.divider}></div>
        <PageLayout className={clsx(classes.billSummary)}>
          <div className={classes.billSummaryTitle}>
            <h6 className={classes.title}>Billing Summary</h6>
          </div>
          <div className={clsx(classes.billSummaryContent, "mb16")}>
            <div className={clsx(classes.billSummaryContext, "mb16", "mt16")}>
              <p>Subtotal</p>
              <p>{getNumberWithCommas(subTotalPrice)}d</p>
            </div>
            <div
              className={clsx(classes.billSummaryContextYellow, "mb16", "mt16")}
              style={{ color: "#F59E0B" }}
            >
              <p>Discounted</p>
              <p>-{getNumberWithCommas(discount)}d</p>
            </div>
            <div className={clsx(classes.billSummaryContext, "mb16")}>
              <p>Taxes and Fees</p>
              <p>{"20,000d"}</p>
            </div>
            {delivery && (
              <div className={clsx(classes.billSummaryContext, "mb16")}>
                <p>Delivery</p>
                <p>{deliveryType === "instant" ? "50,000d" : "25,000d"}</p>
              </div>
            )}
            {promo.discount !== undefined && (
              <div
                className={clsx(classes.billSummaryContext, "mb16")}
                style={{ color: "#F59E0B" }}
              >
                <p>Promo</p>
                <p>-{promo ? `${promo.discount},000` : "0"}d</p>
              </div>
            )}
          </div>
          <div className={clsx("mt16", "mb32", classes.billSummaryContext)}>
            <p>
              Total ({quantity} {quantity > 1 ? "items" : "item"})
            </p>
            <p>{getNumberWithCommas(total)}d</p>
          </div>
        </PageLayout>
      </div>
    );
  });

export default BillingSummary;
