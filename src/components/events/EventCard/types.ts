import { Event } from "../../../types/event/base";

export interface EventCardProps {
  event: Event;
  onPress: () => void;
}