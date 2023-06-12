export interface IProductDetail {
  id: string;
  name: string;
  nameDetail: string;
  type: string;
  price: number;
  nbProductSold?: any;
  slide: Array<object>;
  slideZoom: Array<object>;
  style: Array<object>;
  productDescription: string;
  productDetail: object;
}

export class ProductDetail {
  id = "";
  name = "";
  nameDetail = "";
  type = "";
  price = 0;
  nbProductSold = 0;
  slide = [{}];
  slideZoom = [{}];
  style = [{}];
  productDescription = "";
  productDetail = {};
  constructor(productDetail: IProductDetail) {
    this.id = productDetail.id;
    this.name = productDetail.name;
    this.nameDetail = productDetail.nameDetail;
    this.type = productDetail.type;
    this.price = productDetail.price;
    this.nbProductSold = productDetail?.nbProductSold;
    this.slide = productDetail.slide;
    this.slideZoom = productDetail.slideZoom;
    this.style = productDetail.style;
    this.productDescription = productDetail.productDescription;
    this.productDetail = productDetail.productDetail;
  }
}
