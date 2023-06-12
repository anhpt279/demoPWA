interface ILatLng {
  lat: number | null;
  lng: number | null;
}

export const markPointInStraightLine = (
  maps: any,
  LatLngP1: ILatLng,
  LatLngP2: ILatLng,
  distanceInMeter: number
) => {
  const angle = maps.geometry.spherical?.computeHeading(LatLngP1, LatLngP2);
  const coords = maps.geometry?.spherical?.computeOffset(
    LatLngP1,
    distanceInMeter,
    angle
  );
  return {
    coords,
    angle,
  };
};

export const rad = (x: number): number => {
  return (x * Math.PI) / 180;
};

export const getDistanceInMeter = (p1: any, p2: any): number => {
  const R = 6378137;
  const dLat = rad(p2.lat - p1.lat);
  const dLong = rad(p2.lng - p1.lng);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(rad(p1.lat)) *
      Math.cos(rad(p2.lat)) *
      Math.sin(dLong / 2) *
      Math.sin(dLong / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const d = R * c;
  return d;
};

export const formatAddress = (currentAddress: string): string => {
  const addressArray = currentAddress?.split(" ");
  const trueAddress = addressArray[0]?.includes("+")
    ? addressArray?.slice(1)?.join(" ")
    : currentAddress;
  const truestAddressArray = trueAddress?.split(", ");
  const lastStr = Number(truestAddressArray[truestAddressArray.length - 1]);
  return !isNaN(lastStr)
    ? truestAddressArray?.slice(0, truestAddressArray.length - 1)?.join(", ")
    : trueAddress;
};
