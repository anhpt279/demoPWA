export interface IOrder {
  id: string;
  date: string;
  image: string;
  brand: string;
  address: string;
}

export interface IYourOrder {
  date: string;
  order: IOrder[];
}

export class Yourorder {
  date = "";
  order = [
    {
      id: "",
      date: "",
      image: "",
      brand: "",
      address: "",
    },
  ];

  constructor(youroder: IYourOrder) {
    this.date = youroder.date;
    this.order = youroder.order;
  }
}
