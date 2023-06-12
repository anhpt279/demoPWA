import { IUser, PropertyOfIUser } from "./types";

export const signin = (
  parsedUserLS: any,
  setUserLS: Function,
  navigate: Function,
  { phone, password }: any
): string => {
  const findUser = parsedUserLS.find(
    (item: IUser) => item.username === phone.toString()
  );
  if (findUser) {
    if (findUser.password === password) {
      setUserLS(
        parsedUserLS.map((item: IUser) =>
          item.username === phone ? { ...item, loggedIn: true } : item
        )
      );
      if (findUser.isNew === true) {
        navigate("/permission");
      } else {
        navigate("/");
      }
      return "";
    } else {
      return "password is incorrect";
    }
  } else {
    return "phone is incorrect";
  }
};

export const logout = (parsedUserLS: any, setUserLS: any, navigate: any) => {
  setUserLS(
    parsedUserLS.map((item: IUser) =>
      item.loggedIn ? { ...item, loggedIn: false, isNew: false } : item
    )
  );
  navigate("/signin");
};

export const signup = (
  parsedUserLS: any,
  setUserLS: Function,
  user: PropertyOfIUser,
  navigate: Function
) => {
  if (parsedUserLS.some((item: IUser) => item.username === user.username)) {
    return false;
  } else {
    setUserLS([
      ...parsedUserLS,
      {
        ...user,
        loggedIn: false,
        isNew: true,
        image: "",
        buyingStatus: {},
        location: null,
        wishlist: [],
        historySearch: [],
        historySeachGrocery: [],
        name: "Your Name",
        activity: [],
        addressHistory: [],
        notification: false,
        promo: {},
        deliveryType: "",
      },
    ]);
    navigate("/signin");
    return true;
  }
};
export const deleteAccount = (
  parsedUserLS: any,
  setUserLS: any,
  username: IUser[keyof IUser],
  navigate: Function
) => {
  setUserLS(
    parsedUserLS.filter(
      (item: IUser) => !(item.username === username && item.loggedIn)
    )
  );
  navigate("/signin");
};

export const resetPass = (
  parsedUserLS: any,
  setUserLS: Function,
  user: PropertyOfIUser,
  navigate: Function
) => {
  const { username, password } = user;
  const findUser = parsedUserLS.find(
    (item: IUser) => item.username === user.username
  );
  if (!findUser) {
    return false;
  } else {
    setUserLS(
      parsedUserLS.map((item: IUser) =>
        item.username === username ? { ...item, password } : item
      )
    );
    navigate("/signin");
    return true;
  }
};

export const updateCurrentUser = (
  parsedUserLS: any,
  setUserLS: Function,
  obj: PropertyOfIUser
) => {
  const newUsersData = parsedUserLS.map((item: IUser) =>
    item.loggedIn ? { ...item, ...obj } : item
  );
  setUserLS(newUsersData);
};

export const userSpecificData = (parsedUserLS: any): IUser => {
  const findUser = parsedUserLS.find((item: IUser) => item.loggedIn);
  return findUser || {};
};
