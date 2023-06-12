import clsx from "clsx";
import React, { FC, HTMLAttributes, useEffect, useRef, useState } from "react";
import { useStyles } from "./CardDescriptionItem.style";
import IconPlusMobile from "../../assets/icons/Plus.svg";
import IconMinusMobile from "../../assets/icons/minus.svg";
import { useNavigate } from "react-router-dom";
import NumberFormat from "react-number-format";
import CardDescriptionItemSkeleton from "./CardDescriptionItemSkeleton";

interface ICardDescriptionItem {
  list: any;
  onChangeProduct: Function;
  currentItem?: string;
}

export const CardDescriptionItem: FC<
  ICardDescriptionItem & HTMLAttributes<HTMLDivElement>
> = (props) => {
  const navigate = useNavigate();
  const classes = useStyles();
  const { list, onChangeProduct, currentItem, ...otherProps } = props;
  const [listProduct, setListProduct] = React.useState([list]);
  const [isAdded, setIsAdded] = useState(false);
  const [currentQuantity, setCurrentQuantity] = React.useState(0);
  const [selectedProduct, setSelectedProduct] = React.useState(0);
  const wrapperRef = useRef(null);
  const [isLoading, setIsLoading] = React.useState<boolean>(true);

  const realListProduct = currentItem
    ? listProduct.filter(({ id }) => id !== Number(currentItem))
    : listProduct;

  const onClickPlus = (item: any) => {
    onChangeProduct(item, "plus");
    setIsAdded(true);
    setSelectedProduct(parseInt(item.id));
    setCurrentQuantity(item.quantity);
  };

  const onClickMinus = (item: any) => {
    onChangeProduct(item, "minus");
    setCurrentQuantity(item.quantity);
  };

  function useOutsideAlerter(ref: any) {
    useEffect(() => {
      function handleClickOutside(event: any) {
        if (ref.current && !ref.current.contains(event.target)) {
          setIsAdded(false);
        }
      }
      // Bind the event listener
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }

  const renderBottomNavigationItem = (item: any) => {
    return (
      <div className={clsx(classes.btnPlusProduct)} ref={wrapperRef}>
        <div>
          {item.quantity < 1 ? (
            <p></p>
          ) : (
            <img
              src={IconMinusMobile}
              alt="icon minus"
              onClick={() => onClickMinus(item)}
            />
          )}
        </div>
        <p>{item.quantity}</p>
        <img
          src={IconPlusMobile}
          alt="icon plus"
          onClick={() => onClickPlus(item)}
        />
      </div>
    );
  };

  const renderType = (type: string) => {
    switch (type) {
      case "sales":
        return (
          <div className={clsx(classes.discount, classes.bgRed)}>
            <p>20% Off</p>
          </div>
        );

      case "new":
        return (
          <div className={clsx(classes.discount, classes.bgGreen)}>
            <p>New</p>
          </div>
        );

      case "limited":
        return (
          <div className={clsx(classes.discount, classes.bgWarning)}>
            <p>Limited</p>
          </div>
        );
      default:
        return null;
    }
  };
  const handleClick = (item: any) => {
    navigate(`/product/${item.id}/details`, {
      state: item,
    });
    document.documentElement.scrollIntoView({ behavior: "auto" });
  };

  useOutsideAlerter(wrapperRef);

  useEffect(() => {
    setListProduct(list);
  }, [list, isAdded, currentQuantity]);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1 * 1000);
  }, []);

  return (
    <div {...otherProps} className={clsx(props.className, classes.root)}>
      {realListProduct.map((item: any, index: number) =>
        isLoading ? (
          <CardDescriptionItemSkeleton key={index} data={item} />
        ) : (
          <div key={item.id} className={clsx(classes.item)}>
            <div className={clsx(classes.itemCard)}>
              <img
                onClick={() => handleClick(item)}
                className={classes.imgProduct}
                src={item?.img}
                alt="example-product"
              />
              {renderType(item?.type)}
              {isAdded && item.id === selectedProduct ? (
                renderBottomNavigationItem(item)
              ) : (
                <button
                  className={classes.btnPlus}
                  onClick={() => onClickPlus(item)}
                >
                  {item?.quantity > 0 ? (
                    <p className={classes.quantity}>{item.quantity}</p>
                  ) : (
                    <img src={IconPlusMobile} alt="plus" />
                  )}
                </button>
              )}
            </div>
            <div className={classes.itemCardContent}>
              <p>{item?.name}</p>
              <div className={classes.itemCardPrice}>
                {(item?.price || item?.price === 0) && (
                  <p className={classes.priceSale}>
                    <NumberFormat
                      value={item?.price}
                      displayType={"text"}
                      thousandSeparator={true}
                      suffix="d"
                    />
                  </p>
                )}
                {item?.priceOrigin && (
                  <p className={classes.price}>
                    <NumberFormat
                      value={item?.priceOrigin}
                      displayType={"text"}
                      thousandSeparator={true}
                      suffix="d"
                    />
                  </p>
                )}
              </div>
            </div>
            {item?.isClaimed && (
              <div className={clsx(classes.claimed, "mt16")}>
                <div className={classes.processWrapper}>
                  <div
                    className={classes.process}
                    style={{ width: `${item?.claimed}%` }}
                  ></div>
                </div>
                <div className={clsx(classes.processInfor, "mt8")}>
                  <p>{item?.claimed}% </p>
                  <p>Claimed</p>
                </div>
              </div>
            )}
          </div>
        )
      )}
    </div>
  );
};
