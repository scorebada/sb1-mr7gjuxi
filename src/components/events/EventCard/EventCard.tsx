import * as React from "react";
import { HolographicCard } from "../../common/HolographicCard/HolographicCard";
import { EventCardHeader } from "./EventCardHeader";
import { EventCardDetails } from "./EventCardDetails";
import { EventCardCapacity } from "./EventCardCapacity";
import { EventCardProps } from "./types";

export function EventCard({ event, onPress }: EventCardProps) {
  return (
    <HolographicCard 
      glowColor={event.theme.primaryColor}
      onPress={onPress}
    >
      <stackLayout>
        <EventCardHeader event={event} />
        <EventCardDetails event={event} />
        <EventCardCapacity event={event} />
      </stackLayout>
    </HolographicCard>
  );
}