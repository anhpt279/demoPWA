export interface IFaq {
  id: number;
  title: string;
  detail: string;
  type: boolean;
}
export class Faq {
  id = 0;
  title = "";
  detail = "";
  type = false;
  constructor(faq: IFaq) {
    this.id = faq.id;
    this.title = faq.title;
    this.detail = faq.detail;
    this.type = faq.type;
  }
}
