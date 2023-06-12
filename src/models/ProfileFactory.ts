import { map } from "lodash-es";
import { Profile, IProfile } from "./Profile";
import IconNotificationBing from "../assets/icons/notification-bing.png";
import IconClarityShareSolid from "../assets/icons/clarity_share-solid.png";
import IconUser from "../assets/icons/user.png";
import IconLock from "../assets/icons/lock.png";
import IconCard from "../assets/icons/card.png";
import IconLocationNoBG from "../assets/icons/location.png";
import IconHeartNoBG from "../assets/icons/heart.png";
import IconStarNoBG from "../assets/icons/starSVG.svg";
import IconInformation from "../assets/icons/information.svg";
import IconMessageQuestion from "../assets/icons/message-question.svg";
import IconInfoCircle from "../assets/icons/info-circle.svg";
import { IUser } from "../contexts/users/types";

const LIST_FEATURE_PROFILE = [
  {
    id: "1",
    icon: IconUser,
    context: "Profile Information",
    helpContext: "Change your account information",
    url: "/profile/information",
  },
  {
    id: "2",
    icon: IconLock,
    context: "Change Password",
    helpContext: "Change your password",
    url: "/profile/changePassword",
  },
  {
    id: "3",
    icon: IconCard,
    context: "Payment Management",
    helpContext: "Add your credit & debit cards",
    url: "/payment-management",
  },
  {
    id: "4",
    icon: IconLocationNoBG,
    context: "Location",
    helpContext: "Change your location",
    url: "/profile/location",
  },
];

const LIST_NOTIFICATION_PROFILE = [
  {
    id: 1,
    icon: IconNotificationBing,
    context: "Push Notifications",
    helpContext: "You’ll get daily update",
    url: "/profile/pushNotifications",
  },
  {
    id: 2,
    icon: IconNotificationBing,
    context: "Promotional Notifications",
    helpContext: "You’ll get daily update",
    url: "/profile/pushNotifications1",
  },
];

const LIST_MORE_FEATURE = [
  {
    id: "1",
    icon: IconClarityShareSolid,
    context: "Refer to Friends",
    helpContext: "Get 50.000d for referring friends",
    url: "/refer",
  },
  {
    id: "2",
    icon: IconHeartNoBG,
    context: "Your Wishlist",
    helpContext: "Favorite products",
    url: "/wishlist",
  },
  {
    id: "3",
    icon: IconStarNoBG,
    context: "Rate Us",
    helpContext: "Rate us on Play Store, App Store",
    url: "/rate-us",
  },
  {
    id: "4",
    icon: IconInformation,
    context: "Terms & Conditions",
    helpContext: "Legal agreements for consumers",
    url: "/terms-conditions",
  },
  {
    id: "5",
    icon: IconMessageQuestion,
    context: "FAQ/Help",
    helpContext: "Change your account information",
    url: "/faq-help",
  },
  {
    id: "6",
    icon: IconInfoCircle,
    context: "Version",
    helpContext: "Check your app’s version",
    url: "/profile/version",
  },
];
export class ProfileFactory {
  static getListAccountSettingFeature() {
    return map(LIST_FEATURE_PROFILE, (item: IProfile) => {
      return new Profile(item);
    });
  }

  static getListNotification() {
    return map(LIST_NOTIFICATION_PROFILE, (item: IProfile) => {
      return new Profile(item);
    });
  }

  static getListMoreFeature() {
    return map(LIST_MORE_FEATURE, (item: IProfile) => {
      return new Profile(item);
    });
  }

  static findUserData(userData: IUser[], phone: string) {
    return userData.find(
      (user) => !!(user.username.toString() === phone && user.loggedIn)
    );
  }
}
