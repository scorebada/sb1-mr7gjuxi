import { Coordinates } from "../types/event/location";

export async function getCurrentLocation(): Promise<Coordinates> {
  return new Promise((resolve, reject) => {
    if (!geolocation.isEnabled()) {
      reject(new Error("Location services are disabled"));
      return;
    }

    geolocation.getCurrentLocation({
      desiredAccuracy: 3,
      updateDistance: 10,
      timeout: 20000
    })
    .then(location => {
      resolve({
        latitude: location.latitude,
        longitude: location.longitude
      });
    })
    .catch(error => {
      reject(new Error("Failed to get location: " + error.message));
    });
  });
}