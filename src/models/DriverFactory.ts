import { map } from "lodash-es";
import star from "src/assets/icons/Rating_Star.png";
import avatar from "src/assets/images/YourOrder/ImgDriver.svg";
import { Driver, IDriver } from "./Driver";

const DATA = [
  {
    id: "1",
    avatar,
    name: "Van Son Tran",
    carMaker: "Wave RSX",
    star,
    starNumber: 4.5,
    code: "29.H1 - 435 97",
  },
];
export class DriverFactory {
  static async getDriver() {
    return await map(DATA, (drivre: IDriver) => new Driver(drivre));
  }
}
