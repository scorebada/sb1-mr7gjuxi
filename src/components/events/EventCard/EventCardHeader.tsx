import * as React from "react";
import { Event } from "../../../types/event/base";

interface EventCardHeaderProps {
  event: Event;
}

export function EventCardHeader({ event }: EventCardHeaderProps) {
  return (
    <stackLayout>
      <label className="text-2xl font-bold text-white mb-2">
        {event.name}
      </label>
      <label className="text-neon-blue mb-2">
        {event.type}
      </label>
    </stackLayout>
  );
}