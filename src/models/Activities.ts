export interface IProduct {
  id: string;
  image: string;
  title: string;
  code: string;
  address: string;
  price: number;
  icon: string;
  status: string;
}

export interface IActivities {
  date: string;
  product: IProduct[];
}
export class Activities {
  date = "";
  product = [
    {
      id: "",
      image: "",
      title: "",
      code: "",
      address: "",
      price: 0,
      icon: "",
      status: "",
    },
  ];

  constructor(activities: IActivities) {
    this.date = activities.date;
    this.product = activities.product;
  }
}
