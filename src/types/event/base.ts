export interface Event {
  id: string;
  name: string;
  type: EventType;
  date: Date;
  hostId: string;
  status: EventStatus;
}

export enum EventType {
  HOUSE_PARTY = 'HOUSE_PARTY',
  RAVE = 'RAVE',
  CLUB_PARTY = 'CLUB_PARTY',
}

export enum EventStatus {
  DRAFT = 'DRAFT',
  PUBLISHED = 'PUBLISHED',
  LIVE = 'LIVE',
  ENDED = 'ENDED',
  CANCELLED = 'CANCELLED',
}