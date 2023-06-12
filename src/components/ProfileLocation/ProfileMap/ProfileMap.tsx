import React, {
  useEffect,
  useState,
  useContext,
  FC,
  HTMLAttributes,
  useLayoutEffect,
} from "react";
import { useNavigate, useLocation } from "react-router-dom";
import IconSearch from "../../../assets/icons/search-normal.svg";
import { useStyles } from "./ProfileMap.style";
import PageLayout from "src/components/PageLayout/PageLayout";
import clsx from "clsx";
import Images from "src/assets/images";
import { Button } from "src/components/Buttons";
import {
  key,
  getCoordsForAddress,
  getGeologicalAddress,
} from "../../../clients/getGps";

import usePlacesService from "react-google-autocomplete/lib/usePlacesAutocompleteService";
import Marker from "../../common/Map/Marker";
import GoogleMap from "../../common/Map/GoogleMap";
import { PermissionContext } from "../../../contexts/location/permissionCtx";
import arrowLeft from "src/assets/icons/Vector.png";
import MapAutoComplete from "./MapAutoComplete/MapAutoComplete";
import { IAuthCtx } from "../../../contexts/users/types";
import { UserCtx } from "../../../contexts/users/UserCtx";
import { ReactComponent as LocationMap } from "../../../assets/icons/location-map.svg";

export const ProfileMap: FC<HTMLAttributes<HTMLDivElement>> = (props: any) => {
  const { location, setLocation } = useContext(PermissionContext);

  const [onActive, setOnActive] = useState<boolean>(false);
  const [showAutoComplete, setShowAutoComplete] = useState<boolean>(false);
  const classes = useStyles();
  const { state }: { state: any } = useLocation();
  const [address, setAddress] = useState<string>("");
  const [renderAddress, setRenderAddress] = useState<string>("");
  const [gps, setGps] = React.useState<any>([21.0342994, 105.8172407]);
  const [isOpen, setIsOpen] = React.useState<boolean>(true);
  const addressTitle = renderAddress?.split(", ")?.slice(0, 2)?.join(", ");
  const navigate = useNavigate();
  const { userSpecificData, updateCurrentUser } = useContext<IAuthCtx>(UserCtx);
  const { placePredictions, getPlacePredictions } = usePlacesService({
    apiKey: key,
  });
  const [firstGps, setFirstGps]: any = React.useState<any>([
    21.0342994, 105.8172407,
  ]);

  const addressHistory = userSpecificData.addressHistory || [];
  useLayoutEffect(() => {
    getGeologicalAddress(gps[0], gps[1], setAddressFunc);
  }, [gps]);

  useEffect(() => {
    if (location) {
      const locationLS: { lat: number; lng: number } = location;
      const { lat, lng } = locationLS;
      setGps([lat, lng]);
      setFirstGps([lat, lng]);
      getGeologicalAddress(lat, lng, setAddressFunc);
    }
  }, []);

  const markerClick = (map: any, maps: any) => {
    maps.event.addListener(map, "click", (e: any) => {
      setGps([e.latLng.lat(), e.latLng.lng()]);
    });
    fitBoundsLine(map, maps);
  };
  const dragEnd = (e: any) => {
    setGps([e.center.lat(), e.center.lng()]);
  };

  const prop = {
    markers: [{ lat: gps[0], lng: gps[1] }],
  };

  const fitBoundsLine = (map: any, maps: any) => {
    const bounds = new maps.LatLngBounds();
    for (const marker of prop.markers) {
      bounds.extend(new maps.LatLng(marker.lat, marker.lng));
    }
    map.fitBounds(bounds);
  };

  const addressAsync = async () => {
    if (state?.valueSearch) {
      const detailLocation = await handleSearch(state.valueSearch);
      if (detailLocation) {
        const oneAddress = {
          id: Math.floor(Math.random() * 1000),
          detailLocation,
        };
        if (addressHistory.length > 0) {
          let hadValue = false;
          const allAddress = [...addressHistory];
          allAddress.forEach((item: { id: number; detailLocation: string }) => {
            if (item?.detailLocation === detailLocation) {
              hadValue = true;
            }
          });
          if (hadValue) return;
        }
        updateCurrentUser({ addressHistory: [...addressHistory, oneAddress] });
      }
    }
  };
  useEffect(() => {
    addressAsync();
  }, [state]);

  const setAddressFunc = (currentAddress: string) => {
    setRenderAddress(currentAddress);
    return currentAddress;
  };

  const backtoMark = () => {
    setGps([firstGps[0], firstGps[1]]);
  };

  const handleSearch = async (address: string) => {
    if (typeof address !== "string") return;
    setShowAutoComplete(false);

    try {
      const res = await getCoordsForAddress(address);
      const { lat, lng } = res;
      setGps([lat, lng]);
      const currentAddress = await getGeologicalAddress(
        lat,
        lng,
        (address: string) => address
      );
      setAddress(address);
      return currentAddress;
    } catch (err: any) {
      console.warn(err);
    }
  };

  const clickConfirmHandle = () => {
    const latlng = {
      lat: gps[0],
      lng: gps[1],
    };
    if (renderAddress === "Unknown location") {
      alert("Cant set location with unknown address");
      return;
    }
    const countryArr = renderAddress.split(", ");
    const country = countryArr[countryArr.length - 1];

    if (country === "Việt Nam" || country === "Vietnam") {
      setLocation(latlng);
      navigate("/");
      return;
    }
    alert("This service can only ship domestically");
  };
  return (
    <div {...props} className={clsx(props.className, "")}>
      <PageLayout>
        <div className={classes.header}>
          <img
            src={arrowLeft}
            alt=""
            className={classes.img}
            onClick={() => navigate(-1)}
          />
          <div
            className={clsx(classes.searchInput, onActive && classes.active)}
          >
            <div>
              <img src={IconSearch} onClick={() => handleSearch(address)} />
            </div>
            <input
              placeholder="Enter a new address"
              value={address}
              onClick={() => setOnActive(true)}
              onBlur={() => setOnActive(false)}
              onChange={(e: any) => {
                getPlacePredictions({ input: e.target.value });
                setAddress(e.target.value);
                setShowAutoComplete(true);
              }}
              onKeyPress={(e: any) => {
                if (e.key === "Enter") {
                  handleSearch(address);
                  setShowAutoComplete(false);
                }
              }}
            />
            {showAutoComplete && (
              <MapAutoComplete
                handleSearch2={handleSearch}
                placePredictions={placePredictions}
                className={classes.autoComplete}
              />
            )}
          </div>
        </div>
      </PageLayout>
      <div className={classes.map}>
        {isOpen && (
          <>
            <GoogleMap manipulateApi={markerClick} gps={gps} dragEnd={dragEnd}>
              {/* <Marker
                lat={gps[0]}
                lng={gps[1]}
                className={classes.location}
                images={Images.location}
                onDragEnd={(e) => console.log(e.currentTarget)}
              /> */}
            </GoogleMap>
            <LocationMap className={classes.location} />
          </>
        )}
        <div className={classes.btngps}>
          <img src={Images.btngps} alt="" onClick={backtoMark} />
        </div>
      </div>
      <PageLayout>
        <div className={classes.bot}>
          <div className={classes.botgps}>
            <img src={Images.gps3} alt="" />
            <div className={classes.botaddress}>
              <p>{addressTitle}</p>
              <p>{renderAddress}</p>
            </div>
          </div>
          <Button variant="contained" onClick={clickConfirmHandle}>
            Confirm
          </Button>
        </div>
      </PageLayout>
    </div>
  );
};

export default ProfileMap;
