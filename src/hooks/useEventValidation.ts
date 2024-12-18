import { useState, useCallback } from "react";
import { Event } from "../types/event/base";
import { Location } from "../types/event/location";
import { TicketType } from "../types/event/ticket";
import { 
  validateEventBasics,
  validateLocation,
  validateTickets 
} from "../utils/validation/event";

export function useEventValidation() {
  const [errors, setErrors] = useState<string[]>([]);

  const validateEvent = useCallback((
    event: Partial<Event>,
    location: Partial<Location>,
    tickets: Partial<TicketType>[]
  ) => {
    const basicErrors = validateEventBasics(event);
    const locationErrors = validateLocation(location);
    const ticketErrors = validateTickets(tickets);

    const allErrors = [...basicErrors, ...locationErrors, ...ticketErrors];
    setErrors(allErrors);

    return allErrors.length === 0;
  }, []);

  return { errors, validateEvent };
}