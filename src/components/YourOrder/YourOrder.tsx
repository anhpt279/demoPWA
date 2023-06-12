import React, {
  FC,
  HTMLAttributes,
  useContext,
  useEffect,
  useState,
} from "react";
import { useStyles } from "./YourOrder.style";
import Order1 from "../../assets/images/YourOrder/Order1Header.png";
import Order2 from "../../assets/images/YourOrder/Order2Header.png";
import Order3 from "../../assets/images/YourOrder/Order3Header.png";
import Order4 from "../../assets/images/YourOrder/Order4Header.png";
import { ReactComponent as TimerSVG } from "../../assets/images/YourOrder/timer.svg";
import { ReactComponent as TrackSVG } from "../../assets/images/YourOrder/Track.svg";
import { ReactComponent as TimemaxSVG } from "../../assets/images/YourOrder/Timemax.svg";
import { ReactComponent as WeightSVG } from "../../assets/images/YourOrder/Weight.svg";
import { ReactComponent as ShippingSVG } from "src/assets/images/YourOrder/drivering.svg";
import { ReactComponent as ImgBtnSVG } from "..//../assets/images/YourOrder/imgBtn.svg";
import { ReactComponent as ImgDriverSVG } from "..//../assets/images/YourOrder/ImgDriver.svg";
import { ReactComponent as RatingSVG } from "..//../assets/images/YourOrder/RatingStar.svg";
import Ratings from "../Ratings/Ratings";
import GoogleMapReact from "google-map-react";
import PageLayout from "../PageLayout/PageLayout";
import { YourOrderFactory } from "../../models/YourOrderFactory";
import RenderDriver from "../RenderDriver/RenderDriver";
import { getCoordsForAddress, key } from "../../clients/getGps";
import Marker from "../common/Map/Marker";
import OrderCheckOut from "../OrderCheckOut/OrderCheckOut";
import { useNavigate } from "react-router-dom";
import clsx from "clsx";
import { PermissionContext } from "../../contexts/location/permissionCtx";
import Images from "../../assets/images";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { getDistanceInMeter, markPointInStraightLine } from "../../utils/map";
import { BuyingStatusCtx } from "../../contexts/buyingStatus/buyingStatusCtx";
import { UserCtx } from "../../contexts/users/UserCtx";
import { IAuthCtx } from "../../contexts/users/types";
import { IBuyingStatusCtx } from "../../contexts/buyingStatus/types";
export interface ILatLng {
  lat: number | null;
  lng: number | null;
}

