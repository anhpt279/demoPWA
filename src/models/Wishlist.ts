export interface IWishlist {
  id: string;
  image: any;
  name: string;
  time: any;
  rating: any;
  review: number;
}
export class Wishlist {
  id = "";
  name = "";
  image = "";
  time = 0;
  rating = 0;
  review = 0;
  constructor(wishlist: IWishlist) {
    this.id = wishlist.id;
    this.name = wishlist.name;
    this.image = wishlist.image;
    this.time = wishlist.time;
    this.rating = wishlist.rating;
    this.review = wishlist.review;
  }
}
