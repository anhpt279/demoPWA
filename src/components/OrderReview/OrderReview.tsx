import { FC, HTMLAttributes, useContext } from "react";
import clsx from "clsx";
import { useStyles } from "./OrderReview.style";
import PageLayout from "../PageLayout/PageLayout";
import { getNumberWithCommas } from "../../utils/numberWithCommas";
import BillingSummary from "../common/BillingSummary/BillingSummary";
import { BuyingStatusCtx } from "../../contexts/buyingStatus/buyingStatusCtx";
import { IBuyingStatusCtx } from "../../contexts/buyingStatus/types";
interface IOrderReview {
  checkOrder: boolean;
  deliveryType: string;
}
export const OrderReview: FC<IOrderReview & HTMLAttributes<HTMLDivElement>> = (
  props
) => {
  const { checkOrder, deliveryType, ...otherProps } = props;
  const classes = useStyles();
  const { productSelect } = useContext<IBuyingStatusCtx>(BuyingStatusCtx);

  const renderItemCart = (listItem: any) => {
    return (
      <div className={classes.orderReviewItem}>
        {listItem?.map((item: any, index: number) => {
          return (
            <div key={index}>
              <p className={classes.orderReviewItemTitle}>{item[0]}</p>
              <div className={classes.itemCart}>
                {item[1].map((product: any, index: number) => {
                  return (
                    <div key={index} className={classes.itemMyCart}>
                      <div className={classes.itemMyCartImage}>
                        <img src={product?.img} />
                      </div>
                      <div className={classes.itemMyCartContent}>
                        <p className={classes.titleItem}>{product?.name}</p>
                        <div className={classes.contentItem}>
                          <div className={classes.contentItemPrice}>
                            <p>{getNumberWithCommas(product?.price)}d</p>
                            {product?.priceOrigin && (
                              <p>
                                {getNumberWithCommas(product?.priceOrigin)}d
                              </p>
                            )}
                          </div>
                          <div className={classes.btnQuantity}>
                            <p>x{product?.quantity}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div {...otherProps} className={clsx(classes.root, otherProps.className)}>
      {checkOrder && (
        <PageLayout className={classes.orderReview}>
          {productSelect.length > 0 && renderItemCart(productSelect)}
        </PageLayout>
      )}
      <BillingSummary
        listMyCart={productSelect}
        delivery
        deliveryType={deliveryType}
      />
    </div>
  );
};
