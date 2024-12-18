import * as React from "react";
import { Event } from "../../../types/event/base";
import { calculateCapacityPercentage } from "./utils";

interface EventCardCapacityProps {
  event: Event;
}

export function EventCardCapacity({ event }: EventCardCapacityProps) {
  const capacityPercentage = calculateCapacityPercentage(event);

  return (
    <progressBar 
      value={capacityPercentage} 
      maxValue={100}
      className="bg-neon-purple"
    />
  );
}