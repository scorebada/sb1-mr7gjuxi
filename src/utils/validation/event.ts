import { Event } from "../../types/event/base";
import { Location } from "../../types/event/location";
import { TicketType } from "../../types/event/ticket";

export function validateEventBasics(event: Partial<Event>): string[] {
  const errors: string[] = [];

  if (!event.name?.trim()) {
    errors.push("Event name is required");
  }

  if (!event.type) {
    errors.push("Event type is required");
  }

  if (!event.date || event.date < new Date()) {
    errors.push("Valid future date is required");
  }

  return errors;
}

export function validateLocation(location: Partial<Location>): string[] {
  const errors: string[] = [];

  if (!location.address?.trim()) {
    errors.push("Address is required");
  }

  if (!location.coordinates?.latitude || !location.coordinates?.longitude) {
    errors.push("Valid coordinates are required");
  }

  if (!location.capacity || location.capacity <= 0) {
    errors.push("Valid capacity is required");
  }

  return errors;
}

export function validateTickets(tickets: Partial<TicketType>[]): string[] {
  const errors: string[] = [];

  if (!tickets.length) {
    errors.push("At least one ticket type is required");
  }

  tickets.forEach((ticket, index) => {
    if (!ticket.price || ticket.price < 0) {
      errors.push(`Invalid price for ticket type ${index + 1}`);
    }
    if (!ticket.quantity || ticket.quantity < 1) {
      errors.push(`Invalid quantity for ticket type ${index + 1}`);
    }
  });

  return errors;
}