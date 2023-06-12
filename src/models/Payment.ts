interface IPayment {
  id: string;
  name: string;
  address: string;
  mode: string;
  paid: string;
  purchase: string;
  invoice: string;
}
export class Payment {
  id = "";
  name = "";
  address = "";
  mode = "";
  paid = "";
  purchase = "";
  invoice = "";

  constructor(Payment: IPayment) {
    this.id = Payment.id;
    this.name = Payment.name;
    this.address = Payment.address;
    this.mode = Payment.mode;
    this.paid = Payment.paid;
    this.purchase = Payment.purchase;
    this.invoice = Payment.invoice;
  }
}
