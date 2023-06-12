import { FC, HTMLAttributes, useContext, useEffect } from "react";
import clsx from "clsx";
import { useStyles } from "./OrderCheckOut.style";
import PageLayout from "../PageLayout/PageLayout";
import { useNavigate } from "react-router-dom";
import { Button } from "../Buttons";
import IconLeftBlack from "../../assets/icons/arrow-left.png";
import IconEmptyProduct from "../../assets/icons/EmptyProduct.png";
import NumberFormat from "react-number-format";
import BillingSummary from "../common/BillingSummary/BillingSummary";
import { BuyingStatusCtx } from "../../contexts/buyingStatus/buyingStatusCtx";
import { IBuyingStatusCtx } from "../../contexts/buyingStatus/types";

interface IOrderCheckout {
  setCheckCart: Function;
  deliveryType: string;
  delivery: number;
}

export const OrderCheckOut: FC<
  IOrderCheckout & HTMLAttributes<HTMLDivElement>
> = (props) => {
  const { setCheckCart, deliveryType, delivery, ...otherProps } = props;
  const classes = useStyles();
  const navigate = useNavigate();

  const { productSelect, totalItem } =
    useContext<IBuyingStatusCtx>(BuyingStatusCtx);

  useEffect(() => {
    if (delivery === 3) {
      setCheckCart(false);
    }
  }, [delivery]);

  const renderItemCart = (listItem: any) => {
    return (
      <div className={classes.orderReviewItem}>
        {listItem.map((item: any, index: number) => {
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
                            <p>
                              {
                                <NumberFormat
                                  value={product?.price}
                                  displayType={"text"}
                                  thousandSeparator={true}
                                  suffix="d"
                                />
                              }
                            </p>
                            <p>
                              {
                                <NumberFormat
                                  value={product?.priceOrigin}
                                  displayType={"text"}
                                  thousandSeparator={true}
                                  suffix="d"
                                />
                              }
                            </p>
                          </div>
                          <div className={classes.contentItemCount}>
                            x{product.quantity}
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

  const renderEmptyProduct = () => {
    return (
      <PageLayout className={classes.emptyCard}>
        <div>
          <h3>{"I Am Empty :("}</h3>
          <span>{"Looks like you haven't added"}</span>
          <span>{"anything to your cart yet"}</span>
        </div>
        <img src={IconEmptyProduct} alt="empty product icon" />
        <Button variant="contained" onClick={() => navigate("/groceries")}>
          Go Shopping
        </Button>
      </PageLayout>
    );
  };

  return (
    <>
      {productSelect.length === 0 && renderEmptyProduct()}
      {productSelect.length !== 0 && (
        <div {...otherProps} className={clsx(classes.root, props.className)}>
          <div className={classes.orderReviewHeader}>
            <div
              className={classes.btnArrowLeft}
              onClick={() => setCheckCart(false)}
            >
              <img
                src={IconLeftBlack}
                srcSet={`${IconLeftBlack} 2x`}
                style={{ width: 24, height: 24, objectFit: "contain" }}
              />
            </div>
            <h6>Order’s Detail</h6>
          </div>
          <PageLayout className={classes.orderReview}>
            <div className={classes.orderReviewTitle}>
              <h6 className={classes.title}>Order #LTM12863</h6>
              <p className={classes.nbOfCart}>{totalItem} items</p>
            </div>
            {renderItemCart(productSelect)}
          </PageLayout>
          <BillingSummary
            listMyCart={productSelect}
            delivery
            deliveryType={deliveryType}
          />
          <div className={classes.divider}></div>
          <PageLayout>
            <div className={classes.payment}>
              <p>Payment Options</p>
              <p>Cash on delivery</p>
            </div>
          </PageLayout>
        </div>
      )}
    </>
  );
};

export default OrderCheckOut;
