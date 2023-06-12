import axios from "axios";
import { formatAddress } from "../utils/map";

export const key =
  process.env.REACT_APP_KEY_GOOGLE_MAP ||
  "AIzaSyAaIl3sRnHH7g29FKAdvZSlum46EfQq7ns";

export const getCoordsForAddress = async (address: string) => {
  let response;
  try {
    response = await axios.get(
      `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
        address
      )}&key=${key}`
    );
  } catch (error) {
    throw new Error("Unable to get a cooridation");
  }
  const data = response.data;

  const coordinates: { lat: number; lng: number } =
    data.results[0].geometry.location;
  return coordinates;
};

export const getGeologicalAddress = async (
  lat: number,
  lng: number,
  callback: (address: string) => void | string
) => {
  try {
    if (lat === null) return;
    const res = await fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${key}`
    );
    const data = await res.json();

    if (data.results.length === 1) {
      const unknownLocation = "Unknown location";
      return callback(unknownLocation);
    }
    const currentAddress: string =
      data.results[0]?.formatted_address?.split(" ")?.length === 1
        ? data.results[1]?.formatted_address
        : data.results[0]?.formatted_address;

    const formattedAddress: string = formatAddress(currentAddress);
    return callback(formattedAddress);
  } catch (error: any) {
    console.warn(error.message);
    return "";
  }
};
