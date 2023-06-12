import { map } from "lodash-es";
import Images from "src/assets/images";
import { IYourOrder, Yourorder } from "./YourOrder";

const DATA = [
  {
    date: "Current",
    order: [
      {
        id: "1",
        time: "12 May 2022",
        image: Images.yourorder,
        brand: "Lotte Mart - Lieu Giai",
        address: "27 Lieu Giai, Cong Vi, Ba Dinh, Ha Noi",
      },
    ],
  },
];
export class YourOrderFactory {
  static async getYourOrder() {
    return await map(DATA, (youroder: IYourOrder) => new Yourorder(youroder));
  }
}
