interface IProduct {
  id: string;
  name: string;
  description: string;
  manufacturerid: string;
  promoId: number;
  rateNumber: number;
  ranking: number;
  categoryId: number;
  priceOrigin: number;
  priceSells: number;
  weight: number;
  image: string;
  expiryDate: string;
}
export class Product {
  id = "";
  name = "";
  description = "";
  manufacturerid = "";
  promoId = 0;
  rateNumber = 0;
  ranking = 0;
  categoryId = 0;
  priceOrigin = 0;
  priceSells = 0;
  weight = 0;
  image = "";
  expiryDate = "";

  constructor(Product: IProduct) {
    this.id = Product.id;
    this.name = Product.name;
    this.description = Product.description;
    this.manufacturerid = Product.manufacturerid;
    this.promoId = Product.promoId;
    this.rateNumber = Product.rateNumber;
    this.ranking = Product.ranking;
    this.categoryId = Product.categoryId;
    this.priceOrigin = Product.priceOrigin;
    this.priceSells = Product.priceSells;
    this.weight = Product.weight;
    this.image = Product.image;
    this.expiryDate = Product.expiryDate;
  }
}
