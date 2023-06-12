import React, { createContext, useContext, useState, useEffect } from "react";
import { getGeologicalAddress } from "../../clients/getGps";
import { UserCtx } from "../users/UserCtx";
import { IAuthCtx } from "../users/types";
import { IPermissionCtx } from "./types";

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
export const PermissionContext = createContext<IPermissionCtx>(null!);

const LocationPermissionProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [isPermit, setIsPermit] = useState<boolean>(false);
  const [gps, setGps] = useState<number[] | any>([null, null]);
  const [renderAddress, setRenderAddress] = useState<string>("");
  const [addressFromLS, setAddressFromLS] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [location, setLocation] = useState<any>(null);

  const { userSpecificData, updateCurrentUser } = useContext<IAuthCtx>(UserCtx);

  useEffect(() => {
    setLocation(userSpecificData.location);
    if (!userSpecificData.location) {
      setAddressFromLS("");
    }
  }, [userSpecificData.username]);

  useEffect(() => {
    updateCurrentUser({ location });

    if (location) {
      const { lat, lng } = location;
      getGeologicalAddress(lat, lng, setAddressFromLS);
    }
  }, [location]);

  const data: IPermissionCtx = {
    isPermit,
    setIsPermit,
    gps,
    setGps,
    address,
    setAddress,
    renderAddress,
    setRenderAddress,
    location,
    setLocation,
    addressFromLS,
  };

  return (
    <PermissionContext.Provider value={data}>
      {children}
    </PermissionContext.Provider>
  );
};

export default LocationPermissionProvider;
