import { map } from "lodash-es";
import Strawberries from "src/assets/images/home/FreshFruits/FreshFruits5.png";
import Original from "src/assets/images/home/BakeryBread/BakeryBread4.png";
import SlicedBeef from "src/assets/images/home/MeatSeafood/Meat&Seafood5.png";
import Canteloupe from "src/assets/images/home/FreshFruits/FreshFruits3.png";
import Apples from "src/assets/images/home/FreshFruits/FreshFruits4.png";
import Cucumber from "src/assets/images/home/FreshFruits/Cucumber.png";
import LemonPound from "src/assets/images/home/BakeryBread/BakeryBread.png";
import Eggs from "src/assets/images/home/MeatSeafood/eggs.png";
import Pepper from "src/assets/images/home/FreshFruits/Pepper.png";
import Vanilla from "src/assets/images/home/BakeryBread/VanillaIce.png";
import Milk from "src/assets/images/home/BakeryBread/Milk.png";
import Chocolate from "src/assets/images/home/BakeryBread/BakeryBread1.png";
import BonelessChicken from "src/assets/images/home/MeatSeafood/Meat&Seafood4.png";
import ParmenSan from "src/assets/images/home/BakeryBread/Parmesan.png";
import StripSteak from "src/assets/images/home/MeatSeafood/Meat&Seafood1.png";
import VitaCoCo from "src/assets/images/home/BakeryBread/Vita.png";
import Paprika from "src/assets/images/home/BakeryBread/Paprika.png";
import Caramel from "src/assets/images/home/BakeryBread/Caramel.png";
import Augason from "src/assets/images/home/BakeryBread/BakeryBread3.png";
import Grass from "src/assets/images/home/BakeryBread/ButterGrass.png";
import Walmut from "src/assets/images/home/BakeryBread/Wamut.png";
import Hawaiian from "src/assets/images/home/BakeryBread/BakeryBread5.png";
import Shop2 from "src/assets/images/home/shop2.png";
import Shop3 from "src/assets/images/home/shop3.png";
import BannerShop2 from "src/assets/images/home/BannerShop2.png";
import BannerShop3 from "src/assets/images/home/BannerShop3.png";
import BannerShop1 from "src/assets/images/home/BannerShop1.png";
import Shop1 from "src/assets/images/home/MartLogo.png";

export interface IProduct {
  readonly id: number;
  type: string;
  name: string;
  img: string;
  quantity: number;
  isClaimed: boolean;
  price: number;
  product: string;
  category: string;
}

export interface ISaleProduct extends IProduct {
  sale: number;
  claimed: number;
  priceOrigin: number;
}

export class GroceriesFactory {
  static getGroceriesSale(): Array<ISaleProduct> {
    return [
      {
        id: 1,
        sale: 12,
        img: Strawberries,
        name: "Fresh Strawberries Bag Pack",
        type: "sales",
        claimed: 29,
        isClaimed: true,
        quantity: 0,
        priceOrigin: 186100,
        price: 163768,
        product: "Cake",
        category: "Meat & SeaFood",
      },
      {
        id: 2,
        sale: 16,
        img: Original,
        name: "Snack Factory® Original Pretzel Crisps",
        type: "sales",
        claimed: 80,
        isClaimed: true,
        quantity: 0,
        priceOrigin: 100203,
        price: 84171,
        product: "Cake",
        category: "Meat & SeaFood",
      },
      {
        id: 3,
        sale: 9,
        img: SlicedBeef,
        type: "sales",
        name: "Sliced Beef Plate Super Slim 1.5mm",
        quantity: 0,
        claimed: 91,
        isClaimed: true,
        priceOrigin: 408967,
        price: 372159,
        product: "Cake",
        category: "Meat & SeaFood",
      },
      {
        id: 4,
        sale: 10,
        type: "sales",
        img: Canteloupe,
        name: "Tuscan Cantaloupe - Super-Sweet...",
        quantity: 0,
        claimed: 29,
        isClaimed: true,
        priceOrigin: 69517,
        price: 62565,
        product: "Cake",
        category: "Bakery & Bread",
      },
      {
        id: 5,
        sale: 12,
        img: Apples,
        type: "sales",
        name: "Washington Fuji Fresh Apples",
        quantity: 0,
        claimed: 50,
        isClaimed: true,
        priceOrigin: 186100,
        price: 163768,
        product: "Cake",
        category: "Fresh Fruit",
      },
      {
        id: 6,
        sale: 12,
        img: Cucumber,
        type: "sales",
        name: "Fresh Mini Cucumber",
        quantity: 0,
        claimed: 91,
        isClaimed: true,
        priceOrigin: 58637,
        price: 54637,
        product: "Cake",
        category: "Bakery & Bread",
      },
    ];
  }

