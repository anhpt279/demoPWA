export interface IInfoOrder {
  id: string;
  image: any;
  title: string;
  code: string;
}

export class InfoOrder {
  id = "";
  image = null;
  title = "";
  code = "";

  constructor(infoOrder: IInfoOrder) {
    this.id = infoOrder.id;
    this.image = infoOrder.image;
    this.title = infoOrder.title;
    this.code = infoOrder.code;
  }
}
