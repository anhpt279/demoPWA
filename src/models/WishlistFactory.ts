import lotteImg from "../assets/images/wishlist/lotte.svg";
import vinImg from "../assets/images/wishlist/vin.svg";
import teeImg from "../assets/images/wishlist/tee.svg";
import { map } from "lodash-es";
import { Wishlist, IWishlist } from "./Wishlist";

const WISHLIST = [
  {
    id: "1",
    image: lotteImg,
    name: "Lotte Mart",
    time: 36,
    rating: 4.7,
    review: 5000,
  },
  {
    id: "2",
    image: vinImg,
    name: "TeeKiu Mart",
    time: 45,
    rating: 4.8,
    review: 2000,
  },
  {
    id: "3",
    image: teeImg,
    name: "Vinmart",
    time: 30,
    rating: 4.9,
    review: 3000,
  },
];

export class WishlistFactory {
  static getWishlist() {
    return map(WISHLIST, (wishlist: IWishlist) => new Wishlist(wishlist));
  }

  static getWishListSaved(
    wishlistItems: Wishlist[],
    realWishlist: (string | void)[]
  ) {
    return wishlistItems.filter((item: IWishlist) =>
      realWishlist.find((w: string | void) => w === item.id)
    );
  }

  static removeWishList(wishlist: (string | void)[], idWish: string) {
    return wishlist.filter((item: string | void) => item !== idWish);
  }
}
