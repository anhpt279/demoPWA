import React, { useContext, useMemo, createContext } from "react";

import { useLocalStorage } from "../../hooks/useLocalStorage";
import { IAuthCtx, PropertyOfIUser } from "./types";
import {
  logout,
  signin,
  signup,
  resetPass,
  deleteAccount,
  userSpecificData,
  updateCurrentUser,
} from "./usersAction";

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
export const UserCtx = createContext<IAuthCtx>(null!);
export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [parsedUserLS, setUserLS] = useLocalStorage("user", []);

  const setters = {
    signins: (phone: any, password: any, navigate: Function) => {
      return signin(parsedUserLS, setUserLS, navigate, {
        phone,
        password,
      });
    },
    signups: (user: PropertyOfIUser, navigate: Function) =>
      signup(parsedUserLS, setUserLS, user, navigate),
    logout: (navigate: Function) => logout(parsedUserLS, setUserLS, navigate),
    resetPass: (user: PropertyOfIUser, navigate: Function) =>
      resetPass(parsedUserLS, setUserLS, user, navigate),
    deleteAccount: (username: string, navigate: Function) =>
      deleteAccount(parsedUserLS, setUserLS, username, navigate),
    updateCurrentUser: (obj: PropertyOfIUser) =>
      updateCurrentUser(parsedUserLS, setUserLS, obj),
    userSpecificData: userSpecificData(parsedUserLS),
  };

  const value: IAuthCtx = useMemo(
    () => ({
      ...setters,
      usersData: parsedUserLS,
    }),
    [setters, parsedUserLS]
  );

  return <UserCtx.Provider value={value}>{children}</UserCtx.Provider>;
};

export const useAuth = () => {
  return useContext(UserCtx);
};