  static getGroceriesAllProduct(): Array<IProduct> {
    return [
      {
        id: 7,
        img: LemonPound,
        name: "Lemon Pound Cake Mix with...",
        type: "new",
        quantity: 0,
        isClaimed: false,
        price: 58500,
        product: "Cake",
        category: "Bakery & Bread",
      },
      {
        id: 8,
        img: Eggs,
        name: "Marketside Organic Cage Free Brown Eggs",
        type: "normal",
        quantity: 0,
        isClaimed: false,
        price: 97310,
        product: "Cake",
        category: "Meat & SeaFood",
      },
      {
        id: 9,
        img: Pepper,
        name: "Fresh Green Bell Pepper, Each",
        type: "normal",
        quantity: 0,
        isClaimed: false,
        price: 15810,
        product: "Cake",
        category: "Fresh Fruit",
      },
      {
        id: 10,
        img: Vanilla,
        name: "Ben & Jerry's Half Baked Chocolate...",
        type: "limited",
        quantity: 0,
        isClaimed: false,
        price: 93744,
        product: "Cake",
        category: "Bakery & Bread",
      },
      {
        id: 11,
        img: Milk,
        name: "Darigold FIT 2% Reduced Fat Milk",
        type: "normal",
        quantity: 0,
        isClaimed: false,
        price: 76027,
        product: "Cake",
        category: "Bakery & Bread",
      },
      {
        id: 12,
        img: Chocolate,
        name: "Dare Fudge Chocolate Crème Cookies...",
        type: "sales",
        quantity: 0,
        isClaimed: false,
        price: 151900,
        product: "Cake",
        category: "Bakery & Bread",
      },
      {
        id: 13,
        img: BonelessChicken,
        name: "Marketside Antibiotic - Free Boneless...",
        type: "new",
        quantity: 0,
        isClaimed: false,
        price: 150660,
        product: "Banana",
        category: "Meat & SeaFood",
      },
      {
        id: 14,
        img: ParmenSan,
        name: "Weber® Garlic Parmesan Seasoning...",
        type: "normal",
        quantity: 0,
        isClaimed: false,
        price: 102765,
        product: "Banana",
        category: "Fresh Fruit",
      },
      {
        id: 15,
        img: StripSteak,
        name: "Beef Choice Angus New York Strip Steak",
        type: "normal",
        quantity: 0,
        isClaimed: false,
        price: 418500,
        product: "Banana",
        category: "Meat & SeaFood",
      },
      {
        id: 16,
        img: VitaCoCo,
        name: "Vita Coco Organic Coconut Oil",
        type: "normal",
        quantity: 0,
        isClaimed: false,
        price: 172980,
        product: "Banana",
        category: "Fresh Vegetables",
      },
      {
        id: 17,
        img: Paprika,
        name: "Great Value Paprika Spicies",
        type: "normal",
        quantity: 0,
        isClaimed: false,
        price: 23250,
        product: "Banana",
        category: "Fresh Vegetables",
      },
      {
        id: 18,
        img: Caramel,
        name: "Magnum Ice Cream Tub Double Sea Salt...",
        type: "normal",
        quantity: 0,
        isClaimed: false,
        price: 15810,
        product: "Banana",
        category: "Fresh Vegetables",
      },
      {
        id: 19,
        img: Augason,
        name: "Augason Farms Honey White Bread...",
        type: "normal",
        quantity: 0,
        isClaimed: false,
        price: 323100,
        product: "Banana",
        category: "Fresh Vegetables",
      },
      {
        id: 20,
        img: Grass,
        name: "Carrington Farms Organic Ghee...",
        type: "normal",
        quantity: 0,
        isClaimed: false,
        price: 278535,
        product: "Banana",
        category: "Fresh Vegetables",
      },
      {
        id: 21,
        img: Walmut,
        name: "Fisher Chef's Naturals Walnut Halves & Pieces",
        type: "normal",
        quantity: 0,
        isClaimed: false,
        price: 139035,
        product: "Banana",
        category: "Fresh Vegetables",
      },
      {
        id: 22,
        img: Hawaiian,
        name: "Krusteaz Hawaiian Sweet No Knead...",
        type: "normal",
        quantity: 0,
        isClaimed: false,
        price: 113272,
        product: "Banana",
        category: "Fresh Vegetables",
      },
    ];
  }

