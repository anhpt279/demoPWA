import { map } from "lodash-es";
import Images from "src/assets/images";
import { Activities, IActivities } from "./Activities";
import Rectangle_6019_3 from "src/assets/images/home/Rectangle_6019_3.png";
const DATA = [
  {
    date: "Now",
    product: [
      {
        id: 1,
        image: Rectangle_6019_3,
        title: "Lotte Mart - Lieu Giai",
        code: "#LTM09658",
        address: "54 Lieu Giai, Cong Vi, Ba Dinh, Ha Noi",
        price: "108.000d",
        icon: Images.timer,
        status: "Delivering",
      },
    ],
  },
  {
    date: "29 May 2022",
    product: [
      {
        id: 3,
        image: Rectangle_6019_3,
        title: "Lotte Mart - Lieu Giai",
        code: "#LTM927122",
        address: "54 Lieu Giai, Cong Vi, Ba Dinh, Ha Noi",
        price: "277.000d",
        icon: Images.timer,
        status: "Cancel",
      },
    ],
  },
  {
    date: "19 May 2022",
    product: [
      {
        id: 5,
        image: Rectangle_6019_3,
        title: "Lotte Mart - Lieu Giai",
        code: "#LTM856437",
        address: "54 Lieu Giai, Cong Vi, Ba Dinh, Ha Noi",
        price: "187.000d",
        icon: Images.timer,
        status: "Arrived",
      },
      {
        image: Rectangle_6019_3,
        title: "Lotte Mart - Lieu Giai",
        code: "#LTM09658",
        address: "54 Lieu Giai, Cong Vi, Ba Dinh, Ha Noi",
        price: "346.000d",
        icon: Images.timer,
        status: "Arrived",
      },
    ],
  },
];
export class ActivitiesFactory {
  static async getActivities() {
    return await map(
      DATA,
      (activities: IActivities) => new Activities(activities)
    );
  }
}
