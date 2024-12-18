export interface Location {
  address: string;
  coordinates: Coordinates;
  venue?: string;
  capacity: number;
}

export interface Coordinates {
  latitude: number;
  longitude: number;
}