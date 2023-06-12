import ImgOnBoard1 from "src/assets/images/on-boarding/on-boarding1.png";
import ImgOnBoard2 from "src/assets/images/on-boarding/on-boarding2.png";
import ImgOnBoard3 from "src/assets/images/on-boarding/on-boarding3.png";
export class BoardingFacrtory {
  static getStep(id: number, boardings: any) {
    return boardings.find((b: any) => b.id === id);
  }

  static getListBoarding() {
    return [
      {
        id: 0,
        title: "Welcome",
        describe:
          "GoMarket is an online food delivery platform provide daily living needs",
        image: ImgOnBoard1,
      },
      {
        id: 1,
        title: "Easy payment",
        describe: "Make an online payment through the linked bank account",
        image: ImgOnBoard2,
      },
      {
        id: 2,
        title: "Superfast delivery",
        describe:
          "In a short time, the entire order will be delivered immediately to your place",
        image: ImgOnBoard3,
      },
    ];
  }
}
