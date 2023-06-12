import { map } from "lodash-es";
import Images from "../assets/images";
import { InfoOrder } from "./InfoOrder";

const DATA = [
  {
    id: 1,
    image: Images.codeorder,
    title: "Track ID",
    code: "#LTM12863",
  },
  {
    id: 2,
    image: Images.timeorder,
    title: "Estimate Time",
    code: "1-2 hours max",
  },
  {
    id: 3,
    image: Images.kgorder,
    title: "Packge Weight",
    code: "1.5 kg",
  },
];

export class InfoOrderFactory {
  static async getInfoOrder() {
    return await map(DATA, (infoOrder: InfoOrder) => new InfoOrder(infoOrder));
  }
}