  static getListFilter() {
    return [
      {
        id: 1,
        name: "All",
      },
      {
        id: 2,
        name: "Fresh Fruit",
      },
      {
        id: 3,
        name: "Fresh Vegetables",
      },
      {
        id: 4,
        name: "Meat & SeaFood",
      },
      {
        id: 5,
        name: "Bakery & Bread",
      },
    ];
  }

  static getShopData() {
    return [
      {
        id: "1",
        imgBanner: BannerShop1,
        imgShop: Shop1,
        nameShop: "Lotte Mart - Lieu Giai",
        numberStar: "4.7",
        address: "54 Lieu Giai, Cong Vi, Ba Dinh, Ha Noi",
        delivery: "Instant: 30m | Slow: 1-2 hours max",
      },
      {
        id: "2",
        imgBanner: BannerShop3,
        imgShop: Shop3,
        nameShop: "VinMart - Van Bao",
        numberStar: "4.5",
        address: "304 P. Kim Ma, Ngoc Khanh, Ba Dinh, HN",
        delivery: "Instant: 40m | Slow: 1-2 hours max",
      },
      {
        id: "3",
        imgBanner: BannerShop2,
        imgShop: Shop2,
        nameShop: "Teekiu Mart - Van Bao",
        numberStar: "4.5",
        address: "36A Van Bao, Lieu Giai, Ba Dinh, Ha Noi",
        delivery: "Instant: 35m | Slow: 1-2 hours max",
      },
    ];
  }

  static onChangeQuantity = (product: any, type: string) => {
    if (type === "plus") {
      product.quantity += 1;
    } else if (type === "minus") {
      product.quantity -= 1;
    } else if (type === "reset") {
      product.quantity = 0;
    }
    return product;
  };

  static onChangeBillCheckout = (list: any, obj: any) => {
    let total = 0;
    map(list, (item: any) => {
      if (!obj[item.id]) return;
      total += obj[item.id] * item.price;
    });
    return total;
  };

  static onChangeQuantityCheckout = (obj: any) => {
    let total = 0;
    for (const key in obj) {
      total += parseInt(obj[key]);
    }
    return total;
  };

  static onClickFilter = (list: any, filterName: string | null) => {
    return list.filter((item: any) => item.category === filterName);
  };

  static checkIncludesItem = (listSaveDraf: any, listCheck: any) => {
    listSaveDraf.forEach((element: any, index: number) => {
      listCheck.forEach((element1: any, index1: number) => {
        if (element.id === element1.id) {
          listCheck[index1] = listSaveDraf[index];
        }
      });
    });
    return listCheck;
  };

  static filterWishlist(realWishlist: (string | void)[], param: any) {
    return realWishlist.filter((item) => item !== param.id);
  }
}
