import { map } from "lodash-es";
import ImageExample from "src/assets/images/home/example.svg";

export class MyCartFactory {
  static getMyCart() {
    return [
      {
        id: 1,
        category: "Bakery & Bread",
        listProduct: [
          {
            id: 1,
            title: "Krusteaz Meyer Lemon Pound Cake - 467g (Pack of 12)",
            currentPrice: 21000,
            originPrice: 22050,
            image: ImageExample,
            quantity: 1,
          },
        ],
      },
      {
        id: 2,
        category: "Meat and Seafood",
        listProduct: [
          {
            id: 1,
            title: "Krusteaz Meyer Lemon Pound Cake - 467g (Pack of 12)",
            currentPrice: 21000,
            originPrice: 22050,
            image: ImageExample,
            quantity: 1,
          },
          {
            id: 2,
            title: "Krusteaz Meyer Lemon Pound Cake - 467g (Pack of 12)",
            currentPrice: 21000,
            originPrice: 22050,
            image: ImageExample,
            quantity: 1,
          },
        ],
      },
    ];
  }

  static getSubTotalPrice(listMyCart: any) {
    let total = 0;
    map(listMyCart, (item: any) => {
      map(item[1], (product: any) => {
        total += product.price * product.quantity;
      });
    });
    return total;
  }

  static getTotalItem(listMyCart: any) {
    let total = 0;
    map(listMyCart, (item: any) => {
      map(item[1], (product: any) => {
        total += product.quantity;
      });
    });
    return total;
  }

  static getTotalPrice(codePromo: string, subTotalPrice: number) {
    const totalPrice =
      codePromo === ""
        ? subTotalPrice + 20000
        : subTotalPrice + 20000 - parseInt(codePromo) * 1000;
    return totalPrice;
  }

  static getTotalDiscount(listMyCart: any) {
    let total = 0;
    map(listMyCart, (item: any) => {
      map(item[1], (product: any) => {
        if (product?.priceOrigin) {
          total += (product?.priceOrigin - product.price) * product.quantity;
        } else {
          total += 0;
        }
      });
    });
    return total;
  }

  static changeQuantity(
    listMyCart: any,
    productId: string,
    categoryId: string,
    type: string
  ) {
    return map(listMyCart, (category: any) => {
      if (category.id === categoryId) {
        const products = map(category.listProduct, (product: any) => {
          if (product.id === productId) {
            if (type === "minus" && product.quantity > 0) {
              product.quantity = product.quantity - 1;
            } else if (type === "plus") {
              product.quantity = product.quantity + 1;
            } else {
              alert("This item equal to 1");
            }
          }
          return product;
        });
        category.listProduct = products;
      }
      return category;
    });
  }

  static changeQuantityMyCart(
    listMyCart: any,
    productId: string,
    categoryName: string,
    type: string
  ) {
    return map(listMyCart, (category: any) => {
      if (category[0] === categoryName) {
        const filterProduct = category[1].filter(
          (item: any) =>
            type === "minus" && item.quantity === 1 && item.id === productId
        );
        if (filterProduct.length !== 0) {
          map(category[1], (product: any) => {
            if (product.id === productId) {
              if (type === "minus") {
                product.quantity = 0;
              }
            }
            return product;
          });
          const filteredList = category[1].filter(
            (item: any) => item.id !== filterProduct[0].id
          );
          category.listProduct = filteredList;
          category[1] = filteredList;
        } else {
          const products = map(category[1], (product: any) => {
            if (product.id === productId) {
              if (type === "minus") {
                product.quantity = product.quantity - 1;
              } else if (type === "plus") {
                product.quantity = product.quantity + 1;
              }
            }
            return product;
          });
          category.listProduct = products;
        }
      }
      return category;
    }).filter((item) => item[1].length !== 0);
  }
}
