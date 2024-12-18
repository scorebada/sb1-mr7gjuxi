export interface TicketType {
  id: string;
  name: string;
  price: number;
  quantity: number;
  benefits: string[];
  type: TicketTier;
}

export enum TicketTier {
  EARLY_BIRD = 'EARLY_BIRD',
  REGULAR = 'REGULAR',
  VIP = 'VIP',
}

export interface PurchasedTicket {
  id: string;
  ticketTypeId: string;
  userId: string;
  eventId: string;
  purchaseDate: Date;
  status: TicketStatus;
  qrCode: string;
}

export enum TicketStatus {
  VALID = 'VALID',
  USED = 'USED',
  CANCELLED = 'CANCELLED',
  EXPIRED = 'EXPIRED',
}