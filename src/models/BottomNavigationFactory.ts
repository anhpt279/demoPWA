import BNIconHome from "../assets/icons/bottom_navigation/home-2.svg";
import BNIconActivity from "../assets/icons/bottom_navigation/notification-bing-white.svg";
import BNIconProfile from "../assets/icons/bottom_navigation/profile.svg";

export class BottomNavigationFactory {
  static getData() {
    return [
      {
        id: 1,
        name: "Home",
        icon: BNIconHome,
        link: "/",
      },
      {
        id: 2,
        name: "Activity",
        icon: BNIconActivity,
        link: "/activities",
      },
      {
        id: 3,
        name: "Account",
        icon: BNIconProfile,
        link: "/profile",
      },
    ];
  }
}
