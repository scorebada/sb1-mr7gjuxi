export interface Event {
  id: string;
  name: string;
  type: EventType;
  date: Date;
  location: Location;
  capacity: number;
  ticketTypes: TicketType[];
  theme: Theme;
  hostId: string;
  status: EventStatus;
}

export enum EventType {
  HOUSE_PARTY = 'HOUSE_PARTY',
  RAVE = 'RAVE',
  CLUB_PARTY = 'CLUB_PARTY',
}

export interface Location {
  address: string;
  coordinates: {
    latitude: number;
    longitude: number;
  };
  venue?: string;
}

export interface TicketType {
  id: string;
  name: string;
  price: number;
  quantity: number;
  benefits: string[];
  type: 'EARLY_BIRD' | 'REGULAR' | 'VIP';
}

export interface Theme {
  id: string;
  name: string;
  primaryColor: string;
  secondaryColor: string;
  modelUrl?: string;
}