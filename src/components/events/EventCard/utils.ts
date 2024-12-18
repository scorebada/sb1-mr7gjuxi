import { Event } from "../../../types/event/base";

export function calculateCapacityPercentage(event: Event): number {
  const totalTickets = event.ticketTypes.reduce(
    (sum, ticket) => sum + ticket.quantity, 
    0
  );
  return (totalTickets / event.capacity) * 100;
}