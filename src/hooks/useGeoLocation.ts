import { useState, useEffect } from "react";
import { Coordinates } from "../types/event/location";
import { getCurrentLocation } from "../utils/location";

export function useGeoLocation() {
  const [coordinates, setCoordinates] = useState<Coordinates | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchLocation = async () => {
      try {
        const location = await getCurrentLocation();
        setCoordinates(location);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchLocation();
  }, []);

  return { coordinates, error };
}