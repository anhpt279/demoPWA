interface IOrder {
  id: string;
  name: string;
  address: string;
  nbOfItem: string;
  total: string;
  availability: boolean;
}
export class Order {
  id = "";
  name = "";
  address = "";
  nbOfItem = "";
  total = "";
  availability = false;

  constructor(order: IOrder) {
    this.id = order.id;
    this.name = order.name;
    this.address = order.address;
    this.nbOfItem = order.nbOfItem;
    this.total = order.total;
    this.availability = order.availability;
  }
}
