import GoogleMapReact from "google-map-react";
import { key } from "../../../clients/getGps";
interface IGoogleMap {
  children: JSX.Element | Array<JSX.Element>;
  manipulateApi?: Function;
  gps: any;
  dragEnd: Function;
}
const GoogleMap = ({ children, manipulateApi, gps, dragEnd }: IGoogleMap) => {
  const options = () => {
    return {
      disableDefaultUI: true,
      mapTypeControl: false,
      streetViewControl: false,
      styles: [
        {
          featureType: "poi",
          elementType: "labels",
          stylers: [{ visibility: "on" }],
        },
      ],
    };
  };

  const defaultProps = {
    center: {
      lat: gps[0],
      lng: gps[1],
    },
    zoom: 20,
  };
  return (
    <GoogleMapReact
      bootstrapURLKeys={{
        key,
        libraries: ["places", "geometry"],
      }}
      yesIWantToUseGoogleMapApiInternals
      center={defaultProps.center}
      defaultZoom={defaultProps.zoom}
      options={options}
      onGoogleApiLoaded={({ map, maps }) =>
        manipulateApi && manipulateApi(map, maps)
      }
      onDragEnd={(e) => dragEnd(e)}
    >
      {children}
    </GoogleMapReact>
  );
};
export default GoogleMap;
