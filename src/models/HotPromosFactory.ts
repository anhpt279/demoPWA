import { map } from "lodash-es";
import { Promo, IPromo } from "./Promo";
import LotteLogoEllipe from "src/assets/images/home/LotteLogoEllipe.png";
const DATA_HOT_PROMOS = [
  {
    id: "1",
    name: "lotte",
    codeDiscount: "LTM15",
    discount: 15,
    useFor: "Bakery & Bread",
    expires: "2022/01/30",
    logoBrand: LotteLogoEllipe,
  },
  {
    id: "2",
    name: "lotte",
    logoBrand: LotteLogoEllipe,
    codeDiscount: "LTM25",
    discount: 25,
    useFor: "Fresh Fruits",
    expires: "2022/01/30",
  },
  {
    id: "3",
    name: "lotte",
    logoBrand: LotteLogoEllipe,
    codeDiscount: "LTM10",
    discount: 10,
    useFor: "Meat & Seafood",
    expires: "2022/07/20",
  },

  {
    id: "4",
    name: "lotte",
    logoBrand: LotteLogoEllipe,
    codeDiscount: "LTM35",
    discount: 35,
    useFor: "Mom & Baby",
    expires: "2022/08/31",
  },
  {
    id: "5",
    name: "lotte",
    logoBrand: LotteLogoEllipe,
    codeDiscount: "LTM5",
    discount: 5,
    useFor: "Nuts",
    expires: "2022/08/31",
  },
];

export class HotPromosFactory {
  static getHotPromosNew() {
    return map(DATA_HOT_PROMOS, (promo: IPromo) => new Promo(promo));
  }

  static checkPromoSaved(listNewPromos: any, listSavedPromos: any) {
    const result = listNewPromos.filter((item: any) =>
      listSavedPromos.some((itemSaved: any) => item.id === itemSaved.id)
    );
    return result;
  }
}
