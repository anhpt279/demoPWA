export interface IPromo {
  id: string;
  name: string;
  codeDiscount: string;
  discount: number;
  useFor: string;
  expires: string;
  logoBrand: string;
}
export class Promo {
  id = "";
  name = "";
  codeDiscount = "";
  discount = 0;
  useFor = "";
  expires = "";
  logoBrand = "";
  constructor(promo: IPromo) {
    this.id = promo.id;
    this.name = promo.name;
    this.codeDiscount = promo.codeDiscount;
    this.discount = promo.discount;
    this.useFor = promo.useFor;
    this.expires = promo.expires;
    this.logoBrand = promo.logoBrand;
  }
}
