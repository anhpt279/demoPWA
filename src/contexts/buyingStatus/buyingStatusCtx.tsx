import React, { createContext, useState, useEffect, useContext } from "react";
import {
  GroceriesFactory,
  IProduct,
  ISaleProduct,
} from "../../models/GroceriesFactory";
import { IRecommendProduct, ShopsFactory } from "../../models/ShopsFactory";
import { IAuthCtx } from "../users/types";
import { UserCtx } from "../users/UserCtx";
import {
  IBuyingStatusCtx,
  IProducts,
  ProductSelectType,
  IProductSelect,
} from "./types";

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
export const BuyingStatusCtx = createContext<IBuyingStatusCtx>(null!);

const BuyingStatusProvider = ({ children }: { children: React.ReactNode }) => {
  const { userSpecificData, updateCurrentUser } = useContext<IAuthCtx>(UserCtx);

  const [additionalObj, setAdditionalObj] = useState<IProducts>({});
  const [priceCheckout, setPriceCheckout] = useState(0);
  const [totalItem, setTotalItem] = useState(0);
  const [productSelect, setProductSelect] = useState<ProductSelectType>([]);

  useEffect(() => {
    setAdditionalObj(userSpecificData.buyingStatus || {});
  }, [userSpecificData.username]);

  useEffect(() => {
    updateCurrentUser({ buyingStatus: additionalObj });
    const allGroceriesSale: Array<ISaleProduct> =
      GroceriesFactory.getGroceriesSale();
    const allGroceriesProducts: Array<IProduct> =
      GroceriesFactory.getGroceriesAllProduct();
    const fetchListMeatSeafoot: Array<IRecommendProduct> =
      ShopsFactory.getRecommendMeatSeafood();
    const fetchListBakeryBread: Array<IRecommendProduct> =
      ShopsFactory.getRecommendBakeryBread();
    const fetchListMeatFruitFood: Array<IRecommendProduct> =
      ShopsFactory.getRecommendFreshFruitFood();
    const allRecommend: Array<IRecommendProduct> =
      ShopsFactory.getAllProductRecommend();

    const allProducts = [
      ...allGroceriesSale,
      ...allGroceriesProducts,
      ...fetchListBakeryBread,
      ...fetchListMeatSeafoot,
      ...fetchListMeatFruitFood,
      ...allRecommend,
    ];

    setPriceCheckout(
      GroceriesFactory.onChangeBillCheckout(allProducts, additionalObj)
    );
    setTotalItem(GroceriesFactory.onChangeQuantityCheckout(additionalObj));

    let sum = 0;
    for (const key in additionalObj) {
      sum += additionalObj[key];
    }

    if (Object.keys(additionalObj).length === 0 || sum === 0) {
      setProductSelect([]);
      return;
    }

    const productSelectedObj = {} as IProductSelect;
    allProducts.forEach((item) => {
      if (
        Object.prototype.hasOwnProperty.call(additionalObj, item.id) &&
        additionalObj[item.id] !== 0
      ) {
        const qualityPlusItem = { ...item, quantity: additionalObj[item.id] };
        if (
          Object.prototype.hasOwnProperty.call(
            productSelectedObj,
            item.category
          )
        ) {
          productSelectedObj[item.category] = [
            ...productSelectedObj[item.category],
            qualityPlusItem,
          ];
        } else {
          productSelectedObj[item.category] = [qualityPlusItem];
        }
      }
    });
    if (Object.keys(productSelectedObj).length !== 0) {
      const productsSelected: ProductSelectType =
        Object.entries(productSelectedObj);

      setProductSelect(productsSelected);
    }
  }, [additionalObj]);

  const data = {
    additionalObj,
    setAdditionalObj,
    totalItem,
    priceCheckout,
    productSelect,
  };

  return (
    <BuyingStatusCtx.Provider value={data}>{children}</BuyingStatusCtx.Provider>
  );
};

export default BuyingStatusProvider;
