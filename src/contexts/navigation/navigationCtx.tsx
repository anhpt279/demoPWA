import React, { createContext, useState, useContext, useEffect } from "react";
import { IAuthCtx } from "../users/types";
import { UserCtx } from "../users/UserCtx";

interface INavigationCtx {
  tabIndex: number;
  setTabIndex: (state: number) => void;
}

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
export const NavigationCtx = createContext<INavigationCtx>(null!);

const NavigationProvider = ({ children }: { children: React.ReactNode }) => {
  const [tabIndex, setTabIndex] = useState(1);
  const { userSpecificData } = useContext<IAuthCtx>(UserCtx);

  useEffect(() => {
    setTabIndex(1);
  }, [userSpecificData.username]);

  const data = {
    tabIndex,
    setTabIndex,
  };
  return (
    <NavigationCtx.Provider value={data}> {children} </NavigationCtx.Provider>
  );
};

export default NavigationProvider;
