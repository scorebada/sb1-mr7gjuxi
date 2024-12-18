import { createHash } from 'crypto';

export function generateTicketHash(
  eventId: string,
  userId: string,
  timestamp: number
): string {
  const data = `${eventId}-${userId}-${timestamp}`;
  return createHash('sha256').update(data).digest('hex');
}

export function generateQRCode(ticketHash: string): string {
  return `https://api.qrserver.com/v1/create-qr-code/?data=${ticketHash}`;
}

export function validateTicketHash(
  hash: string,
  eventId: string,
  userId: string,
  timestamp: number
): boolean {
  const expectedHash = generateTicketHash(eventId, userId, timestamp);
  return hash === expectedHash;
}