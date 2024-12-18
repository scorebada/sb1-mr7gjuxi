import { ReactNode } from "react";

export interface HolographicCardProps {
  children: ReactNode;
  glowColor?: string;
  onPress?: () => void;
}