export const YourOrder: FC<HTMLAttributes<HTMLDivElement>> = (props) => {
  const classes = useStyles();
  const navigate = useNavigate();
  const [delivery, setDelivery] = useState<number>(0);
  const [listDataYourorder, setListDataYourorder] = useState<any>([]);
  const [animation, setAnimation] = React.useState<any>([]);
  const [checkCart, setCheckCart] = useState<boolean>(false);
  const [maps, setMaps] = React.useState<any>();
  const [number, setNumber] = React.useState<number>(2);
  const [progress, setProgress] = useState(0);
  const [driver, setDriver] = useState<ILatLng>({
    lat: 21.0327757,
    lng: 105.8124268,
  });
  const [lastPlace, setLastPlace] = useState<ILatLng>({
    lat: null,
    lng: null,
  });
  const [reDriver, setReDriver] = useState<ILatLng>({
    lat: null,
    lng: null,
  });
  const [deliveryType] = useLocalStorage("deliveryType", "");
  const { addressFromLS } = useContext(PermissionContext);
  const { updateCurrentUser } = useContext<IAuthCtx>(UserCtx);
  const { setAdditionalObj } = useContext<IBuyingStatusCtx>(BuyingStatusCtx);

  const [pointB, setPointB] = useState<ILatLng>({
    lat: 0,
    lng: 0,
  });

  const [pointA, setPointA] = useState<ILatLng>({
    lat: 21.0331757,
    lng: 105.8124268,
  });

  const [angle, setAngle] = useState<number>(0);
  const [lastAngle, setLastAngle] = useState<number>(2);

  const setCoordsForPoint = async (
    point: string,
    callback: (state: ILatLng) => void
  ) => {
    const res: ILatLng = await getCoordsForAddress(point);
    callback(res);
  };
  useEffect(() => {
    const dataYourOrder = async () => {
      const data = await YourOrderFactory.getYourOrder();
      setListDataYourorder(data);
    };
    dataYourOrder();
    setCoordsForPoint(
      "Lotte Mart Lieu Giai, Ba Dinh, Ha Noi, Viet Nam",
      setPointB
    );
    setCoordsForPoint(
      addressFromLS || "No 6, 34 Van Bao, Lieu Giai, Ba Dinh, Ha Noi",
      setPointA
    );
  }, []);
  useEffect(() => {
    if (progress < 86) {
      const progressTimeOut = setTimeout(() => {
        setProgress((state: number) => state + 0.37);
      }, 100);
      return () => {
        clearTimeout(progressTimeOut);
      };
    }
  }, [progress, delivery]);

  useEffect(() => {
    if (delivery === 3) {
      updateCurrentUser({ buyingStatus: {}, promo: {}, deliveryType: "" });
      setAdditionalObj({});
      localStorage.removeItem("deliveryType");
    }
  }, [delivery]);

  useEffect(() => {
    if (delivery === 2) {
      const drivingPathCoords = animation.length - 1 - number;
      const firstCoordsValue = animation[drivingPathCoords];
      const secondCoordsValue = animation[drivingPathCoords + 1];

      if (animation.length === 1) return;
      const firstCoords = {
        lat: firstCoordsValue?.lat(),
        lng: firstCoordsValue?.lng(),
      };
      const secondCoords = {
        lat: secondCoordsValue?.lat(),
        lng: secondCoordsValue?.lng(),
      };
      if (firstCoords.lat && secondCoords.lat) {
        const fakeDistance: number = getDistanceInMeter(
          secondCoords,
          firstCoords
        );
        const latlng: any = markPointInStraightLine(
          maps,
          secondCoords,
          firstCoords,
          fakeDistance / 2
        );
        const { coords, angle } = latlng;
        setReDriver({ lat: coords?.lat(), lng: coords?.lng() });
        setAngle(angle);
      }
      if (driver.lat === pointA.lat && pointA.lng === driver.lng) return;
      if (delivery === 2) {
        if (number === animation.length) {
          setDelivery(3);
          setProgress(97);
          return;
        }

        const timer = setTimeout(() => {
          if (lastPlace.lat === null) return;
          setDriver(reDriver);
          setAngle(lastAngle);
          setNumber(number + 1);
        }, 400);
        return () => {
          clearTimeout(timer);
        };
      }
    }
    if (delivery < 3) {
      const timer1 = setTimeout(() => {
        setDelivery((state: number) => state + 1);
      }, 10000);
      return () => {
        clearTimeout(timer1);
      };
    }
  }, [driver, delivery, number]);

  const defaultProps = {
    center: {
      lat: 21.0245,
      lng: 105.8412,
    },
    zoom: 15,
  };

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

  const renderDirections = async (map: any, maps: any) => {
    if (!pointA.lat && !pointB.lat) return;
    setMaps(maps);
    const directionsService = new maps.DirectionsService();
    const directionsRenderer = new maps.DirectionsRenderer();
    const icon = {
      url: Images.location,
      scaledSize: new maps.Size(40, 50),
    };
    directionsRenderer.setOptions({
      polylineOptions: {
        strokeColor: "#00AC77",
      },
      markerOptions: {
        icon,
      },
    });
    fitBoundsLine(map, maps);

    try {
      const res = await directionsService.route({
        origin: {
          lat: pointA.lat,
          lng: pointA.lng,
        },
        destination: {
          lat: pointB.lat,
          lng: pointB.lng,
        },
        travelMode: maps.TravelMode.DRIVING,
      });
      const overviewPath = res.routes[0].overview_path;
      setAnimation(overviewPath);
      const drivingPathCoords = overviewPath.length - 1 - number;
      const firstCoordsValue = overviewPath[drivingPathCoords];
      const secondCoordsValue = overviewPath[drivingPathCoords + 1];

      if (overviewPath.length === 1) return;
      const firstCoords = {
        lat: firstCoordsValue.lat(),
        lng: firstCoordsValue.lng(),
      };
      const secondCoords = {
        lat: secondCoordsValue.lat(),
        lng: secondCoordsValue.lng(),
      };
      const overviewPathLast = {
        lat: overviewPath[0].lat(),
        lng: overviewPath[0].lng(),
      };
      const overviewPathLastStart = {
        lat: overviewPath[1].lat(),
        lng: overviewPath[1].lng(),
      };
      setLastPlace(overviewPathLast);
      const angle = maps.geometry.spherical?.computeHeading(
        overviewPathLastStart,
        overviewPathLast
      );

      setLastAngle(angle);
      directionsRenderer.setDirections(res);
      directionsRenderer.setMap(map);

      if (firstCoords.lat && secondCoords.lat) {
        const fakeDistance: number = getDistanceInMeter(
          secondCoords,
          firstCoords
        );

        const latlng: any = markPointInStraightLine(
          maps,
          secondCoords,
          firstCoords,
          fakeDistance / 2
        );
        const { coords } = latlng;
        setDriver({ lat: coords?.lat(), lng: coords?.lng() });
      }
    } catch (e: any) {
      console.warn(e);
    }
  };

  const prop = {
    markers: [
      { lat: pointA.lat, lng: pointA.lng },
      { lat: pointB.lat, lng: pointB.lng },
    ],
  };

  const fitBoundsLine = (map: any, maps: any) => {
    const bounds = new maps.LatLngBounds();
    for (const marker of prop.markers) {
      bounds.extend(new maps.LatLng(marker.lat, marker.lng));
    }
    map.fitBounds(bounds);
  };

  const renderProgress = (title: string, img: any) => {
    const imagURL =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAASbSURBVHgB7ZuxTxRBFMafGyGABYeJBdfcxUABFncGGgIRiViYmACFpXI2lHJWlnD/wWmnjaeWFoCUYhCCodF4mAAFRKE5ChM5CoVAofuN7mZ32eV2b2d2Zzf+EsJxXGC/b9+bnXnz5txvFRLIzq99ev/9K61V99TXP9SvKlWPD9n7RtItbZRobFa/JyjbmqRMIknZRDt7XyTnRBgAwXOVDZqtrJ8S6hUYcP3SZRpP9bDvvOFmQPXkiB5vr1Bxa4W9FgHMmO4epkHVCF6R4duAIIRbSTQ0US7dQ5MdA76N8GUAhE9vLAQm3IoWEUiPeqnLAOT1/Y+vWa7LAIxYHJyoKxo8GxD2XXcCaYFoQFp4wZMBD7/Mq7n+gWQGJkx1Dbv+vGsDEPKl3U8UBXLqmPC8946rz7oy4Oq7J1SuVihKZNWJ1OcbD2p+Tqn1Adz5qIkHuGZcey3ONKCwuRCZsLcD145x6ywcDdBG+6iDQRtanLA1AM/5OIjXgBanNYmtAUNLz6R7zvsBWpzGg1MGIG/8ruBkBLNWu1QwGQDhhRiFvhW7GazJADgUx7uvwVauW+Yo0A2A8NJOdB95bilum5ftugHIkTgNfE5Yo0A3IM65b6W4bTEAdz/OuW8FUaDVMpgBLyI03cV6H4uc0WQ3+QFFW6BHQBTAOr+Yuc1WelNdN8kPqFgDBaEfhfCHeBQ7NOb21skPmm4FGxayYxWPlOWxVllSI1+Rfa1vJz7nYp3vhrJ685XygbwRIFI8wFadsvNTzvwXLR6wMWD/5JBkwyoeaZpfmyfeVI+PSNmV7AlgJ35oWUx9gkUAcQA7MihD53xsUQFscQUlXuM8cQDisXUNA1KqGSimegXiS4ZafhDiAZcIMOJ1ZwZYxSM0x1ZfBbI6VVIc9tnHVl+yZ6qGlx1bO/GoSQYxO0XqKm0NzeQX3Kmh5acmEyCqlgmY04clHiQam0hJX+DTaeHVBIhfvDah/xy0eMAiAE1JvIAJSAejCDsTNPHY0gZhiGfX0ZokBd1YPLETAxOy//6PLOJBpq2dFBGdV3aiIBpFjJm+u1KIBywCkAcpAb14VnEQPdN3T29jCVs8roONAfhhzGd5yQknkWzADFE80CKfGTCSvEKisJrw92kRrnigDcx6h0jbm2mhMy+EG6bKs3sboTdc4Fq+3XrEXutT4bzH7iqvsC13dY0gQwVqyrDg0g2Y7BzQR+c4A43GJ59i/IXoKJCB8VSvqaHStBqMexRAeL6z3/SeyQCI97vhIDPIfWs77al6ABwSMTsMG+0pZMW2IIIKT5xSAVrQTG2HrQFwK06pgAqVUye5Y0kMqZDv6KeoA/H5TuenW81eYWxGRGn73Ii13GbH/2ZpcgH+kJ9jKUGDa3UjHrguiyOUvJa7wwAdJCWXZwWA5yMzaD4ubL6V8shMrQHPjroPTYVd0DCCiRvmLoEcmjKCvuLCGZ3Yoqn3rhvxfXAS4tF4CDOCPDiJXM9zWLxxOzqrHZIWGRE8hWsIOzyNyROPBkzk9ahasxxRC7dSH552AgZgu2xNnUiVDyqujs+nWy5SJtHOBIs+Pv8HAWTa/6spyVwAAAAASUVORK5CYII=";

    return (
      <div className={classes.progressItem}>
        <img src={img} />
        {img === imagURL ? (
          <p style={{ color: "#00B342" }}>{title}</p>
        ) : (
          <p>{title}</p>
        )}
      </div>
    );
  };

  const renderMainPage = () => {
    return (
      <>
        <PageLayout>
          <div className={classes.head}>
            <div className={classes.orderDetails}>
              <p>Your Order</p>
            </div>
            <div className={classes.orderProgressWrapper}>
              <div className={classes.progressLineWrapper}>
                <div
                  className={classes.progressLine}
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
              {delivery === 0 && (
                <div className={classes.orderProgress}>
                  {renderProgress("Order", Order4)}
                  {renderProgress("Packaging", Order1)}
                  {renderProgress("Delivering", Order2)}
                  {renderProgress("Arrived", Order3)}
                </div>
              )}
              {delivery === 1 && (
                <div className={classes.orderProgress}>
                  {renderProgress("Order", Order4)}
                  {renderProgress("Packaging", Order4)}
                  {renderProgress("Delivering", Order1)}
                  {renderProgress("Arrived", Order2)}
                </div>
              )}
              {delivery === 2 && (
                <div className={classes.orderProgress}>
                  {renderProgress("Order", Order4)}
                  {renderProgress("Packaging", Order4)}
                  {renderProgress("Delivering", Order4)}
                  {renderProgress("Arrived", Order1)}
                </div>
              )}
              {delivery === 3 && (
                <div className={classes.orderProgress}>
                  {renderProgress("Order", Order4)}
                  {renderProgress("Packaging", Order4)}
                  {renderProgress("Delivering", Order4)}
                  {renderProgress("Arrived", Order4)}
                </div>
              )}
            </div>
          </div>
        </PageLayout>
        {delivery <= 1 && <hr className={classes.hrYourOrder}></hr>}
        {delivery <= 1 && (
          <div className="">
            {listDataYourorder.map((data: any, i: any) => (
              <div key={i}>
                <PageLayout className={classes.orderPage}>
                  <p>Order Status</p>
                  {delivery === 0 && <p>We have received your order</p>}
                  {delivery === 1 && (
                    <p>
                      We are preparing your order and wait for the shipper to
                      pick it up
                    </p>
                  )}
                  <div className={classes.finding}>
                    {delivery === 0 && <p>Cancel</p>}
                    {delivery === 0 && <hr />}
                    <div className={classes.loadingShip}>
                      <TimerSVG />
                      {delivery === 0 && <h5>Finding your shipper</h5>}
                      {delivery === 1 && <h5>Packaging</h5>}
                      <span>.</span>
                      <span>.</span>
                      <span>.</span>
                    </div>
                  </div>
                </PageLayout>
                {delivery <= 1 && <hr className={classes.hrYourOrder}></hr>}
                {delivery === 1 && (
                  <PageLayout className={classes.ShipperInformation}>
                    <p>Shipper Information</p>
                    <div className={classes.contentInfoShip}>
                      <div>
                        <ImgDriverSVG />
                        <div className={classes.NameDriver}>
                          <p>Van Son Tran</p>
                          <p>Wave RSX</p>
                        </div>
                      </div>
                      <div className={classes.contentRating}>
                        <div>
                          <RatingSVG />
                          <span>4.5</span>
                        </div>
                        <p>29.H1 - 435 97</p>
                      </div>
                    </div>
                  </PageLayout>
                )}
                {delivery === 1 && <hr className={classes.hrYourOrder}></hr>}

                <PageLayout className={classes.infoTrack}>
                  <p>Order Information</p>
                  <hr className={classes.hrmall}></hr>
                  <div className={classes.contentInfo}>
                    <div>
                      <TrackSVG />
                      <div>
                        <p>#LTM12863</p>
                        <p>Track ID</p>
                      </div>
                    </div>
                    <div>
                      <TimemaxSVG />
                      <div>
                        <p>1-2 hours max</p>
                        <p>Estimate Time</p>
                      </div>
                    </div>
                    <div>
                      <WeightSVG />
                      <div>
                        <p>1.5 kg</p>
                        <p>Packge Weight</p>
                      </div>
                    </div>
                  </div>
                  <hr className={classes.hrmall}></hr>
                </PageLayout>
                <PageLayout className={classes.addShipping}>
                  <ShippingSVG />
                  <div className={classes.fromTo}>
                    <div>
                      <h5>From: </h5>
                      <p>Lotte Mart - Lieu Giai</p>
                    </div>
                    <div>
                      <h5>To: </h5>
                      <p>
                        {addressFromLS ||
                          "No 6, 34 Van Bao, Lieu Giai, Ba Dinh, Ha Noi"}
                      </p>
                    </div>
                  </div>
                </PageLayout>
                <PageLayout>
                  <hr className={classes.hrmall}></hr>
                </PageLayout>
                <PageLayout className={classes.clickable}>
                  <p onClick={() => setCheckCart(true)}>
                    Click here to see the Order’s Detail
                  </p>
                  <button>
                    <ImgBtnSVG />
                  </button>
                  <p onClick={() => navigate("/")}>Back to Home</p>
                </PageLayout>
              </div>
            ))}
          </div>
        )}
        {delivery === 2 && (
          <div
            style={{
              height: "calc(100vh - 265px)",
              width: "100%",
            }}
          >
            <GoogleMapReact
              bootstrapURLKeys={{
                key,
                libraries: ["places", "geometry"],
              }}
              defaultCenter={defaultProps.center}
              defaultZoom={defaultProps.zoom}
              yesIWantToUseGoogleMapApiInternals
              onGoogleApiLoaded={({ map, maps }) => renderDirections(map, maps)}
              options={options}
            >
              {driver.lat !== 21.0327757 && (
                <Marker
                  lat={driver.lat}
                  lng={driver.lng}
                  style={{
                    transform: `translate(-50%,-50%) rotate(${angle}deg)`,
                  }}
                  className={classes.locationDriver}
                  images={Images.driver}
                />
              )}
            </GoogleMapReact>

            <div>
              <RenderDriver setCheckCart={setCheckCart} />
            </div>
          </div>
        )}
        {delivery === 3 && (
          <div className="">
            <Ratings />
          </div>
        )}
      </>
    );
  };

  return (
    <div {...props} className={clsx(classes.rootOrder, props.className)}>
      {checkCart ? (
        <div className={classes.checkoutorder}>
          <OrderCheckOut
            delivery={delivery}
            setCheckCart={setCheckCart}
            deliveryType={deliveryType}
          />
        </div>
      ) : (
        renderMainPage()
      )}
    </div>
  );
};

export default YourOrder;
