import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import IconSearch from "../../../assets/icons/search-normal.svg";
import { useStyles } from "./MapLocation.style";
import PageLayout from "src/components/PageLayout/PageLayout";
import clsx from "clsx";
import Images from "src/assets/images";
import { Button } from "src/components/Buttons";
import {
  getGeologicalAddress,
  getCoordsForAddress,
  key,
} from "../../../clients/getGps";
import { PermissionContext } from "../../../contexts/location/permissionCtx";
import Marker from "../../common/Map/Marker";
import GoogleMap from "../../common/Map/GoogleMap";
import usePlacesService from "react-google-autocomplete/lib/usePlacesAutocompleteService";
import MapAutoComplete from "../../ProfileLocation/ProfileMap/MapAutoComplete/MapAutoComplete";
import { ReactComponent as LocationMap } from "../../../assets/icons/location-map.svg";

export const MapLocation = () => {
  const [onActive, setOnActive] = useState(false);

  const classes = useStyles();
  const {
    isPermit,
    setGps,
    gps,
    setRenderAddress,
    renderAddress,
    address,
    setAddress,
    setLocation,
  } = React.useContext(PermissionContext);
  const inputRefs = React.useRef<HTMLInputElement>(null);
  const [isOpen, setIsOpen] = React.useState<boolean>(true);
  const [showAutoComplete, setShowAutoComplete] = useState<boolean>(false);

  const { placePredictions, getPlacePredictions } = usePlacesService({
    apiKey: key,
  });

  const setAddressFunc = (currentAddress: string) => {
    setRenderAddress(currentAddress);
  };

  React.useEffect(() => {
    if (!isPermit) return;
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;
      setGps([latitude, longitude]);
      getGeologicalAddress(latitude, longitude, setAddressFunc);
    });
  }, []);

  React.useEffect(() => {
    getGeologicalAddress(gps[0], gps[1], setAddressFunc);
  }, [gps]);

  const backtoMark = () => {
    setIsOpen(false);
    setTimeout(() => {
      setIsOpen(true);
    });
  };

  const handleSearch = async (address: string) => {
    if (typeof address !== "string" || address === "") return;
    const res = await getCoordsForAddress(address);
    const { lat, lng } = res;
    setGps([lat, lng]);
    getGeologicalAddress(lat, lng, setAddressFunc);
    setAddress(address);
    setShowAutoComplete(false);
  };

  const addressTitle = renderAddress.split(", ").slice(0, 2).join(", ");

  const navigate = useNavigate();
  const confirmClickHandle = () => {
    const [lat, lng] = gps;
    const latlng = {
      lat,
      lng,
    };

    if (lat === null || lng === null) {
      alert("Please wait for the map to load!");
      return;
    }
    if (address === "Unknown location") {
      alert("Cant set location with unknown address");
      return;
    }
    const countryArr = renderAddress.split(", ");
    const country = countryArr[countryArr.length - 1];

    if (country === "Việt Nam" || country === "Vietnam") {
      setLocation(latlng);
      navigate("/permission/delivery");
      return;
    }
    alert("This service can only ship domestically");
  };
  const markerClick = async (map: any, maps: any) => {
    maps.event.addListener(map, "click", (e: any) => {
      setGps([e.latLng.lat(), e.latLng.lng()]);
    });
    fitBoundsLine(map, maps);
  };
  const prop = {
    markers: [{ lat: gps[0], lng: gps[1] }],
  };

  const dragEnd = (e: any) => {
    setGps([e.center.lat(), e.center.lng()]);
  };
  const fitBoundsLine = (map: any, maps: any) => {
    const bounds = new maps.LatLngBounds();
    for (const marker of prop.markers) {
      bounds.extend(new maps.LatLng(marker.lat, marker.lng));
    }
    map.fitBounds(bounds);
  };
  return (
    <div className="">
      <PageLayout className={classes.root}>
        <div className={clsx(classes.searchInput, onActive && classes.active)}>
          <div className="">
            <img src={IconSearch} onClick={() => handleSearch(address)} />
          </div>
          <input
            placeholder="Enter a new address"
            ref={inputRefs}
            onClick={() => setOnActive(true)}
            onBlur={() => setOnActive(false)}
            value={address}
            onChange={(e: any) => {
              setAddress(e.target.value);
              getPlacePredictions({ input: e.target.value });
              setShowAutoComplete(true);
            }}
            onKeyPress={(e: any) => {
              if (e.key === "Enter") {
                handleSearch(address);
                setShowAutoComplete(false);
              }
            }}
          />
        </div>
        {showAutoComplete && (
          <MapAutoComplete
            className={classes.autoComplete}
            placePredictions={placePredictions}
            handleSearch2={handleSearch}
          />
        )}
      </PageLayout>
      <div className={classes.map}>
        {isOpen && (
          <>
            <GoogleMap gps={gps} manipulateApi={markerClick} dragEnd={dragEnd}>
              {/* <Marker
              lat={gps[0]}
              lng={gps[1]}
              className={classes.location}
              images={Images.location}
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
          <Button
            className={classes.btnConfirm}
            variant="contained"
            onClick={confirmClickHandle}
          >
            Confirm
          </Button>
        </div>
      </PageLayout>
    </div>
  );
};

export default MapLocation;
