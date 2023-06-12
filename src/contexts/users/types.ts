import { IPromo } from "../../models/Promo";
import { IProducts } from "../buyingStatus/types";
export interface IProduct {
  id: string;
  image: string;
  title: string;
  code: string;
  address: string;
  price: string;
  status: string;
}

export interface IActivities {
  date: string;
  product: IProduct;
}

export interface IAuthCtx {
  signins: (phone: any, password: string, navigate: Function) => string;
  signups: (user: any, navigate: Function) => void;
  logout: (navigate: Function) => void;
  resetPass: (user: any, navigate: Function) => void;
  deleteAccount: (username: string, navigate: Function) => void;
  updateCurrentUser: (obj: any) => void;
  userSpecificData: IUser;
  usersData: Array<IUser>;
}

export interface IUser {
  readonly username: number;
  password: string;
  loggedIn: boolean;
  isNew: boolean;
  image: string;
  location: { lat: number; lng: number } | null;
  buyingStatus: IProducts;
  wishlist: Array<string | void>;
  historySearch: Array<string | void>;
  historySearchGrocery: Array<string | void>;
  name: string;
  activity: Array<IActivities>;
  addressHistory: Array<{ id: number; detailLocation: string }>;
  notification: boolean;
  promo: IPromo;
  deliveryType: string;
}

export type PropertyOfIUser = {
  [Property in keyof IUser]?: IUser[keyof IUser];
};
