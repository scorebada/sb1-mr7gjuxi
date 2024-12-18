import * as React from "react";
import { StyleSheet } from "react-nativescript";
import { HolographicCard } from "../common/HolographicCard";
import { Event } from "../../types/event";
import { formatDate } from "../../utils/date";

interface EventCardProps {
  event: Event;
  onPress: () => void;
}

export function EventCard({ event, onPress }: EventCardProps) {
  return (
    <HolographicCard 
      glowColor={event.theme.primaryColor}
      onPress={onPress}
    >
      <stackLayout>
        <label className="text-2xl font-bold text-white mb-2">
          {event.name}
        </label>
        <label className="text-neon-blue mb-2">
          {event.type}
        </label>
        <gridLayout columns="*, *" className="mb-4">
          <label className="text-gray-400">
            {formatDate(event.date)}
          </label>
          <label className="text-right text-neon-green">
            {event.ticketTypes[0].price} USD
          </label>
        </gridLayout>
        <progressBar 
          value={calculateCapacityPercentage(event)} 
          maxValue={100}
          className="bg-neon-purple"
        />
      </stackLayout>
    </HolographicCard>
  );
}

function calculateCapacityPercentage(event: Event): number {
  const totalTickets = event.ticketTypes.reduce((sum, ticket) => 
    sum + ticket.quantity, 0);
  const capacity = event.capacity;
  return (totalTickets / capacity) * 100;
}