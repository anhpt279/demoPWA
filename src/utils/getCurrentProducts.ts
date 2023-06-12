import { IProducts } from "../contexts/buyingStatus/types";

export const getCurrentProducts = (
  products: Array<any>,
  additionalObj: IProducts
) => {
  const currentProducts = [...products].map((product: any) => {
    return additionalObj[product.id]
      ? { ...product, quantity: additionalObj[product.id] }
      : product;
  });
  return currentProducts;
};
