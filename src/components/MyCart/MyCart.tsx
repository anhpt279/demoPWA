import React, {
  FC,
  HTMLAttributes,
  useEffect,
  useState,
  useContext,
} from "react";
import clsx from "clsx";
import { useStyles } from "./MyCart.style";
import PageLayout from "../PageLayout/PageLayout";
import { useNavigate } from "react-router-dom";
import { Button } from "../Buttons";
import discountTicket from "../../assets/icons/ticket-discount-yellow.svg";
import seeMore from "../../assets/icons/see-more.svg";
import IconLeftBlack from "../../assets/icons/arrow-left.png";
import IconMinusQuantity from "../../assets/icons/ButtonMinusQuantity.png";
import IconPlusQuantity from "../../assets/icons/ButtonPlusQuantity.png";
import IconEmptyProduct from "../../assets/icons/EmptyProduct.png";
import NumberFormat from "react-number-format";
import { DialogContext } from "src/contexts/dialog/DialogCtx";
import BillingSummary from "../common/BillingSummary/BillingSummary";
import { Promos } from "../Promos";
import { HotPromosFactory } from "src/models/HotPromosFactory";
import { BuyingStatusCtx } from "../../contexts/buyingStatus/buyingStatusCtx";
import imgPromoSelected from "../../assets/icons/promoSelected.png";
import { UserCtx } from "../../contexts/users/UserCtx";
import { IAuthCtx } from "../../contexts/users/types";

export const MyCart: FC<HTMLAttributes<HTMLDivElement>> = (props) => {
  const classes = useStyles();
  const navigate = useNavigate();
  const [promoUsed, setPromoUsed]: any = useState({});
  const { openDialogAction } = useContext(DialogContext);
  const { additionalObj, setAdditionalObj, totalItem, productSelect } =
    useContext(BuyingStatusCtx);
  const [listPromo, setListPromo]: any = useState([]);
  const [isOpenPromos, setIsOpenPromos] = useState(false);

  const { userSpecificData } = useContext<IAuthCtx>(UserCtx);
  const promo = userSpecificData.promo || {};
  const onChangeQuantity = (productId: string, type: string) => {
    if (type === "minus") {
      if (!additionalObj[productId]) return;
      setAdditionalObj({
        ...additionalObj,
        [productId]: additionalObj[productId] - 1,
      });
    } else {
      setAdditionalObj({
        ...additionalObj,
        [productId]: additionalObj[productId] + 1,
      });
    }
  };

  const removeProduct = (product: any) => {
    onChangeQuantity(product?.id, "minus");
  };

  const onMinusQuantity = (product: any) => {
    if (product?.quantity === 1) {
      openDialogAction({
        title: "Remove product",
        content: "Are you sure want to remove this product from My Cart?",
        onClick: () => removeProduct(product),
      });
      return;
    }
    onChangeQuantity(product?.id, "minus");
  };

  const onPlushQuantity = (product: any) => {
    onChangeQuantity(product.id, "plus");
  };

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
                          <div className={classes.btnQuantity}>
                            <div onClick={() => onMinusQuantity(product)}>
                              <img
                                src={IconMinusQuantity}
                                alt="minus-quantity"
                              />
                            </div>
                            <p>{product?.quantity}</p>
                            <div onClick={() => onPlushQuantity(product)}>
                              <img src={IconPlusQuantity} alt="plus-quantity" />
                            </div>
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
        <Button variant="contained" onClick={() => navigate("/")}>
          Go Shopping
        </Button>
      </PageLayout>
    );
  };

  const onCheckOut = () => {
    navigate("/checkout/confirm", { state: { countItem: totalItem } });
  };

  const onClickPromo = () => {
    setIsOpenPromos(true);
  };

  const onClickSavePromo: any = () => {
    setIsOpenPromos(false);
  };

  const renderPromos = () => {
    return (
      <div>
        <div className={classes.orderReviewHeader}>
          <div
            className={classes.btnArrowLeft}
            onClick={() => setIsOpenPromos(false)}
          >
            <img
              src={IconLeftBlack}
              srcSet={`${IconLeftBlack} 2x`}
              style={{ width: 24, height: 24, objectFit: "contain" }}
            />
          </div>
          <h6>Choose Promo</h6>
        </div>
        <Promos
          listHotPromos={listPromo}
          promoSaved={promo.codeDiscount}
          onClickSave={onClickSavePromo}
        />
      </div>
    );
  };

  const onBack = () => {
    navigate(-1);
  };
  useEffect(() => {
    const promos = HotPromosFactory.getHotPromosNew();
    setPromoUsed(promo);
    setListPromo(promos);
  }, []);

  useEffect(() => {
    setPromoUsed(promo);
  }, [isOpenPromos]);
  return (
    <>
      {productSelect.length === 0 && renderEmptyProduct()}
      {productSelect.length !== 0 && !isOpenPromos && (
        <div {...props} className={clsx(classes.root, props.className)}>
          <div className={classes.orderReviewHeader}>
            <div className={classes.btnArrowLeft} onClick={onBack}>
              <img
                src={IconLeftBlack}
                srcSet={`${IconLeftBlack} 2x`}
                style={{ width: 24, height: 24, objectFit: "contain" }}
              />
            </div>
            <h6>My Cart</h6>
          </div>
          <PageLayout className={classes.orderReview}>
            <div className={classes.orderReviewTitle}>
              <h6 className={classes.title}>Order Review</h6>
              <p className={classes.nbOfCart}>
                {totalItem} {totalItem > 1 ? "items" : "item"} in cart
              </p>
            </div>
            {renderItemCart(productSelect)}
          </PageLayout>
          <div className={classes.divider}></div>
          <PageLayout className={classes.promoCode}>
            <h6 className={clsx(classes.title, "mb16")}>Promo Code</h6>
            <div
              className={clsx(classes.promoCodeInput, "mt16")}
              onClick={onClickPromo}
            >
              <div className={classes.promoCodeTitle}>
                {promoUsed.id === undefined ? (
                  <>
                    <img src={discountTicket} alt="btn-promo-ticket-discount" />
                    <p>Check for available promos</p>
                  </>
                ) : (
                  <>
                    <img
                      src={imgPromoSelected}
                      alt="btn-promo-ticket-discount"
                    />
                    <div className={classes.promoCodeDiscount}>
                      <span>Discount {promoUsed.discount} K</span>
                      <span>Change promo</span>
                    </div>
                  </>
                )}
              </div>
              <img src={seeMore} alt="see more" />
            </div>
          </PageLayout>
          <BillingSummary
            listMyCart={productSelect}
            delivery={false}
            deliveryType=""
          />
          <PageLayout className={clsx(classes.billSummary, "mt16", "mb32")}>
            <Button variant="contained" onClick={onCheckOut}>
              Checkout
            </Button>
          </PageLayout>
        </div>
      )}
      {isOpenPromos && renderPromos()}
    </>
  );
};

export default MyCart;
