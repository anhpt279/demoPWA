import { IProduct, ISaleProduct } from "../../models/GroceriesFactory";
import { IRecommendProduct } from "../../models/ShopsFactory";

export interface IBuyingStatusCtx {
  additionalObj: IProducts;
  setAdditionalObj: (state: IProducts) => void;
  totalItem: number;
  priceCheckout: number;
  productSelect: ProductSelectType;
}

export interface IProducts {
  [key: string]: number;
}

export interface IProductSelect {
  [key: string]: Array<ISaleProduct | IProduct | IRecommendProduct>;
}

export type ProductSelectType = Array<
  [string, Array<ISaleProduct | IProduct | IRecommendProduct>]
>;
