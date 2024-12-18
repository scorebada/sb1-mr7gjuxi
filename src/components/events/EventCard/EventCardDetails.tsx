import * as React from "react";
import { Event } from "../../../types/event/base";
import { formatEventDate } from "../../../utils/formatting/date";
import { formatCurrency } from "../../../utils/formatting/currency";

interface EventCardDetailsProps {
  event: Event;
}

export function EventCardDetails({ event }: EventCardDetailsProps) {
  const baseTicketPrice = event.ticketTypes[0]?.price || 0;

  return (
    <gridLayout columns="*, *" className="mb-4">
      <label className="text-gray-400">
        {formatEventDate(event.date)}
      </label>
      <label className="text-right text-neon-green">
        {formatCurrency(baseTicketPrice)} USD
      </label>
    </gridLayout>
  );
}