import HomeSlide1 from "src/assets/images/home/01.png";
import HomeSlide2 from "src/assets/images/home/02.png";
import HomeSlide3 from "src/assets/images/home/03.png";
import HomeSlide4 from "src/assets/images/home/04.png";
import HomeSlide5 from "src/assets/images/home/05.png";
import HomeSlide6 from "src/assets/images/home/06.png";

export class HomeFactory {
  static getImageHomeSlide() {
    return [
      {
        id: 1,
        image: HomeSlide1,
      },
      {
        id: 2,
        image: HomeSlide2,
      },
      {
        id: 3,
        image: HomeSlide3,
      },
      {
        id: 4,
        image: HomeSlide4,
      },
      {
        id: 5,
        image: HomeSlide5,
      },
      {
        id: 6,
        image: HomeSlide6,
      },
    ];
  }
}
